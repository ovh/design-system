import { BUTTON_COLOR, BUTTON_VARIANT, ICON_NAME, Button, Icon, BUTTON_SIZE } from '@ovhcloud/ods-react';
import React, { type JSX } from 'react';

interface ExportImportButtonProps {
  onClick: () => void;
}

const ExportImportButton = ({ onClick }: ExportImportButtonProps): JSX.Element => {
  return (
    <Button
      color={ BUTTON_COLOR.primary }
      variant={ BUTTON_VARIANT.outline }
      size={ BUTTON_SIZE.xs }
      onClick={ onClick }
    >
      JSON
      <Icon name={ ICON_NAME.chevronLeftUnderscore } />
    </Button>
  );
};

export { ExportImportButton };
