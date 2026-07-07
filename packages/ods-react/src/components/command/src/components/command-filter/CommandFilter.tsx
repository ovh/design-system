import classNames from 'classnames';
import { type FC, type JSX, forwardRef } from 'react';
import { Input, type InputProp } from '../../../../input/src';
import { useCommand } from '../../contexts/useCommand';
import style from './commandFilter.module.scss';

interface CommandFilterProp extends InputProp {
  /**
   * The controlled filter query. When set, the built-in option filtering is
   * fully disabled: the consumer owns the query state (via `onChange`) and is
   * responsible for rendering only the matching options.
   */
  value?: InputProp['value'];
}

const CommandFilter: FC<CommandFilterProp> = forwardRef(({
  className,
  onChange,
  value,
  ...props
}, ref): JSX.Element => {
  const { filter, highlightedValue, id, setFilter } = useCommand();
  const isControlled = value !== undefined;

  return (
    <Input
      aria-activedescendant={ highlightedValue ? highlightedValue : undefined }
      aria-controls={ `${id}-list` }
      aria-expanded="true"
      className={ classNames(style['command-filter'], className) }
      data-ods="command-filter"
      onChange={ (e) => {
        if (!isControlled) {
          setFilter(e.target.value);
        }
        onChange?.(e);
      } }
      ref={ ref }
      role="combobox"
      type='search'
      value={ isControlled ? value : filter }
      { ...props }
    />
  );
});

CommandFilter.displayName = 'CommandFilter';

export {
  CommandFilter,
  type CommandFilterProp,
};
