import { renderToString } from 'react-dom/server';
import { shouldRenderContent } from '../../../../utils/mount-strategy';
import { TABS_MOUNT_STRATEGIES, TABS_MOUNT_STRATEGY, Tab, TabContent, TabList, Tabs, type TabsMountStrategy } from '../../src';

type Overrides = Partial<Record<'tab1' | 'tab2' | 'tab3', TabsMountStrategy>>;

function renderTabs(rootProps: Record<string, unknown>, overrides: Overrides = {}): string {
  return renderToString(
    <Tabs { ...rootProps }>
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>
      <TabContent mountStrategy={ overrides.tab1 } value="tab1">Content 1</TabContent>
      <TabContent mountStrategy={ overrides.tab2 } value="tab2">Content 2</TabContent>
      <TabContent mountStrategy={ overrides.tab3 } value="tab3">Content 3</TabContent>
    </Tabs>,
  );
}

function renderedContents(html: string): string[] {
  return html.match(/Content \d/g) || [];
}

function panelShells(html: string): string[] {
  return html.match(/<div[^>]*role="tabpanel"[^>]*>/g) || [];
}

function expectShells(html: string): void {
  const shells = panelShells(html);

  expect(shells).toHaveLength(3);
  shells.forEach((shell, index) => {
    expect(shell).toContain('id="tabs:');
    expect(shell).toContain(`content-tab${index + 1}"`);
    expect(shell).toContain('aria-labelledby="tabs:');
    expect(shell).toContain('data-ods="tab-content"');
  });
}

describe('Tabs mount strategy', () => {
  describe('shouldRenderContent', () => {
    it('should always render with keep', () => {
      expect(shouldRenderContent(TABS_MOUNT_STRATEGY.keep, false, false)).toBe(true);
      expect(shouldRenderContent(TABS_MOUNT_STRATEGY.keep, true, true)).toBe(true);
      expect(shouldRenderContent(TABS_MOUNT_STRATEGY.keep, false, true)).toBe(true);
    });

    it('should render once shown with lazy', () => {
      expect(shouldRenderContent(TABS_MOUNT_STRATEGY.lazy, false, false)).toBe(false);
      expect(shouldRenderContent(TABS_MOUNT_STRATEGY.lazy, true, true)).toBe(true);
      expect(shouldRenderContent(TABS_MOUNT_STRATEGY.lazy, false, true)).toBe(true);
    });

    it('should render only while shown with unmount', () => {
      expect(shouldRenderContent(TABS_MOUNT_STRATEGY.unmount, false, false)).toBe(false);
      expect(shouldRenderContent(TABS_MOUNT_STRATEGY.unmount, true, true)).toBe(true);
      expect(shouldRenderContent(TABS_MOUNT_STRATEGY.unmount, false, true)).toBe(false);
    });

    it('should expose the three strategies', () => {
      expect(TABS_MOUNT_STRATEGIES).toEqual(['keep', 'lazy', 'unmount']);
    });
  });

  describe('server rendering', () => {
    it('should render every panel content by default', () => {
      const html = renderTabs({ defaultValue: 'tab2' });

      expect(renderedContents(html)).toEqual(['Content 1', 'Content 2', 'Content 3']);
      expect(html).toBe(renderTabs({ defaultValue: 'tab2', mountStrategy: TABS_MOUNT_STRATEGY.keep }));
      expectShells(html);
    });

    it('should render only the selected panel content with lazy', () => {
      const html = renderTabs({ defaultValue: 'tab2', mountStrategy: TABS_MOUNT_STRATEGY.lazy });

      expect(renderedContents(html)).toEqual(['Content 2']);
      expectShells(html);
    });

    it('should render only the selected panel content with unmount', () => {
      const html = renderTabs({ defaultValue: 'tab2', mountStrategy: TABS_MOUNT_STRATEGY.unmount });

      expect(renderedContents(html)).toEqual(['Content 2']);
      expectShells(html);
    });

    it('should follow the controlled value', () => {
      const html = renderTabs({ mountStrategy: TABS_MOUNT_STRATEGY.unmount, onValueChange: () => {}, value: 'tab3' });

      expect(renderedContents(html)).toEqual(['Content 3']);
    });

    it('should let a panel override the root strategy', () => {
      expect(renderedContents(renderTabs(
        { defaultValue: 'tab1', mountStrategy: TABS_MOUNT_STRATEGY.lazy },
        { tab3: TABS_MOUNT_STRATEGY.keep },
      ))).toEqual(['Content 1', 'Content 3']);

      expect(renderedContents(renderTabs(
        { defaultValue: 'tab1' },
        { tab2: TABS_MOUNT_STRATEGY.unmount },
      ))).toEqual(['Content 1', 'Content 3']);
    });

    it('should not forward mountStrategy to the DOM', () => {
      const html = renderTabs({ defaultValue: 'tab1', mountStrategy: TABS_MOUNT_STRATEGY.lazy }, { tab2: TABS_MOUNT_STRATEGY.keep });

      expect(html.toLowerCase()).not.toContain('mountstrategy');
    });
  });
});
