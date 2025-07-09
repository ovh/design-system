import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../../button/src';
import { Clipboard, ClipboardTrigger } from '../../../../clipboard/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import style from './code.module.scss';

interface CodeProp extends ComponentPropsWithRef<'div'> {
  /**
   * Whether the copy button is displayed.
   */
  canCopy?: boolean;
  /**
   * The initial tooltip label on copy button.
   */
  labelCopy?: string;
  /**
   * The tooltip label on copy button after a successful copy.
   */
  labelCopySuccess?: string;
  /**
   * Callback fired when the text is copied.
   */
  onCopy?: () => void,
}

const Code: FC<CodeProp> = forwardRef(({
  canCopy = false,
  className,
  children,
  labelCopy,
  labelCopySuccess,
  onCopy,
  ...props
}, ref): JSX.Element => {
  return (
    <div className={ classNames(style['code'], className) }
      ref={ ref }
      role={ canCopy ? 'group' : '' }
      { ...props }>

      <pre className={ style['code__preformat'] }>
        <code className={ style['code__preformat__code'] }>
          { children }
        </code>
      </pre>

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
