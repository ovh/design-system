import { Button, type ButtonProp } from '@ovhcloud/ods-react';

export interface WrapperProp extends ButtonProp { guard?: boolean }

export const Wrapper = ({ guard, ...props }: WrapperProp) => (guard ? null : <Button { ...props } />);
