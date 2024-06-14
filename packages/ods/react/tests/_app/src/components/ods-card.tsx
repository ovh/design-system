import React from 'react-dom/client';
import { OdsCard, OdsText } from 'ods-components-react';

const Card = () => {
  return (
    <OdsCard>
      <OdsText preset='heading-6'>Hello, world!</OdsText>
    </OdsCard>
  );
};

export default Card;
