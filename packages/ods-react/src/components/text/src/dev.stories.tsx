import { OdsText } from '.';

export default {
  component: OdsText,
  title: 'OdsText dev',
};

export const Default = () => (
  <OdsText>
    Default text
  </OdsText>
);

export const Presets = () => (
  <>
    <OdsText preset="caption">Caption</OdsText><br />
    <OdsText preset="code">Code</OdsText><br />
    <OdsText preset="label">Label</OdsText>
    <OdsText preset="paragraph">Paragraph</OdsText>
    <OdsText preset="span">Span</OdsText><br />
    <OdsText preset="heading-1">Heading-1</OdsText>
    <OdsText preset="heading-2">Heading-2</OdsText>
    <OdsText preset="heading-3">Heading-3</OdsText>
    <OdsText preset="heading-4">Heading-4</OdsText>
    <OdsText preset="heading-5">Heading-5</OdsText>
    <OdsText preset="heading-6">Heading-6</OdsText>
  </>
);
