import {
  Button,
  BUTTON_VARIANT,
  Card,
  CARD_COLOR,
  Code,
  Icon,
  ICON_NAME,
  Select,
  SelectContent,
  SelectControl,
  type SelectValueChangeDetail,
  Tab,
  TabContent,
  TabList,
  Tabs,
  TABS_SIZE,
  TABS_VARIANT,
} from '@ovhcloud/ods-react';
import * as odsRecipePreview from '@ovhcloud/ods-recipes';
import { type ComponentMetadataWithSources, type ComponentRecipe } from '@ovhcloud/ods-recipes';
import langCss from '@shikijs/langs/css';
import langScss from '@shikijs/langs/scss';
import langTsx from '@shikijs/langs/tsx';
import theme from '@shikijs/themes/nord';
import { Markdown } from '@storybook/blocks';
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ResetTheme } from '../resetTheme/ResetTheme';
import styles from './recipeCard.module.css';

type Recipe = ComponentMetadataWithSources;

type StyleMode = 'css-modules' | 'tailwind';

type ShikiLang = typeof langCss | typeof langScss | typeof langTsx;

type CodeTab = {
  code: string,
  filename: string,
  isMarkdown?: boolean,
  lang: ShikiLang,
}

type RecipeCardProps = {
  isOpen: boolean,
  onToggle: (recipeName: string) => void,
  recipe: Recipe,
}

const STYLE_MODE_ITEMS = [
  { label: 'CSS Modules', value: 'css-modules' },
  { label: 'Tailwind', value: 'tailwind' },
] as const;

const EXT_TO_LANG: Record<string, ShikiLang> = {
  css: langCss,
  scss: langScss,
  tsx: langTsx,
};

function getFileExtension(filename: string): string {
  const parts = filename.split('.');
  return parts.length > 1 ? parts[parts.length - 1] : '';
}

function getShikiLang(filename: string): ShikiLang {
  const ext = getFileExtension(filename);
  return EXT_TO_LANG[ext] || langTsx;
}

const COL_WIDTH = 280;
const GAP = 16;

function getColSpan(contentWidth: number): number {
  if (contentWidth > 2 * COL_WIDTH + GAP) {
    return 3;
  }
  if (contentWidth > COL_WIDTH) {
    return 2;
  }
  return 1;
}

function measurePreviewWidth(previewEl: HTMLElement): number {
  let maxWidth = 0;

  previewEl.querySelectorAll<HTMLElement>('*').forEach((el) => {
    const { width, minWidth } = el.style;

    if (width?.endsWith('px')) {
      maxWidth = Math.max(maxWidth, parseFloat(width));
    }
    if (minWidth?.endsWith('px')) {
      maxWidth = Math.max(maxWidth, parseFloat(minWidth));
    }
  });

  return maxWidth || previewEl.scrollWidth;
}

const RecipeCard = memo(({ isOpen, onToggle, recipe }: RecipeCardProps) => {
  const [mode, setMode] = useState<StyleMode>('css-modules');
  const [colSpan, setColSpan] = useState(1);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleToggle = useCallback(() => {
    onToggle(recipe.name);
  }, [onToggle, recipe.name]);

  const component = useMemo(
    () => (odsRecipePreview as Record<string, ComponentRecipe>)[recipe.reactTag],
    [recipe.reactTag]
  );

  const Preview = useMemo(
    () => component?.CssModule || null,
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

    const readme = source['README.md'];
    const codeFiles: CodeTab[] = Object.entries(modeSource).map(([filename, code]) => ({
      code,
      filename,
      lang: getShikiLang(filename),
    }));

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

  const handleModeChange = useCallback((detail: SelectValueChangeDetail) => {
    setMode(detail.value[0] as StyleMode);
  }, []);

  useEffect(() => {
    if (isOpen || !previewRef.current || !Preview) {
      return;
    }

    let rafId: number;
    const previewEl = previewRef.current;

    const measureContent = (): void => {
      if (!previewEl) {
        return;
      }
      const width = measurePreviewWidth(previewEl);
      setColSpan(getColSpan(width));
    };

    const observer = new ResizeObserver(measureContent);
    observer.observe(previewEl);
    rafId = requestAnimationFrame(measureContent);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [Preview, isOpen]);

  const gridColumnStyle = useMemo(
    () => ({ gridColumn: isOpen ? '1 / -1' : `span ${colSpan}` }),
    [isOpen, colSpan]
  );

  return (
    <div className={ styles['recipe-card__wrapper'] } style={ gridColumnStyle }>
      <Card className={ styles['recipe-card'] } color={ CARD_COLOR.neutral }>
        <div className={ styles['recipe-card__header'] }>
          <h3 className={ styles['recipe-card__name'] }>{ recipe.name }</h3>
          <Button
            aria-expanded={ isOpen }
            aria-label={ isOpen ? `Collapse ${recipe.name}` : `Expand ${recipe.name}` }
            onClick={ handleToggle }
            variant={ BUTTON_VARIANT.ghost }
          >
            <Icon name={ isOpen ? ICON_NAME.chevronDown : ICON_NAME.chevronRight } />
          </Button>
        </div>

        <p className={ styles['recipe-card__description'] }>{ recipe.description }</p>

        <div className={ styles['recipe-card__canvas'] }>
          <div className={ styles['recipe-card__preview'] } ref={ previewRef }>
            { Preview ? (
              <ResetTheme><Preview /></ResetTheme>
            ) : (
              <div className={ styles['recipe-card__placeholder'] }>{ recipe.name }</div>
            ) }
          </div>
        </div>

        { isOpen && (
          <div className={ styles['recipe-card__code'] }>
            { tabs.length > 0 ? (
              <Tabs defaultValue={ tabs[0]?.filename } key={ mode } size={ TABS_SIZE.xs } variant={ TABS_VARIANT.switch }>
                <ResetTheme>
                  <div className={ styles['recipe-card__code-header'] }>
                    <TabList>
                      { tabs.map((tab) => (
                        <Tab key={ tab.filename } value={ tab.filename }>
                          { tab.filename }
                        </Tab>
                      )) }
                    </TabList>
                    <Select
                      items={ STYLE_MODE_ITEMS }
                      onValueChange={ handleModeChange }
                      value={ [mode] }
                    >
                      <SelectControl />
                      <SelectContent />
                    </Select>
                  </div>
                </ResetTheme>
                { tabs.map((tab) => (
                  <TabContent key={ tab.filename } value={ tab.filename }>
                    { tab.isMarkdown ? (
                      <div className={ styles['recipe-card__markdown'] }>
                        <Markdown>
                          { tab.code }
                        </Markdown>
                      </div>
                    ) : (
                      <Code
                        canCopy
                        className={ styles['recipe-card__code-block'] }
                        highlighter={{ language: tab.lang, theme }}
                      >
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

export { RecipeCard };
export type { Recipe, RecipeCardProps };
