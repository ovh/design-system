import { Spinner, Text, TreeView, TreeViewNode, TreeViewNodes, SPINNER_SIZE, TEXT_PRESET } from '@ovhcloud/ods-react';
import React, { useMemo } from 'react';
import { categorizeCssVariables } from '../themeVariableUtils';
import { ThemeGeneratorColorPicker } from '../ThemeGeneratorColorPicker/ThemeGeneratorColorPicker';
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

const groupColorsByPrefix = (colors: Array<{ name: string; value: string }>): TreeItem[] => {
  const groups: Record<string, TreeItem> = {};

  colors.forEach((color) => {
    const match = color.name.match(/--ods-color-([^-]+)/);
    const groupName = match ? match[1] : 'other';

    if (!groups[groupName]) {
      groups[groupName] = {
        id: `group-${groupName}`,
        name: groupName.charAt(0).toUpperCase() + groupName.slice(1),
        children: [],
      };
    }

    groups[groupName].children!.push({
      id: color.name,
      name: color.name,
      value: color.value,
    });
  });

  return Object.values(groups);
};

const ThemeGeneratorTreeView = ({ variables, onVariableChange }: ThemeGeneratorTreeViewProps) => {
  const items: TreeItem[] = useMemo(() => {
    const categorized = categorizeCssVariables(variables);
    return groupColorsByPrefix(categorized.colors);
  }, [variables]);

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

              return (
                <ThemeGeneratorColorPicker
                  key={item.id}
                  label={item.name}
                  value={item.value}
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
