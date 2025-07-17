import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useI18n } from '../../../../../hooks/useI18n';
import { type Locale } from '../../../../../utils/locales';
import { INPUT_I18N, INPUT_TYPE, Input, type InputMaskState } from '../../../../input/src';
import { TRANSLATION } from '../../constants/password-i18n';

interface PasswordProp extends Omit<ComponentPropsWithRef<'input'>, 'type'> {
  /**
   * Whether the clear button is displayed.
   */
  clearable?: boolean,
  /**
   * Internal translations override (see Input i18n keys).
   */
  i18n?: Partial<Record<INPUT_I18N, string>>,
  /**
   * Whether the component is in error state.
   */
  invalid?: boolean,
  /**
   * Whether the component is in loading state.
   */
  loading?: boolean,
  /**
   * The locale used for the translation of the internal elements.
   */
  locale?: Locale,
  /**
   * The masked display initial state.
   */
  maskInitialState?: InputMaskState,
  /**
   * Callback fired when the input value is cleared.
   */
  onClear?: () => void,
}

const Password: FC<PasswordProp> = forwardRef(({
  className,
  clearable,
  i18n,
  invalid,
  loading,
  locale,
  maskInitialState,
  onClear,
  ...props
}, ref): JSX.Element => {
  const { translate } = useI18n(TRANSLATION, locale, i18n);

  return (
    <Input
      className={ className }
      clearable={ clearable }
      i18n={{
        [INPUT_I18N.maskButtonHide]: translate(INPUT_I18N.maskButtonHide),
        [INPUT_I18N.maskButtonShow]: translate(INPUT_I18N.maskButtonShow),
        ...i18n,
      }}
      invalid={ invalid }
      loading={ loading }
      locale={ locale }
      maskOption={{
        enable: true,
        initialState: maskInitialState,
      }}
      onClear={ onClear }
      ref={ ref }
      type={ INPUT_TYPE.text }
      { ...props } />
  );
});

Password.displayName = 'Password';

export {
  Password,
  type PasswordProp,
};
