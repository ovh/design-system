import { Select, createListCollection } from '@ark-ui/react/select'
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useMemo } from 'react';
import style from './odsSelect.module.scss';

type OdsSelectItem = {
  disabled?: boolean,
  label: string,
  value: string,
}
// TODO invalid, disabled, required, readOnly?
interface OdsSelectProp extends ComponentPropsWithRef<'div'> {
  defaultValue?: string | string[],
  items: OdsSelectItem[],
}

const OdsSelect: FC<OdsSelectProp> = forwardRef(({
  children,
  className,
  defaultValue,
  items = [],
  ...props
}, ref): JSX.Element => {
  const options = createListCollection<OdsSelectItem>({ items });
  const defaultValues = useMemo(() => {
    if (defaultValue) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    }
  }, [defaultValue]);

  return (
    <Select.Root
      className={ classNames(style['ods-select'], className) }
      collection={ options }
      defaultValue={ defaultValues }
      ref={ ref }
      { ...props }>
      { children }
    </Select.Root>
  );
});

OdsSelect.displayName = 'OdsSelect';

export {
  OdsSelect,
  type OdsSelectItem,
  type OdsSelectProp,
};
