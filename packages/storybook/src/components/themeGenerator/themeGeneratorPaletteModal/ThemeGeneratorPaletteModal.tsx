import React, { type JSX, useState, useEffect, useMemo } from 'react';
import { Button, BUTTON_SIZE, BUTTON_VARIANT, Modal, ModalBody, ModalContent, Text, TreeView, TreeViewNode, TreeViewNodes } from '@ovhcloud/ods-react';
import styles from './themeGeneratorPaletteModal.module.css';
import { generatePalette, formatPaletteAsCssVariables, COLOR_FAMILIES, type ColorFamily, type PaletteResult } from './paletteGenerator';

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

  useEffect(() => {
    const initialSeeds: Record<ColorFamily, string> = {} as Record<ColorFamily, string>;
    COLOR_FAMILIES.forEach((family) => {
      const defaultColorVar = `--ods-color-${family}-500`;
      initialSeeds[family] = currentVariables[defaultColorVar] || '#000000';
    });
    setSeedColors(initialSeeds);
  }, [currentVariables]);

  const treeItems = useMemo(() => {
    const steps = ['000', '025', '050', '075', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

    return COLOR_FAMILIES.map((family) => {
      let palette: PaletteResult;

      if (generatedPalettes[family]) {
        palette = generatedPalettes[family];
      } else {
        palette = {};
        for (const step of steps) {
          const varName = `--ods-color-${family}-${step}`;
          palette[step] = currentVariables[varName] || '#000000';
        }
      }

      const children: TreeItem[] = steps.map((step) => ({
        id: `${family}-${step}`,
        name: `--ods-color-${family}-${step}`,
        value: palette[step] || '#000000',
      }));

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

  function handleGeneratePalette(family: ColorFamily) {
    try {
      const seedColor = seedColors[family];
      if (!seedColor) return;

      const palette = generatePalette(seedColor, 'light');
      setGeneratedPalettes(prev => ({
        ...prev,
        [family]: palette,
      }));
    } catch (error) {
      console.error('Failed to generate palette:', error);
    }
  }

  function handleSeedColorChange(family: ColorFamily, color: string) {
    setSeedColors(prev => ({
      ...prev,
      [family]: color,
    }));
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
              className={styles['theme-generator-palette-modal__tree-view']}
              items={treeItems}
            >
              <TreeViewNodes>
                {treeItems.map((item) => (
                  <TreeViewNode key={item.id} item={item}>
                    {({ item, isBranch }: { item: TreeItem; isBranch: boolean }) => (
                      <div className={styles['theme-generator-palette-modal__tree-item']}>
                        <Text className={styles['theme-generator-palette-modal__tree-item__name']}>
                          {item.name}
                        </Text>
                        {isBranch ? (
                          <div className={styles['theme-generator-palette-modal__tree-item__controls']}>
                            <input
                              className={styles['theme-generator-palette-modal__tree-item__seed-input']}
                              type="color"
                              value={seedColors[item.id as ColorFamily] || '#000000'}
                              onChange={(e) => {
                                e.stopPropagation();
                                handleSeedColorChange(item.id as ColorFamily, e.target.value);
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                            />
                            <Button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleGeneratePalette(item.id as ColorFamily);
                              }}
                              variant={BUTTON_VARIANT.default}
                              size={BUTTON_SIZE.sm}
                            >
                              Generate
                            </Button>
                          </div>
                        ) : (
                          item.value && (
                            <input
                              className={styles['theme-generator-palette-modal__tree-item__color-input']}
                              type="color"
                              value={item.value}
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                              readOnly
                            />
                          )
                        )}
                      </div>
                    )}
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


