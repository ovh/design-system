import { Text } from '../../text/src';
import { Medium } from '.';

export default {
  component: Medium,
  title: 'Medium dev',
};

export const Caption = () => (
  <figure>
    <Medium
      alt="OVHcloud logo"
      src="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ayzwkdawmlyzvuummuf4" />

    <figcaption>
      <Text preset="caption">
        The company logo
      </Text>
    </figcaption>
  </figure>
);

export const Default = () => (
  <Medium
    alt="OVHcloud logo"
    src="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ayzwkdawmlyzvuummuf4" />
);
