import { Portal } from '@ark-ui/react/portal';
import { Select } from '@ark-ui/react/select';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './odsTooltipContent.module.scss';

interface OdsSelectContentProp extends ComponentPropsWithRef<'div'> { // TODO
  // withArrow?: boolean,
}

const OdsSelectContent: FC<OdsSelectContentProp> = forwardRef(({
  children,
  // withArrow = false,
  ...props
}, ref): JSX.Element => {
  return (
    <Portal>
      <Select.Positioner>
        <Select.Content
          className={ style['ods-tooltip-content'] }
          ref={ ref }
          { ...props }>
          { children }
        </Select.Content>
      </Select.Positioner>
    </Portal>
  );
});

OdsSelectContent.displayName = 'OdsSelectContent';

export {
  OdsSelectContent,
  type OdsSelectContentProp,
};
