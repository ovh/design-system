import { Badge, BADGE_STATUS, Button, Divider } from '@ovhcloud/ods-react';

export const A = ({ c }) => <Button /* TODO(ods-v20): <Button color="information"> has no v20 equivalent: a Button shows no status in v20: pick `status` brand, neutral or critical (brand is the default), and show the status with a Badge or a Message next to it */ color={ c ? 'information' : c }>x</Button>;
export const B = () => /* TODO(ods-v20): <Button color="information"> has no v20 equivalent: a Button shows no status in v20: pick `status` brand, neutral or critical (brand is the default), and show the status with a Badge or a Message next to it */ <Button>x</Button>;
export const C = () => <Badge status={ BADGE_STATUS.accent }>x</Badge>;
export const D = () => <Badge status="accent">y</Badge>;
export const E = ({ rest, tone }) => <Badge status={ tone } /* TODO(ods-v20): <Badge {...…}>: if the object passed here with {...} has these keys, change them (TypeScript does not flag them there): color → status */ { ...rest }>z</Badge>;
export const F = (props) => <Divider /* TODO(ods-v20): <Divider {...…}>: if the object passed here with {...} has these keys, change them (TypeScript does not flag them there): color (removed: delete it) */ {...props} />;
