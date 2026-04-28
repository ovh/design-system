import{e}from"./index-jIWwRBLr.js";import{F as C,a as E}from"./index-DHp3jGT7.js";import{c as de}from"./Input-DK0nnZkU.js";import{b as l,a as r,P as n,c as F}from"./index-CIGaTLt9.js";import{e as ie,o as be,C as t}from"./controls-BtiQQn1l.js";import{s as pe}from"./source-CPEZJ6oD.js";const he={argTypes:ie(["countries","defaultValue","i18n","id","name","onCountryChange","onValueChange","pattern","required","value"]),component:n,subcomponents:{PhoneNumberControl:r,PhoneNumberCountryList:l},title:"React Components/Phone Number"},a={render:o=>e.createElement(n,{country:o.country,disabled:o.disabled,invalid:o.invalid,locale:o.locale,readOnly:o.readOnly},o.withCountries&&e.createElement(l,null),e.createElement(r,{clearable:o.clearable})),argTypes:be({clearable:{table:{category:t.general,type:{summary:"boolean"}},control:"boolean"},country:{table:{category:t.general,type:{summary:"PHONE_NUMBER_COUNTRY_ISO_CODE"}},control:{type:"select"},options:F},disabled:{table:{category:t.general},control:{type:"boolean"}},invalid:{table:{category:t.general},control:"boolean"},locale:{table:{category:t.general},control:{type:"select"},options:F},readOnly:{table:{category:t.general},control:"boolean"},withCountries:{table:{category:t.general,type:{summary:"boolean"}},control:"boolean"}})},m={globals:{imports:"import { FormField, FormFieldLabel, PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(C,null,e.createElement(E,null,"Phone number:"),e.createElement(n,null,e.createElement(l,null),e.createElement(r,null)))},s={decorators:[o=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},o())],globals:{imports:"import { PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(n,null,e.createElement(r,{clearable:!0})),e.createElement(n,null,e.createElement(l,null),e.createElement(r,{clearable:!0})))},u={decorators:[o=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},o())],globals:{imports:"import { PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement("span",null,"All countries"),e.createElement(n,null,e.createElement(l,null),e.createElement(r,null)),e.createElement("span",null,"Subset of countries"),e.createElement(n,{countries:["de","fr","gb","it"]},e.createElement(l,null),e.createElement(r,{clearable:!0})))},c={globals:{imports:"import { PhoneNumber, PhoneNumberControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(r,null))},d={decorators:[o=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},o())],globals:{imports:"import { PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(n,{disabled:!0},e.createElement(r,null)),e.createElement(n,{disabled:!0},e.createElement(l,null),e.createElement(r,null)))},i={globals:{imports:"import { FormField, FormFieldLabel, PhoneNumber, PhoneNumberControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(C,null,e.createElement(E,null,"Phone number:"),e.createElement(n,null,e.createElement(r,null)))},b={decorators:[o=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},o())],globals:{imports:"import { PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(n,null,e.createElement(r,{loading:!0})),e.createElement(n,null,e.createElement(l,null),e.createElement(r,{loading:!0})))},p={decorators:[o=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},o())],globals:{imports:"import { PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement("span",null,'Locale "fr"'),e.createElement(n,{locale:"fr"},e.createElement(l,null),e.createElement(r,null)),e.createElement("span",null,'Locale "de"'),e.createElement(n,{locale:"de"},e.createElement(l,null),e.createElement(r,null)))},h={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(n,null,e.createElement(l,null),e.createElement(r,null))},N={decorators:[o=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},o())],globals:{imports:"import { PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(n,{readOnly:!0},e.createElement(r,null)),e.createElement(n,{readOnly:!0},e.createElement(l,null),e.createElement(r,null)))},P={globals:{imports:"import { FormField, FormFieldLabel, PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(C,null,e.createElement(E,null,"Phone number:"),e.createElement(n,null,e.createElement(l,null),e.createElement(r,null)))},y={globals:{imports:"import { INPUT_I18N, FormField, FormFieldLabel, PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...pe()}}},render:({})=>e.createElement(C,null,e.createElement(E,null,"Phone number:"),e.createElement(n,{country:"fr",defaultValue:"06 01 02 03 04",i18n:{[de.clearButton]:"Clear phone number"}},e.createElement(l,null),e.createElement(r,{clearable:!0})))},g={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"flex-start"}},e.createElement(n,null,e.createElement(r,null)),e.createElement(n,null,e.createElement(l,null),e.createElement(r,null)),e.createElement(n,null,e.createElement(r,{loading:!0})),e.createElement(n,{disabled:!0},e.createElement(l,null),e.createElement(r,null)))};var v,f,L;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (arg: DemoArg) => <PhoneNumber country={arg.country} disabled={arg.disabled} invalid={arg.invalid} locale={arg.locale} readOnly={arg.readOnly}>
      {arg.withCountries && <PhoneNumberCountryList />}

      <PhoneNumberControl clearable={arg.clearable} />
    </PhoneNumber>,
  argTypes: orderControls({
    clearable: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    country: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'PHONE_NUMBER_COUNTRY_ISO_CODE'
        }
      },
      control: {
        type: 'select'
      },
      options: PHONE_NUMBER_COUNTRY_ISO_CODES
    },
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: {
        type: 'boolean'
      }
    },
    invalid: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    locale: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: {
        type: 'select'
      },
      options: PHONE_NUMBER_COUNTRY_ISO_CODES
    },
    readOnly: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    withCountries: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    }
  })
}`,...(L=(f=a.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var O,x,_;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, FormFieldLabel, PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Phone number:
      </FormFieldLabel>

      <PhoneNumber>
        <PhoneNumberCountryList />

        <PhoneNumberControl />
      </PhoneNumber>
    </FormField>
}`,...(_=(x=m.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var R,T,S;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <PhoneNumber>
        <PhoneNumberControl clearable />
      </PhoneNumber>

      <PhoneNumber>
        <PhoneNumberCountryList />

        <PhoneNumberControl clearable />
      </PhoneNumber>
    </>
}`,...(S=(T=s.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var I,w,A;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <span>All countries</span>

      <PhoneNumber>
        <PhoneNumberCountryList />

        <PhoneNumberControl />
      </PhoneNumber>

      <span>Subset of countries</span>

      <PhoneNumber countries={['de', 'fr', 'gb', 'it']}>
        <PhoneNumberCountryList />

        <PhoneNumberControl clearable />
      </PhoneNumber>
    </>
}`,...(A=(w=u.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var D,U,Y;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  globals: {
    imports: \`import { PhoneNumber, PhoneNumberControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <PhoneNumber>
      <PhoneNumberControl />
    </PhoneNumber>
}`,...(Y=(U=c.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var G,B,M;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <PhoneNumber disabled>
        <PhoneNumberControl />
      </PhoneNumber>

      <PhoneNumber disabled>
        <PhoneNumberCountryList />

        <PhoneNumberControl />
      </PhoneNumber>
    </>
}`,...(M=(B=d.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var H,V,j;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, FormFieldLabel, PhoneNumber, PhoneNumberControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Phone number:
      </FormFieldLabel>

      <PhoneNumber>
        <PhoneNumberControl />
      </PhoneNumber>
    </FormField>
}`,...(j=(V=i.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var q,z,k;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <PhoneNumber>
        <PhoneNumberControl loading />
      </PhoneNumber>

      <PhoneNumber>
        <PhoneNumberCountryList />

        <PhoneNumberControl loading />
      </PhoneNumber>
    </>
}`,...(k=(z=b.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var J,K,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <span>Locale "fr"</span>
      <PhoneNumber locale="fr">
        <PhoneNumberCountryList />

        <PhoneNumberControl />
      </PhoneNumber>

      <span>Locale "de"</span>
      <PhoneNumber locale="de">
        <PhoneNumberCountryList />

        <PhoneNumberControl />
      </PhoneNumber>
    </>
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var W,X,Z;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <PhoneNumber>
      <PhoneNumberCountryList />

      <PhoneNumberControl />
    </PhoneNumber>
}`,...(Z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,re;N.parameters={...N.parameters,docs:{...($=N.parameters)==null?void 0:$.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <PhoneNumber readOnly>
        <PhoneNumberControl />
      </PhoneNumber>

      <PhoneNumber readOnly>
        <PhoneNumberCountryList />

        <PhoneNumberControl />
      </PhoneNumber>
    </>
}`,...(re=(ee=N.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ne,oe,le;P.parameters={...P.parameters,docs:{...(ne=P.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, FormFieldLabel, PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Phone number:
      </FormFieldLabel>

      <PhoneNumber>
        <PhoneNumberCountryList />

        <PhoneNumberControl />
      </PhoneNumber>
    </FormField>
}`,...(le=(oe=P.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var te,ae,me;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  globals: {
    imports: \`import { INPUT_I18N, FormField, FormFieldLabel, PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => <FormField>
      <FormFieldLabel>
        Phone number:
      </FormFieldLabel>

      <PhoneNumber country="fr" defaultValue="06 01 02 03 04" i18n={{
      [INPUT_I18N.clearButton]: 'Clear phone number'
    }}>
        <PhoneNumberCountryList />

        <PhoneNumberControl clearable />
      </PhoneNumber>
    </FormField>
}`,...(me=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:me.source}}};var se,ue,ce;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    alignItems: 'flex-start'
  }}>
      <PhoneNumber>
        <PhoneNumberControl />
      </PhoneNumber>

      <PhoneNumber>
        <PhoneNumberCountryList />
        <PhoneNumberControl />
      </PhoneNumber>

      <PhoneNumber>
        <PhoneNumberControl loading />
      </PhoneNumber>

      <PhoneNumber disabled>
        <PhoneNumberCountryList />
        <PhoneNumberControl />
      </PhoneNumber>
    </div>
}`,...(ce=(ue=g.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};const Ne=["Demo","AccessibilityLabel","Clearable","CountryList","Default","Disabled","InFormField","Loading","Locale","Overview","Readonly","AccessibilityFormField","AccessibilityI18n","ThemeGenerator"],ve=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFormField:P,AccessibilityI18n:y,AccessibilityLabel:m,Clearable:s,CountryList:u,Default:c,Demo:a,Disabled:d,InFormField:i,Loading:b,Locale:p,Overview:h,Readonly:N,ThemeGenerator:g,__namedExportsOrder:Ne,default:he},Symbol.toStringTag,{value:"Module"}));export{P as A,s as C,c as D,i as I,b as L,h as O,ve as P,N as R,y as a,d as b,p as c,u as d};
