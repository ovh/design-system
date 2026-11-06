import { BADGE_COLOR, KitBadge, type KitBadgeProps } from '@acme/kit';

export type AppBadgeProps = KitBadgeProps;

export const App = ({ children }: AppBadgeProps) => (
  <>
    <KitBadge color={ BADGE_COLOR.primary } isLoading={ false }>{ children }</KitBadge>
    <KitBadge color="neutral">b</KitBadge>
  </>
);
