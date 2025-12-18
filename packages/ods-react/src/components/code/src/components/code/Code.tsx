import { type HighlighterCore, type LanguageRegistration, type ThemeRegistrationAny } from '@shikijs/types';
import classNames from 'classnames';
import { type CSSProperties, type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect, useState } from 'react';
import { createHighlighterCore, createOnigurumaEngine } from 'react-shiki/core';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../../button/src';
import { Clipboard, ClipboardTrigger } from '../../../../clipboard/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { CodeHighlighter } from '../code-highlighter/CodeHighlighter';
import style from './code.module.scss';

interface CodeProp extends ComponentPropsWithRef<'div'> {
  /**
   * Whether the copy button is displayed.
   */
  canCopy?: boolean,
  /**
   * The code to display.
   */
  children: string,
  /**
   * Configuration of a specific code highlighter (see beneath for more details).
   */
  highlighter?: {
    language: LanguageRegistration[],
    theme: ThemeRegistrationAny,
  },
  /**
   * The initial tooltip label on copy button.
   */
  labelCopy?: string,
  /**
   * The tooltip label on copy button after a successful copy.
   */
  labelCopySuccess?: string,
  /**
   * Callback fired when the text is copied.
   */
  onCopy?: () => void,
}

const Code: FC<CodeProp> = forwardRef(({
  canCopy = false,
  children,
  className,
  highlighter = {},
  labelCopy,
  labelCopySuccess,
  onCopy,
  ...props
}, ref): JSX.Element => {
  const [highlighterCore, setHighlighterCore] = useState<HighlighterCore>();
  const { language, theme } = highlighter;
  const shouldHighlight = language && language.length && theme;

  useEffect(() => {
    return () => {
      highlighterCore?.dispose();
    };
  }, [highlighterCore]);

  useEffect(() => {
    let active = true;
    createHighlighter();

    return () => {
      active = false;
    };

    async function createHighlighter(): Promise<void> {
      if (!language || !theme) {
        return;
      }

      const core = await createHighlighterCore({
        engine: createOnigurumaEngine(import('shiki/wasm')),
        langs: [language],
        themes: [theme],
      });

      if (!active) {
        return;
      }

      setHighlighterCore(core);
    }
  }, [language, setHighlighterCore, theme]);

  if (shouldHighlight && !highlighterCore) {
    return <></>;
  }

  return (
    <div
      className={ classNames(
        style['code'],
        { [style['code--unthemed']]: !shouldHighlight },
        className,
      )}
      data-ods="code"
      ref={ ref }
      role={ canCopy ? 'group' : '' }
      style={{ ...(shouldHighlight
        ? {
          ['--ods-code-secondary-color']: theme.colors && theme.colors['editor.background'],
          ['--ods-code-trigger-background-color']: theme.colors && theme.colors['button.secondaryForeground'],
          ['--ods-code-trigger-background-color-active']: theme.colors && theme.colors['button.secondaryHoverBackground'],
          ['--ods-code-trigger-background-color-hover']: theme.colors && theme.colors['button.secondaryHoverBackground'],
          ['--ods-code-trigger-outline-color']: theme.colors && theme.colors['button.secondaryForeground'],
        } as CSSProperties
        : {}),
      }}
      { ...props }>
      {
        shouldHighlight && highlighterCore
          ? <CodeHighlighter
            code={ children as string }
            highlighter={ highlighterCore }
            language={ language[0] }
            theme={ theme } />
          : <pre className={ style['code__preformat'] }>
            <code className={ style['code__preformat__code'] }>
              { children }
            </code>
          </pre>
      }

      {
        canCopy &&
        <Clipboard
          className={ style['code__clipboard'] }
          onCopy={ onCopy }
          value={ children?.toString() }>
          <ClipboardTrigger
            className={ style['code__clipboard__trigger'] }
            labelCopy={ labelCopy }
            labelCopySuccess={ labelCopySuccess }>
            <Button
              className={ style['code__clipboard__trigger__button'] }
              size={ BUTTON_SIZE.sm }
              variant={ BUTTON_VARIANT.ghost }>
              <Icon name={ ICON_NAME.fileCopy } />
            </Button>
          </ClipboardTrigger>
        </Clipboard>
      }
    </div>
  );
});

Code.displayName = 'Code';

export {
  Code,
  type CodeProp,
};
