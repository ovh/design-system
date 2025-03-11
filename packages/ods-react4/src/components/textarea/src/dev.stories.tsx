import { useRef } from 'react';
import { OdsTextarea } from '.';

export default {
  title: "OdsTextarea dev",
  component: OdsTextarea,
};

export const Default = () => (
  <OdsTextarea name="default" />
);

export const Disabled = () => (
  <OdsTextarea disabled name="disabled" />
);

export const Form = () => {
  const formRef = useRef(null);
  const textareaRef = useRef(null);

  function onSubmitClick(e: any) {
    e.preventDefault();

    // if (formRef.current) {
    //   const formData = new FormData(formRef.current);
    //   console.log(formData)
    // }
    if (textareaRef.current) {
      // @ts-ignore
      textareaRef.current.clear();
    }
  }

  return (
    <>
      <form id="form"
            ref={ formRef }>
        <OdsTextarea name="form-textarea"
                     onChange={ () => {} }
                     ref={ textareaRef }
                     required
                     value="Some value"
        />

        <button onClick={ onSubmitClick } type="submit">Submit</button>
      </form>
    </>
  )
}

export const HasError = () => (
  <OdsTextarea hasError name="has-error" />
);
