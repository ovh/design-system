import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { Text } from '../../../../text/src';
import style from './commandGroup.module.scss';

interface CommandGroupProp extends ComponentPropsWithRef<'div'> {
  heading?: string;
}

const CommandGroup: FC<CommandGroupProp> = forwardRef(({
  children,
  className,
  heading,
  ...props
}, ref): JSX.Element => {

  return (
    <div
      className={ classNames(style['command-group'], className) }
      data-ods="command-group"
      ref={ ref }
      { ...props }
      role='presentation'
      aria-label={undefined}>
      { heading && <Text aria-hidden="true" className={ style['command-group__heading'] } preset="heading-6">{ heading }</Text> }
      <div
        role='group'
        aria-label={ props['aria-label'] || heading }
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
