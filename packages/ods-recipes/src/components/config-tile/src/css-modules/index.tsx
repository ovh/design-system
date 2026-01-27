import { BADGE_COLOR, BADGE_SIZE, Badge, ICON_NAME, Icon, Quantity, QuantityControl, QuantityInput, Radio, RadioControl, RadioGroup, RadioLabel, Select, SelectContent, SelectControl, type SelectCustomItemRendererArg, type SelectCustomOptionRendererArg, TEXT_PRESET, Text, Tile, formatPrice } from '@ovhcloud/ods-react';
import { type JSX } from 'react';
import style from './index.module.scss';

const FEATURES = [
  { label: '4', subLabel: 'vCore' },
  { label: '8 Go', subLabel: 'RAM' },
  { label: '100 Go', subLabel: '' },
  { label: '1 day automated backup', subLabel: '' },
  { label: 'Unlimited traffic', subLabel: '200 Mbps' },
];

const SELECT_OPTIONS = [
  { customRendererData: { offer: 'Save 14% per month' }, label: '12 months', value: '12' },
  { customRendererData: { offer: 'Save 4% per month' }, label: '6 months', value: '6' },
  { label: 'No commitment', value: '0' },
];

function renderSelectItem(label: string, offer?: string): JSX.Element {
  return (
    <span className={ style[ 'config-tile-select-item' ] }>
      { label }

      {
        offer &&
        <Badge
          color={ BADGE_COLOR.promotion }
          size={ BADGE_SIZE.sm }>
          <Icon name={ ICON_NAME.tag } />&nbsp;{ offer }
        </Badge>
      }
    </span>
  );
}

function customSelectItemRenderer({ selectedItems, text }: SelectCustomItemRendererArg): JSX.Element {
  return renderSelectItem(text, selectedItems[0].customRendererData?.offer);
}

function customSelectOptionRenderer({ customData, label }: SelectCustomOptionRendererArg): JSX.Element {
  return renderSelectItem(label, customData?.offer);
}

const ConfigTile = (): JSX.Element => {
  return (
    <RadioGroup>
      <Tile>
        <Radio
          className={ style['config-tile'] }
          value="vps-1">
          <div className={ style['config-tile__info'] }>
            <div className={ style['config-tile__info__radio'] }>
              <RadioControl />

              <RadioLabel >
                <Text
                  as="span"
                  preset={ TEXT_PRESET.heading5 }>
                  VPS 1
                </Text>
              </RadioLabel>
            </div>

            <div className={ style['config-tile__info__features'] }>
              {
                FEATURES.map(({ label, subLabel }, idx) => (
                  <span
                    className={ style['config-tile__info__features__item'] }
                    key={ idx }>
                    <Icon
                      className={ style['config-tile__info__features__item__icon'] }
                      name={ ICON_NAME.check } />

                    <span className={ style['config-tile__info__features__item__label'] }>{ label }</span>
                    &nbsp;{ subLabel }
                  </span>
                ))
              }
            </div>

            <Select
              defaultValue={ ['12'] }
              items={ SELECT_OPTIONS }>
              <SelectControl customItemRenderer={ customSelectItemRenderer } />

              <SelectContent customOptionRenderer={ customSelectOptionRenderer } />
            </Select>
          </div>

          <div className={ style['config-tile__quantity'] }>
            <Quantity
              defaultValue="0"
              min={ 0 }>
              <QuantityControl>
                <QuantityInput />
              </QuantityControl>
            </Quantity>
          </div>

          <div className={ style['config-tile__pricing'] }>
            <span className={ style['config-tile__pricing__from'] }>
              From
            </span>

            <span className={ style['config-tile__pricing__amount'] }>
              { formatPrice(24.46, 'en-GB', 'EUR') }
            </span>

            <Text
              as="span"
              preset={ TEXT_PRESET.caption }>
              ex. VAT/month
            </Text>

            <Text
              as="span"
              preset={ TEXT_PRESET.caption }>
              or { formatPrice(13.19, 'en-GB', 'EUR') } incl. VAT/month
            </Text>
          </div>
        </Radio>
      </Tile>
    </RadioGroup>
  );
};

export {
  ConfigTile,
};
