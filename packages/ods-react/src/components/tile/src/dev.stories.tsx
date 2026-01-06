import {
  Checkbox,
  CheckboxControl,
  CheckboxLabel,
  Radio,
  RadioControl,
  RadioGroup,
  RadioLabel,
} from '@ovhcloud/ods-react';
import { useState } from 'react';
import { Tile, TileAltContainer } from '.';
import style from './dev.module.css';

export default {
  component: Tile,
  title: 'Tile dev',
};

export const Default = () => (
  <Tile className={ style[ 'custom-tile' ] }>
    This is a tile.
  </Tile>
);

export const Disabled = () => (
  <Tile className={ style[ 'custom-tile' ] } disabled>
    This is a tile.
  </Tile>
);

export const WithCheckbox = () => {
  const [selected, setSelected] = useState(false);

  return <div>
    <Tile className={ style[ 'custom-tile' ] } selected={ selected }>
      <Checkbox checked={ selected } onCheckedChange={ (detail) => setSelected(detail.checked === true) }>
        <div className={ style[ 'custom-tile__container' ] }>
          <CheckboxControl />
          <CheckboxLabel>Checkbox label</CheckboxLabel>
        </div>
        <TileAltContainer className={ style[ 'custom-tile__container' ] }>
          This is content inside TileAltContainer
        </TileAltContainer>
      </Checkbox>
    </Tile>
    <Tile className={ style[ 'custom-tile' ] } disabled selected={ selected }>
      <Checkbox checked={ selected } disabled onCheckedChange={ (detail) => setSelected(detail.checked === true) }>
        <div className={ style[ 'custom-tile__container' ] }>
          <CheckboxControl />
          <CheckboxLabel>Checkbox label</CheckboxLabel>
        </div>
        <TileAltContainer className={ style[ 'custom-tile__container' ] }>
          This is content inside TileAltContainer
        </TileAltContainer>
      </Checkbox>
    </Tile>
    <Tile className={ style[ 'custom-tile' ] } selected={ selected }>
      <Checkbox>
        <div className={ style[ 'custom-tile__container' ] }>
          <CheckboxControl />
          <CheckboxLabel>Checkbox label</CheckboxLabel>
        </div>
        <TileAltContainer className={ style[ 'custom-tile__container' ] }>
          This is content inside TileAltContainer
        </TileAltContainer>
      </Checkbox>
    </Tile>
  </div>
};

export const WithRadio = () => {
  const [selected, setSelected] = useState('radio-1');

  return <RadioGroup value={ selected } onValueChange={ (detail) => setSelected(detail.value || '') }>
    <Tile className={ style[ 'custom-tile' ] } selected={ selected === 'radio-1' }>
      <Radio value={ 'radio-1' }>
        <div className={ style[ 'custom-tile__container' ] }>
          <RadioControl />
          <RadioLabel>
            Radio 1
          </RadioLabel>
        </div>
      </Radio>
    </Tile>
    <Tile className={ style[ 'custom-tile' ] } selected={ selected === 'radio-2' }>
      <Radio value={ 'radio-2' }>
        <div className={ style[ 'custom-tile__container' ] }>
          <RadioControl />
          <RadioLabel>
            Radio 2
          </RadioLabel>
        </div>
        <TileAltContainer className={ style[ 'custom-tile__alt-container' ] }>
          This is radio 2 with some additional context
        </TileAltContainer>
      </Radio>
    </Tile>
    <Tile className={ style[ 'custom-tile' ] } selected={ selected === 'radio-3' }>
      <Radio className={ style[ 'custom-tile__radio-container' ] } value={ 'radio-3' }>
        <div className={ style[ 'custom-tile__radio-container__container' ] }>
          <RadioControl />
          <RadioLabel>
            Radio 3
          </RadioLabel>
        </div>
        <TileAltContainer className={ style[ 'custom-tile__alt-container' ] }>
          This is radio 3 with some additional context
        </TileAltContainer>
      </Radio>
    </Tile>
  </RadioGroup>;
};

export const WithAltContainer = () => (
  <Tile className={ style[ 'custom-tile' ] }>
    <TileAltContainer>
      This is content inside TileAltContainer
    </TileAltContainer>
  </Tile>
);
