import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useCommand } from '../../contexts/useCommand';
import style from './commandList.module.scss';

interface CommandListProp extends ComponentPropsWithRef<'div'> {}

const CommandList: FC<CommandListProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  const { highlightedValue, id } = useCommand();

  return (
    <div className={ classNames(style['command-list__wrapper']) }>
      <div
        aria-activedescendant={highlightedValue}
        className={ classNames(style['command-list'], className) }
        data-ods="command-list"
        id={ `${id}-list` }
        ref={ ref }
        role="listbox"
        tabIndex={ -1 }
        { ...props }>
        { children }
      </div>
    </div>
  );
});

CommandList.displayName = 'CommandList';

export {
  CommandList,
  type CommandListProp,
};
