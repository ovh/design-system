import { ODS_PERIOD_ISO_CODE } from '../../utils/public-api';
import { OdsCartManager } from './ods-cart-manager';
import { OdsCartManagerController } from './ods-cart-manager-controller';
import { OdsCartManagerEvents } from './ods-cart-manager-events';
import { OdsCartManagerFooter } from './ods-cart-manager-footer';
import { OdsCartManagerMethods } from './ods-cart-manager-methods';
import { OdsCartManagerSection } from './ods-cart-manager-section';
import { OdsCartSize } from '../cart/ods-cart-size';
import { OdsI18n } from '../../i18n/ods-i18n';
import { OdsI18nHook } from '../../i18n/ods-i18n-hook';

export class OdsCartManagerMock implements OdsCartManager<OdsCartManagerMethods, OdsCartManagerEvents> {
  odsI18n: OdsI18n = new OdsI18n();
  inline?: boolean;
  footer?: OdsCartManagerFooter;
  i18n?: OdsI18nHook;
  period?: ODS_PERIOD_ISO_CODE;
  sections: OdsCartManagerSection[] = [];
  size?: OdsCartSize;
  vatMode?: boolean;

  controller: OdsCartManagerController = jest.fn() as unknown as OdsCartManagerController;

  getProductQuantity = jest.fn();
  getTotalAmount = jest.fn();

}
