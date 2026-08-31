import { type ChangeEvent, useState } from 'react';
import { Drawer, DrawerBody, DrawerContent, type DrawerOpenChangeDetail, ICON_NAME, ICON_NAMES, INPUT_TYPE, Input } from '../../../ods';
import { type IconNameKey, ODS_ICON_TAG } from '../constants/iconTags';
import { IconDetails } from './IconDetails';
import { IconPreview } from './IconPreview';
import styles from './iconGallery.module.css';

/* Searchable gallery of every ODS icon (ported from the Storybook addon):
   filter on name + aliases, click an icon to open its detail drawer. */

interface CurrentIcon {
  aliases: string[];
  name: ICON_NAME;
  nameKey?: IconNameKey;
}

const IconGallery = () => {
  const [currentIcon, setCurrentIcon] = useState<CurrentIcon>();
  const [icons, setIcons] = useState<readonly ICON_NAME[]>(ICON_NAMES);

  const onDrawerClose = (): void => setCurrentIcon(undefined);

  function onDrawerOpenChange({ open }: DrawerOpenChangeDetail): void {
    if (!open) {
      onDrawerClose();
    }
  }

  function onIconSelect(name: ICON_NAME): void {
    const entry = Object.entries(ICON_NAME).find(([, value]) => value === name);
    setCurrentIcon({
      aliases: entry ? ODS_ICON_TAG[entry[0] as IconNameKey] : [],
      name,
      nameKey: entry?.[0] as IconNameKey | undefined,
    });
  }

  function onSearchInputChange(event: ChangeEvent<HTMLInputElement>): void {
    const search = event.target.value;
    if (!search) {
      setIcons(ICON_NAMES);
      return;
    }
    // Unlike the old addon, the match is case-insensitive ("Home" finds home).
    const regexp = new RegExp(search.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i');
    setIcons(Object.entries<string>(ICON_NAME)
      .filter(([key, name]) => [name].concat(ODS_ICON_TAG[key as IconNameKey] || []).some((value) => regexp.test(value)))
      .map(([, name]) => name as ICON_NAME));
  }

  return (
    <div className={ styles['icon-gallery'] }>
      <Input
        className={ styles['icon-gallery__search'] }
        clearable
        onChange={ onSearchInputChange }
        placeholder="Filter icons"
        type={ INPUT_TYPE.search } />

      <ul className={ styles['icon-gallery__list'] }>
        { icons.map((iconName) => (
          <li key={ iconName }>
            <IconPreview
              isSelected={ currentIcon?.name === iconName }
              name={ iconName }
              onSelect={ () => onIconSelect(iconName) } />
          </li>
        )) }
      </ul>

      <Drawer closeOnInteractOutside onOpenChange={ onDrawerOpenChange } open={ !!currentIcon }>
        <DrawerContent>
          <DrawerBody>
            <IconDetails aliases={ currentIcon?.aliases } name={ currentIcon?.name } nameKey={ currentIcon?.nameKey } onClose={ onDrawerClose } />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export { IconGallery };
