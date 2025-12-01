import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { BADGE_COLOR, Badge } from '../../../ods-react/src/components/badge/src';
import { Card } from '../../../ods-react/src/components/card/src';
import { Checkbox, CheckboxControl, CheckboxLabel } from '../../../ods-react/src/components/checkbox/src';
import { ICON_NAME, Icon } from '../../../ods-react/src/components/icon/src';
import { Quantity, QuantityControl, QuantityInput } from '../../../ods-react/src/components/quantity/src';
import { TEXT_PRESET, Text } from '../../../ods-react/src/components/text/src';

const meta: Meta = {
  title: 'Recipes/Components',
};

export default meta;

export const ConfigTileQuantity: StoryObj = {
  globals: {
    imports: `import { TEXT_PRESET, Card, Checkbox, CheckboxControl, CheckboxLabel, Quantity, QuantityControl, QuantityInput, Text } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Card style={{
      display: 'grid',
      gridTemplateColumns: '1fr max-content max-content',
      alignItems: 'center',
      columnGap: 'var(--ods-theme-column-gap)',
      padding: 'calc(var(--ods-theme-padding-vertical) / 2) var(--ods-theme-padding-horizontal)',
    }}>
      <Checkbox>
        <CheckboxControl />

        <CheckboxLabel>
          Zimbra Starter
        </CheckboxLabel>
      </Checkbox>

      <Quantity min={ 0 }>
        <QuantityControl>
          <QuantityInput />
        </QuantityControl>
      </Quantity>

      <div>
        <Text
          preset={ TEXT_PRESET.heading3 }
          style={{
            color: 'var(--ods-theme-primary-color)',
            textAlign: 'right',
          }}>
          0.30€
        </Text>

        <Text preset={ TEXT_PRESET.caption }>
          HT/mois/compte
        </Text>
      </div>
    </Card>
  ),
};

export const LocationTile: StoryObj = {
  globals: {
    imports: `import { BADGE_COLOR, ICON_NAME, TEXT_PRESET, Badge, Card, Checkbox, CheckboxControl, CheckboxLabel, Icon, Quantity, QuantityControl, QuantityInput, Text } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Card style={{
      display: 'inline-flex',
      flexFlow: 'column',
      rowGap: 'var(--ods-theme-row-gap)',
      padding: 'var(--ods-theme-padding-vertical) var(--ods-theme-padding-horizontal)',
    }}>
      <div style={{
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'center',
        columnGap: 'var(--ods-theme-column-gap)',
      }}>
        <Checkbox>
          <CheckboxControl />

          <CheckboxLabel>
            France - Paris <Text preset={ TEXT_PRESET.caption }>(eu-west-par)</Text>
          </CheckboxLabel>
        </Checkbox>

        <Badge color={ BADGE_COLOR.primary }>
          3-AZ
        </Badge>
      </div>

      <Text
        preset={ TEXT_PRESET.small }
        style={{ color: 'var(--ods-theme-success-color)' }}>
        <Icon name={ ICON_NAME.circleCheck } />Livraison en 120s
      </Text>

      <Quantity min={ 0 }>
        <QuantityControl>
          <QuantityInput />
        </QuantityControl>
      </Quantity>
    </Card>
  ),
};
