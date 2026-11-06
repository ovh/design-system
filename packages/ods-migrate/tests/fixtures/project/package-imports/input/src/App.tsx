import { BUTTON_VARIANT, Button } from '#ods';
import { Badge } from '#ui/badge';

export const App = () => (
  <>
    <Button variant={ BUTTON_VARIANT.outline }>a</Button>
    <Badge color="primary">b</Badge>
  </>
);
