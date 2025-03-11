import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC, type JSX, type MouseEvent } from 'react';
import { OdsIcon, type OdsIconName } from '../../../../icon/src';
import { ODS_LINK_COLOR, type OdsLinkColor } from '../../constant/link-color';
import { ODS_LINK_ICON_ALIGNMENT, type OdsLinkIconAlignment } from '../../constant/link-icon-alignment';
import style from './odsLink.module.scss';

// TODO children instead of label?

interface OdsLinkProp extends ComponentPropsWithoutRef<'a'> {
  color?: OdsLinkColor,
  disabled?: boolean,
  icon?: OdsIconName,
  iconAlignment?: OdsLinkIconAlignment,
  label?: string,
}

const OdsLink: FC<OdsLinkProp> = ({
  color = ODS_LINK_COLOR.primary,
  disabled,
  icon,
  iconAlignment = ODS_LINK_ICON_ALIGNMENT.right,
  label,
  ...props
}): JSX.Element => {
  function onClick(event: MouseEvent): void {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  return (
    <a
      className={ classNames(
        style['ods-link'],
        style[`ods-link--${color}`],
        style[`ods-link--icon-${iconAlignment}`],
        { [style['ods-link--disabled']]: disabled }
      )}
      onClick={ onClick }
      tabIndex={ disabled ? -1 : 0 }
      { ...props }>
      {
        !!label &&
        <span className="ods-link__label">
          { label }
        </span>
      }

      {
        !!icon &&
        <div className="ods-link__icon">
          {/* If there is no label, we display a zero-width space to simulate the correct baseline */}
          {
            !label &&
            <span>&#8203;</span>
          }

          <OdsIcon name={ icon } />
        </div>
      }
    </a>
  );
};

export {
  OdsLink,
  type OdsLinkProp,
};
