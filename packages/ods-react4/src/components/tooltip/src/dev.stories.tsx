import { OdsTooltip } from '.';

export default {
  title: "OdsTooltip dev",
  component: OdsTooltip,
};

export const Default = () => (
  <OdsTooltip>
    <button>?</button>
  </OdsTooltip>
);

// export const Fixed = () => (
//   <OdsTooltip strategy="fixed" />
// );
//
// export const WithArrow = () => (
//   <OdsTooltip withArrow={ true } />
// );
