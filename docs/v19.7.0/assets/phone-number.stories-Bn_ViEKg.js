import{e}from"./index-jIWwRBLr.js";import{F as E,a as F}from"./index-B0M5RXeR.js";import{c as he}from"./Input-CsaVjqar.js";import{b as t,a as r,P as n,c as v}from"./index-BUvxeS15.js";import{e as Ne,o as Pe,C as l}from"./controls-BtiQQn1l.js";import{s as ye}from"./source-CPEZJ6oD.js";const ge={argTypes:Ne(["countries","defaultValue","i18n","id","name","onCountryChange","onValueChange","pattern","required","value"]),component:n,subcomponents:{PhoneNumberControl:r,PhoneNumberCountryList:t},title:"React Components/Phone Number"},a={render:o=>e.createElement(n,{country:o.country,disabled:o.disabled,invalid:o.invalid,locale:o.locale,readOnly:o.readOnly},o.withCountries&&e.createElement(t,null),e.createElement(r,{clearable:o.clearable})),argTypes:Pe({clearable:{table:{category:l.general,type:{summary:"boolean"}},control:"boolean"},country:{table:{category:l.general,type:{summary:"PHONE_NUMBER_COUNTRY_ISO_CODE"}},control:{type:"select"},options:v},disabled:{table:{category:l.general},control:{type:"boolean"}},invalid:{table:{category:l.general},control:"boolean"},locale:{table:{category:l.general},control:{type:"select"},options:v},readOnly:{table:{category:l.general},control:"boolean"},withCountries:{table:{category:l.general,type:{summary:"boolean"}},control:"boolean"}})},m={globals:{imports:"import { FormField, FormFieldLabel, PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(E,null,e.createElement(F,null,"Phone number:"),e.createElement(n,null,e.createElement(t,null),e.createElement(r,null)))},s={tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(t,null),e.createElement(r,null))},u={decorators:[o=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},o())],globals:{imports:"import { PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(n,null,e.createElement(r,{clearable:!0})),e.createElement(n,null,e.createElement(t,null),e.createElement(r,{clearable:!0})))},c={decorators:[o=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},o())],globals:{imports:"import { PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement("span",null,"All countries"),e.createElement(n,null,e.createElement(t,null),e.createElement(r,null)),e.createElement("span",null,"Subset of countries"),e.createElement(n,{countries:["de","fr","gb","it"]},e.createElement(t,null),e.createElement(r,{clearable:!0})))},d={globals:{imports:"import { PhoneNumber, PhoneNumberControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(r,null))},i={decorators:[o=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},o())],globals:{imports:"import { PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(n,{disabled:!0},e.createElement(r,null)),e.createElement(n,{disabled:!0},e.createElement(t,null),e.createElement(r,null)))},b={globals:{imports:"import { FormField, FormFieldLabel, PhoneNumber, PhoneNumberControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(E,null,e.createElement(F,null,"Phone number:"),e.createElement(n,null,e.createElement(r,null)))},p={decorators:[o=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},o())],globals:{imports:"import { PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(n,null,e.createElement(r,{loading:!0})),e.createElement(n,null,e.createElement(t,null),e.createElement(r,{loading:!0})))},h={decorators:[o=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},o())],globals:{imports:"import { PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement("span",null,'Locale "fr"'),e.createElement(n,{locale:"fr"},e.createElement(t,null),e.createElement(r,null)),e.createElement("span",null,'Locale "de"'),e.createElement(n,{locale:"de"},e.createElement(t,null),e.createElement(r,null)))},N={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(n,null,e.createElement(t,null),e.createElement(r,null))},P={decorators:[o=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},o())],globals:{imports:"import { PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(n,{readOnly:!0},e.createElement(r,null)),e.createElement(n,{readOnly:!0},e.createElement(t,null),e.createElement(r,null)))},y={globals:{imports:"import { FormField, FormFieldLabel, PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(E,null,e.createElement(F,null,"Phone number:"),e.createElement(n,null,e.createElement(t,null),e.createElement(r,null)))},g={globals:{imports:"import { INPUT_I18N, FormField, FormFieldLabel, PhoneNumber, PhoneNumberControl, PhoneNumberCountryList } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...ye()}}},render:({})=>e.createElement(E,null,e.createElement(F,null,"Phone number:"),e.createElement(n,{country:"fr",defaultValue:"06 01 02 03 04",i18n:{[he.clearButton]:"Clear phone number"}},e.createElement(t,null),e.createElement(r,{clearable:!0})))},C={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"flex-start"}},e.createElement(n,null,e.createElement(r,null)),e.createElement(n,null,e.createElement(t,null),e.createElement(r,null)),e.createElement(n,null,e.createElement(r,{loading:!0})),e.createElement(n,{disabled:!0},e.createElement(t,null),e.createElement(r,null)))};var f,L,O;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(O=(L=a.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var x,_,T;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(T=(_=m.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var R,S,A;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <PhoneNumber>
      <PhoneNumberCountryList />

      <PhoneNumberControl />
    </PhoneNumber>
}`,...(A=(S=s.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var I,w,D;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(D=(w=u.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var U,Y,G;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(G=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var B,M,H;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  globals: {
    imports: \`import { PhoneNumber, PhoneNumberControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <PhoneNumber>
      <PhoneNumberControl />
    </PhoneNumber>
}`,...(H=(M=d.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var V,j,q;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(j=i.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var z,k,J;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(J=(k=b.parameters)==null?void 0:k.docs)==null?void 0:J.source}}};var K,Q,W;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(W=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Z,$;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...($=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ne;N.parameters={...N.parameters,docs:{...(ee=N.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <PhoneNumber>
      <PhoneNumberCountryList />

      <PhoneNumberControl />
    </PhoneNumber>
}`,...(ne=(re=N.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,te,le;P.parameters={...P.parameters,docs:{...(oe=P.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(le=(te=P.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ae,me,se;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(me=y.parameters)==null?void 0:me.docs)==null?void 0:se.source}}};var ue,ce,de;g.parameters={...g.parameters,docs:{...(ue=g.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(de=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ie,be,pe;C.parameters={...C.parameters,docs:{...(ie=C.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(pe=(be=C.parameters)==null?void 0:be.docs)==null?void 0:pe.source}}};const Ce=["Demo","AccessibilityLabel","AnatomyTech","Clearable","CountryList","Default","Disabled","InFormField","Loading","Locale","Overview","Readonly","AccessibilityFormField","AccessibilityI18n","ThemeGenerator"],xe=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFormField:y,AccessibilityI18n:g,AccessibilityLabel:m,AnatomyTech:s,Clearable:u,CountryList:c,Default:d,Demo:a,Disabled:i,InFormField:b,Loading:p,Locale:h,Overview:N,Readonly:P,ThemeGenerator:C,__namedExportsOrder:Ce,default:ge},Symbol.toStringTag,{value:"Module"}));export{y as A,u as C,d as D,b as I,p as L,N as O,xe as P,P as R,g as a,s as b,i as c,h as d,c as e};
