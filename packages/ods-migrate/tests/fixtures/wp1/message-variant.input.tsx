import { MESSAGE_COLOR, MESSAGE_VARIANT, MESSAGE_VARIANTS, Message, MessageBody, type MessageVariant } from '@ovhcloud/ods-react';

type BannerProp = { isLight: boolean, variant?: MessageVariant };

export const Banner = ({ isLight, variant = MESSAGE_VARIANT.default }: BannerProp) => (
  <>
    <Message variant={ variant }><MessageBody>Passed</MessageBody></Message>
    <Message variant="default"><MessageBody>Tinted</MessageBody></Message>
    <Message color={ MESSAGE_COLOR.warning } variant={ MESSAGE_VARIANT.light }><MessageBody>Light</MessageBody></Message>
    <Message variant={ isLight ? 'light' : 'default' }><MessageBody>Either</MessageBody></Message>
  </>
);

export const options = MESSAGE_VARIANTS.map((value) => ({ label: value, value }));
