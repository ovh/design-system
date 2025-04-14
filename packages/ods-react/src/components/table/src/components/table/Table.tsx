import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { TABLE_SIZE, type TableSize } from '../../constants/table-size';
import { TABLE_VARIANT, type TableVariant } from '../../constants/table-variant';
import style from './table.module.scss';

interface TableProp extends ComponentPropsWithRef<'table'> {
  size?: TableSize,
  variant?: TableVariant,
}

const Table: FC<TableProp> = forwardRef(({
  children,
  className,
  size = TABLE_SIZE.md,
  variant = TABLE_VARIANT.default,
  ...props
}, ref): JSX.Element => {
  return (
    <table
      className={ classNames(
        style['table'],
        style[`table--${size}`],
        style[`table--${variant}`],
        className,
      )}
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
