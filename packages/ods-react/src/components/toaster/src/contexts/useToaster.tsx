import { type ComponentPropsWithRef, type JSX, type ReactNode, createContext } from 'react';
import { type Toast as VendorToast } from 'react-hot-toast/headless';
import { useContext } from '../../../../utils/context';
import { type IconName } from '../../../icon/src';
import { type ToastColor } from '../constants/toast-color';
import { type ToasterPosition } from '../constants/toaster-position';

type ToasterRootProp = ComponentPropsWithRef<'div'> & {
  /**
   * Whether the component should be rendered in the DOM close to the body tag.
   */
  createPortal?: boolean,
  /**
   * Whether toasts can be manually removed.
   */
  dismissible?: boolean,
  /**
   * Toast duration before being removed.
   */
  duration?: number,
  /**
   * The maximum number of toast displayed at the same time.
   */
  max?: number,
  /**
   * The position on screen where the toasts will appear.
   */
  position?: ToasterPosition,
};

type ToastOption = {
  className?: string,
  /** @internal */
  color?: ToastColor,
  dismissible?: boolean,
  duration?: number,
  icon?: IconName,
  id?: string,
  toasterId?: string,
};

type Toast = Omit<VendorToast, 'icon'> & ToastOption;

interface ToasterProviderProp extends ToasterRootProp {
  children: ReactNode;
}

type ToasterContextType = Omit<ToasterProviderProp, 'children'>;

const ToasterContext = createContext<ToasterContextType | undefined>(undefined);

const ToasterProvider = ({
  children,
  dismissible,
}: ToasterProviderProp): JSX.Element => {
  return (
    <ToasterContext.Provider value={{
      dismissible,
    }}>
      { children }
    </ToasterContext.Provider>
  );
};

function useToaster(): ToasterContextType {
  return useContext(ToasterContext);
}

export {
  type Toast,
  type ToastOption,
  ToasterProvider,
  type ToasterRootProp,
  useToaster,
};
