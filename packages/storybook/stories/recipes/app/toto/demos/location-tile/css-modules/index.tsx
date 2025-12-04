import { CodeProvider } from '@mui/internal-docs-infra/CodeProvider';
import { BADGE_COLOR, ICON_NAME, TEXT_PRESET, Badge, Card, Checkbox, CheckboxControl, CheckboxLabel, Icon, Quantity, QuantityControl, QuantityInput, Text } from '@ovhcloud/ods-react';
import React from 'react';
import style from './_index.module.css';

export default function RecipeLocationTile() {
  return (
    <CodeProvider>
    <Card className={ style['location-tile'] }>
      <div className={ style['location-tile__selection'] }>
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
        className={ style['location-tile__delivery'] }
        preset={ TEXT_PRESET.small }>
        <Icon name={ ICON_NAME.circleCheck } /> Livraison en 120s
      </Text>

      <Quantity min={ 0 }>
        <QuantityControl>
          <QuantityInput />
        </QuantityControl>
      </Quantity>
    </Card>
    </CodeProvider>
  );
};
