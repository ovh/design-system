import { addons } from "@storybook/manager-api";

addons.register("custom-panel", (api) => {
  api.togglePanel(false);
});

addons.setConfig({
  enableShortcuts: false,
  showToolbar: true,
});
