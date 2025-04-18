import { Select } from '@ark-ui/react/select';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './selectLabel.module.scss';

interface SelectLabelProp extends ComponentPropsWithRef<'label'> {}

const SelectLabel: FC<SelectLabelProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <Select.Label
      className={ classNames(style['select-label'], className) }
      ref={ ref }
      { ...props }>
      { children }
    </Select.Label>
  );
});

SelectLabel.displayName = 'SelectLabel';

export {
  SelectLabel,
  type SelectLabelProp,
};
