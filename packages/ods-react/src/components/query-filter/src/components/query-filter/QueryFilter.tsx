import classNames from 'classnames';
import { type FC, type JSX, forwardRef } from 'react';
import { useFormField } from '../../../../form-field/src';
import { QueryFilterProvider, type QueryFilterRootProp } from '../../contexts/useQueryFilter';
import style from './queryFilter.module.scss';

interface QueryFilterProp extends QueryFilterRootProp {}

const QueryFilter: FC<QueryFilterProp> = forwardRef(({
  allowCustomValue,
  children,
  className,
  defaultOpen,
  defaultValue,
  disabled,
  filterOption,
  filterProperty,
  highlightResults = false,
  i18n,
  invalid,
  locale,
  name,
  newElementLabel = 'Use: ',
  noResultLabel = 'No results found',
  onInputValueChange,
  onOpenChange,
  onValueChange,
  open,
  overlayConfig,
  readOnly,
  required,
  value,
  ...props
}, ref): JSX.Element => {
  const fieldContext = useFormField();
  const isInvalid = invalid || fieldContext?.invalid;

  return (
    <QueryFilterProvider
      allowCustomValue={ allowCustomValue }
      defaultOpen={ defaultOpen }
      defaultValue={ defaultValue }
      disabled={ disabled }
      filterOption={ filterOption }
      filterProperty={ filterProperty }
      highlightResults={ highlightResults }
      i18n={ i18n }
      invalid={ isInvalid }
      locale={ locale }
      name={ name }
      newElementLabel={ newElementLabel }
      noResultLabel={ noResultLabel }
      onInputValueChange={ onInputValueChange }
      onOpenChange={ onOpenChange }
      onValueChange={ onValueChange }
      open={ open }
      overlayConfig={ overlayConfig }
      readOnly={ readOnly }
      required={ required }
      value={ value }>
      <div
        className={ classNames(style['query-filter'], className) }
        data-ods="query-filter"
        ref={ ref }
        { ...props }>
        { children }
      </div>
    </QueryFilterProvider>
  );
});

QueryFilter.displayName = 'QueryFilter';

export {
  QueryFilter,
  type QueryFilterProp,
};
