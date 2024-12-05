import{j as e}from"./jsx-runtime-sbaUvk5M.js";import{u as i}from"./index-CGWm3lku.js";import{a as n,b as s,c as d}from"./index-D7X5WOeG.js";import{M as c,T as h,d as a}from"./index-D-G4MXwZ.js";import{H as o}from"./Heading-1Y93vQ6R.js";import"./iframe-BBvDorMF.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-CveiHl7W.js";function r(l){const t={code:"code",li:"li",p:"p",ul:"ul",...i(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"OVHcloud Design System/Guides/Handling Form"}),`
`,e.jsx(o,{label:"Handling Form",level:1}),`
`,e.jsx(o,{label:"How it works",level:2}),`
`,e.jsxs(t.p,{children:["ODS components are ",e.jsx(n,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_components",label:"web components",target:"_blank"}),`
scoped inside a shadow DOM, thus they don't natively interact with the DOM integrating them, especially with `,e.jsx(t.code,{children:"form"}),"."]}),`
`,e.jsxs(t.p,{children:["To solve this issue, we've implemented the ",e.jsx(n,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals",label:"ElementInternals",target:"_blank"}),`
interface on each of our form element components.`]}),`
`,e.jsxs(t.p,{children:["Thanks to that, all components manage their internal state correctly and expose everything needed to interact with any ",e.jsx(t.code,{children:"form"})," wrapping the components."]}),`
`,e.jsx(t.p,{children:"This means you can use ODS form elements in a form without any custom code and they'll match the expected native behaviour."}),`
`,e.jsx(o,{label:"ValidityState",level:3}),`
`,e.jsxs(t.p,{children:["If for some reason you need to know the ",e.jsx(n,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ValidityState",label:"ValidityState",target:"_blank"}),`
of a component, they're all exposing the following methods:`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/checkValidity",label:"checkValidity()",target:"_blank"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/validationMessage",label:"getValidationMessage()",target:"_blank"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/validity",label:"getValidity()",target:"_blank"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/reportValidity",label:"reportValidity()",target:"_blank"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/willValidate",label:"willValidate()",target:"_blank"}),`
`]}),`
`]}),`
`,e.jsx(o,{label:"Events",level:3}),`
`,e.jsx(o,{label:"Why custom events?",level:4}),`
`,e.jsxs(t.p,{children:["This is a ",e.jsx(n,{href:"https://github.com/ionic-team/stencil/issues/2822",label:"recurring debate",target:"_blank"})," within the Stencil community."]}),`
`,e.jsxs(t.p,{children:["Triggering custom events (like ",e.jsx(t.code,{children:"odsChange"}),") instead of a native ",e.jsx(t.code,{children:"change"}),` event does have some impact that may prevent some library
to works without a bit of custom code.`]}),`
`,e.jsx(t.p,{children:"Though, as overriding native events is not amongst the best practices of Stencil, we've decided to keep relying on custom events for now."}),`
`,e.jsx(o,{label:"Lifecycle",level:4}),`
`,e.jsxs(h,{children:[e.jsx("caption",{style:{captionSide:"bottom"},children:e.jsx(s,{preset:"caption",children:e.jsx(t.p,{children:"ODS form elements event lifecycle"})})}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Lifecycle"}),e.jsx("th",{children:"Events emitted"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"initial render"}),e.jsxs("td",{children:[e.jsx(t.code,{children:"odsChange"})," (except for checkbox & radio)"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"value change (user interaction or via code)"}),e.jsx("td",{children:e.jsx(t.code,{children:"odsChange"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"clear()"}),e.jsxs("td",{children:[e.jsx(t.code,{children:"odsClear"})," then ",e.jsx(t.code,{children:"odsChange"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"reset()"}),e.jsxs("td",{children:[e.jsx(t.code,{children:"odsReset"})," then ",e.jsx(t.code,{children:"odsChange"})]})]})]})]}),`
`,e.jsx(o,{label:"Checkbox & Radio",level:3}),`
`,e.jsx(t.p,{children:"Those two components are behaving a bit differently from the rest."}),`
`,e.jsxs(t.p,{children:["Other components changes their ",e.jsx(t.code,{children:"value"})," property on update, value that you receive in the ",e.jsx(t.code,{children:"detail"})," prop of the ",e.jsx(t.code,{children:"odsChange"})," event."]}),`
`,e.jsxs(t.p,{children:['But those two "checkables" components have a fixed ',e.jsx(t.code,{children:"value"}),", the update will be about the ",e.jsx(t.code,{children:"checked"}),"prop (that you receive in the ",e.jsx(t.code,{children:"detail"})," prop of the ",e.jsx(t.code,{children:"odsChange"})," event)."]}),`
`,e.jsxs(t.p,{children:["This is why no ",e.jsx(t.code,{children:"odsChange"}),` event are emitted on first render, as their value and initial checked state are already set.
Whereas "valued" components will see their value updated for example from the `,e.jsx(t.code,{children:"defaultValue"})," prop."]}),`
`,e.jsx(o,{label:"Examples",level:2}),`
`,e.jsx(d,{color:"information",isDismissible:!1,children:e.jsxs("span",{children:[`Those are simple examples to demonstrate how ODS components could be used in different context.
`,e.jsx("br",{}),"If you want to see more complex examples, please check our ",e.jsx(n,{href:"https://github.com/aesteves60/ods-playground-vanilla",label:"Vanilla",target:"_blank"})," and  ",e.jsx(n,{href:"https://github.com/dpellier/ods-playground-react",label:"React",target:"_blank"}),` playgrounds.
`,e.jsx("br",{}),"If your use case is still not covered, please reach out to us, so that we could help you and improve our documentation."]})}),`
`,e.jsx(o,{label:"Native form",level:3}),`
`,e.jsx(t.p,{children:"As ODS components are behaving as native form elements, using them in a native form does not require any custom code."}),`
`,e.jsx(a,{code:`
<form>
  <ods-input is-required
             name="text">
  </ods-input>

  <ods-textarea is-required
                name="textarea">
  </ods-textarea>

  <ods-button label="Submit"
              type="submit">
  </ods-button>
</form>

<script>
  const formElement = document.querySelector('form');

  // The form will be submitted only if all fields are valid.
  // In this case some form elements are marked as required, so it won't be submitted until they're all filled.
  formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(formElement);

    // formData will contain all named field and their values
    // {
    //    text: '...',
    //    textarea: '...',
    // }
  });
<\/script>
`,dark:"true",language:"html"}),`
`,e.jsx(o,{label:"[React] Native form",level:3}),`
`,e.jsx(t.p,{children:"As ODS components are behaving as native form elements, using them in a native form does not require any custom code."}),`
`,e.jsx(a,{code:`
function FormNative(): ReactElement {
  const formRef = useRef<HTMLFormElement>(null);

  // The form will be submitted only if all fields are valid.
  // In this case some form elements are marked as required, so it won't be submitted until they're all filled.
  function onSubmit(e: FormEvent) {
    e.preventDefault();

    const formData = new FormData(formRef.current!);

    // formData will contain all named field and their values
    // {
    //    text: '...',
    //    textarea: '...',
    // }
  }

  return (
    <form onSubmit={ onSubmit }
          ref={ formRef }>
      <OdsInput isRequired={ true }
                name="text"
                type={ ODS_INPUT_TYPE.text } />

      <OdsTextarea isRequired={ areAllRequired }
                   name="textarea" />

      <OdsButton label="Submit"
                 type="submit" />
    </form>
  );
}
`,dark:"true",language:"tsx"}),`
`,e.jsx(o,{label:"[React] using react-hook-form",level:3}),`
`,e.jsxs(t.p,{children:[e.jsx(n,{href:"https://react-hook-form.com",label:"React Hook Form",target:"_blank"})," is thought around native uncontrolled form elements (using ",e.jsx(t.code,{children:"register"}),`).
Which should in theory match ODS components.`]}),`
`,e.jsxs(t.p,{children:["Sadly, the lib relies on native ",e.jsx(t.code,{children:"blur"})," and ",e.jsx(t.code,{children:"change"}),` events to manage its internal logic, which causes issues with ODS components as we emit custom events.
There doesn't seems to be a way to customize the register with custom events, so we have to use the controlled component way (using `,e.jsx(t.code,{children:"Controller"}),")."]}),`
`,e.jsx(a,{code:`
type FormData = {
  inputText: string,
  radio: string,
}

function FormHookForm(): ReactElement {
  const {
    control,
    handleSubmit,
    setValue,
  } = useForm<FormData>({ mode: 'onBlur' });

  function onSubmit(data: FormData): void {
    console.log(data);
  }

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      {/* Basic usage of all components using value */}
      <Controller control={ control }
                  name="inputText"
                  rules={{ required: true }}
                  render={({ field }) =>
                    <OdsInput isRequired={ true }
                              name={ field.name }
                              onOdsBlur={ field.onBlur }
                              onOdsChange={ field.onChange }
                              type={ ODS_INPUT_TYPE.text } />
                  } />

      {/* Custom change management for checked elements (checkbox & radio) */}
      <Controller control={ control }
                  name="radio"
                  rules={{ required: true }}
                  render={({ field }) =>
                    <div>
                      <OdsRadio inputId="radio1"
                                isRequired={ true }
                                name={ field.name }
                                onOdsBlur={ field.onBlur }
                                onOdsChange={ (e) => {
                                  setValue(field.name, e.detail.checked ? e.detail.value || '' : '');
                                }}
                                value="radio1" />
                      <label htmlFor="radio1">Radio 1</label>

                      <OdsRadio inputId="radio2"
                                isRequired={ true }
                                name={ field.name }
                                onOdsBlur={ field.onBlur }
                                onOdsChange={ (e) => {
                                  setValue(field.name, e.detail.checked ? e.detail.value || '' : '');
                                }}
                                value="radio2" />
                      <label htmlFor="radio2">Radio 2</label>
                    </div>
                  } />

      <OdsButton label="Submit"
                 type="submit" />
    </form>
  );
}
`,dark:"true",language:"tsx"}),`
`,e.jsx(o,{label:"[React] using formik",level:3}),`
`,e.jsxs(t.p,{children:["Here is another example using ",e.jsx(n,{href:"https://formik.org",label:"Formik",target:"_blank"}),` library.
Just plug the formik `,e.jsx(t.code,{children:"handleBlur"})," and ",e.jsx(t.code,{children:"handleChange"}),` handlers to the ods events handlers, except checkbox & radio
where you have to set the field value on change.`]}),`
`,e.jsx(a,{code:`
type FormData = {
  inputText: string,
  radio: string,
}

function FormFormik(): ReactElement {
  const formik = useFormik<FormData>({
    initialValues: {
      inputText: '',
      radio: '',
    },
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <form onSubmit={ formik.handleSubmit }>
      <OdsInput isRequired={ true }
                name="inputText"
                onOdsBlur={ formik.handleBlur }
                onOdsChange={ formik.handleChange }
                type={ ODS_INPUT_TYPE.text } />

      <div>
        <OdsRadio inputId="radio1"
                  isRequired={ true }
                  name="radio"
                  onOdsBlur={ formik.handleBlur }
                  onOdsChange={ (e) => {
                    formik.setFieldValue('radio', e.detail.checked ?  e.detail.value : null);
                  }}
                  value="radio1" />
        <label htmlFor="radio1">Radio 1</label>

        <OdsRadio inputId="radio2"
                  isRequired={ true }
                  name="radio"
                  onOdsBlur={ formik.handleBlur }
                  onOdsChange={ (e) => {
                    formik.setFieldValue('radio', e.detail.checked ?  e.detail.value : null);
                  }}
                  value="radio2" />
        <label htmlFor="radio2">Radio 2</label>
      </div>

      <OdsButton label="Submit"
                 type="submit" />
    </form>
  );
}
`,dark:"true",language:"tsx"})]})}function S(l={}){const{wrapper:t}={...i(),...l.components};return t?e.jsx(t,{...l,children:e.jsx(r,{...l})}):r(l)}export{S as default};
