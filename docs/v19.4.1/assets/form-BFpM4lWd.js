import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as u}from"./index-ZwkxtaJJ.js";import{M as s,S as n}from"./index-C3P7rize.js";import{E as l}from"./ExternalLink-C9tV86xX.js";import{H as r}from"./Heading-DAsItneX.js";import{S as i}from"./StorybookLink-CUnNm_lF.js";import{S as a,R as m}from"./meta-DxXVpXmq.js";import"./index-jIWwRBLr.js";import"./iframe-B-1i39SD.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./ods-react64-C395g5lW.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./Link-BhqYqKFa-BDwROQOD.js";import"./Divider-DmVNyNnn-DCNXheUh.js";import"./index-lGh5KcWi.js";function d(t){const o={code:"code",li:"li",p:"p",ul:"ul",...u(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"OVHcloud Design System/Guides/Handling Form"}),`
`,e.jsx(r,{label:"Handling Form",level:1}),`
`,e.jsxs(o.p,{children:["ODS form elements can either be ",e.jsx(l,{href:"https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components",children:"controlled or uncontrolled"}),"."]}),`
`,e.jsxs(o.p,{children:["You can use each form element directly in your own form, or wrap them using the ",e.jsx(i,{kind:m.formField,story:a.documentation,children:"Form Field"})," component."]}),`
`,e.jsx(r,{label:"Form Field",level:2}),`
`,e.jsxs(o.p,{children:["Using ",e.jsx(i,{kind:m.formField,story:a.documentation,children:"Form Field"}),` component
will enforce layout, design, behavior and accessibility through a few dedicated components:`]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"FormFieldLabel"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"FormFieldHelperText"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"FormFieldError"})}),`
`]}),`
`,e.jsxs(o.p,{children:["You can also deport the ",e.jsx(o.code,{children:"invalid"})," prop from the form element to the ",e.jsx(o.code,{children:"FormField"})," component which will handle the error display automatically."]}),`
`,e.jsx(n,{code:`
<FormField invalid={ someCondition }>
  <FormFieldLabel>
    Input:
  </FormFieldLabel>

  <Input name="input" />

  {/* Displayed only if invalid on FormField is true */}
  <FormFieldError>
    Error message
  </FormFieldError>
</FormField>
`,dark:"true",language:"tsx"}),`
`,e.jsx(r,{label:"Uncontrolled Form",level:2}),`
`,e.jsxs(o.p,{children:["Uncontrolled component will not have the ",e.jsx(o.code,{children:"value"})," property set."]}),`
`,e.jsxs(o.p,{children:["You can use the ",e.jsx(o.code,{children:"defaultValue"})," property to initialize the component with a value."]}),`
`,e.jsx(o.p,{children:"Example of uncontrolled form:"}),`
`,e.jsx(n,{code:`
import { Button, FormField, FormFieldLabel, Input } from '@ovhcloud/ods-react';
import { type FormEvent, useRef } from 'react';

const UncontrolledForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      console.log(formData);
    }
  }

  return (
    <form
      onSubmit={ onSubmit }
      ref={ formRef }>
      <FormField>
        <FormFieldLabel>
          Input:
        </FormFieldLabel>

        <Input
          defaultValue="default"
          name="input" />
      </FormField>

      <Button type="submit">
        Submit button
      </Button>
    </form>
  );
};
`,dark:"true",language:"tsx"}),`
`,e.jsx(r,{label:"Controlled Form",level:2}),`
`,e.jsxs(o.p,{children:["Controlled components will manage their ",e.jsx(o.code,{children:"value"})," prop on their own and react to value change events."]}),`
`,e.jsx(o.p,{children:"Example of controlled form:"}),`
`,e.jsx(n,{code:`
import { Button, FormField, FormFieldLabel, Input } from '@ovhcloud/ods-react';
import { type ChangeEvent, useState } from 'react';

const ControlledForm = () => {
  const [inputValue, setInputValue] = useState('default');

  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    console.log('input: ', inputValue);
  }

  return (
    <form onSubmit={ onSubmit }>
      <FormField>
        <FormFieldLabel>
          Input:
        </FormFieldLabel>

        <Input
          name="input"
          onChange={ onInputChange }
          value={ inputValue } />
      </FormField>

      <Button type="submit">
        Submit button
      </Button>
    </form>
  );
};
`,dark:"true",language:"tsx"}),`
`,e.jsx(r,{label:"Using form library",level:2}),`
`,e.jsx(o.p,{children:"We'll demonstrate here a few form librairy, but you can plug ODS form elements with any library you like."}),`
`,e.jsxs(o.p,{children:["Regardless of the library used, you can also use a schema validator to manage your data (like ",e.jsx(l,{href:"https://github.com/jquense/yup",children:"yup"})," or ",e.jsx(l,{href:"https://zod.dev/",children:"zod"}),")."]}),`
`,e.jsx(r,{label:"react-hook-form",level:3}),`
`,e.jsxs(o.p,{children:[e.jsx(l,{href:"https://react-hook-form.com",children:"React Hook Form"})," is thought around native uncontrolled form elements (using ",e.jsx(o.code,{children:"register"}),")."]}),`
`,e.jsxs(o.p,{children:["These will mork on most ODS components, but some specific one may still need to rely on the lib ",e.jsx(o.code,{children:"Controller"})," component."]}),`
`,e.jsx(n,{code:`
import { Button, Datepicker, DatepickerContent, DatepickerControl, FormField, FormFieldLabel, Input } from '@ovhcloud/ods-react';
import { Controller, useForm } from 'react-hook-form';

type FormData = {
  datepicker: string,
  input: string,
}

const FormHookForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    setValue,
  } = useForm<FormData>({ mode: 'onBlur' });

  function onSubmit(data: FormData): void {
    console.log(data);
  }

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <FormField invalid={ !!errors.input }>
        <FormFieldLabel>
          Input:
        </FormFieldLabel>

        <Input { ...register('input') } />
      </FormField>

      <Controller
        control={ control }
        name="datepicker"
        render={ ({ field} ) => (
          <FormField invalid={ !!errors.datepicker }>
            <FormFieldLabel>
              Datepicker:
            </FormFieldLabel>

            <Datepicker onValueChange={ ({ value }) => setValue(field.name, value) }>
              <DatepickerControl />

              <DatepickerContent />
            </Datepicker>
          </FormField>
        )} />

      <Button type="submit">
        Submit button
      </Button>
    </form>
  );
}
`,dark:"true",language:"tsx"}),`
`,e.jsx(r,{label:"formik",level:3}),`
`,e.jsxs(o.p,{children:["Here is another example using ",e.jsx(l,{href:"https://formik.org",children:"Formik"})," library."]}),`
`,e.jsx(n,{code:`
import { Button, Datepicker, DatepickerContent, DatepickerControl, FormField, FormFieldLabel, Input } from '@ovhcloud/ods-react';
import { useFormik } from 'formik';

type FormData = {
  datepicker: string,
  input: string,
}

const FormFormik = () => {
  const formik = useFormik<FormData>({
    onSubmit: (values) => {
      console.log(values);
    },
    validateOnMount: true,
    validationSchema,
  });

  return (
    <form onSubmit={ formik.handleSubmit }>
      <FormField invalid={ formik.touched.input && !!formik.errors.input }>
        <FormFieldLabel>
          Input:
        </FormFieldLabel>

        <Input
          name="input"
          onBlur={ formik.handleBlur }
          onChange={ formik.handleChange } />
      </FormField>

      <FormField invalid={ formik.touched.datepicker && !!formik.errors.datepicker }>
        <FormFieldLabel>
          Datepicker:
        </FormFieldLabel>

        <Datepicker
          name="datepicker"
          onBlur={ formik.handleBlur }
          onValueChange={ ({ value }) => {
            formik.setFieldValue('datepicker', value);
          }}>
          <DatepickerControl />

          <DatepickerContent />
        </Datepicker>
      </FormField>

      <Button type="submit">
        Submit button
      </Button>
    </form>
  );
}
`,dark:"true",language:"tsx"})]})}function B(t={}){const{wrapper:o}={...u(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(d,{...t})}):d(t)}export{B as default};
