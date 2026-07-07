import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useCommand } from '../../contexts/useCommand';

interface CommandEmptyProp extends ComponentPropsWithRef<'div'> {}

const CommandEmpty: FC<CommandEmptyProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element | null => {
  const { filteredItems } = useCommand();

  if (filteredItems.length > 0) {
    return null;
  }

  return (
    <div
      className={ className }
      data-ods="command-empty"
      ref={ ref }
      { ...props }>
      { children }
    </div>
  );
});

CommandEmpty.displayName = 'CommandEmpty';

export {
  CommandEmpty,
  type CommandEmptyProp,
};
