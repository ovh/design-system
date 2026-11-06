import { BUTTON_VARIANT, OsdsButton } from '@ovhcloud/ods-components/react';
import { Button } from '@ovhcloud/ods-react';

export const Legacy = () => <OsdsButton variant={ BUTTON_VARIANT.flat }>Old</OsdsButton>;
export const Current = () => <Button emphasis="low">New</Button>;
