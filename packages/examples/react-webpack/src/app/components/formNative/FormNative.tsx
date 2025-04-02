import React, { useState, useRef } from 'react';
import { OdsFormField, OdsTextarea } from '@ovhcloud/ods-react';

const FormNative: React.FC = () => {
  // For the controlled part
  const [controlledValue, setControlledValue] = useState<string>('');
  
  // For the uncontrolled part
  const uncontrolledTextareaRef = useRef<HTMLTextAreaElement>(null);
  
  const handleControlledChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setControlledValue(e.target.value);
  };
  
  const handleControlledSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Controlled form submitted with value:', controlledValue);
  };
  
  const handleUncontrolledSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      'Uncontrolled form submitted with value:',
      uncontrolledTextareaRef.current?.value
    );
  };
  
  return (
    <div className="form-native-container">
      <h2>Native Integration Test</h2>
      
      <section>
        <h3>Controlled Component</h3>
        <form onSubmit={ handleControlledSubmit }>
          <OdsFormField 
            helperText="Enter your text below"
            legend="Controlled Form"
          >
            <OdsTextarea 
              onChange={ handleControlledChange }
              placeholder="Type something..."
              value={ controlledValue }
            />
            <div>
              <button type="submit">Submit</button>
            </div>
          </OdsFormField>
        </form>
        <div>
          <p>Current value: { controlledValue }</p>
        </div>
      </section>
      
      <section>
        <h3>Uncontrolled Component</h3>
        <form onSubmit={ handleUncontrolledSubmit }>
          <OdsFormField 
            helperText="Enter your text below"
            legend="Uncontrolled Form"
          >
            <OdsTextarea 
              defaultValue="Default value"
              placeholder="Type something..."
              ref={ uncontrolledTextareaRef }
            />
            <div>
              <button type="submit">Submit</button>
            </div>
          </OdsFormField>
        </form>
      </section>
    </div>
  );
};

export { FormNative };
