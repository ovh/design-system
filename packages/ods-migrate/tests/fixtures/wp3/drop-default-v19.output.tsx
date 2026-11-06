import { Button, BUTTON_EMPHASIS, CartAction } from '@ovhcloud/ods-react';

export const A = () => <Button>a</Button>;
export const B = () => <Button emphasis={ BUTTON_EMPHASIS.medium }>b</Button>;
export const C = () => <Button emphasis="low" status="brand">c</Button>;
export const D = ({ v }) => <Button emphasis={ v ?? 'high' }>d</Button>;
export const E = ({ c }) => <Button status={ c ? 'brand' : 'critical' }>e</Button>;
export const F = () => <CartAction emphasis="high" status="critical">f</CartAction>;
export const G = ({ c, v }) => <Button emphasis={ (c ? v : 'low') ?? 'high' }>g</Button>;
export const H = ({ v }) => <Button emphasis={ v ?? 'medium' }>h</Button>;
