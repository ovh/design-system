import { Tab, TabContent, TabList, Tabs } from '.';
import style from './dev.module.css';

export default {
  component: Tabs,
  title: 'Tabs dev',
};

export const Default = () => (
  <Tabs defaultValue="tab1">
    <TabList>
      <Tab value="tab1">Tab 1</Tab>
      <Tab value="tab2">Tab 2</Tab>
      <Tab value="tab3">Tab 3</Tab>
    </TabList>
    <TabContent value="tab1">
      <p>Tab 1 Content</p>
    </TabContent>
    <TabContent value="tab2">
      <p>Tab 2 Content</p>
    </TabContent>
    <TabContent value="tab3">
      <p>Tab 3 Content</p>
    </TabContent>
  </Tabs>
);

export const Disabled = () => (
  <Tabs defaultValue="tab1">
    <TabList>
      <Tab value="tab1">Tab 1</Tab>
      <Tab value="tab2" disabled>Tab 2</Tab>
      <Tab value="tab3" disabled>Tab 3</Tab>
    </TabList>
    <TabContent value="tab1">
      <p>Tab 1 Content</p>
    </TabContent>
    <TabContent value="tab2">
      <p>Tab 2 Content</p>
    </TabContent>
    <TabContent value="tab3">
      <p>Tab 3 Content</p>
    </TabContent>
  </Tabs>
);

export const OverflowX = () => (
  <div style={ { width: '300px' } }>
    <Tabs defaultValue="tab1">
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
        <Tab value="tab4">Tab 4</Tab>
        <Tab value="tab5">Tab 5</Tab>
        <Tab value="tab6">Tab 6</Tab>
      </TabList>
      <TabContent value="tab1">
        <p>Tab 1 content</p>
      </TabContent>
      <TabContent value="tab2">
        <p>Tab 2 content</p>
      </TabContent>
      <TabContent value="tab3">
        <p>Tab 3 content</p>
      </TabContent>
      <TabContent value="tab4">
        <p>Tab 4 content</p>
      </TabContent>
      <TabContent value="tab5">
        <p>Tab 5 content</p>
      </TabContent>
      <TabContent value="tab6">
        <p>Tab 6 content</p>
      </TabContent>
    </Tabs>
  </div>
);

export const CustomStyle = () => (
  <Tabs defaultValue="tab1" className={ style[ 'custom-tabs' ] }>
    <TabList className={ style[ 'custom-tabs-tablist' ] }>
      <Tab value="tab1" className={ style[ 'custom-tabs-tablist-tab' ] }>Tab 1</Tab>
      <Tab value="tab2" className={ style[ 'custom-tabs-tablist-tab' ] }>Tab 2</Tab>
      <Tab value="tab3" className={ style[ 'custom-tabs-tablist-tab' ] }>Tab 3</Tab>
    </TabList>
    <TabContent className={ style[ 'custom-tabs-content' ] } value="tab1">
      <p>Tab 1 Content</p>
    </TabContent>
    <TabContent value="tab2">
      <p>Tab 2 Content</p>
    </TabContent>
    <TabContent value="tab3">
      <p>Tab 3 Content</p>
    </TabContent>
  </Tabs>
);

export const WithArrows = () => (
  <>
    <p>No container size</p>
    <Tabs defaultValue="tab11">
      <TabList withArrows>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
        <Tab value="tab4">Tab 4</Tab>
        <Tab value="tab5">Tab 5</Tab>
        <Tab value="tab6">Tab 6</Tab>
        <Tab value="tab7">Tab 7</Tab>
        <Tab value="tab8">Tab 8</Tab>
        <Tab value="tab9">Tab 9</Tab>
        <Tab value="tab10">Tab 10</Tab>
        <Tab value="tab11">Tab 11</Tab>
        <Tab value="tab12">Tab 12</Tab>
        <Tab value="tab13">Tab 13</Tab>
        <Tab value="tab14">Tab 14</Tab>
        <Tab value="tab15">Tab 15</Tab>
      </TabList>
    </Tabs>

    <p>In limited container</p>
    <Tabs
      defaultValue="tab1"
      style={{ width: '400px' }}>
      <TabList withArrows>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
        <Tab value="tab4">Tab 4</Tab>
        <Tab value="tab5">Tab 5</Tab>
        <Tab value="tab6">Tab 6</Tab>
        <Tab value="tab7">Tab 7</Tab>
        <Tab value="tab8">Tab 8</Tab>
        <Tab value="tab9">Tab 9</Tab>
        <Tab value="tab10">Tab 10</Tab>
        <Tab value="tab11">Tab 11</Tab>
        <Tab value="tab12">Tab 12</Tab>
        <Tab value="tab13">Tab 13</Tab>
        <Tab value="tab14">Tab 14</Tab>
        <Tab value="tab15">Tab 15</Tab>
      </TabList>
    </Tabs>

    <p>No overflow</p>
    <Tabs defaultValue="tab1">
      <TabList withArrows>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>
    </Tabs>

    <p>Long tab text</p>
    <Tabs defaultValue="tab1">
      <TabList withArrows>
        <Tab value="tab1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Tab>
      </TabList>
    </Tabs>
  </>

);
