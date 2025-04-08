import { Select } from '@ark-ui/react/select';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { ODS_ICON_NAME, OdsIcon } from '../../../../icon/src';

interface OdsSelectTriggerProp extends ComponentPropsWithRef<'button'> {
  // asChild?: boolean,
  placeholder?: string
}

const OdsSelectTrigger: FC<OdsSelectTriggerProp> = forwardRef(({
  children,
  placeholder,
  ...props
}, ref): JSX.Element => {
  return (
    <Select.Control>
      <Select.Trigger
        ref={ ref }
        { ...props }>
        <Select.ValueText placeholder={ placeholder } />

        <Select.Indicator>
          <OdsIcon name={ ODS_ICON_NAME.chevronDown } />
        </Select.Indicator>
      </Select.Trigger>
    </Select.Control>
  );
});

OdsSelectTrigger.displayName = 'OdsSelectTrigger';

export {
  OdsSelectTrigger,
  type OdsSelectTriggerProp,
};
