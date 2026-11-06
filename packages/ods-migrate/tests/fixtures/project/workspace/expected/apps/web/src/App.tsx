import { BADGE_STATUS, KitBadge, type KitBadgeProps } from '@acme/kit';

export type AppBadgeProps = KitBadgeProps;

export const App = ({ children }: AppBadgeProps) => (
  <>
    <KitBadge status={ BADGE_STATUS.accent } isLoading={ false }>{ children }</KitBadge>
    <KitBadge status="neutral">b</KitBadge>
  </>
);
