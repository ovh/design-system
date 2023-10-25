import { OcdkSurfaceStrategyInspectorComfort } from './ocdk-surface-strategy-inspector-comfort';
import { OcdkSurfaceStrategyInspectorFulfilled } from './ocdk-surface-strategy-inspector-fulfilled';
import { OcdkSurfaceStrategyInspectorLimit } from './ocdk-surface-strategy-inspector-limit';

export type OcdkSurfaceStrategyInspectors<StrategyConfig> =
  OcdkSurfaceStrategyInspectorComfort<StrategyConfig>
  | OcdkSurfaceStrategyInspectorLimit<StrategyConfig>
  | OcdkSurfaceStrategyInspectorFulfilled<StrategyConfig>
