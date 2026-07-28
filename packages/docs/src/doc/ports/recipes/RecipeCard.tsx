import * as RECIPES from '@ovhcloud/ods-recipes';
import { type ComponentMetadataWithSources, type ComponentRecipe, SOURCE, type Source } from '@ovhcloud/ods-recipes';
import langCss from '@shikijs/langs/css';
import langScss from '@shikijs/langs/scss';
import langTsx from '@shikijs/langs/tsx';
import theme from '@shikijs/themes/nord';
import Markdown from 'markdown-to-jsx';
import { type ComponentType, memo, useMemo, useState } from 'react';
import { BUTTON_VARIANT, Button } from '../../../../../ods-react/src/components/button/src';
import { CARD_COLOR, Card } from '../../../../../ods-react/src/components/card/src';
import { Code } from '../../../../../ods-react/src/components/code/src';
import { ICON_NAME, Icon } from '../../../../../ods-react/src/components/icon/src';
import { Select, SelectContent, SelectControl, type SelectItem, type SelectValueChangeDetail } from '../../../../../ods-react/src/components/select/src';
import { TABS_SIZE, TABS_VARIANT, Tab, TabContent, TabList, Tabs } from '../../../../../ods-react/src/components/tabs/src';
import { cx } from '../cx';
import { ResetTheme } from './ResetTheme';
import styles from './recipeCard.module.css';

type Recipe = ComponentMetadataWithSources;
type ShikiLang = typeof langCss | typeof langScss | typeof langTsx;
interface CodeTab { code: string; ext?: string; filename: string; isMarkdown?: boolean; lang: ShikiLang }

const STYLE_MODE_ITEMS: SelectItem<Record<string, Source>>[] = [
  { label: 'CSS Modules', value: SOURCE.cssModules },
  { label: 'Tailwind', value: SOURCE.tailwind },
];
const EXT_TO_LANG: Record<string, ShikiLang> = { css: langCss, scss: langScss, tsx: langTsx };
const TAB_ORDER_EXTS = ['tsx', 'scss', 'css', 'md'];

const extOf = (filename: string): string => (filename.includes('.') ? filename.split('.').pop() ?? '' : '');
const langOf = (filename: string): ShikiLang => EXT_TO_LANG[extOf(filename)] ?? langTsx;

const RecipeCard = memo(({ isOpen, onToggle, recipe }: { isOpen: boolean, onToggle: (name: string) => void, recipe: Recipe }) => {
  const [mode, setMode] = useState<Source>(SOURCE.cssModules);

  const Preview = useMemo(
    () => (RECIPES as unknown as Record<string, ComponentRecipe>)[recipe.reactTag]?.CssModule as ComponentType | null,
    [recipe.reactTag],
  );
  const styleModeItems = useMemo(
    () => STYLE_MODE_ITEMS.filter((item) => !!(recipe.source as Record<string, unknown>)[item.value]),
    [recipe],
  );
  const tabs = useMemo((): CodeTab[] => {
    const modeSource = recipe.source?.[mode];
    if (!modeSource) {
      return [];
    }
    const files: CodeTab[] = Object.entries(modeSource as Record<string, string>)
      .map(([filename, code]) => ({ code, ext: extOf(filename), filename, lang: langOf(filename) }))
      .sort((a, b) => ([a.filename, b.filename].includes('index.tsx') ? 1 : TAB_ORDER_EXTS.indexOf(a.ext ?? '') - TAB_ORDER_EXTS.indexOf(b.ext ?? '')));
    const readme = (recipe.source as Record<string, string>)[SOURCE.readMe];
    if (readme) {
      files.push({ code: readme, filename: 'README', isMarkdown: true, lang: langTsx });
    }
    return files;
  }, [mode, recipe]);

  return (
    <div className={ cx(styles['recipe-card'], isOpen && styles['recipe-card--open']) }>
      <Card className={ styles['recipe-card__inner'] } color={ CARD_COLOR.neutral }>
        <div className={ styles['recipe-card__inner__header'] }>
          <span className={ styles['recipe-card__inner__header__title'] }>{ recipe.name }</span>
          <Button
            aria-expanded={ isOpen }
            aria-label={ isOpen ? `Collapse ${recipe.name}` : `Expand ${recipe.name}` }
            onClick={ () => onToggle(recipe.name) }
            variant={ BUTTON_VARIANT.ghost }>
            <Icon name={ isOpen ? ICON_NAME.chevronDown : ICON_NAME.chevronRight } />
          </Button>
        </div>

        <div className={ styles['recipe-card__inner__canvas'] }>
          <ResetTheme>
            <div className={ styles['recipe-card__inner__canvas__preview'] }>
              { Preview && <Preview /> }
            </div>
          </ResetTheme>
        </div>

        { isOpen && (
          <div className={ styles['recipe-card__inner__code'] }>
            { tabs.length > 0 ? (
              <Tabs defaultValue={ tabs[0]?.filename } size={ TABS_SIZE.xs } variant={ TABS_VARIANT.switch }>
                <ResetTheme style={{ backgroundColor: 'transparent' }}>
                  <div className={ styles['recipe-card__inner__code__toolbar'] }>
                    <TabList>
                      { tabs.map((tab) => <Tab key={ tab.filename } value={ tab.filename }>{ tab.filename }</Tab>) }
                    </TabList>
                    { styleModeItems.length > 1 && (
                      <Select items={ styleModeItems } onValueChange={ (detail: SelectValueChangeDetail) => setMode(detail.value[0] as Source) } value={ [mode] }>
                        <SelectControl />
                        <SelectContent />
                      </Select>
                    ) }
                  </div>
                </ResetTheme>

                { tabs.map((tab) => (
                  <TabContent className={ styles['recipe-card__inner__code__panel'] } key={ tab.filename } value={ tab.filename }>
                    { tab.isMarkdown ? (
                      <div className={ styles['recipe-card__inner__code__panel__markdown'] }><Markdown>{ tab.code }</Markdown></div>
                    ) : (
                      <Code canCopy className={ styles['recipe-card__inner__code__panel__editor'] } highlighter={{ language: tab.lang, theme }}>{ tab.code }</Code>
                    ) }
                  </TabContent>
                )) }
              </Tabs>
            ) : <p>No source code available for this mode.</p> }
          </div>
        ) }
      </Card>
    </div>
  );
});

RecipeCard.displayName = 'RecipeCard';

export { RecipeCard, type Recipe };
