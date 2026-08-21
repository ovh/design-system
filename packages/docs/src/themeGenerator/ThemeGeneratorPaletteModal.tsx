import { type JSX, useEffect, useMemo, useState } from 'react';
import { BUTTON_VARIANT, Button, Modal, ModalBody, ModalContent, TEXT_PRESET, Text, TreeView, TreeViewNode, TreeViewNodes } from '../ods';
import { PALETTES } from '../doc/ports/constants/designTokens';
import { type ColorFamily, type PaletteResult, PALETTE_STEPS, formatPaletteAsCssVariables, generatePalette } from './paletteGenerator';
import { ThemeGeneratorColorPicker } from './ThemeGeneratorColorPicker';
import styles from './themeGeneratorPaletteModal.module.css';

/* Palette generator: pick a seed per color family, preview the 10 generated
   steps, apply them to the custom theme. */

const ODS_COLOR_PREFIX = '--ods-color';

function buildColorVar(family: string, step?: string): string {
  return step ? `${ODS_COLOR_PREFIX}-${family}-${step}` : `${ODS_COLOR_PREFIX}-${family}`;
}

interface TreeItem {
  children?: TreeItem[];
  id: string;
  name: string;
  value?: string;
}

interface ThemeGeneratorPaletteModalProp {
  currentVariables: Record<string, string>;
  onApply: (variables: Record<string, string>) => void;
  onClose: () => void;
  open: boolean;
}

const ThemeGeneratorPaletteModal = ({ currentVariables, onApply, onClose, open }: ThemeGeneratorPaletteModalProp): JSX.Element => {
  const [generatedPalettes, setGeneratedPalettes] = useState<Record<ColorFamily, PaletteResult>>({} as Record<ColorFamily, PaletteResult>);
  const [seedColors, setSeedColors] = useState<Record<ColorFamily, string>>({} as Record<ColorFamily, string>);
  const [errors, setErrors] = useState<Partial<Record<ColorFamily, string>>>({});

  useEffect(() => {
    const initialSeeds = {} as Record<ColorFamily, string>;
    PALETTES.forEach((family) => {
      initialSeeds[family] = currentVariables[buildColorVar(family, '500')] || '#000000';
    });
    setSeedColors(initialSeeds);
  }, [currentVariables]);

  const treeItems = useMemo(() => PALETTES.map((family) => ({
    children: PALETTE_STEPS.map((step) => {
      const varName = buildColorVar(family, step);
      return {
        id: `${family}-${step}`,
        name: varName,
        value: generatedPalettes[family]?.[step] || currentVariables[varName] || '#000000',
      };
    }),
    id: family,
    name: family.charAt(0).toUpperCase() + family.slice(1),
  })).sort((a, b) => a.name.localeCompare(b.name)), [generatedPalettes, currentVariables]);

  function handleSeedColorChange(family: ColorFamily, color: string): void {
    setSeedColors((prev) => ({ ...prev, [family]: color }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[family];
      return next;
    });

    try {
      const palette = generatePalette(color);
      setGeneratedPalettes((prev) => ({ ...prev, [family]: palette }));
    } catch (error) {
      setErrors((prev) => ({ ...prev, [family]: error instanceof Error ? error.message : 'Failed to generate palette' }));
    }
  }

  function handleApply(): void {
    const allVariables: Record<string, string> = {};
    for (const [family, palette] of Object.entries(generatedPalettes) as [ColorFamily, PaletteResult][]) {
      Object.assign(allVariables, formatPaletteAsCssVariables(family, palette));
    }
    onApply(allVariables);
    onClose();
  }

  return (
    <Modal onOpenChange={ ({ open }) => !open && onClose() } open={ open }>
      <ModalContent className={ styles['theme-generator-palette-modal'] }>
        <ModalBody>
          <div className={ styles['theme-generator-palette-modal__header'] }>
            <Text preset={ TEXT_PRESET.heading4 }>
              Color Palette Generator
            </Text>
            <Text>
              Generate color palettes for each color family by selecting a seed color. The palette will automatically generate 10 color steps from your selection.
            </Text>
          </div>

          <div className={ styles['theme-generator-palette-modal__preview'] }>
            <TreeView
              className={ styles['theme-generator-palette-modal__preview__tree-view'] }
              items={ treeItems }>
              <TreeViewNodes>
                { treeItems.map((item) => (
                  <TreeViewNode item={ item } key={ item.id }>
                    { ({ isBranch, item }: { isBranch: boolean, item: TreeItem }) => {
                      const familyError = isBranch ? errors[item.id as ColorFamily] : undefined;

                      return (
                        <div className={ styles['theme-generator-palette-modal__preview__tree-view__tree-item'] }>
                          { isBranch ? (
                            <>
                              <div className={ styles['theme-generator-palette-modal__preview__tree-view__tree-item__header'] }>
                                <Text className={ styles['theme-generator-palette-modal__preview__tree-view__tree-item__name'] }>
                                  { item.name }
                                </Text>
                                <ThemeGeneratorColorPicker
                                  onChange={ (color) => handleSeedColorChange(item.id as ColorFamily, color) }
                                  showLabel={ false }
                                  value={ seedColors[item.id as ColorFamily] || '#000000' } />
                              </div>
                              { familyError && (
                                <Text className={ styles['theme-generator-palette-modal__preview__tree-view__tree-item__error'] }>
                                  { familyError }
                                </Text>
                              ) }
                            </>
                          ) : (
                            item.value && (
                              <ThemeGeneratorColorPicker
                                disabled
                                label={ item.name }
                                onChange={ () => {} }
                                value={ item.value } />
                            )
                          ) }
                        </div>
                      );
                    } }
                  </TreeViewNode>
                )) }
              </TreeViewNodes>
            </TreeView>
          </div>

          <div className={ styles['theme-generator-palette-modal__actions'] }>
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
