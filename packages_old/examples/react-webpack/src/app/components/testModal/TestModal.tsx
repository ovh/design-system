import { ODS_ICON_NAME, ODS_INPUT_TYPE, ODS_TEXT_PRESET } from '@ovhcloud/ods-components';
import { OdsButton, OdsFormField, OdsIcon, OdsInput, OdsModal, OdsText, OdsTooltip } from '@ovhcloud/ods-components/react';
import React, { type ReactElement, useState } from 'react';

function TestModal(): ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function onCloseModal() {
    setIsModalOpen(false)
  }

  function onOpenModalClick() {
    setIsModalOpen(true)
  }

  return (
    <div>
      <OdsButton label="Open modal"
                 onClick={ onOpenModalClick } />

      <OdsModal isOpen={ isModalOpen }
                onOdsClose={ onCloseModal }>
        <OdsFormField>
          <label htmlFor="label" slot="label">
            Test *
            <OdsIcon id="tooltip-trigger"
                     name={ ODS_ICON_NAME.circleQuestion }>
            </OdsIcon>

            <OdsTooltip role="tooltip"
                        strategy="fixed"
                        triggerId="tooltip-trigger">
              <OdsText preset={ ODS_TEXT_PRESET.paragraph }>
                TestTooltip
              </OdsText>
            </OdsTooltip>
          </label>
          <OdsInput type={ODS_INPUT_TYPE.text}
                    id="label"
                    name="label">
          </OdsInput>
        </OdsFormField>
      </OdsModal>
    </div>
  );
}

export { TestModal };
