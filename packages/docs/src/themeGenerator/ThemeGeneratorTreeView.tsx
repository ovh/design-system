import { useMemo } from 'react';
import { SPINNER_SIZE, Spinner, TEXT_PRESET, Text, TreeView, TreeViewNode, TreeViewNodes } from '../ods';
import { TOKEN_CATEGORY, type Token } from '../doc/ports/constants/designTokens';
import { categorizeTokens } from '../doc/ports/helpers/designTokens';
import { ThemeGeneratorInput } from './ThemeGeneratorInput';
import styles from './themeGeneratorTreeView.module.css';

/* Editable token tree: one branch per category, one input per token. */

interface TreeItem {
  children?: TreeItem[],
  id: string,
  name: string,
  value?: string,
}

interface ThemeGeneratorTreeViewProp {
  onVariableChange: (name: string, value: string) => void,
  variables: Record<string, string>,
}

const EDITABLE_CATEGORIES = [
  { category: TOKEN_CATEGORY.color, label: 'Color' },
  { category: TOKEN_CATEGORY.spacing, label: 'Spacing' },
  { category: TOKEN_CATEGORY.outline, label: 'Outline' },
  { category: TOKEN_CATEGORY.overlay, label: 'Overlay' },
  { category: TOKEN_CATEGORY.fontFamily, label: 'Font Family' },
  { category: TOKEN_CATEGORY.formElement, label: 'Form Element' },
];

const ThemeGeneratorTreeView = ({ onVariableChange, variables }: ThemeGeneratorTreeViewProp) => {
  const categorized = useMemo(() => categorizeTokens(variables), [variables]);

  const tokenMap = useMemo(() => {
    const map = new Map<string, Token>();
    Object.values(categorized).flat().forEach((token) => map.set(token.name, token));
    return map;
  }, [categorized]);

  const items: TreeItem[] = useMemo(() => EDITABLE_CATEGORIES
    .filter(({ category }) => categorized[category].length > 0)
    .map(({ category, label }) => ({
      children: categorized[category].map((token) => ({ id: token.name, name: token.name, value: token.value })),
      id: `category-${category}`,
      name: label,
    })), [categorized]);

  if (Object.keys(variables).length === 0) {
    return (
      <div className={ styles['theme-generator-tree-view__loading'] }>
        <Spinner size={ SPINNER_SIZE.xs } />
        <Text preset={ TEXT_PRESET.caption }>Loading theme...</Text>
      </div>
    );
  }

  return (
    <TreeView
      className={ styles['theme-generator-tree-view'] }
      items={ items }>
      <TreeViewNodes>
        { items.map((item) => (
          <TreeViewNode item={ item } key={ item.id }>
            { ({ isBranch, item }: { isBranch: boolean, item: TreeItem }) => {
              if (isBranch || !item.value) {
                return (
                  <div className={ styles['theme-generator-tree-view__item'] }>
                    <Text className={ styles['theme-generator-tree-view__item-name'] }>{ item.name }</Text>
                  </div>
                );
              }

              const token = tokenMap.get(item.name);
              if (!token) {
                return null;
              }
              return (
                <ThemeGeneratorInput
                  key={ item.id }
                  onChange={ (value) => onVariableChange(item.name, value) }
                  token={ token } />
              );
            } }
          </TreeViewNode>
        )) }
      </TreeViewNodes>
    </TreeView>
  );
};

export { ThemeGeneratorTreeView };
