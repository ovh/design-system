enum MOUNT_STRATEGY {
  /** Always rendered. Inactive content stays in the DOM, hidden. */
  keep = 'keep',
  /** Not rendered until shown for the first time, then kept like `keep`. */
  lazy = 'lazy',
  /** Rendered only while shown. Its state (inputs, scroll position, ...) is lost when hidden. */
  unmount = 'unmount',
}

type MountStrategy = `${MOUNT_STRATEGY}`;

const MOUNT_STRATEGIES = Object.freeze(Object.values(MOUNT_STRATEGY));

/**
 * Whether content governed by `strategy` must be rendered.
 * @param strategy - The mount strategy to apply.
 * @param isShown - Whether the content is currently shown.
 * @param wasShown - Whether the content has been shown at least once.
 */
function shouldRenderContent(strategy: MountStrategy, isShown: boolean, wasShown: boolean): boolean {
  switch (strategy) {
    case MOUNT_STRATEGY.lazy:
      return isShown || wasShown;
    case MOUNT_STRATEGY.unmount:
      return isShown;
    case MOUNT_STRATEGY.keep:
    default:
      return true;
  }
}

export {
  MOUNT_STRATEGY,
  MOUNT_STRATEGIES,
  type MountStrategy,
  shouldRenderContent,
};
