import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { TABLE_SIZE, type TableSize } from '../../constants/table-size';
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
}

const Table: FC<TableProp> = forwardRef(({
  children,
  className,
  size = TABLE_SIZE.md,
  striped = false,
  ...props
}, ref): JSX.Element => {
  return (
    <table
      className={ classNames(
        style['table'],
        style[`table--${size}`],
        { [style['table--striped']]: striped },
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
