import { COLORS, Button } from '#ods';
import { Wrapper } from '@acme/kit';
import { BUTTON_COLOR } from '~/ods-direct';

export const a = <Button color={ COLORS.primary }>a</Button>;
export const b = <Wrapper color="primary" guard />;
export const c = BUTTON_COLOR.critical;
export const d = <div className="plain" />;
