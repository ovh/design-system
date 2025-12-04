import { BADGE_COLOR, Badge, Card, Checkbox, CheckboxControl, CheckboxLabel, ICON_NAME, Icon, Quantity, QuantityControl, QuantityInput, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { type JSX } from 'react';
import style from './index.module.css';

const LocationTile = (): JSX.Element => {
  return (
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
  );
};

export {
  LocationTile,
};
