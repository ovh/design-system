import { Button, Switch, SwitchItem } from '@ovhcloud/ods-react';
import { Pagination } from '@ovhcloud/ods-react';

// A `//` comment before a removed attribute keeps the code after it.
export const Inline = () => (
  <Button
    variant="ghost" // secondary
    color="primary" onClick={ () => {} } disabled
  >Save</Button>
);

export const Last = () => <Button variant="ghost" // x
  color="primary">Go</Button>;

export const Alone = () => (
  <Button
    variant="ghost" // x
    color="primary"
    disabled
  >Go</Button>
);


// A comment before an attribute moved to each item stays.
export const View = () => (
  <Switch defaultValue="a"
    // why
    disabled
  >
    <SwitchItem value="a">A</SwitchItem>
  </Switch>
);

// A comment last on an element without children stays, and the parts go after it.
export const Pager = ({ total }: { total: number }) => (
  <>
    <Pagination totalItems={ total } // pager
    />
    <Pagination totalItems={ total } /* pager */ />
  </>
);
