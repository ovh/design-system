import { TreeView, TreeViewNodes, TreeViewNode, type TreeViewItem } from '../../../../../ods-react/src/components/tree-view/src';
import React, { type JSX, useCallback, useMemo, useState } from 'react';
import { type ColorGroup, type ColorVariable, organizeColorsSemantically } from '../utils/colorParser';

interface ColorCustomData {
  color: ColorVariable;
  onColorChange: (colorName: string, newValue: string) => void;
}

type ColorTreeViewItem = TreeViewItem<ColorCustomData>;

interface ColorTreeViewProps {
  className?: string;
  colors: ColorVariable[];
  onColorChange?: (colorName: string, newValue: string) => void;
}

interface ColorPickerProps {
  color: ColorVariable;
  onColorChange: (colorName: string, newValue: string) => void;
}

const ColorPicker = ({ color, onColorChange }: ColorPickerProps): JSX.Element => {
  const handleColorChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    onColorChange(color.name, event.target.value);
  }, [color.name, onColorChange]);

  const handleLineClick = useCallback(() => {}, []);

  return (
    <div onClick={ handleLineClick }>
      <span>{ color.name.replace('--ods-color-', '') }</span>
      <input
        onClick={ (e) => e.stopPropagation() }
        onKeyDown={ (e) => e.stopPropagation() }
        onMouseDown={ (e) => e.stopPropagation() }
        title={ `Change color for ${color.name}` }
        style={ {
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          height: 24,
          marginLeft: 8,
          padding: 0,
          width: 28,
        } }
        type="color"
        value={ color.value }
        onChange={ handleColorChange }
      />
    </div>
  );
};

const ColorTreeView = ({ className, colors, onColorChange }: ColorTreeViewProps): JSX.Element => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const colorGroups = useMemo(() => {
    return organizeColorsSemantically(colors);
  }, [colors]);

  const treeViewItems = useMemo((): ColorTreeViewItem[] => {
    const collapseSingleChildChain = (group: ColorGroup): { names: string[], combinedColors: ColorVariable[], terminal: ColorGroup } => {
      const names: string[] = [];
      const combinedColors: ColorVariable[] = [];

      let current: ColorGroup = group;
      // Collapse as long as there is exactly one child
      // Collect names and colors along the chain
      while (current.children.length === 1) {
        names.push(current.name);
        if (current.colors.length) {
          combinedColors.push(...current.colors);
        }
        current = current.children[0];
      }

      names.push(current.name);
      if (current.colors.length) {
        combinedColors.push(...current.colors);
      }

      return { names, combinedColors, terminal: current };
    };

    const convertGroupToTreeItem = (group: ColorGroup, parentId = ''): ColorTreeViewItem => {
      const { names, combinedColors, terminal } = collapseSingleChildChain(group);
      const name = names.join(' / ');
      const id = parentId ? `${parentId}-${name}` : name;
      
      const childGroups = terminal.children.map(child => convertGroupToTreeItem(child, id));
      const colorItems = combinedColors.map(color => ({
        id: `${id}-${color.name}`,
        name: color.name.replace('--ods-color-', ''),
        customRendererData: { color, onColorChange: onColorChange || (() => {}) },
      }));

      // If this branch would produce a single color only, return that color directly (flatten group)
      if (childGroups.length === 0 && colorItems.length === 1) {
        return colorItems[0] as unknown as ColorTreeViewItem;
      }

      return {
        id,
        name,
        expanded: expandedItems.includes(id),
        children: [
          ...childGroups,
          ...colorItems,
        ],
      };
    };

    return colorGroups.map(group => convertGroupToTreeItem(group));
  }, [colorGroups, expandedItems, onColorChange]);

  const handleValueChange = useCallback((details: { value: string[] }) => {
    setExpandedItems(details.value);
  }, []);

  const renderTreeItem = useCallback(({ item, customData }: { item: ColorTreeViewItem; customData?: ColorCustomData; isBranch: boolean; isExpanded: boolean }) => {
    // If this item has color data, render a color picker
    if (customData?.color) {
      const { color, onColorChange: handleColorChange } = customData;
      return (
        <ColorPicker 
          color={ color }
          onColorChange={ handleColorChange }
        />
      );
    }

    // Otherwise, render a standard tree item
    return <span>{ item.name }</span> as unknown as JSX.Element;
  }, []);

  return (
    <div className={ className }>
      <TreeView
        items={ treeViewItems as any }
        defaultExpandAll={ false }
        onValueChange={ handleValueChange }
      >
        <TreeViewNodes>
          { treeViewItems.map((item) => (
            <TreeViewNode key={ item.id } item={ item as any }>
              { renderTreeItem as any }
            </TreeViewNode>
          ))}
        </TreeViewNodes>
      </TreeView>
    </div>
  );
};

export {
  ColorTreeView,
};
