import { Medium } from '../../src';

export default {
  component: Medium,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Medium
    alt='OVHcloud logo'
    data-testid="custom-style"
    style={{ height: 42 }}
    src='https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ayzwkdawmlyzvuummuf4'
  />
);

export const render = () => (
  <Medium
    alt='OVHcloud logo'
    data-testid="render"
    src='https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ayzwkdawmlyzvuummuf4'
    width={700}
  />
);
