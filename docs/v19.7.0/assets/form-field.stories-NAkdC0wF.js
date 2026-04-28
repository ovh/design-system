import{f as o}from"./Input--5Y_YAC9-ENU-JAMy.js";import{e,r as b}from"./index-jIWwRBLr.js";import{B as T,d as M}from"./Button-B-GJ-1TA.js";import{a as G}from"./colors-DSObuHxd.js";import{b as m,a as l,c as d,d as p,F as r}from"./index-B0M5RXeR.js";import{M as we,a as Ae}from"./index-CTOO_CWD.js";import{P as Re,a as Pe,b as Ge}from"./index-BUvxeS15.js";import{T as c,a as u}from"./Text-CAQM6i-X.js";import{T as E}from"./Textarea-1HJNDjsP.js";import{e as Me,o as De,C as v}from"./controls-BtiQQn1l.js";const Ue={argTypes:Me(["id","required"]),component:r,subcomponents:{FormFieldError:p,FormFieldHelper:d,FormFieldLabel:l,FormFieldLabelSubLabel:m},title:"React Components/Form Field"},y={render:t=>e.createElement(r,{invalid:t.invalid},e.createElement(l,null,t.label,e.createElement(m,null,t.sublabel)),e.createElement(E,{name:"demo"}),e.createElement(d,null,t.helperText),e.createElement(p,null,t.errorText)),argTypes:De({errorText:{table:{category:v.slot,type:{summary:"string"}},control:"text"},helperText:{table:{category:v.slot,type:{summary:"string"}},control:"text"},invalid:{table:{category:v.general},control:"boolean"},label:{table:{category:v.slot,type:{summary:"string"}},control:"text"},sublabel:{table:{category:v.slot,type:{summary:"string"}},control:"text"}})},f={tags:["!dev"],render:({})=>e.createElement(r,{invalid:!0},e.createElement(l,null,"Description:",e.createElement(m,null,"- mandatory")),e.createElement(E,{name:"description"}),e.createElement(d,null,e.createElement(c,{preset:u.caption},"Helper text")),e.createElement(p,null,"Error message"))},x={globals:{imports:"import { FormField, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(E,{name:"textarea"}))},S={globals:{imports:"import { FormField, FormFieldError, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{invalid:!0},e.createElement(E,{name:"textarea"}),e.createElement(p,null,"Error message"))},h={globals:{imports:"import { BUTTON_COLOR, BUTTON_VARIANT, Button, FormField, FormFieldHelper, FormFieldLabel, FormFieldLabelSubLabel, Input, TEXT_PRESET, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>{const[t,i]=b.useState({});function n(s){const a=s.target;i(F=>({...F,[a.name]:a.validity.valid?void 0:a.validationMessage}))}return e.createElement("form",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e.createElement(r,null,e.createElement(l,null,"Please type DELETE to confirm",e.createElement(m,null,"- mandatory")),e.createElement(o,{invalid:!!t.confirmation,name:"confirmation",onBlur:n,pattern:"^DELETE$",placeholder:"DELETE",required:!0}),e.createElement(d,null,e.createElement(c,{preset:u.caption},"This action is irreversible."))),e.createElement("div",{style:{display:"flex",justifyContent:"flex-end",gap:"16px"}},e.createElement(T,{variant:M.outline},"Cancel"),e.createElement(T,{color:G.critical},"Delete account")))}},B={globals:{imports:`import { BUTTON_COLOR, BUTTON_VARIANT, Button, FormField, FormFieldError, FormFieldHelper, FormFieldLabel, FormFieldLabelSubLabel, Input, Message, MessageBody, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { type FormEvent, useState } from 'react';`},tags:["!dev"],render:({})=>{const[t,i]=b.useState({}),[n,s]=b.useState(""),[a,F]=b.useState(!1);function He(g){g.preventDefault(),s(""),F(!0),setTimeout(()=>{s("Something went wrong"),F(!1)},1e3)}function D(g){const L=g.target;i(A=>({...A,[L.name]:L.validity.valid?void 0:L.validationMessage}))}function U(g){g.preventDefault();const L=g.target;i(A=>({...A,[L.name]:L.validationMessage}))}return e.createElement("form",{onSubmit:He,style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e.createElement(r,{invalid:!!t.firstname},e.createElement(l,null,"First name",e.createElement(m,null,"- mandatory")),e.createElement(o,{invalid:!!t.firstname,name:"firstname",onBlur:D,onInvalid:U,placeholder:"Type your first name",required:!0}),e.createElement(p,null,t.firstname)),e.createElement(r,{invalid:!!t.email},e.createElement(l,null,"Email",e.createElement(m,null,"- mandatory")),e.createElement(o,{invalid:!!t.email,name:"email",onBlur:D,onInvalid:U,pattern:"^((?!\\.)[\\w\\-_.]*[^.])(@\\w+)(\\.\\w+(\\.\\w+)?[^.\\W])$",placeholder:"Type your email",required:!0}),e.createElement(p,null,t.email)),!!n&&e.createElement(we,{color:G.critical,onRemove:()=>s("")},e.createElement(Ae,null,n)),e.createElement("div",{style:{display:"flex",justifyContent:"flex-end",gap:"16px"}},e.createElement(T,{disabled:a,variant:M.outline},"Cancel"),e.createElement(T,{color:G.critical,loading:a,type:"submit"},"Delete account")))}},C={globals:{imports:`import { Button, FormField, FormFieldLabel, FormFieldLabelSubLabel, Input, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { type FormEvent, useState } from 'react';`},tags:["!dev"],render:({})=>{const[t,i]=b.useState({});function n(s){const a=s.target;i(F=>({...F,[a.name]:a.validity.valid?void 0:a.validationMessage}))}return e.createElement("form",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e.createElement(c,{preset:u.heading3},"Personal Information"),e.createElement(r,null,e.createElement(l,null,"First name",e.createElement(m,null,"- mandatory")),e.createElement(o,{invalid:!!t.firstname,name:"firstname",onBlur:n,placeholder:"Type your first name",required:!0})),e.createElement(r,null,e.createElement(l,null,"Last name",e.createElement(m,null,"- mandatory")),e.createElement(o,{invalid:!!t.lastname,name:"lastname",onBlur:n,placeholder:"Type your last name",required:!0})),e.createElement(c,{preset:u.heading3},"Company Information"),e.createElement(r,null,e.createElement(l,null,"Company name"),e.createElement(o,{name:"company",placeholder:"OVHcloud"})),e.createElement(r,null,e.createElement(l,null,"VAT number"),e.createElement(o,{name:"vat",placeholder:"vat"})),e.createElement("div",{style:{display:"flex",justifyContent:"center"}},e.createElement(T,null,"Save")))}},O={globals:{imports:`import { FormField, FormFieldHelper, FormFieldLabel, FormFieldLabelSubLabel, Input, PhoneNumber, PhoneNumberControl, TEXT_PRESET, Text, Textarea } from '@ovhcloud/ods-react';
import { type FormEvent, useState } from 'react';`},tags:["!dev"],render:({})=>{const[t,i]=b.useState({});function n(s){const a=s.target;i(F=>({...F,[a.name]:a.validity.valid?void 0:a.validationMessage}))}return e.createElement("form",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e.createElement(r,null,e.createElement(l,null,"First name",e.createElement(m,null,"- mandatory")),e.createElement(o,{invalid:!!t.firstname,name:"firstname",onBlur:n,placeholder:"Type your first name",required:!0})),e.createElement(r,null,e.createElement(l,null,"Last name",e.createElement(m,null,"- mandatory")),e.createElement(o,{invalid:!!t.lastname,name:"lastname",onBlur:n,placeholder:"Type your last name",required:!0})),e.createElement(r,null,e.createElement(l,null,"Company"),e.createElement(o,{name:"company",placeholder:"Company"})),e.createElement(r,null,e.createElement(l,null,"Phone"),e.createElement(Re,{name:"phonenumber"},e.createElement(Pe,null)),e.createElement(d,null,e.createElement(c,{preset:u.caption},"Include country code (e.g. +33 6 00 00 00 00)"))),e.createElement(r,null,e.createElement(l,null,"Email",e.createElement(m,null,"- mandatory")),e.createElement(o,{invalid:!!t.email,name:"email",onBlur:n,pattern:"^((?!\\.)[\\w\\-_.]*[^.])(@\\w+)(\\.\\w+(\\.\\w+)?[^.\\W])$",placeholder:"Your email",required:!0,type:"email"}),e.createElement(d,null,e.createElement(c,{preset:u.caption},"Format: name@example.com"))))}},I={globals:{imports:"import { BUTTON_VARIANT, Button, FormField, FormFieldLabel, PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("form",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e.createElement(r,null,e.createElement(l,null,"Phone number"),e.createElement(Re,{name:"phonenumber"},e.createElement(Ge,null),e.createElement(Pe,null))),e.createElement("div",{style:{display:"flex",justifyContent:"flex-end",gap:"16px"}},e.createElement(T,{variant:M.outline},"Back"),e.createElement(T,null,"Update profile")))},_={globals:{imports:"import { TEXT_PRESET, FormField, FormFieldHelper, Text, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(E,{name:"textarea"}),e.createElement(d,null,e.createElement(c,{preset:u.caption},"Helper text")))},N={globals:{imports:"import { FormField, FormFieldLabel, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(l,null,"Description:"),e.createElement(E,{name:"textarea"}))},R={globals:{imports:"import { FormField, FormFieldLabel, FormFieldLabelSubLabel, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(l,null,"Description",e.createElement(m,null,"- mandatory")),e.createElement(E,{name:"textarea"}))},P={parameters:{layout:"centered"},tags:["!dev"],render:({})=>{const[i,n]=b.useState(0);function s(a){n(a.target.value.length)}return e.createElement(r,{invalid:i>200},e.createElement(l,null,"Description:"),e.createElement(E,{name:"description",onInput:s}),e.createElement(d,{style:{display:"flex",justifyContent:"space-between"}},e.createElement(c,{preset:u.caption},"Helper text"),e.createElement(c,{preset:u.caption},i,"/",200)),e.createElement(p,null,"Error message"))}},H={globals:{imports:"import { FormField, FormFieldHelper, FormFieldLabel, Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(l,null,"Login:"),e.createElement(o,{name:"input"}),e.createElement(d,null,"Username or email address"))},w={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px"}},e.createElement(r,null,e.createElement(l,null,"Label"),e.createElement(o,{name:"input"})),e.createElement(r,null,e.createElement(o,{name:"input"}),e.createElement(d,null,"Helper text")),e.createElement(r,{invalid:!0},e.createElement(o,{name:"input"}),e.createElement(p,null,"Error message")))};var X,q,V;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(V=(q=y.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var j,Y,$;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField invalid>
      <FormFieldLabel>
        Description:
        <FormFieldLabelSubLabel>
          - mandatory
        </FormFieldLabelSubLabel>
      </FormFieldLabel>

      <Textarea name="description" />

      <FormFieldHelper>
        <Text preset={TEXT_PRESET.caption}>
          Helper text
        </Text>
      </FormFieldHelper>

      <FormFieldError>
        Error message
      </FormFieldError>
    </FormField>
}`,...($=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var W,k,z;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, Textarea } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <Textarea name="textarea" />
    </FormField>
}`,...(z=(k=x.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var J,K,Q;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=S.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Z,ee,re;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(re=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,le,ae;B.parameters={...B.parameters,docs:{...(te=B.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(le=B.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var oe,ne,me;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(me=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:me.source}}};var ie,se,de;O.parameters={...O.parameters,docs:{...(ie=O.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(se=O.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ce,ue,Fe;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(Fe=(ue=I.parameters)==null?void 0:ue.docs)==null?void 0:Fe.source}}};var pe,Ee,be;_.parameters={..._.parameters,docs:{...(pe=_.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(be=(Ee=_.parameters)==null?void 0:Ee.docs)==null?void 0:be.source}}};var Te,ge,Le;N.parameters={...N.parameters,docs:{...(Te=N.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Le=(ge=N.parameters)==null?void 0:ge.docs)==null?void 0:Le.source}}};var ve,ye,fe;R.parameters={...R.parameters,docs:{...(ve=R.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(fe=(ye=R.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var xe,Se,he;P.parameters={...P.parameters,docs:{...(xe=P.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(he=(Se=P.parameters)==null?void 0:Se.docs)==null?void 0:he.source}}};var Be,Ce,Oe;H.parameters={...H.parameters,docs:{...(Be=H.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Oe=(Ce=H.parameters)==null?void 0:Ce.docs)==null?void 0:Oe.source}}};var Ie,_e,Ne;w.parameters={...w.parameters,docs:{...(Ie=w.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Ne=(_e=w.parameters)==null?void 0:_e.docs)==null?void 0:Ne.source}}};const Xe=["Demo","AnatomyTech","Default","Error","GuideFormCritical","GuideFormError","GuideFormGroupedField","GuideFormMandatory","GuideFormSimple","Helper","Label","LabelSubLabel","Overview","AccessibilityLabel","ThemeGenerator"],Qe=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityLabel:H,AnatomyTech:f,Default:x,Demo:y,Error:S,GuideFormCritical:h,GuideFormError:B,GuideFormGroupedField:C,GuideFormMandatory:O,GuideFormSimple:I,Helper:_,Label:N,LabelSubLabel:R,Overview:P,ThemeGenerator:w,__namedExportsOrder:Xe,default:Ue},Symbol.toStringTag,{value:"Module"}));export{H as A,x as D,S as E,Qe as F,O as G,_ as H,N as L,P as O,B as a,I as b,C as c,h as d,f as e,R as f};
