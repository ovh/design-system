import classNames from 'classnames';
import { type FC, type JSX, forwardRef, useEffect, useMemo } from 'react';
import { createPortal as domPortal } from 'react-dom';
import { useToaster, useToasterStore } from 'react-hot-toast/headless';
import { TOAST_COLOR } from '../../constants/toast-color';
import { TOASTER_POSITION } from '../../constants/toaster-position';
import { type Toast as ToastItem, ToasterProvider, type ToasterRootProp } from '../../contexts/useToaster';
import { toast as controller } from '../../controller/toaster';
import { Toast } from '../toast/Toast';
import style from './toaster.module.scss';

interface ToasterProp extends ToasterRootProp {}

const ToasterRoot: FC<ToasterProp> = forwardRef(({
  className,
  duration = 3000,
  id,
  max = 3,
  position = TOASTER_POSITION.topEnd,
  ...props
}, ref): JSX.Element => {
  const { handlers } = useToaster({
    duration,
    removeDelay: 300,
  }, id);
  const { toasts } = useToasterStore({
    duration,
    removeDelay: 300,
  }, id);

  const isBottom = useMemo(() => {
    return [TOASTER_POSITION.bottom, TOASTER_POSITION.bottomEnd, TOASTER_POSITION.bottomStart].indexOf(position as TOASTER_POSITION) > -1;
  }, [position]);

  const visibleToasts = useMemo<ToastItem[]>(() => {
    if (!max || max <= 0) {
      return [];
    }

    return toasts as ToastItem[];
  }, [max, toasts]);

  const { calculateOffset, endPause, startPause, updateHeight } = handlers;

  useEffect(() => {
    if (max || max === 0) {
      toasts
        .filter((t) => t.visible)
        .filter((_, i) => i >= max)
        .forEach((t) => controller.remove(t.id));
    }
  }, [max, toasts]);

  return (
    <div // eslint-disable-line jsx-a11y/no-static-element-interactions
      aria-live="polite"
      className={ classNames(
        style['toaster'],
        className,
      )}
      data-ods="toaster"
      ref={ ref }
      { ...props }
      onMouseEnter={ startPause }
      onMouseLeave={ endPause }>
      {
        visibleToasts.map((toast) => {
          const offset = calculateOffset(toast, {
            gutter: 8,
            reverseOrder: false,
          });

          const toastRef = (el: HTMLDivElement): void => {
            if (el && typeof toast.height !== 'number') {
              const height = el.getBoundingClientRect().height;
              updateHeight(toast.id, height);
            }
          };

          return (
            <div
              className={ classNames(
                style['toaster__toast'],
                style[`toaster__toast--${position}`],
              )}
              key={ toast.id }
              ref={ toastRef }
              role={ toast.color === TOAST_COLOR.critical ? 'alert' : 'status' }
              style={{
                opacity: toast.visible ? 1 : 0,
                transform: `translateY(${isBottom ? -offset : offset}px)`,
              }}>
              <Toast toast={ toast } />
            </div>
          );
        })
      }
    </div>
  );
});

const Toaster: FC<ToasterProp> = forwardRef(({
  className,
  createPortal = true,
  dismissible,
  duration = 3000,
  id,
  max = 3,
  position = TOASTER_POSITION.topEnd,
  ...props
}, ref): JSX.Element => {
  const children = (
    <ToasterRoot
      className={ className }
      duration={ duration }
      id={ id }
      max={ max }
      position={ position }
      ref={ ref }
      { ...props } />
  );

  return (
    <ToasterProvider dismissible={ dismissible }>
      {
        createPortal
          ? domPortal(children, document.body)
          : children
      }
    </ToasterProvider>
  );
});

Toaster.displayName = 'Toaster';

export {
  Toaster,
  type ToasterProp,
};
