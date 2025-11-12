import { Spinner, Text, TreeView, TreeViewNode, TreeViewNodes, SPINNER_SIZE, TEXT_PRESET } from '@ovhcloud/ods-react';
import React, { useMemo } from 'react';
import { TOKEN_CATEGORY, type Token } from '../../../constants/designTokens';
import { categorizeTokens } from '../../../helpers/designTokens';
import { ThemeGeneratorInput } from '../themeGeneratorInput/ThemeGeneratorInput';
import styles from './themeGeneratorTreeView.module.css';

interface TreeItem {
  id: string;
  name: string;
  value?: string;
  children?: TreeItem[];
}

interface ThemeGeneratorTreeViewProps {
  variables: Record<string, string>;
  onVariableChange: (name: string, value: string) => void;
}

const groupTokensByCategory = (tokens: Token[], categoryName: string): TreeItem[] => {
  const groups: Record<string, TreeItem> = {};

  tokens.forEach((token) => {
    const match = token.name.match(/--ods-theme-([^-]+)/);
    const groupName = match ? match[1] : 'other';

    if (!groups[groupName]) {
      groups[groupName] = {
        id: `group-${categoryName}-${groupName}`,
        name: groupName.charAt(0).toUpperCase() + groupName.slice(1).replace(/-/g, ' '),
        children: [],
      };
    }

    groups[groupName].children!.push({
      id: token.name,
      name: token.name,
      value: token.value,
    });
  });

  return Object.values(groups);
};

const ThemeGeneratorTreeView = ({ variables, onVariableChange }: ThemeGeneratorTreeViewProps) => {
  const categorized = useMemo(() => categorizeTokens(variables), [variables]);

  const tokenMap = useMemo(() => {
    const map = new Map<string, Token>();
    Object.values(categorized).flat().forEach((token) => {
      map.set(token.name, token);
    });
    return map;
  }, [categorized]);

  const items: TreeItem[] = useMemo(() => {
    const editableCategories = [
      { category: TOKEN_CATEGORY.color, label: 'Color' },
      { category: TOKEN_CATEGORY.spacing, label: 'Spacing' },
      { category: TOKEN_CATEGORY.outline, label: 'Outline' },
      { category: TOKEN_CATEGORY.overlay, label: 'Overlay' },
      { category: TOKEN_CATEGORY.fontFamily, label: 'Font Family' },
      { category: TOKEN_CATEGORY.formElement, label: 'Form Element' },
    ];

    const allItems: TreeItem[] = [];

    editableCategories.forEach(({ category, label }) => {
      const tokens = categorized[category];
      if (tokens.length > 0) {
        const categoryGroups = groupTokensByCategory(tokens, category);
        if (categoryGroups.length > 0) {
          allItems.push({
            id: `category-${category}`,
            name: label,
            children: categoryGroups.flatMap((group) => group.children || []),
          });
        }
      }
    });

    return allItems;
  }, [categorized]);

  if (Object.keys(variables).length === 0) {
    return (
      <div className={styles['theme-generator-tree-view__loading']}>
        <Spinner size={SPINNER_SIZE.xs} />
        <Text preset={TEXT_PRESET.caption}>Loading theme...</Text>
      </div>
    );
  }

  return (
    <TreeView className={styles['theme-generator-tree-view']} items={items}>
      <TreeViewNodes>
        {items.map((item) => (
          <TreeViewNode key={item.id} item={item}>
            {({ item, isBranch }: { item: TreeItem; isBranch: boolean }) => {
              if (isBranch || !item.value) {
                return (
                  <div className={styles['theme-generator-tree-view__item']}>
                    <Text className={styles['theme-generator-tree-view__item-name']}>{item.name}</Text>
                  </div>
                );
              }

              const token = tokenMap.get(item.name);

              if (!token) {
                return null;
              }

              return (
                <ThemeGeneratorInput
                  key={item.id}
                  token={token}
                  onChange={(value) => onVariableChange(item.name, value)}
                />
              );
            }}
          </TreeViewNode>
        ))}
      </TreeViewNodes>
    </TreeView>
  );
};

export { ThemeGeneratorTreeView };
