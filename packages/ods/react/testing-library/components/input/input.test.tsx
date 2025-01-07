import '@testing-library/jest-dom';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import OdsInput from '../../../src/components/stencil-generated/OdsInput';
import { OdsInputChangeEvent } from '../../../../dist/types';
import { type Components } from '../../../../dist/types/components';

describe('Input component', () => {
  HTMLElement.prototype.attachInternals = () => ({
    setFormValue: jest.fn(),
    setValidity: jest.fn(),
  }) as unknown as ElementInternals;

  let value = '';
  const sharedProps = {
    ariaLabel: 'ods-input',
    onOdsChange: (event: OdsInputChangeEvent) => value = event.detail.value as string,
    name: 'input-react-testing-library',
    value,
  };

  function setup(jsx: React.ReactNode) {
    return {
      user: userEvent.setup(),
      ...render(jsx),
    }
  }

  afterEach(() => {
    cleanup();
  });

  it('render correctly', async () => {
    const { baseElement } = setup(<OdsInput {...sharedProps} />);

    expect(baseElement).toBeDefined()
  });

  it('render correctly with loading', async () => {
    const { container } = setup(<OdsInput {...sharedProps} isLoading />);
    const loading = container.querySelector('.ods-input__actions__spinner');
    expect(loading).toBeDefined()
  });

  it('should change value', async () => {
    const { container, getByLabelText } = setup(<OdsInput {...sharedProps} isClearable />);
    const input = getByLabelText('ods-input') as Components.OdsInput & HTMLElement;

    expect(container.querySelector('ods-button[icon="xmark"]')).toBeNull();

    input.value = 'Test'

    const clearable = container.querySelector('ods-button[icon="xmark"]');
    expect(clearable).toBeDefined();
    expect(input).toHaveProperty('value', 'Test');
  });

  it('render correctly with masked', async () => {
    const { container, getByLabelText } = setup(<OdsInput {...sharedProps} isMasked />);
    const input = getByLabelText('ods-input') as Components.OdsInput & HTMLElement;

   const masked = container.querySelector('ods-button[icon="eye"]');
    expect(masked).toBeDefined();

    input.isMasked = false;

    const maskedOff = container.querySelector('ods-button[icon="eye-off"]');
    expect(maskedOff).toBeDefined();
  });

  it('should clear with button', async () => {
    const odsFocus = jest.fn();
    const { getByLabelText } = setup(<OdsInput {...sharedProps} onOdsFocus={odsFocus} />);
    const input = getByLabelText('ods-input') as Components.OdsInput & HTMLElement;
    fireEvent.focus(input);

    waitFor(() => {
      expect(odsFocus).toHaveBeenCalledTimes(1);
    })
  });

  it('should clear with button', async () => {
    const odsClear = jest.fn();
    const { container } = setup(<OdsInput {...sharedProps} onOdsClear={odsClear} />);
    const clearButton = container.querySelector('ods-button[icon="xmark"]');
    if (clearButton) {
      fireEvent.click(clearButton);
    }
    waitFor(() => {
      expect(odsClear).toHaveBeenCalledTimes(1);
    })
  });
});
