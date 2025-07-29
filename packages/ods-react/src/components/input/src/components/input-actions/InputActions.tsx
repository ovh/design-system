import { type FC } from 'react';
import { useI18n } from '../../../../../hooks/useI18n';
import { BUTTON_COLOR, BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { SPINNER_COLOR, SPINNER_SIZE, Spinner } from '../../../../spinner/src';
import { INPUT_I18N, TRANSLATION } from '../../constants/input-i18n';
import { useInput } from '../../contexts/useInput';
import style from './inputActions.module.scss';

interface InputActionsProps {
  disabled?: boolean;
  hasClearButton: boolean;
  hasSearchButton: boolean;
  hasToggleMaskIcon: boolean;
  inputId?: string;
  isMaskOpen: boolean;
  loading: boolean;
  onClearClick: () => void;
  onToggleMask: () => void;
  readOnly?: boolean;
}

const InputActions: FC<InputActionsProps> = ({
  disabled,
  hasClearButton,
  hasSearchButton,
  hasToggleMaskIcon,
  inputId,
  isMaskOpen,
  loading,
  onClearClick,
  onToggleMask,
  readOnly,
}) => {
  const { i18n, locale } = useInput();
  const { translate } = useI18n(TRANSLATION, locale, i18n);

  return (
    <div className={ style['input-actions'] }>
      { loading && (
        <Spinner
          className={ style['input-actions__loading'] }
          color={ disabled ? SPINNER_COLOR.neutral : SPINNER_COLOR.primary }
          role="none"
          size={ SPINNER_SIZE.xs } />
      )}
      { hasClearButton && (
        <Button
          aria-controls={ inputId }
          aria-label={ translate(INPUT_I18N.clearButton) }
          color={ BUTTON_COLOR.neutral }
          disabled={ disabled || readOnly }
          onClick={ onClearClick }
          size={ BUTTON_SIZE.xs }
          type="button"
          variant={ BUTTON_VARIANT.ghost }>
          <Icon name={ ICON_NAME.xmark } />
        </Button>
      )}
      { hasToggleMaskIcon && (
        <Button
          aria-controls={ inputId }
          aria-label={ translate(isMaskOpen ? INPUT_I18N.maskButtonHide : INPUT_I18N.maskButtonShow) }
          color={ BUTTON_COLOR.primary }
          disabled={ disabled }
          onClick={ onToggleMask }
          size={ BUTTON_SIZE.xs }
          type="button"
          variant={ BUTTON_VARIANT.ghost }>
          <Icon name={ isMaskOpen ? ICON_NAME.eye : ICON_NAME.eyeOff } />
        </Button>
      )}
      { hasSearchButton && (
        <Button
          aria-label={ translate(INPUT_I18N.searchButton) }
          color={ BUTTON_COLOR.primary }
          disabled={ disabled || readOnly }
          size={ BUTTON_SIZE.xs }
          type="submit"
          variant={ BUTTON_VARIANT.ghost }>
          <Icon name={ ICON_NAME.magnifyingGlass } />
        </Button>
      )}
    </div>
  );
};

export {
  InputActions,
};
