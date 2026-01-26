import { ICON_NAME, Icon, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';
import { Canvas as StorybookCanvas, useOf } from '@storybook/blocks';
import { hrefTo } from '@storybook/addon-links';
import lzString from 'lz-string';
import React, { type ComponentProps, type JSX, useMemo } from 'react';
import { HOME_TITLE } from '../../constants/meta';
import { extractStoryRenderSourceCode } from '../../helpers/source';
import { ResetTheme } from '../resetTheme/ResetTheme';

type CanvasProp = ComponentProps<typeof StorybookCanvas> & {
  showSandbox?: boolean; // usefull to enforce sandbox link when sourceState is initially hidden while keeping it by default on all other canvas
}

function openInNewTab(href: string) {
  Object.assign(document.createElement('a'), {
    href: href,
    rel: 'noopener noreferrer',
    target: '_blank',
  }).click();
}

function openSandbox(code: string) {
  hrefTo(HOME_TITLE.sandboxTool, '')
    .then((url) => {
      const docUrl = url.replace(/\/story\//, '/docs/');
      const [origin, params] = docUrl.split('?');
      const searchParams = new URLSearchParams(params)

      searchParams.set('code', lzString.compressToEncodedURIComponent(code));

      openInNewTab(`${origin}?${searchParams.toString()}`);
    });
}

const Canvas = ({
  of,
  showSandbox,
  sourceState,
  ...prop
}: CanvasProp): JSX.Element => {
  const { story } = useOf(of || 'story', ['story']);
  const renderCode = extractStoryRenderSourceCode(story.moduleExport.parameters.docs.source.originalSource);
  const isJsxOnly = renderCode.trim().startsWith('<');
  const exportStartCode = `export default () => ${isJsxOnly ? '(' : '{'}`;
  const exportEndCode = `${isJsxOnly ? ')' : ''};`;
  const sandboxCode = `${story.storyGlobals.imports}\n\n${exportStartCode}\n${renderCode}\n${exportEndCode}`;

  const additionalActions = useMemo(() => {
    if (sourceState !== 'shown' && !showSandbox) {
      return [];
    }

    return [{
      onClick: () => {
        openSandbox(sandboxCode);
      },
      title: (
        <Tooltip>
          <TooltipTrigger asChild>
            <Icon name={ ICON_NAME.chevronLeftUnderscore } />
          </TooltipTrigger>

          <TooltipContent withArrow>
            Open a new tab to the sandbox with this code prefilled.
          </TooltipContent>
        </Tooltip>
      ),
    }];
  }, [sourceState]);

  return (
    <ResetTheme style={{ backgroundColor: 'transparent' }}>
      <StorybookCanvas
        additionalActions={ additionalActions }
        of={ of }
        sourceState={ sourceState }
        { ...prop } />
    </ResetTheme>
  );
};

export {
  Canvas,
};
