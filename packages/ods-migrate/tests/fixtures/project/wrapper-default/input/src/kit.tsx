import { Button, type ButtonProp, Card, type CardProp } from '@ovhcloud/ods-react';

export const PromoCard = ({ color = 'primary', ...rest }: CardProp) => <Card color={ color } { ...rest } />;

export const MyButton = ({ variant = 'default', ...p }: ButtonProp) => <Button variant={ variant } { ...p } />;

export const SolidButton = (props: ButtonProp) => <Button variant="default" { ...props } />;
