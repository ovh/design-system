import { useState } from 'react';
import { Button } from '../../button/src';
import { ICON_NAME, Icon } from '../../icon/src';
import { VisuallyHidden } from '.';

export default {
  component: VisuallyHidden,
  title: 'VisuallyHidden dev',
};

export const Default = () => (
  <Button>
    <Icon name={ ICON_NAME.trash } />
    <VisuallyHidden>Delete the file</VisuallyHidden>
  </Button>
);

export const Status = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button onClick={ () => setCount((value) => value + 1) }>
        Add an item
      </Button>

      <VisuallyHidden role="status">
        { count ? `${count} items in the list` : '' }
      </VisuallyHidden>
    </>
  );
};
