import { FeatureList } from '.';

export default {
  component: FeatureList,
  title: 'FeatureList dev',
};

export const CssModule = () => (
  <FeatureList.CssModule />
);

export const Tailwind = () => (
  <FeatureList.Tailwind />
);
