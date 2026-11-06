import { Button, BUTTON_COLOR, BUTTON_VARIANT, CartAction } from '@ovhcloud/ods-react';

export const A = () => <Button color="primary">a</Button>;
export const B = () => <Button color={ BUTTON_COLOR.primary } variant={ BUTTON_VARIANT.outline }>b</Button>;
export const C = () => <Button variant="ghost" status="brand">c</Button>;
export const D = ({ v }) => <Button variant={ v }>d</Button>;
export const E = ({ c }) => <Button color={ c ? 'primary' : 'critical' }>e</Button>;
export const F = () => <CartAction variant="default" color="critical">f</CartAction>;
export const G = ({ c, v }) => <Button variant={ c ? v : 'ghost' }>g</Button>;
export const H = ({ v }) => <Button variant={ v ?? 'outline' }>h</Button>;
