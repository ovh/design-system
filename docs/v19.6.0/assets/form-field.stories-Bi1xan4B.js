import{f as o}from"./Input-DOUmw7EZ-2zJV36ZU.js";import{e,r as p}from"./index-jIWwRBLr.js";import{B as E,d as G}from"./Button-B-GJ-1TA.js";import{a as A}from"./colors-DSObuHxd.js";import{b as s,a as l,c as d,d as b,F as r}from"./FormFieldLabelSubLabel-DCAb65DU.js";import{M as _e,a as Re}from"./MessageIcon-D6XwSjGm.js";import{P as Oe,a as Ie,b as Pe}from"./PhoneNumberCountryList-BhqzlWdL.js";import{T as u,a as F}from"./Text-CW33_IfE.js";import{T}from"./Textarea-di6qQWES.js";import{e as we,o as He,C as y}from"./controls-BtiQQn1l.js";const Ae={argTypes:we(["id","required"]),component:r,subcomponents:{FormFieldError:b,FormFieldHelper:d,FormFieldLabel:l,FormFieldLabelSubLabel:s},title:"React Components/Form Field"},L={render:t=>e.createElement(r,{invalid:t.invalid},e.createElement(l,null,t.label,e.createElement(s,null,t.sublabel)),e.createElement(T,{name:"demo"}),e.createElement(d,null,t.helperText),e.createElement(b,null,t.errorText)),argTypes:He({errorText:{table:{category:y.slot,type:{summary:"string"}},control:"text"},helperText:{table:{category:y.slot,type:{summary:"string"}},control:"text"},invalid:{table:{category:y.general},control:"boolean"},label:{table:{category:y.slot,type:{summary:"string"}},control:"text"},sublabel:{table:{category:y.slot,type:{summary:"string"}},control:"text"}})},f={globals:{imports:"import { FormField, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(T,{name:"textarea"}))},x={globals:{imports:"import { FormField, FormFieldError, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{invalid:!0},e.createElement(T,{name:"textarea"}),e.createElement(b,null,"Error message"))},S={globals:{imports:"import { BUTTON_COLOR, BUTTON_VARIANT, Button, FormField, FormFieldHelper, FormFieldLabel, FormFieldLabelSubLabel, Input, TEXT_PRESET, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>{const[t,m]=p.useState({});function n(i){const a=i.target;m(c=>({...c,[a.name]:a.validity.valid?void 0:a.validationMessage}))}return e.createElement("form",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e.createElement(r,null,e.createElement(l,null,"Please type DELETE to confirm",e.createElement(s,null,"- mandatory")),e.createElement(o,{invalid:!!t.confirmation,name:"confirmation",onBlur:n,pattern:"^DELETE$",placeholder:"DELETE",required:!0}),e.createElement(d,null,e.createElement(u,{preset:F.caption},"This action is irreversible."))),e.createElement("div",{style:{display:"flex",justifyContent:"flex-end",gap:"16px"}},e.createElement(E,{variant:G.outline},"Cancel"),e.createElement(E,{color:A.critical},"Delete account")))}},h={globals:{imports:`import { BUTTON_COLOR, BUTTON_VARIANT, Button, FormField, FormFieldError, FormFieldHelper, FormFieldLabel, FormFieldLabelSubLabel, Input, Message, MessageBody, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { type FormEvent, useState } from 'react';`},tags:["!dev"],render:({})=>{const[t,m]=p.useState({}),[n,i]=p.useState(""),[a,c]=p.useState(!1);function Ne(g){g.preventDefault(),i(""),c(!0),setTimeout(()=>{i("Something went wrong"),c(!1)},1e3)}function M(g){const v=g.target;m(H=>({...H,[v.name]:v.validity.valid?void 0:v.validationMessage}))}function D(g){g.preventDefault();const v=g.target;m(H=>({...H,[v.name]:v.validationMessage}))}return e.createElement("form",{onSubmit:Ne,style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e.createElement(r,{invalid:!!t.firstname},e.createElement(l,null,"First name",e.createElement(s,null,"- mandatory")),e.createElement(o,{invalid:!!t.firstname,name:"firstname",onBlur:M,onInvalid:D,placeholder:"Type your first name",required:!0}),e.createElement(b,null,t.firstname)),e.createElement(r,{invalid:!!t.email},e.createElement(l,null,"Email",e.createElement(s,null,"- mandatory")),e.createElement(o,{invalid:!!t.email,name:"email",onBlur:M,onInvalid:D,pattern:"^((?!\\.)[\\w\\-_.]*[^.])(@\\w+)(\\.\\w+(\\.\\w+)?[^.\\W])$",placeholder:"Type your email",required:!0}),e.createElement(b,null,t.email)),!!n&&e.createElement(_e,{color:A.critical,onRemove:()=>i("")},e.createElement(Re,null,n)),e.createElement("div",{style:{display:"flex",justifyContent:"flex-end",gap:"16px"}},e.createElement(E,{disabled:a,variant:G.outline},"Cancel"),e.createElement(E,{color:A.critical,loading:a,type:"submit"},"Delete account")))}},B={globals:{imports:`import { Button, FormField, FormFieldLabel, FormFieldLabelSubLabel, Input, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { type FormEvent, useState } from 'react';`},tags:["!dev"],render:({})=>{const[t,m]=p.useState({});function n(i){const a=i.target;m(c=>({...c,[a.name]:a.validity.valid?void 0:a.validationMessage}))}return e.createElement("form",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e.createElement(u,{preset:F.heading3},"Personal Information"),e.createElement(r,null,e.createElement(l,null,"First name",e.createElement(s,null,"- mandatory")),e.createElement(o,{invalid:!!t.firstname,name:"firstname",onBlur:n,placeholder:"Type your first name",required:!0})),e.createElement(r,null,e.createElement(l,null,"Last name",e.createElement(s,null,"- mandatory")),e.createElement(o,{invalid:!!t.lastname,name:"lastname",onBlur:n,placeholder:"Type your last name",required:!0})),e.createElement(u,{preset:F.heading3},"Company Information"),e.createElement(r,null,e.createElement(l,null,"Company name"),e.createElement(o,{name:"company",placeholder:"OVHcloud"})),e.createElement(r,null,e.createElement(l,null,"VAT number"),e.createElement(o,{name:"vat",placeholder:"vat"})),e.createElement("div",{style:{display:"flex",justifyContent:"center"}},e.createElement(E,null,"Save")))}},C={globals:{imports:`import { FormField, FormFieldHelper, FormFieldLabel, FormFieldLabelSubLabel, Input, PhoneNumber, PhoneNumberControl, TEXT_PRESET, Text, Textarea } from '@ovhcloud/ods-react';
import { type FormEvent, useState } from 'react';`},tags:["!dev"],render:({})=>{const[t,m]=p.useState({});function n(i){const a=i.target;m(c=>({...c,[a.name]:a.validity.valid?void 0:a.validationMessage}))}return e.createElement("form",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e.createElement(r,null,e.createElement(l,null,"First name",e.createElement(s,null,"- mandatory")),e.createElement(o,{invalid:!!t.firstname,name:"firstname",onBlur:n,placeholder:"Type your first name",required:!0})),e.createElement(r,null,e.createElement(l,null,"Last name",e.createElement(s,null,"- mandatory")),e.createElement(o,{invalid:!!t.lastname,name:"lastname",onBlur:n,placeholder:"Type your last name",required:!0})),e.createElement(r,null,e.createElement(l,null,"Company"),e.createElement(o,{name:"company",placeholder:"Company"})),e.createElement(r,null,e.createElement(l,null,"Phone"),e.createElement(Oe,{name:"phonenumber"},e.createElement(Ie,null)),e.createElement(d,null,e.createElement(u,{preset:F.caption},"Include country code (e.g. +33 6 00 00 00 00)"))),e.createElement(r,null,e.createElement(l,null,"Email",e.createElement(s,null,"- mandatory")),e.createElement(o,{invalid:!!t.email,name:"email",onBlur:n,pattern:"^((?!\\.)[\\w\\-_.]*[^.])(@\\w+)(\\.\\w+(\\.\\w+)?[^.\\W])$",placeholder:"Your email",required:!0,type:"email"}),e.createElement(d,null,e.createElement(u,{preset:F.caption},"Format: name@example.com"))))}},O={globals:{imports:"import { BUTTON_VARIANT, Button, FormField, FormFieldLabel, PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("form",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e.createElement(r,null,e.createElement(l,null,"Phone number"),e.createElement(Oe,{name:"phonenumber"},e.createElement(Pe,null),e.createElement(Ie,null))),e.createElement("div",{style:{display:"flex",justifyContent:"flex-end",gap:"16px"}},e.createElement(E,{variant:G.outline},"Back"),e.createElement(E,null,"Update profile")))},I={globals:{imports:"import { TEXT_PRESET, FormField, FormFieldHelper, Text, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(T,{name:"textarea"}),e.createElement(d,null,e.createElement(u,{preset:F.caption},"Helper text")))},N={globals:{imports:"import { FormField, FormFieldLabel, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(l,null,"Description:"),e.createElement(T,{name:"textarea"}))},_={globals:{imports:"import { FormField, FormFieldLabel, FormFieldLabelSubLabel, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(l,null,"Description",e.createElement(s,null,"- mandatory")),e.createElement(T,{name:"textarea"}))},R={parameters:{layout:"centered"},tags:["!dev"],render:({})=>{const[m,n]=p.useState(0);function i(a){n(a.target.value.length)}return e.createElement(r,{invalid:m>200},e.createElement(l,null,"Description:"),e.createElement(T,{name:"description",onInput:i}),e.createElement(d,{style:{display:"flex",justifyContent:"space-between"}},e.createElement(u,{preset:F.caption},"Helper text"),e.createElement(u,{preset:F.caption},m,"/",200)),e.createElement(b,null,"Error message"))}},P={globals:{imports:"import { FormField, FormFieldHelper, FormFieldLabel, Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(l,null,"Login:"),e.createElement(o,{name:"input"}),e.createElement(d,null,"Username or email address"))},w={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px"}},e.createElement(r,null,e.createElement(l,null,"Label"),e.createElement(o,{name:"input"})),e.createElement(r,null,e.createElement(o,{name:"input"}),e.createElement(d,null,"Helper text")),e.createElement(r,{invalid:!0},e.createElement(o,{name:"input"}),e.createElement(b,null,"Error message")))};var U,X,q;L.parameters={...L.parameters,docs:{...(U=L.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: (args: DemoArg) => <FormField invalid={args.invalid}>
      <FormFieldLabel>
        {args.label}
        <FormFieldLabelSubLabel>
          {args.sublabel}
        </FormFieldLabelSubLabel>
      </FormFieldLabel>

      <Textarea name="demo" />

      <FormFieldHelper>
        {args.helperText}
      </FormFieldHelper>

      <FormFieldError>
        {args.errorText}
      </FormFieldError>
    </FormField>,
  argTypes: orderControls({
    errorText: {
      table: {
        category: CONTROL_CATEGORY.slot,
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    helperText: {
      table: {
        category: CONTROL_CATEGORY.slot,
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    invalid: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    label: {
      table: {
        category: CONTROL_CATEGORY.slot,
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    sublabel: {
      table: {
        category: CONTROL_CATEGORY.slot,
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    }
  })
}`,...(q=(X=L.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var V,j,Y;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, Textarea } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <Textarea name="textarea" />
    </FormField>
}`,...(Y=(j=f.parameters)==null?void 0:j.docs)==null?void 0:Y.source}}};var $,W,k;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, FormFieldError, Textarea } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField invalid>
      <Textarea name="textarea" />

      <FormFieldError>
        Error message
      </FormFieldError>
    </FormField>
}`,...(k=(W=x.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var z,J,K;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
  globals: {
    imports: \`import { BUTTON_COLOR, BUTTON_VARIANT, Button, FormField, FormFieldHelper, FormFieldLabel, FormFieldLabelSubLabel, Input, TEXT_PRESET, Text } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => {
    const [localError, setLocalError] = useState<Record<string, string | undefined>>({});
    function onBlur(e: FormEvent): void {
      const target = e.target as HTMLInputElement;
      setLocalError(error => ({
        ...error,
        [target.name]: target.validity.valid ? undefined : target.validationMessage
      }));
    }
    return <form style={{
      display: 'flex',
      flexFlow: 'column',
      rowGap: '8px'
    }}>
        <FormField>
          <FormFieldLabel>
            Please type DELETE to confirm
            <FormFieldLabelSubLabel>
              - mandatory
            </FormFieldLabelSubLabel>
          </FormFieldLabel>

          <Input invalid={!!localError.confirmation} name="confirmation" onBlur={onBlur} pattern="^DELETE$" placeholder="DELETE" required />

          <FormFieldHelper>
            <Text preset={TEXT_PRESET.caption}>
              This action is irreversible.
            </Text>
          </FormFieldHelper>
        </FormField>

        <div style={{
        display: "flex",
        justifyContent: "flex-end",
        gap: "16px"
      }}>
          <Button variant={BUTTON_VARIANT.outline}>
            Cancel
          </Button>

          <Button color={BUTTON_COLOR.critical}>
            Delete account
          </Button>
        </div>
      </form>;
  }
}`,...(K=(J=S.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Z,ee;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  globals: {
    imports: \`import { BUTTON_COLOR, BUTTON_VARIANT, Button, FormField, FormFieldError, FormFieldHelper, FormFieldLabel, FormFieldLabelSubLabel, Input, Message, MessageBody, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { type FormEvent, useState } from 'react';\`
  },
  tags: ['!dev'],
  render: ({}) => {
    const [localError, setLocalError] = useState<Record<string, string | undefined>>({});
    const [globalError, setGlobalError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    function handleSubmit(e: FormEvent): void {
      e.preventDefault();
      setGlobalError('');
      setIsSubmitting(true);

      // Fake API call
      setTimeout(() => {
        setGlobalError('Something went wrong');
        setIsSubmitting(false);
      }, 1000);
    }
    function onBlur(e: FormEvent): void {
      const target = e.target as HTMLInputElement;
      setLocalError(error => ({
        ...error,
        [target.name]: target.validity.valid ? undefined : target.validationMessage
      }));
    }
    function onInvalid(e: FormEvent): void {
      e.preventDefault();
      const target = e.target as HTMLInputElement;
      setLocalError(error => ({
        ...error,
        [target.name]: target.validationMessage
      }));
    }
    return <form onSubmit={handleSubmit} style={{
      display: 'flex',
      flexFlow: 'column',
      rowGap: '8px'
    }}>
        <FormField invalid={!!localError.firstname}>
          <FormFieldLabel>
            First name
            <FormFieldLabelSubLabel>
              - mandatory
            </FormFieldLabelSubLabel>
          </FormFieldLabel>

          <Input invalid={!!localError.firstname} name="firstname" onBlur={onBlur} onInvalid={onInvalid} placeholder="Type your first name" required />

          <FormFieldError>
            {localError.firstname}
          </FormFieldError>
        </FormField>

        <FormField invalid={!!localError.email}>
          <FormFieldLabel>
            Email
            <FormFieldLabelSubLabel>
              - mandatory
            </FormFieldLabelSubLabel>
          </FormFieldLabel>

          <Input invalid={!!localError.email} name="email" onBlur={onBlur} onInvalid={onInvalid} pattern="^((?!\\.)[\\w\\-_.]*[^.])(@\\w+)(\\.\\w+(\\.\\w+)?[^.\\W])$" placeholder="Type your email" required />

          <FormFieldError>
            {localError.email}
          </FormFieldError>
        </FormField>

        {!!globalError && <Message color={MESSAGE_COLOR.critical} onRemove={() => setGlobalError('')}>
            <MessageBody>
              {globalError}
            </MessageBody>
          </Message>}

        <div style={{
        display: "flex",
        justifyContent: "flex-end",
        gap: "16px"
      }}>
          <Button disabled={isSubmitting} variant={BUTTON_VARIANT.outline}>
            Cancel
          </Button>

          <Button color={BUTTON_COLOR.critical} loading={isSubmitting} type="submit">
            Delete account
          </Button>
        </div>
      </form>;
  }
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,te,le;B.parameters={...B.parameters,docs:{...(re=B.parameters)==null?void 0:re.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, FormField, FormFieldLabel, FormFieldLabelSubLabel, Input, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { type FormEvent, useState } from 'react';\`
  },
  tags: ['!dev'],
  render: ({}) => {
    const [localError, setLocalError] = useState<Record<string, string | undefined>>({});
    function onBlur(e: FormEvent): void {
      const target = e.target as HTMLInputElement;
      setLocalError(error => ({
        ...error,
        [target.name]: target.validity.valid ? undefined : target.validationMessage
      }));
    }
    return <form style={{
      display: 'flex',
      flexFlow: 'column',
      rowGap: '8px'
    }}>
        <Text preset={TEXT_PRESET.heading3}>
          Personal Information
        </Text>

        <FormField>
          <FormFieldLabel>
            First name
            <FormFieldLabelSubLabel>
              - mandatory
            </FormFieldLabelSubLabel>
          </FormFieldLabel>

          <Input invalid={!!localError.firstname} name="firstname" onBlur={onBlur} placeholder="Type your first name" required />
        </FormField>

        <FormField>
          <FormFieldLabel>
            Last name
            <FormFieldLabelSubLabel>
              - mandatory
            </FormFieldLabelSubLabel>
          </FormFieldLabel>

          <Input invalid={!!localError.lastname} name="lastname" onBlur={onBlur} placeholder="Type your last name" required />
        </FormField>

        <Text preset={TEXT_PRESET.heading3}>
          Company Information
        </Text>

        <FormField>
          <FormFieldLabel>
            Company name
          </FormFieldLabel>

          <Input name="company" placeholder="OVHcloud" />
        </FormField>

        <FormField>
          <FormFieldLabel>
            VAT number
          </FormFieldLabel>

          <Input name="vat" placeholder="vat" />
        </FormField>

        <div style={{
        display: "flex",
        justifyContent: "center"
      }}>
          <Button>
            Save
          </Button>
        </div>
      </form>;
  }
}`,...(le=(te=B.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ae,oe,ne;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, FormFieldHelper, FormFieldLabel, FormFieldLabelSubLabel, Input, PhoneNumber, PhoneNumberControl, TEXT_PRESET, Text, Textarea } from '@ovhcloud/ods-react';
import { type FormEvent, useState } from 'react';\`
  },
  tags: ['!dev'],
  render: ({}) => {
    const [localError, setLocalError] = useState<Record<string, string | undefined>>({});
    function onBlur(e: FormEvent): void {
      const target = e.target as HTMLInputElement;
      setLocalError(error => ({
        ...error,
        [target.name]: target.validity.valid ? undefined : target.validationMessage
      }));
    }
    return <form style={{
      display: 'flex',
      flexFlow: 'column',
      rowGap: '8px'
    }}>
        <FormField>
          <FormFieldLabel>
            First name
            <FormFieldLabelSubLabel>
              - mandatory
            </FormFieldLabelSubLabel>
          </FormFieldLabel>

          <Input invalid={!!localError.firstname} name="firstname" onBlur={onBlur} placeholder="Type your first name" required />
        </FormField>

        <FormField>
          <FormFieldLabel>
            Last name
            <FormFieldLabelSubLabel>
              - mandatory
            </FormFieldLabelSubLabel>
          </FormFieldLabel>

          <Input invalid={!!localError.lastname} name="lastname" onBlur={onBlur} placeholder="Type your last name" required />
        </FormField>

        <FormField>
          <FormFieldLabel>
            Company
          </FormFieldLabel>

          <Input name="company" placeholder="Company" />
        </FormField>

        <FormField>
          <FormFieldLabel>
            Phone
          </FormFieldLabel>

          <PhoneNumber name="phonenumber">
            <PhoneNumberControl />
          </PhoneNumber>

          <FormFieldHelper>
            <Text preset={TEXT_PRESET.caption}>
              Include country code (e.g. +33 6 00 00 00 00)
            </Text>
          </FormFieldHelper>
        </FormField>

        <FormField>
          <FormFieldLabel>
            Email
            <FormFieldLabelSubLabel>
              - mandatory
            </FormFieldLabelSubLabel>
          </FormFieldLabel>

          <Input invalid={!!localError.email} name="email" onBlur={onBlur} pattern="^((?!\\.)[\\w\\-_.]*[^.])(@\\w+)(\\.\\w+(\\.\\w+)?[^.\\W])$" placeholder="Your email" required type="email" />

          <FormFieldHelper>
            <Text preset={TEXT_PRESET.caption}>
              Format: name@example.com
            </Text>
          </FormFieldHelper>
        </FormField>
      </form>;
  }
}`,...(ne=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var me,ie,se;O.parameters={...O.parameters,docs:{...(me=O.parameters)==null?void 0:me.docs,source:{originalSource:`{
  globals: {
    imports: \`import { BUTTON_VARIANT, Button, FormField, FormFieldLabel, PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <form style={{
    display: 'flex',
    flexFlow: 'column',
    rowGap: '8px'
  }}>
      <FormField>
        <FormFieldLabel>
          Phone number
        </FormFieldLabel>

        <PhoneNumber name="phonenumber">
          <PhoneNumberCountryList />
          <PhoneNumberControl />
        </PhoneNumber>
      </FormField>

      <div style={{
      display: "flex",
      justifyContent: "flex-end",
      gap: "16px"
    }}>
        <Button variant={BUTTON_VARIANT.outline}>
          Back
        </Button>

        <Button>
          Update profile
        </Button>
      </div>
    </form>
}`,...(se=(ie=O.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var de,ce,ue;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`{
  globals: {
    imports: \`import { TEXT_PRESET, FormField, FormFieldHelper, Text, Textarea } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <Textarea name="textarea" />

      <FormFieldHelper>
        <Text preset={TEXT_PRESET.caption}>
          Helper text
        </Text>
      </FormFieldHelper>
    </FormField>
}`,...(ue=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var Fe,pe,Ee;N.parameters={...N.parameters,docs:{...(Fe=N.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, FormFieldLabel, Textarea } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Description:
      </FormFieldLabel>

      <Textarea name="textarea" />
    </FormField>
}`,...(Ee=(pe=N.parameters)==null?void 0:pe.docs)==null?void 0:Ee.source}}};var be,Te,ge;_.parameters={..._.parameters,docs:{...(be=_.parameters)==null?void 0:be.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, FormFieldLabel, FormFieldLabelSubLabel, Textarea } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Description
        <FormFieldLabelSubLabel>- mandatory</FormFieldLabelSubLabel>
      </FormFieldLabel>

      <Textarea name="textarea" />
    </FormField>
}`,...(ge=(Te=_.parameters)==null?void 0:Te.docs)==null?void 0:ge.source}}};var ve,ye,Le;R.parameters={...R.parameters,docs:{...(ve=R.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  tags: ['!dev'],
  render: ({}) => {
    const MAX_COUNT = 200;
    const [count, setCount] = useState(0);
    function onInput(e: FormEvent): void {
      setCount((e.target as HTMLTextAreaElement).value.length);
    }
    return <FormField invalid={count > MAX_COUNT}>
        <FormFieldLabel>
          Description:
        </FormFieldLabel>

        <Textarea name="description" onInput={onInput} />

        <FormFieldHelper style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
          <Text preset={TEXT_PRESET.caption}>
            Helper text
          </Text>

          <Text preset={TEXT_PRESET.caption}>
            {count}/{MAX_COUNT}
          </Text>
        </FormFieldHelper>

        <FormFieldError>
          Error message
        </FormFieldError>
      </FormField>;
  }
}`,...(Le=(ye=R.parameters)==null?void 0:ye.docs)==null?void 0:Le.source}}};var fe,xe,Se;P.parameters={...P.parameters,docs:{...(fe=P.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, FormFieldHelper, FormFieldLabel, Input } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Login:
      </FormFieldLabel>

      <Input name="input" />

      <FormFieldHelper>
        Username or email address
      </FormFieldHelper>
    </FormField>
}`,...(Se=(xe=P.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var he,Be,Ce;w.parameters={...w.parameters,docs:{...(he=w.parameters)==null?void 0:he.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <FormField>
        <FormFieldLabel>Label</FormFieldLabel>
        <Input name="input" />
      </FormField>

      <FormField>
        <Input name="input" />
        <FormFieldHelper>Helper text</FormFieldHelper>
      </FormField>

      <FormField invalid>
        <Input name="input" />
        <FormFieldError>Error message</FormFieldError>
      </FormField>
    </div>
}`,...(Ce=(Be=w.parameters)==null?void 0:Be.docs)==null?void 0:Ce.source}}};const Ge=["Demo","Default","Error","GuideFormCritical","GuideFormError","GuideFormGroupedField","GuideFormMandatory","GuideFormSimple","Helper","Label","LabelSubLabel","Overview","AccessibilityLabel","ThemeGenerator"],ke=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityLabel:P,Default:f,Demo:L,Error:x,GuideFormCritical:S,GuideFormError:h,GuideFormGroupedField:B,GuideFormMandatory:C,GuideFormSimple:O,Helper:I,Label:N,LabelSubLabel:_,Overview:R,ThemeGenerator:w,__namedExportsOrder:Ge,default:Ae},Symbol.toStringTag,{value:"Module"}));export{P as A,f as D,x as E,ke as F,C as G,I as H,N as L,R as O,h as a,O as b,B as c,S as d,_ as e};
