import { type ComponentPropsWithoutRef, type FC, type JSX } from 'react';

interface LogoEmblemProp extends ComponentPropsWithoutRef<'svg'> {}

const LogoEmblem: FC<LogoEmblemProp> = ({
  className,
  ...props
}): JSX.Element => {
  /* eslint-disable max-len */
  return (
    <svg
      className={ className }
      fillRule="evenodd"
      viewBox="0 0 53 32"
      xmlns="http://www.w3.org/2000/svg"
      { ...props }>
      <path
        clipRule="evenodd"
        d="M49.0997 1.83051C54.4055 11.4576 53.3981 23.3898 46.6147 32H32.1748L36.6075 24.0678H30.7644L37.6821 11.7966H43.5924L49.0997 1.83051ZM20.6901 32H5.98156C2.42173 27.5692 0.426997 22.2408 0.0614314 16.8C0.0345892 16.4005 0.0165306 16.0004 0.00728085 15.6C-0.000481239 15.264 -0.0020401 14.9278 0.00261926 14.5916C0.00867182 14.1548 0.0252172 13.718 0.0522883 13.2815C0.0830303 12.7859 0.127346 12.2907 0.185284 11.7966C0.591502 8.33228 1.66734 4.9199 3.4294 1.76271L12.9664 18.4407L23.4437 0H38.8911L20.6901 32Z" />
    </svg>
  );
  /* eslint-enable max-len */
};

LogoEmblem.displayName = 'LogoEmblem';

export {
  LogoEmblem,
  type LogoEmblemProp,
};
