import { Button, Tabs, TabList, Tab } from '@ovhcloud/ods-react';

// A `//` comment before a removed attribute keeps the code after it.
export const Inline = () => (
  <Button
    emphasis="low" // secondary
    onClick={ () => {} } disabled
  >Save</Button>
);

export const Last = () => <Button emphasis="low" // x
  >Go</Button>;

export const Alone = () => (
  <Button
    emphasis="low" // x
    disabled
  >Go</Button>
);


// A comment before an attribute moved to each item stays.
export const View = () => (
  <Tabs defaultValue="a" variant="switch"
    // why
  >
    <TabList>
      <Tab value="a" disabled>A</Tab>
    </TabList>
  </Tabs>
);
