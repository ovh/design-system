import type { Components } from '@ovhcloud/ods-components';
import type { FC, PropsWithChildren } from 'react';
import { OdsText } from '@ovhcloud/ods-components/react';
import React from 'react'

export type onFocusEvent = (
  event: CustomEvent<HTMLOdsTextElementEventMap['focusEvent']>
) => void

export type OTextProps = PropsWithChildren<
  Omit<Components.OdsText, 'getFormattedText'> & React.HTMLAttributes<HTMLOdsTextElement>
> & {
  onFocusEvent?: onFocusEvent
};

const DEFAULT_PROPS: Partial<OTextProps> = {
  preset: undefined,
};

const OText: FC<OTextProps> = (props) => (
  <OdsText { ...{ ...DEFAULT_PROPS, ...props }}
           { ...props.onFocusEvent && { onFocusEvent: props.onFocusEvent }}
  >
    Text
  </OdsText>
);

export { OText };
