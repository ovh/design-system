import { CARD_COLOR, Card, DIVIDER_ORIENTATION, Divider, ICON_NAME, Icon, TreeView, type TreeViewItem, TreeViewNodes, TreeViewNode } from '@ovhcloud/ods-react';
import { Meta, Story, useOf } from '@storybook/blocks';
import classNames from 'classnames';
import React, { type ComponentProps, useEffect, useId, useMemo, useRef, useState } from 'react';
import { ResetTheme } from '../resetTheme/ResetTheme';
import styles from './anatomyTech.module.css';

type MappingOption = {
  aliases?: string[];
  disabled?: boolean;
  isOverlay?: boolean;
}

type Props = ComponentProps<typeof Meta> & {
  mappingOption?: Record<string, MappingOption>;
}

type Target = {
  element: HTMLElement;
  position: {
    left: string | number;
    top: string | number;
  };
}

// Ark use css translation to position the overlay.
// So far the best way to get the right positioning is to find the positioner element and read its
// computed '--x' and '--y' translate variables.
const ARK_POSITIONER_SELECTOR = '[data-part="positioner"]';

function getElements(componentNames: string[], container: HTMLElement | null): HTMLElement[] {
  if (container) {
    return componentNames.map((name) => {
      return Array.from(container.querySelectorAll(`[data-ods="${kebabize(name)}"]`));
    }).flat().filter((el) => el !== null) as HTMLElement[];
  }
  return [];
}

function kebabize(str: string): string {
  return str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase());
}

const AnatomyTech = ({
  of,
  mappingOption,
}: Props) => {
  const { story } = useOf(of || 'story', ['story']);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState('');
  const [targets, setTargets] = useState<Target[]>([]);
  const rootId = useId();
  const components = useMemo(() => {
    const treeRoot: TreeViewItem = {
      children: Object.entries(story.subcomponents || {}).map(([key]) => ({
        disabled: mappingOption?.[key]?.disabled,
        id: key,
        name: key,
      })),
      disabled: mappingOption?.[story.component.displayName]?.disabled,
      id: story.component.displayName,
      name: story.component.displayName,
    };

    return [treeRoot];
  }, [story.component, story.subcomponents]);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      if (entries && entries.length) {
        if (selectedId) {
          const elements = getElements(mappingOption?.[selectedId]?.aliases || [selectedId], containerRef.current);

          setTargets(elements.map((element) => {
            return {
              element,
              position: getTargetPosition(element),
            }
          }))
        } else {
          setTargets([]);
        }
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef, mappingOption, selectedId, setTargets]);

  function getOffsetSum(el: HTMLElement | null, key: 'offsetLeft' | 'offsetTop'): number {
    if (!el || el.id === rootId) {
      return 0;
    }

    return el[key] + getOffsetSum(el.offsetParent as HTMLElement, key);
  }

  function getTargetPosition(el: HTMLElement) {
    if (mappingOption && selectedId && mappingOption[selectedId]?.isOverlay) {
      const positioner = el.closest(ARK_POSITIONER_SELECTOR) as HTMLElement;

      return {
        left: (parseFloat(positioner?.style.getPropertyValue('--x')) || 0) + getOffsetSum(el, 'offsetLeft'),
        top: (parseFloat(positioner?.style.getPropertyValue('--y')) || 0) + getOffsetSum(el, 'offsetTop'),
      };
    }

    return {
      left: getOffsetSum(el, 'offsetLeft'),
      top: getOffsetSum(el, 'offsetTop'),
    };
  }

  return (
    <ResetTheme
      className={ styles['anatomy-tech'] }
      id={ rootId }>
      <Card
        className={ styles['anatomy-tech__components'] }
        color={ CARD_COLOR.neutral }>
        <TreeView
          expandedValue={ [components[0].id] }
          items={ components }
          onValueChange={ ({ value }) => setSelectedId(value[0]) }
          value={ selectedId ? [selectedId] : undefined }>
          <TreeViewNodes>
            {
              components.map((component) => (
                <TreeViewNode
                  item={ component }
                  key={ component.id }>
                  {
                    ({ item }) => (
                      <span
                        className={ styles['anatomy-tech__components__item'] }
                        title={ item.disabled ? 'This component does not render actual DOM' : '' }>
                        <Icon
                          className={ classNames(
                            styles['anatomy-tech__components__item__icon'],
                            { [styles['anatomy-tech__components__item__icon--selected']]: selectedId === item.id },
                          )}
                          name={ ICON_NAME.target } />

                        <span>
                          { item.name }
                        </span>
                      </span>
                    )
                  }
                </TreeViewNode>
              ))
            }
          </TreeViewNodes>
        </TreeView>
      </Card>

      <Divider orientation={ DIVIDER_ORIENTATION.vertical } />

      <div
        className={ classNames(
          styles['anatomy-tech__story'],
          { [styles['anatomy-tech__story--align-start']]: story.parameters?.layout === 'start' },
        )}
        ref={ containerRef }>
        <Story of={ of } />
      </div>

      {
        targets.length > 0 && targets.map((target, idx) => (
          <div
            className={ styles['anatomy-tech-highlight'] }
            key={ idx }
            style={{
              height: target.element.offsetHeight,
              width: target.element.offsetWidth,
              ...target.position,
            }} />
        ))
      }
    </ResetTheme>
  );
};

export {
  AnatomyTech,
};
