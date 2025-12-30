import { Text } from '.';
import style from './dev.module.css';

export default {
  component: Text,
  title: 'Text dev',
};

export const As = () => (
  <>
    <Text preset="heading-4" as="span">
      Preset heading-4 as span
    </Text>

    <Text preset="caption" as="small">
      Preset caption as small
    </Text>
  </>
);

export const Default = () => (
  <Text>
    Default text
  </Text>
);

export const Disabled = () => (
  <>
    <Text disabled preset="caption">Caption</Text><br />
    <Text disabled preset="code">Code</Text><br />
    <Text disabled preset="label">Label</Text>
    <Text disabled preset="paragraph">Paragraph</Text>
    <Text disabled preset="small">Small</Text><br />
    <Text disabled preset="span">Span</Text><br />
    <Text disabled preset="heading-1">Heading-1</Text>
    <Text disabled preset="heading-2">Heading-2</Text>
    <Text disabled preset="heading-3">Heading-3</Text>
    <Text disabled preset="heading-4">Heading-4</Text>
    <Text disabled preset="heading-5">Heading-5</Text>
    <Text disabled preset="heading-6">Heading-6</Text>
  </>
);

export const Presets = () => (
  <>
    <Text preset="caption">Caption</Text><br />
    <Text preset="code">Code</Text><br />
    <Text preset="label">Label</Text>
    <Text preset="paragraph">Paragraph</Text>
    <Text preset="small">Small</Text><br />
    <Text preset="span">Span</Text><br />
    <Text preset="heading-1">Heading-1</Text>
    <Text preset="heading-2">Heading-2</Text>
    <Text preset="heading-3">Heading-3</Text>
    <Text preset="heading-4">Heading-4</Text>
    <Text preset="heading-5">Heading-5</Text>
    <Text preset="heading-6">Heading-6</Text>
  </>
);

export const CustomStyle = () => (
  <Text className={ style['custom-text'] }>
    Custom Style
  </Text>
);
