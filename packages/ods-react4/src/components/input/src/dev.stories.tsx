import { type FormEvent, useState } from 'react';
import { OdsInputControlled, OdsInputUncontrolled } from '.';

export default {
  title: 'OdsInput dev',
  component: OdsInputControlled,
};

// export const Default = () => (
//   <OdsInput name="default" />
// );

export const ControlledForm = () => {
  const [firstName, setFirstName] = useState('My name');

  function onFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log('Data from state:');
    console.log(`firstName: ${firstName}`);
  }

  return (
    <>
      <form onSubmit={ onFormSubmit }>
        <OdsInputControlled isClearable={ true }
                            onChange={ (e) => setFirstName(e.target.value) }
                            onClear={ () => setFirstName('') }
                            required
                            value={ firstName } />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export const UncontrolledForm = () => {
  function onFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    console.log('Data from formData:');
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  }

  return (
    <>
      <form onSubmit={ onFormSubmit }>
        <OdsInputUncontrolled defaultValue="My name"
                              isClearable={ true }
                              name="firstName"
                              required />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
