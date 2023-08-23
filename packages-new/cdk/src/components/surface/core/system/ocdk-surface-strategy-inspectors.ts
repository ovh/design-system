import { OcdkSurfaceStrategyInspectorComfort } from './ocdk-surface-strategy-inspector-comfort';
import { OcdkSurfaceStrategyInspectorLimit } from './ocdk-surface-strategy-inspector-limit';
import { OcdkSurfaceStrategyInspectorFulfilled } from './ocdk-surface-strategy-inspector-fulfilled';

export type OcdkSurfaceStrategyInspectors<StrategyConfig> =
  OcdkSurfaceStrategyInspectorComfort<StrategyConfig>
  | OcdkSurfaceStrategyInspectorLimit<StrategyConfig>
  | OcdkSurfaceStrategyInspectorFulfilled<StrategyConfig>
