import { renderToString } from 'react-dom/server';
import { LOCALE } from '../../../../utils/locales';
import { TABS_I18N, Tab, TabList, type TabListProp, Tabs } from '../../src';

function renderTabList(rootProps: Record<string, unknown>, listProps: Partial<TabListProp> = {}): string {
  return renderToString(
    <Tabs defaultValue="tab1" { ...rootProps }>
      <TabList { ...listProps }>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
      </TabList>
    </Tabs>,
  );
}

function buttonLabels(html: string): string[] {
  return [...html.matchAll(/<button[^>]*aria-label="([^"]*)"/g)].map((match) => match[1]);
}

describe('Tabs scroll arrows', () => {
  it('should render no arrow without withArrows', () => {
    expect(buttonLabels(renderTabList({}, { locale: LOCALE.en }))).toEqual([]);
  });

  it('should name both arrows in the given locale', () => {
    expect(buttonLabels(renderTabList({ withArrows: true }, { locale: LOCALE.en }))).toEqual(['Scroll tabs left', 'Scroll tabs right']);
    expect(buttonLabels(renderTabList({ withArrows: true }, { locale: LOCALE.fr }))).toEqual(['Faire défiler les onglets vers la gauche', 'Faire défiler les onglets vers la droite']);
  });

  it('should use the given translations', () => {
    const html = renderTabList({ withArrows: true }, {
      i18n: { [TABS_I18N.scrollLeftButton]: 'Previous', [TABS_I18N.scrollRightButton]: 'Next' },
      locale: LOCALE.en,
    });

    expect(buttonLabels(html)).toEqual(['Previous', 'Next']);
  });
});
