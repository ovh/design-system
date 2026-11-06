import { Badge, BADGE_COLOR, BADGE_STATUS, Button, Divider } from '@ovhcloud/ods-react';

export const A = ({ c }) => <Button color={ c ? 'information' : c }>x</Button>;
export const B = () => <Button color="information">x</Button>;
export const C = () => <Badge status={ BADGE_STATUS.accent } color={ BADGE_COLOR.primary }>x</Badge>;
export const D = () => <Badge color="primary">y</Badge>;
export const E = ({ rest, tone }) => <Badge color={ tone } { ...rest }>z</Badge>;
export const F = (props) => <Divider {...props} />;
