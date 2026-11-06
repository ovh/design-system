import { BADGE_STATUS, Badge, COLORS, LOCAL_ONLY } from './ods';
import { BUTTON_EMPHASIS, Button, Divider } from './kit';

export const App = () => (
  <>
    <Badge status={ BADGE_STATUS.accent }>{ LOCAL_ONLY }</Badge>
    <Badge status={ COLORS.accent } />
    <Button variant="ghost" />
    <Divider />
    { BUTTON_EMPHASIS.low }
  </>
);
