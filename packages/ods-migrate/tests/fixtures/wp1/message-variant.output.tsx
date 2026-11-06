import { MESSAGE_STATUS, MESSAGE_EMPHASIS, MESSAGE_EMPHASES, Message, MessageBody, type MessageEmphasis } from '@ovhcloud/ods-react';

type BannerProp = { isLight: boolean, variant?: MessageEmphasis };

export const Banner = ({ isLight, variant = MESSAGE_EMPHASIS.high }: BannerProp) => (
  <>
    <Message emphasis={ variant }><MessageBody>Passed</MessageBody></Message>
    <Message emphasis="high"><MessageBody>Tinted</MessageBody></Message>
    <Message status={ MESSAGE_STATUS.warning }><MessageBody>Light</MessageBody></Message>
    <Message emphasis={ isLight ? 'medium' : 'high' }><MessageBody>Either</MessageBody></Message>
  </>
);

export const options = MESSAGE_EMPHASES.map((value) => ({ label: value, value }));
