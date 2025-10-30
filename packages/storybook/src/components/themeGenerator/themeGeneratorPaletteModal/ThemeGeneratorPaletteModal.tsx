import React, { type JSX, useState, useEffect, useMemo } from 'react';
import { Button, BUTTON_VARIANT, Modal, ModalBody, ModalContent, Text, TreeView, TreeViewNode, TreeViewNodes } from '@ovhcloud/ods-react';
import styles from './themeGeneratorPaletteModal.module.css';
import { generatePalette, formatPaletteAsCssVariables, COLOR_FAMILIES, PALETTE_STEPS, type ColorFamily, type PaletteResult } from './paletteGenerator';
import { ThemeGeneratorColorPicker } from '../ThemeGeneratorColorPicker/ThemeGeneratorColorPicker';

const ODS_COLOR_PREFIX = '--ods-color';

/**
 * Builds a CSS variable name for a color token
 * @param family - Color family (e.g., 'primary', 'neutral')
 * @param step - Optional color step (e.g., '500', '100')
 * @returns CSS variable name (e.g., '--ods-color-primary-500')
 */
function buildColorVar(family: string, step?: string): string {
  return step ? `${ODS_COLOR_PREFIX}-${family}-${step}` : `${ODS_COLOR_PREFIX}-${family}`;
}

interface TreeItem {
  id: string;
  name: string;
  value?: string;
  children?: TreeItem[];
}

interface ThemeGeneratorPaletteModalProps {
  open: boolean;
  onClose: () => void;
  onApply: (variables: Record<string, string>) => void;
  currentVariables: Record<string, string>;
}

const ThemeGeneratorPaletteModal = ({ open, onClose, onApply, currentVariables }: ThemeGeneratorPaletteModalProps): JSX.Element => {
  const [generatedPalettes, setGeneratedPalettes] = useState<Record<ColorFamily, PaletteResult>>({} as Record<ColorFamily, PaletteResult>);
  const [seedColors, setSeedColors] = useState<Record<ColorFamily, string>>({} as Record<ColorFamily, string>);
  const [errors, setErrors] = useState<Partial<Record<ColorFamily, string>>>({});

  useEffect(() => {
    const initialSeeds: Record<ColorFamily, string> = {} as Record<ColorFamily, string>;
    COLOR_FAMILIES.forEach((family) => {
      const defaultColorVar = buildColorVar(family, '500');
      initialSeeds[family] = currentVariables[defaultColorVar] || '#000000';
    });
    setSeedColors(initialSeeds);
  }, [currentVariables]);

  const treeItems = useMemo(() => {
    return COLOR_FAMILIES.map((family) => {
      const palette = generatedPalettes[family];

      const children: TreeItem[] = PALETTE_STEPS.map((step) => {
        const varName = buildColorVar(family, step);
        const value = palette?.[step] || currentVariables[varName] || '#000000';

        return {
          id: `${family}-${step}`,
          name: varName,
          value,
        };
      });

      return {
        id: family,
        name: family.charAt(0).toUpperCase() + family.slice(1),
        children,
      };
    });
  }, [generatedPalettes, currentVariables]);

  function onOpenChange({ open }: { open: boolean }) {
    if (!open) {
      onClose();
    }
  }

  function handleSeedColorChange(family: ColorFamily, color: string) {
    setSeedColors(prev => ({
      ...prev,
      [family]: color,
    }));

    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[family];
      return newErrors;
    });

    try {
      const palette = generatePalette(color);
      setGeneratedPalettes(prev => ({
        ...prev,
        [family]: palette,
      }));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to generate palette';
      setErrors(prev => ({
        ...prev,
        [family]: errorMessage,
      }));
    }
  }

  function handleApply() {
    const allVariables: Record<string, string> = {};

    for (const [family, palette] of Object.entries(generatedPalettes) as [ColorFamily, PaletteResult][]) {
      const cssVars = formatPaletteAsCssVariables(family, palette);
      Object.assign(allVariables, cssVars);
    }

    onApply(allVariables);
    onClose();
  }

  return (
    <Modal open={ open } onOpenChange={ onOpenChange }>
      <ModalContent className={styles['theme-generator-palette-modal']}>
        <ModalBody>
          <div className={styles['theme-generator-palette-modal__preview']}>
            <TreeView
              className={styles['theme-generator-palette-modal__preview__tree-view']}
              items={treeItems}
            >
              <TreeViewNodes>
                {treeItems.map((item) => (
                  <TreeViewNode key={item.id} item={item}>
                    {({ item, isBranch }: { item: TreeItem; isBranch: boolean }) => {
                      const familyError = isBranch ? errors[item.id as ColorFamily] : undefined;

                      return (
                        <div className={styles['theme-generator-palette-modal__preview__tree-view__tree-item']}>
                          {isBranch ? (
                            <>
                              <div className={styles['theme-generator-palette-modal__preview__tree-view__tree-item__header']}>
                                <Text className={styles['theme-generator-palette-modal__preview__tree-view__tree-item__name']}>
                                  {item.name}
                                </Text>
                                <ThemeGeneratorColorPicker
                                  value={seedColors[item.id as ColorFamily] || '#000000'}
                                  onChange={(color) => handleSeedColorChange(item.id as ColorFamily, color)}
                                  showLabel={false}
                                />
                              </div>
                              {familyError && (
                                <Text className={styles['theme-generator-palette-modal__preview__tree-view__tree-item__error']}>
                                  {familyError}
                                </Text>
                              )}
                            </>
                          ) : (
                            item.value && (
                              <ThemeGeneratorColorPicker
                                label={item.name}
                                value={item.value}
                                onChange={() => {}}
                                disabled
                              />
                            )
                          )}
                        </div>
                      );
                    }}
                  </TreeViewNode>
                ))}
              </TreeViewNodes>
            </TreeView>
          </div>

          <div className={styles['theme-generator-palette-modal__actions']}>
            <Button onClick={ onClose } variant={ BUTTON_VARIANT.ghost }>
              Cancel
            </Button>
            <Button onClick={ handleApply } variant={ BUTTON_VARIANT.default }>
              Apply to Custom
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export { ThemeGeneratorPaletteModal };
