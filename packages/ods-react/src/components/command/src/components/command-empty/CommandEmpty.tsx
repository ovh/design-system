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

  // role="presentation" keeps the listbox structure valid: a listbox only
  // allows option / group children, and the message is purely visual
  return (
    <div
      className={ className }
      data-ods="command-empty"
      ref={ ref }
      { ...props }
      role="presentation">
      { children }
    </div>
  );
});

CommandEmpty.displayName = 'CommandEmpty';

export {
  CommandEmpty,
  type CommandEmptyProp,
};
