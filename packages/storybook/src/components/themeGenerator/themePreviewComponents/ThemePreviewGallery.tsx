import React from 'react';
import {
  Button,
  Input,
  Checkbox,
  CheckboxControl,
  CheckboxLabel,
  Radio,
  RadioGroup,
  RadioLabel,
  Select,
  SelectControl,
  Tag,
  Spinner,
  Text,
  TEXT_PRESET,
  BUTTON_VARIANT,
  TAG_COLOR,
} from '@ovhcloud/ods-react';

const sectionStyle: React.CSSProperties = { marginBlock: 16, display: 'grid', gap: 12 };
const rowStyle: React.CSSProperties = { display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' };

const ThemePreviewGallery: React.FC = () => {
  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <section style={ sectionStyle }>
        <Text preset={ TEXT_PRESET.heading3 }>Buttons</Text>
        <div style={ rowStyle }>
          <Button variant={ BUTTON_VARIANT.default }>Default</Button>
          <Button variant={ BUTTON_VARIANT.ghost }>Ghost</Button>
          <Button variant={ BUTTON_VARIANT.outline }>Outline</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      <section style={ sectionStyle }>
        <Text preset={ TEXT_PRESET.heading3 }>Inputs</Text>
        <div style={ rowStyle }>
          <Input placeholder="Type here" />
          <Input placeholder="Disabled" disabled />
          <Spinner />
        </div>
      </section>

      <section style={ sectionStyle }>
        <Text preset={ TEXT_PRESET.heading3 }>Checkbox / Radio</Text>
        <div style={ rowStyle }>
          <Checkbox defaultChecked>
            <CheckboxControl />
            <CheckboxLabel>Option A</CheckboxLabel>
          </Checkbox>
          <Checkbox>
            <CheckboxControl />
            <CheckboxLabel>Option B</CheckboxLabel>
          </Checkbox>

          <RadioGroup name="r1" defaultValue="r-a" style={{ display: 'flex', gap: 8 }}>
            <Radio value="r-a">
              <RadioLabel>Radio A</RadioLabel>
            </Radio>
            <Radio value="r-b">
              <RadioLabel>Radio B</RadioLabel>
            </Radio>
          </RadioGroup>
        </div>
      </section>

      <section style={ sectionStyle }>
        <Text preset={ TEXT_PRESET.heading3 }>Select / Tag</Text>
        <div style={ rowStyle }>
          <Select items={ [] }>
            <SelectControl placeholder="Choose..." />
          </Select>
          <Tag>Tag</Tag>
          <Tag color={ TAG_COLOR.success }>Success</Tag>
          <Tag color={ TAG_COLOR.critical }>Critical</Tag>
        </div>
      </section>
    </div>
  );
};

export { ThemePreviewGallery };


