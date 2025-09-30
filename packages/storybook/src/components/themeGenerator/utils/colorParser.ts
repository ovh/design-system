import defaultThemeCss from '@ovhcloud/ods-themes/default/css?raw';
import testThemeCss from '@ovhcloud/ods-themes/test/css?raw';
export interface ColorVariable {
  name: string;
  value: string;
  category: string;
  subcategory?: string;
}

export interface ColorGroup {
  name: string;
  children: ColorGroup[];
  colors: ColorVariable[];
}

const ODS_COLOR_VAR_PREFIX = '--ods-color-';

export function parseColorVariables(cssContent: string): ColorVariable[] {
  const colorRegex = new RegExp(`${ODS_COLOR_VAR_PREFIX}([^:]+):\\s*([^;]+);`, 'g');
  const byName = new Map<string, ColorVariable>();
  let match;

  while ((match = colorRegex.exec(cssContent)) !== null) {
    const [, name, value] = match;
    const fullName = `${ODS_COLOR_VAR_PREFIX}${name}`;
    byName.set(fullName, {
      name: fullName,
      value: value.trim(),
      category: '',
      subcategory: '',
    });
  }

  return Array.from(byName.values());
}

const SEMANTIC_CATEGORIES: Record<string, { patterns: string[] }> = {
  'Primary': {
    patterns: ['primary-'],
  },
  'Neutral': {
    patterns: ['neutral-'],
  },
  'Status': {
    patterns: ['success-', 'warning-', 'critical-', 'information-'],
  },
  'Form Controls': {
    patterns: ['form-element-'],
  },
  'Surfaces': {
    patterns: ['background-'],
  },
  'Borders': {
    patterns: ['border-'],
  },
  'Typography': {
    patterns: ['-text', 'text-', 'heading'],
  },
  'States': {
    patterns: ['element-'],
  },
  'Brand': {
    patterns: ['brand-', 'alpha', 'beta', 'eco', 'limited', 'new', 'promotion'],
  },
};

export function organizeColorsSemantically(colors: ColorVariable[]): ColorGroup[] {
  const groups: ColorGroup[] = [];

  Object.entries(SEMANTIC_CATEGORIES).forEach(([categoryName, categoryInfo]) => {
    const groupColors = colors.filter(color => 
      categoryInfo.patterns.some(pattern => color.name.includes(pattern))
    );

    if (groupColors.length > 0) {
      const subGroups = createSubGroups(groupColors);
      groups.push({
        name: categoryName,
        children: subGroups,
        colors: [],
      });
    }
  });

  const categorizedColors = new Set(
    groups.flatMap(group => 
      [...group.children.flatMap(sub => sub.colors), ...group.colors]
        .map(color => color.name)
    )
  );

  const uncategorizedColors = colors.filter(color => !categorizedColors.has(color.name));
  if (uncategorizedColors.length > 0) {
    groups.push({
      name: 'Other',
      children: [],
      colors: uncategorizedColors,
    });
  }

  return groups;
}

function createSubGroups(colors: ColorVariable[]): ColorGroup[] {
  const subGroups: ColorGroup[] = [];
  const colorMap = new Map<string, ColorVariable[]>();

  colors.forEach(color => {
    const baseName = extractBaseColorName(color.name);
    if (!colorMap.has(baseName)) {
      colorMap.set(baseName, []);
    }
    colorMap.get(baseName)!.push(color);
  });

  colorMap.forEach((colorList, baseName) => {
    const sortedColors = colorList.sort((a, b) => {
      const aNum = extractNumericSuffix(a.name);
      const bNum = extractNumericSuffix(b.name);
      return aNum - bNum;
    });

    subGroups.push({
      name: formatBaseColorName(baseName),
      children: [],
      colors: sortedColors,
    });
  });

  return subGroups;
}

function extractBaseColorName(colorName: string): string {
  const match = colorName.match(/--ods-color-([^-]+(?:-[^-]+)*?)(?:-\d+)?$/);
  return match ? match[1] : colorName;
}

function extractNumericSuffix(colorName: string): number {
  const match = colorName.match(/-(\d+)$/);
  return match ? parseInt(match[1], 10) : 0;
}

function formatBaseColorName(baseName: string): string {
  return baseName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Load theme colors from a theme file
 */
export async function loadThemeColors(themeName: 'default' | 'test' | 'custom'): Promise<ColorVariable[]> {
  try {
    if (themeName === 'default' || themeName === 'custom') {
      return parseColorVariables(defaultThemeCss);
    }
    if (themeName === 'test') {
      return parseColorVariables(testThemeCss);
    }

    return [];
  } catch (error) {
    console.error('Failed to load theme colors:', error);
    return [];
  }
}