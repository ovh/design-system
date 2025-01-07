import { type OdsToggleChangeEvent } from '@ovhcloud/ods-components';
import OdsButton from '@ovhcloud/ods-components-react/ods-button';
import OdsToggle from '@ovhcloud/ods-components-react/ods-toggle';
import React, { type ReactElement, useRef, useState } from 'react';

function TestToggle(): ReactElement {
  const [isToggled, setIsToggled] = useState(true);
  const toggleRef = useRef<HTMLOdsToggleElement>(null)

  function onUpdateToggleRemotely() {
    toggleRef.current?.toggle();
  }

  return (
    <div>
      <p>
        Toggle value: { isToggled.toString() }
      </p>

      <div>
        <OdsToggle
          defaultValue={ isToggled }
          name="toggle"
          onOdsChange={ (e: OdsToggleChangeEvent) => {
            setIsToggled(e.detail.value)
          }}
          ref={ toggleRef } />
      </div>

      <br /><br />

      <OdsButton onClick={ onUpdateToggleRemotely }
                 label="Update toggle remotely"
      />
    </div>
  );
}

export { TestToggle };
