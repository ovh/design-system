import { BADGE_COLOR, Badge, COLORS, LOCAL_ONLY } from './ods';
import { BUTTON_VARIANT, Button, Divider } from './kit';

export const App = () => (
  <>
    <Badge color={ BADGE_COLOR.primary }>{ LOCAL_ONLY }</Badge>
    <Badge color={ COLORS.primary } />
    <Button variant="ghost" />
    <Divider color="neutral" />
    { BUTTON_VARIANT.ghost }
  </>
);
