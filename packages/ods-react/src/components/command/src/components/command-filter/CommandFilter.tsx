import classNames from 'classnames';
import { type FC, type JSX, forwardRef } from 'react';
import { Input, type InputProp } from '../../../../input/src';
import { useCommand } from '../../contexts/useCommand';
import style from './commandFilter.module.scss';

interface CommandFilterProp extends InputProp {}

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
