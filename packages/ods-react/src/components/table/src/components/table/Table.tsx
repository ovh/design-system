import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { TABLE_SIZE, type TableSize } from '../../constants/table-size';
import { TABLE_VARIANT, type TableVariant } from '../../constants/table-variant';
import style from './table.module.scss';

interface TableProp extends ComponentPropsWithRef<'table'> {
  /**
   * The size preset to use.
   */
  size?: TableSize,
  /**
   * Whether the body rows should alternate background colors.
   */
  striped?: boolean,
  /**
   * @deprecated
   * The variant preset to use.
   * DEPRECATED: Use the `striped` prop instead, variant will be removed in the next major version.
   */
  variant?: TableVariant,
}

const Table: FC<TableProp> = forwardRef(({
  children,
  className,
  size = TABLE_SIZE.md,
  striped = false,
  variant,
  ...props
}, ref): JSX.Element => {
  if (variant) {
    console.warn('[DEPRECATED]: Variant prop is deprecated and will be removed in the next major version, use the striped prop instead.');
  }

  return (
    <table
      className={ classNames(
        style['table'],
        style[`table--${size}`],
        { [style['table--striped']]: striped || variant === TABLE_VARIANT.striped },
        className,
      )}
      data-ods="table"
      ref={ ref }
      { ...props }>
      { children }
    </table>
  );
});

Table.displayName = 'Table';

export {
  Table,
  type TableProp,
};
