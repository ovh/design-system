import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { ODS_SPINNER_COLOR, type OdsSpinnerColor } from '../../constants/spinner-color';
import { ODS_SPINNER_SIZE, type OdsSpinnerSize } from '../../constants/spinner-size';
import style from './odsSpinner.module.scss';

interface OdsSpinnerProp extends ComponentPropsWithRef<'div'> {
  color?: OdsSpinnerColor,
  size?: OdsSpinnerSize,
}

const OdsSpinner: FC<OdsSpinnerProp> = forwardRef(({
  className,
  color = ODS_SPINNER_COLOR.primary,
  size = ODS_SPINNER_SIZE.md,
  ...props
}, ref): JSX.Element => {
  return (
    <div
      className={ classNames(
        style['ods-spinner'],
        style[`ods-spinner--${color}`],
        style[`ods-spinner--${size}`],
        className,
      )}
      ref={ ref }
      role="progressbar"
      { ...props }>
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <rect
          fill="none"
          height="24"
          width="24" />

        <g transform="translate(-237.694 -93.932)">
          <path
            d="M-5236.305-4108.069h0v-2a9.011,9.011,0,0,0,9-9,9.01,9.01,0,0,0-9-9,9.01,9.01,0,0,0-9,9h-2a10.928,10.928,0,0,1,3.222-7.779,10.928,10.928,0,0,1,7.778-3.221,10.929,10.929,0,0,1,7.779,3.221,10.932,10.932,0,0,1,3.221,7.777,10.928,10.928,0,0,1-3.221,7.778A10.931,10.931,0,0,1-5236.305-4108.069Z"
            transform="translate(5486 4225)" />

          <circle
            cx="1"
            cy="1"
            r="1"
            transform="translate(248.694 114.932)" />

          <circle
            cx="1"
            cy="1"
            r="1"
            transform="translate(238.694 104.932)" />
        </g>
      </svg>
    </div>
  );
});

OdsSpinner.displayName = 'OdsSpinner';

export {
  OdsSpinner,
  type OdsSpinnerProp,
};
