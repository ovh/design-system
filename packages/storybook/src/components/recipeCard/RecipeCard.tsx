import {
  BUTTON_VARIANT,
  Button,
  CARD_COLOR,
  Card,
  Code,
  ICON_NAME,
  Icon,
  Select,
  SelectContent,
  SelectControl,
  type SelectItem,
  type SelectValueChangeDetail,
  TABS_SIZE,
  TABS_VARIANT,
  Tab,
  TabContent,
  TabList,
  Tabs,
} from '@ovhcloud/ods-react';
import * as RECIPES from '@ovhcloud/ods-recipes';
import { type ComponentMetadataWithSources, type ComponentRecipe, SOURCE, type Source } from '@ovhcloud/ods-recipes';
import langCss from '@shikijs/langs/css';
import langScss from '@shikijs/langs/scss';
import langTsx from '@shikijs/langs/tsx';
import theme from '@shikijs/themes/nord';
import { Markdown } from '@storybook/blocks';
import classNames from 'classnames';
import React, { memo, useMemo, useState } from 'react';
import { ResetTheme } from '../resetTheme/ResetTheme';
import styles from './recipeCard.module.css';

type Recipe = ComponentMetadataWithSources;

type ShikiLang = typeof langCss | typeof langScss | typeof langTsx;

type CodeTab = {
  code: string,
  filename: string,
  isMarkdown?: boolean,
  lang: ShikiLang,
}

type RecipeCardProp = {
  isOpen: boolean,
  onToggle: (recipeName: string) => void,
  recipe: Recipe,
}

const STYLE_MODE_ITEMS: SelectItem<Record<string, Source>>[] = [
  { label: 'CSS Modules', value: SOURCE.cssModules },
  { label: 'Tailwind', value: SOURCE.tailwind },
];

const EXT_TO_LANG: Record<string, ShikiLang> = {
  css: langCss,
  scss: langScss,
  tsx: langTsx,
};

const TAB_ORDER_EXTS = ['tsx', 'scss', 'css', 'md'];

function getFileExtension(filename: string): string {
  const parts = filename.split('.');
  return parts.length > 1 ? parts[parts.length - 1] : '';
}

function getShikiLang(filename: string): ShikiLang {
  const ext = getFileExtension(filename);
  return EXT_TO_LANG[ext] || langTsx;
}

const RecipeCard = memo(({ isOpen, onToggle, recipe }: RecipeCardProp) => {
  const [mode, setMode] = useState(SOURCE.cssModules);

  const component = useMemo(
    () => (RECIPES as unknown as Record<string, ComponentRecipe>)[recipe.reactTag],
    [recipe.reactTag]
  );

  const styleModeItems = useMemo(() => {
    return STYLE_MODE_ITEMS.filter((mode) => {
      // @ts-ignore
      return !!recipe.source[mode.value];
    });
  }, [recipe]);

  const Preview = useMemo(
    () => component.CssModule || null,
    [component]
  );

  const tabs = useMemo((): CodeTab[] => {
    const { source } = recipe;

    if (!source) {
      return [];
    }

    const modeSource = source[mode];

    if (!modeSource) {
      return [];
    }

    const readme = source[SOURCE.readMe];
    const codeFiles: CodeTab[] = Object.entries(modeSource)
      .map(([filename, code]) => ({
        code,
        ext: getFileExtension(filename),
        filename,
        lang: getShikiLang(filename),
      }))
      .sort((a, b) =>
        TAB_ORDER_EXTS.indexOf(a.ext) - TAB_ORDER_EXTS.indexOf(b.ext)
      );

    if (readme) {
      codeFiles.push({
        code: readme,
        filename: 'README',
        isMarkdown: true,
        lang: langTsx,
      });
    }

    return codeFiles;
  }, [mode, recipe]);

  function handleModeChange(detail: SelectValueChangeDetail) {
    setMode(detail.value[0] as SOURCE);
  }

  function handleToggle() {
    onToggle(recipe.name);
  }

  return (
    <div className={ classNames(
      styles['recipe-card'],
      { [styles['recipe-card--open']]: isOpen },
    )}>
      <Card
        className={ styles['recipe-card__inner'] }
        color={ CARD_COLOR.neutral }>
        <div className={ styles['recipe-card__inner__header'] }>
          <h3 className={ styles['recipe-card__inner__header__title'] }>
            { recipe.name }
          </h3>

          <Button
            aria-expanded={ isOpen }
            aria-label={ isOpen ? `Collapse ${recipe.name}` : `Expand ${recipe.name}` }
            data-storybook="button-ghost"
            onClick={ handleToggle }
            variant={ BUTTON_VARIANT.ghost }>
            <Icon name={ isOpen ? ICON_NAME.chevronDown : ICON_NAME.chevronRight } />
          </Button>
        </div>

        <div className={ styles['recipe-card__inner__canvas'] }>
          <ResetTheme>
            <div className={ styles['recipe-card__inner__canvas__preview'] }>
              <Preview />
            </div>
          </ResetTheme>
        </div>

        { isOpen && (
          <div className={ styles['recipe-card__inner__code'] }>
            { tabs.length > 0 ? (
              <Tabs
                defaultValue={ tabs[0]?.filename }
                size={ TABS_SIZE.xs }
                variant={ TABS_VARIANT.switch }>
                <ResetTheme style={{ backgroundColor: 'transparent' }}>
                  <div className={ styles['recipe-card__inner__code__toolbar'] }>
                    <TabList>
                      { tabs.map((tab) => (
                        <Tab
                          key={ tab.filename }
                          value={ tab.filename }>
                          { tab.filename }
                        </Tab>
                      )) }
                    </TabList>

                    <Select
                      items={ styleModeItems }
                      onValueChange={ handleModeChange }
                      value={ [mode] }>
                      <SelectControl />

                      <SelectContent />
                    </Select>
                  </div>
                </ResetTheme>

                { tabs.map((tab) => (
                  <TabContent
                    className={ styles['recipe-card__inner__code__panel'] }
                    key={ tab.filename }
                    value={ tab.filename }>
                    { tab.isMarkdown ? (
                      <div className={ styles['recipe-card__inner__code__panel__markdown'] }>
                        <Markdown>
                          { tab.code }
                        </Markdown>
                      </div>
                    ) : (
                      <Code
                        canCopy
                        className={ styles['recipe-card__inner__code__panel__editor'] }
                        highlighter={{ language: tab.lang, theme }}>
                        { tab.code }
                      </Code>
                    ) }
                  </TabContent>
                )) }
              </Tabs>

            ) : (
              <p>No source code available for this mode.</p>
            ) }
          </div>
        ) }
      </Card>
    </div>
  );
});

export {
  type Recipe,
  RecipeCard,
  type RecipeCardProp,
};
