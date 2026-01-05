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
    <Checkbox checked={ selected } onCheckedChange={ (detail) => setSelected(detail.checked === true) }>
    <Tile className={ style[ 'custom-tile' ] } selected={ selected }>
      <div className={ style[ 'custom-tile__container' ] }>
        <CheckboxControl />
        <CheckboxLabel>Checkbox label</CheckboxLabel>
      </div>
      <TileAltContainer className={ style[ 'custom-tile__container' ] }>
        This is content inside TileAltContainer
      </TileAltContainer>
    </Tile>
  </Checkbox>
    <Checkbox checked={ selected } disabled onCheckedChange={ (detail) => setSelected(detail.checked === true) }>
      <Tile className={ style[ 'custom-tile' ] } disabled selected={ selected }>
        <div className={ style[ 'custom-tile__container' ] }>
          <CheckboxControl />
          <CheckboxLabel>Checkbox label</CheckboxLabel>
        </div>
        <TileAltContainer className={ style[ 'custom-tile__container' ] }>
          This is content inside TileAltContainer
        </TileAltContainer>
      </Tile>
    </Checkbox>
  </div>
};

export const WithRadio = () => {
  const [selected, setSelected] = useState('radio-1');

  return <RadioGroup value={ selected } onValueChange={ (detail) => setSelected(detail.value || '') }>
    <Radio value={ 'radio-1' }>
      <Tile className={ style[ 'custom-tile' ] } selected={ selected === 'radio-1' }>
        <div className={ style[ 'custom-tile__container' ] }>
          <RadioControl />
          <RadioLabel>
            Radio 1
          </RadioLabel>
        </div>
      </Tile>
    </Radio>
    <Radio value={ 'radio-2' }>
      <Tile className={ style[ 'custom-tile' ] } selected={ selected === 'radio-2' }>
        <div className={ style[ 'custom-tile__container' ] }>
          <RadioControl />
          <RadioLabel>
            Radio 2
          </RadioLabel>
        </div>
        <TileAltContainer className={ style[ 'custom-tile__alt-container' ] }>
          This is radio 2 with some additional context
        </TileAltContainer>
      </Tile>
    </Radio>
  </RadioGroup>;
};

export const WithAltContainer = () => (
  <Tile className={ style[ 'custom-tile' ] }>
    <TileAltContainer>
      This is content inside TileAltContainer
    </TileAltContainer>
  </Tile>
);
