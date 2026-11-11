import { Button, type ButtonProp, Card, type CardProp } from '@ovhcloud/ods-react';

export const PromoCard = ({ status: color = 'accent', ...rest }: CardProp) => <Card status={ color } { ...rest } />;

export const MyButton = ({ emphasis: variant = 'high', ...p }: ButtonProp) => <Button emphasis={ variant } { ...p } />;

export const SolidButton = (props: ButtonProp) => <Button emphasis="high" { ...props } />;
