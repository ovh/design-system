import React, { type JSX, useState, useEffect, useMemo } from 'react';
import { Button, BUTTON_VARIANT, Modal, ModalBody, ModalContent, Text, TreeView, TreeViewNode, TreeViewNodes } from '@ovhcloud/ods-react';
 
import styles from './themeGeneratorPaletteModal.module.css';
import { generatePalette, formatPaletteAsCssVariables, COLOR_FAMILIES, PALETTE_STEPS, type ColorFamily, type PaletteResult } from './paletteGenerator';
import { ThemeGeneratorColorPicker } from '../ThemeGeneratorColorPicker';

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
    return COLOR_FAMILIES.map((family) => {
      let palette: PaletteResult;

      if (generatedPalettes[family]) {
        palette = generatedPalettes[family];
      } else {
        palette = {};
        for (const step of PALETTE_STEPS) {
          const varName = `--ods-color-${family}-${step}`;
          palette[step] = currentVariables[varName] || '#000000';
        }
      }

      const children: TreeItem[] = PALETTE_STEPS.map((step) => ({
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

  function handleSeedColorChange(family: ColorFamily, color: string) {
    setSeedColors(prev => ({
      ...prev,
      [family]: color,
    }));
    
    // Generate palette automatically when seed color changes
    try {
      const palette = generatePalette(color);
      setGeneratedPalettes(prev => ({
        ...prev,
        [family]: palette,
      }));
    } catch (error) {
      console.error('Failed to generate palette:', error);
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
                    {({ item, isBranch }: { item: TreeItem; isBranch: boolean }) => (
                      <div className={styles['theme-generator-palette-modal__preview__tree-view__tree-item']}>
                        {isBranch ? (
                          <>
                            <Text className={styles['theme-generator-palette-modal__preview__tree-view__tree-item__name']}>
                              {item.name}
                            </Text>
                            <ThemeGeneratorColorPicker
                              value={seedColors[item.id as ColorFamily] || '#000000'}
                              onChange={(color) => handleSeedColorChange(item.id as ColorFamily, color)}
                              showLabel={false}
                            />
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
