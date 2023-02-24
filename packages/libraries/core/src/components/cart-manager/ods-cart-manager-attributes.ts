import { OdsCartSize } from '../cart/ods-cart-size';
import { OdsCartManagerSection } from './ods-cart-manager-section';
import { OdsI18nHook } from '../../i18n/ods-i18n-hook';
import { OdsCartManagerFooter } from './ods-cart-manager-footer';
import { ODS_PERIOD_ISO_CODE } from '../../utils/time/ods-period-iso-code';
import { OdsComponentAttributes } from '../ods-component-attributes';

export interface OdsCartManagerAttributes extends OdsComponentAttributes {
  /** full width or not: see component principles */
  flex?: boolean;
  /** describe what the footer is made of */
  footer?: OdsCartManagerFooter;
  /** internationalisation system connector */
  i18n?: OdsI18nHook;
  /** ISO period code that describe the duration of a periodical payment */
  period?: ODS_PERIOD_ISO_CODE;
  /** Sections made of one item and multiple options */
  sections: OdsCartManagerSection[];
  /** size: see component principles */
  size?: OdsCartSize;
  /** is the cart display the Value Added Tax */
  vatMode?: boolean;
}
