import { Text } from '.';

export default {
  component: Text,
  title: 'Text dev',
};

export const Default = () => (
  <Text>
    Default text
  </Text>
);

export const Presets = () => (
  <>
    <Text preset="caption">Caption</Text><br />
    <Text preset="code">Code</Text><br />
    <Text preset="label">Label</Text>
    <Text preset="paragraph">Paragraph</Text>
    <Text preset="span">Span</Text><br />
    <Text preset="heading-1">Heading-1</Text>
    <Text preset="heading-2">Heading-2</Text>
    <Text preset="heading-3">Heading-3</Text>
    <Text preset="heading-4">Heading-4</Text>
    <Text preset="heading-5">Heading-5</Text>
    <Text preset="heading-6">Heading-6</Text>
  </>
);
