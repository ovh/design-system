import { Range } from '../../src';

export default {
  component: Range,
  title: 'Tests rendering',
};

export const CustomLargeTicks = () => (
  <Range
    displayBounds={ false }
    displayTooltip={ false }
    max={ 5 }
    min={ 1 }
    ticks={[
      { label: 'Very Poor', value: 1 },
      { label: 'Poor', value: 2 },
      { label: 'Average', value: 3 },
      { label: 'Good', value: 4 },
      { label: 'Excellent', value: 5 },
    ]} />
);

export const CustomSmallTicks = () => (
  <Range
    displayBounds={ false }
    displayTooltip={ false }
    max={ 5 }
    min={ 1 }
    ticks={[
      { label: 'V', value: 1 },
      { label: 'Poor', value: 2 },
      { label: 'Average', value: 3 },
      { label: 'Good', value: 4 },
      { label: 'E', value: 5 },
    ]} />
);

export const Render = () => (
  <Range />
);
