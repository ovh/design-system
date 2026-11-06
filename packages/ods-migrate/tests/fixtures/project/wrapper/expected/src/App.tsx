import { GuardedButton, type DisableCondition } from './GuardedButton';
import { IconButton } from './IconButton';
import { Message } from './MessageCompat';
import { StatusBadge } from './StatusBadge';

const conditions: DisableCondition[] = [];

export const App = () => (
  <>
    <GuardedButton conditions={ conditions } emphasis="low">Save</GuardedButton>
    <GuardedButton>Default</GuardedButton>
    <Message>Saved</Message>
    <StatusBadge ok size="sm" />
    <IconButton variant="ghost" />
  </>
);
