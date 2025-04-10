import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { ODS_TABLE_SIZE, type OdsTableSize } from '../../constants/table-size';
import { ODS_TABLE_VARIANT, type OdsTableVariant } from '../../constants/table-variant';
import style from './odsTable.module.scss';

interface OdsTableProp extends ComponentPropsWithRef<'table'> {
  size?: OdsTableSize,
  variant?: OdsTableVariant,
}

const OdsTable: FC<OdsTableProp> = forwardRef(({
  children,
  className,
  size = ODS_TABLE_SIZE.md,
  variant = ODS_TABLE_VARIANT.default,
  ...props
}, ref): JSX.Element => {
  return (
    <table
      className={ classNames(
        style['ods-table'],
        style[`ods-table--${size}`],
        style[`ods-table--${variant}`],
        className,
      )}
      ref={ ref }
      { ...props }>
      { children }
    </table>
  );
});

OdsTable.displayName = 'OdsTable';

export {
  OdsTable,
  type OdsTableProp,
};
