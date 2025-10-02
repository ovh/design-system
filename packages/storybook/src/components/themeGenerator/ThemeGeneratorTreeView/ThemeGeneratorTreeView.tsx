import { Spinner, Text, TreeView, TreeViewNode, TreeViewNodes  } from '@ovhcloud/ods-react';
import React, { useMemo } from 'react';
import { categorizeCssVariables } from '../useThemeGenerator';
import styles from './themeGeneratorTreeView.module.css';
import { SPINNER_SIZE } from '../../../../../ods-react/src/components/spinner/src/constants/spinner-size';
import { TEXT_PRESET } from '../../../../../ods-react/src/components/text/src/constants/text-preset';

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
    return <div className={styles['theme-generator-tree-view']}>
      <Spinner size={SPINNER_SIZE.xs} />
      <Text preset={TEXT_PRESET.caption}>
        Loading theme...
        </Text>
      </div>;
  }

  return (
    <TreeView
      className={styles['theme-generator-tree-view']}
      items={items}
      onValueChange={() => {}}>
      <TreeViewNodes>
        {items.map((item) => (
          <TreeViewNode key={item.id} item={item}>
            {({ item, isBranch }: { item: TreeItem; isBranch: boolean }) => (
              <div className={styles['theme-generator-tree-view__item']}>
                <Text className={styles['theme-generator-tree-view__name']}>
                  {item.name}
                </Text>
                {!isBranch && item.value && (
                  <input
                    className={styles['theme-generator-tree-view__color-input']}
                    type="color"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    onChange={(e) => {
                      onVariableChange(item.name, e.target.value);
                    }}
                    value={item.value}
                  />
                )}
              </div>
            )}
          </TreeViewNode>
        ))}
      </TreeViewNodes>
    </TreeView>
  );
};

export { ThemeGeneratorTreeView };
