import * as RECIPES from '@ovhcloud/ods-recipes';
import { type ComponentMetadataWithSources, type ComponentRecipe, SOURCE, type Source } from '@ovhcloud/ods-recipes';
import langCss from '@shikijs/langs/css';
import langScss from '@shikijs/langs/scss';
import langTsx from '@shikijs/langs/tsx';
import theme from '@shikijs/themes/nord';
import Markdown from 'markdown-to-jsx';
import { type ComponentType, memo, useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { CARD_STATUS, Card } from '../../../../../ods-react/src/components/card/src';
import { Code } from '../../../../../ods-react/src/components/code/src';
import { Select, SelectContent, SelectControl, type SelectItem, type SelectValueChangeDetail } from '../../../../../ods-react/src/components/select/src';
import { TABS_SIZE, TABS_VARIANT, Tab, TabContent, TabList, Tabs } from '../../../../../ods-react/src/components/tabs/src';
import { Link } from '../../../ods';
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
// Unknown extensions rank after every known one.
const extRank = (ext: string): number => {
  const index = TAB_ORDER_EXTS.indexOf(ext);
  return index === -1 ? TAB_ORDER_EXTS.length : index;
};

/* The recipe rendered live, on the forced light theme. */
const RecipePreview = ({ recipe }: { recipe: Recipe }) => {
  const Preview = useMemo(
    () => (RECIPES as unknown as Record<string, ComponentRecipe>)[recipe.reactTag]?.CssModule as ComponentType | null,
    [recipe.reactTag],
  );

  return (
    <div className={ styles['recipe-card__inner__canvas'] }>
      <ResetTheme>
        <div className={ styles['recipe-card__inner__canvas__preview'] }>
          { Preview && <Preview /> }
        </div>
      </ResetTheme>
    </div>
  );
};

/* The recipe's source: one tab per file, and a styling-mode switch when several exist. The README
   is a tab unless the caller shows it elsewhere (withReadme={ false }). */
const RecipeSource = ({ recipe, withReadme = true }: { recipe: Recipe, withReadme?: boolean }) => {
  const [mode, setMode] = useState<Source>(SOURCE.cssModules);

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
      .sort((a, b) => {
        // index.tsx is the entry point: always the first (and default) tab.
        if (a.filename === 'index.tsx') {
          return -1;
        }
        if (b.filename === 'index.tsx') {
          return 1;
        }
        return (extRank(a.ext ?? '') - extRank(b.ext ?? '')) || a.filename.localeCompare(b.filename);
      });
    const readme = (recipe.source as Record<string, string>)[SOURCE.readMe];
    if (withReadme && readme) {
      files.push({ code: readme, filename: 'README', isMarkdown: true, lang: langTsx });
    }
    return files;
  }, [mode, recipe, withReadme]);

  return (
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
  );
};

/* Gallery card: the recipe's name links to its page, with the live preview below. The code lives on
   the page itself. */
const RecipeCard = memo(({ path, recipe }: { path: string, recipe: Recipe }) => (
  <div className={ styles['recipe-card'] }>
    <Card className={ styles['recipe-card__inner'] } status={ CARD_STATUS.neutral }>
      <h2 className={ styles['recipe-card__inner__header'] }>
        <Link as={ RouterLink } to={ path }>{ recipe.name }</Link>
      </h2>

      <RecipePreview recipe={ recipe } />
    </Card>
  </div>
));

RecipeCard.displayName = 'RecipeCard';

export { RecipeCard, RecipePreview, RecipeSource, type Recipe };
