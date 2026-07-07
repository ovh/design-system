import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { Text } from '../../../../text/src';
import style from './commandGroup.module.scss';

interface CommandGroupProp extends ComponentPropsWithRef<'div'> {
  heading?: string;
}

const CommandGroup: FC<CommandGroupProp> = forwardRef(({
  'aria-label': ariaLabel,
  children,
  className,
  heading,
  ...props
}, ref): JSX.Element => {

  // the wrapper has to stay presentational so the listbox only exposes group / option
  // descendants; the accessible name (aria-label or heading) is carried by the
  // role="group" element
  return (
    <div
      className={ classNames(style['command-group'], className) }
      data-ods="command-group"
      ref={ ref }
      { ...props }
      role='presentation'>
      { heading && <Text aria-hidden="true" className={ style['command-group__heading'] } preset="heading-6">{ heading }</Text> }
      <div
        role='group'
        aria-label={ ariaLabel || heading }
        className={ style['command-group__items'] }>
        { children }
      </div>
    </div>
  );
});

CommandGroup.displayName = 'CommandGroup';

export {
  CommandGroup,
  type CommandGroupProp,
};
