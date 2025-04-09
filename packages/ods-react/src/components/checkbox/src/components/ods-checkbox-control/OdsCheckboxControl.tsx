import { Checkbox } from '@ark-ui/react/checkbox';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { ODS_ICON_NAME, OdsIcon } from '../../../../icon/src';
import style from './odsCheckboxControl.module.scss';

interface OdsCheckboxControlProp extends ComponentPropsWithRef<'div'> {}

const OdsCheckboxControl: FC<OdsCheckboxControlProp> = forwardRef(({
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <Checkbox.Control
      className={ classNames(style['ods-checkbox-control'], className) }
      ref={ ref }
      { ...props }>
      <Checkbox.Indicator>
        <OdsIcon name={ ODS_ICON_NAME.check } />
      </Checkbox.Indicator>

      <Checkbox.Indicator indeterminate>
        <OdsIcon name={ ODS_ICON_NAME.minus } />
      </Checkbox.Indicator>

      <Checkbox.HiddenInput />
    </Checkbox.Control>
  );
});

OdsCheckboxControl.displayName = 'OdsCheckboxControl';

export {
  OdsCheckboxControl,
  type OdsCheckboxControlProp,
};
