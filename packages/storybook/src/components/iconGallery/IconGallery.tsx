import { Drawer, DrawerBody, DrawerContent, type DrawerOpenChangeDetail, ICON_NAME, ICON_NAMES, INPUT_TYPE, Input } from '@ovhcloud/ods-react';
import React, { type ChangeEvent, type ComponentPropsWithoutRef, type FC, type JSX, useState } from 'react';
import { type IconNameKey, ODS_ICON_TAG } from '../../constants/iconTags';
import { IconDetails } from './IconDetails';
import { IconPreview } from './IconPreview';
import styles from './iconGallery.module.css';

type CurrentIcon = {
  aliases: string[];
  name: ICON_NAME;
}

interface Prop extends ComponentPropsWithoutRef<'div'> {}

const IconGallery: FC<Prop> = ({ ...props }): JSX.Element => {
  const [currentIcon, setCurrentIcon] = useState<CurrentIcon>();
  const [icons, setIcons] = useState(ICON_NAMES);

  function onDrawerClose(): void {
    setCurrentIcon(undefined);
  }

  function onDrawerOpenChange({ open }: DrawerOpenChangeDetail): void {
    if (!open) {
      onDrawerClose();
    }
  }

  function onIconSelect(name: ICON_NAME): void {
    const entry = Object.entries(ICON_NAME).find(([_, value]) => value === name);
    setCurrentIcon({
      aliases: entry?.length ? ODS_ICON_TAG[entry[0] as IconNameKey] : [],
      name,
    });
  }

  function onSearchInputChange(event: ChangeEvent<HTMLInputElement>): void {
    const regexp = new RegExp((event.target.value || '').replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));

    setIcons(event.target.value ?
      Object.entries<string>(ICON_NAME)
        .filter(([key, name]) => {
          return [name].concat(ODS_ICON_TAG[key as IconNameKey] || []).some((value) => regexp.test(value));
        })
        .map(([_, name]) => name as ICON_NAME)
      : ICON_NAMES);
  }

  return (
    <div
      className={ styles['icon-gallery'] }
      { ...props }>
      <Input
        className={ styles['icon-gallery__search'] }
        clearable={ true }
        onChange={ onSearchInputChange }
        placeholder="Filter icons"
        type={ INPUT_TYPE.search } />

      <ul className={ styles['icon-gallery__list'] }>
        {
          icons.map((iconName) => (
            <li key={ iconName }>
              <IconPreview
                isSelected={ currentIcon?.name === iconName }
                name={ iconName }
                onSelect={ () => onIconSelect(iconName) } />
            </li>
          ))
        }
      </ul>

      <Drawer
        closeOnInteractOutside={ true }
        onOpenChange={ onDrawerOpenChange }
        open={ !!currentIcon }>
        <DrawerContent>
          <DrawerBody>
            <IconDetails
              aliases={ currentIcon?.aliases }
              name={ currentIcon?.name }
              onClose={ onDrawerClose } />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export {
  IconGallery,
};
