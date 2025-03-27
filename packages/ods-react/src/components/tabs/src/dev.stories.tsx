import { OdsTab, OdsTabContent, OdsTabList, OdsTabs } from '.';

export default {
  component: OdsTabs,
  title: 'OdsTabs dev',
};

export const Default = () => (
  <OdsTabs defaultValue="tab-1">
    <OdsTabList>
      <OdsTab value="tab-1">Tab 1</OdsTab>
      <OdsTab value="tab-2">Tab 2</OdsTab>
      <OdsTab value="tab-3">Tab 3</OdsTab>
    </OdsTabList>

    <OdsTabContent value="tab-1">
      Content of Tab 1
    </OdsTabContent>

    <OdsTabContent value="tab-2">
      Content of Tab 2
    </OdsTabContent>

    <OdsTabContent value="tab-3">
      Content of Tab 3
    </OdsTabContent>
  </OdsTabs>
);
