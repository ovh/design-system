import{e,r as E}from"./index-jIWwRBLr.js";import{B as t,a as Ee,b as Ne,c as I,d as h}from"./Button-Dwx1IzdD.js";import{C as Se,a}from"./colors-DSObuHxd.js";import{I as N,a as S}from"./icon-name-C581wThh.js";import{o as Ae,C as s}from"./controls-BtiQQn1l.js";import{s as A}from"./source-CPEZJ6oD.js";const Ie={component:t,title:"React Components/Button"},c={argTypes:Ae({children:{table:{category:s.slot},control:"text"},color:{table:{category:s.design,type:{summary:"BUTTON_COLOR"}},control:{type:"select"},options:Se},disabled:{table:{category:s.general,type:{summary:"boolean"}},control:"boolean"},loading:{table:{category:s.general},control:"boolean"},size:{table:{category:s.design,type:{summary:"BUTTON_SIZE"}},control:{type:"select"},options:Ne},variant:{table:{category:s.design,type:{summary:"BUTTON_VARIANT"}},control:{type:"select"},options:Ee}}),args:{children:"My button"}},l={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],globals:{imports:"import { BUTTON_COLOR, Button } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{color:a.critical},"Critical"),e.createElement(t,{color:a.information},"Information"),e.createElement(t,{color:a.neutral},"Neutral"),e.createElement(t,{color:a.primary},"Primary"),e.createElement(t,{color:a.success},"Success"),e.createElement(t,{color:a.warning},"Warning"))},i={globals:{imports:"import { Button } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,"My button")},m={globals:{imports:"import { Button } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{loading:!0},"Loading button")},d={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(t,null,"Button")},u={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],globals:{imports:"import { BUTTON_SIZE, Button } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{size:I.md},"MD button"),e.createElement(t,{size:I.sm},"SM button"),e.createElement(t,{size:I.xs},"XS button"))},p={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],globals:{imports:"import { BUTTON_VARIANT, Button } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{variant:h.default},"Default button"),e.createElement(t,{variant:h.outline},"Outline button"),e.createElement(t,{variant:h.ghost},"Ghost button"))},g={globals:{imports:"import { Button } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,"Clear")},B={globals:{imports:"import { ICON_NAME, Button, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{"aria-label":"Clear"},e.createElement(N,{name:S.xmark}))},y={globals:{imports:"import { ICON_NAME, Button, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(N,{name:S.xmark}))},b={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],globals:{imports:"import { ICON_NAME, Button, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{"aria-labelledby":"filter-btn"},e.createElement(N,{name:S.filter})),e.createElement("span",{id:"filter-btn"},"Filter your search results"))},O={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],globals:{imports:"import { ICON_NAME, Button, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,null,e.createElement(N,{name:S.filter})),e.createElement("span",null,"Filter your search results"))},f={globals:{imports:`import { Button } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...A()}}},render:()=>{const[r,o]=E.useState(""),n=()=>{o("Copied to clipboard.")};return e.createElement(e.Fragment,null,e.createElement(t,{onClick:n},"Copy"),e.createElement("span",{style:{marginLeft:"1rem"}},r))}},v={globals:{imports:`import { Button } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...A()}}},render:()=>{const[r,o]=E.useState(""),n=()=>{o("Copied to clipboard.")};return e.createElement(e.Fragment,null,e.createElement(t,{onClick:n},"Copy"),e.createElement("span",{"aria-live":"polite",role:"status",style:{marginLeft:"1rem"}},r))}},T={globals:{imports:`import { Button } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...A()}}},render:()=>{const[r,o]=E.useState(""),n=()=>{o("A critical error occurred while saving.")};return e.createElement(e.Fragment,null,e.createElement(t,{onClick:n},"Save"),e.createElement("span",{style:{marginLeft:"1rem",color:"red"}},r))}},C={globals:{imports:`import { Button } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...A()}}},render:()=>{const[r,o]=E.useState(""),n=()=>{o("A critical error occurred while saving!")};return e.createElement(e.Fragment,null,e.createElement(t,{onClick:n},"Save"),e.createElement("span",{role:"alert",style:{marginLeft:"1rem",color:"red"}},r))}};var _,R,x;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  argTypes: orderControls({
    children: {
      table: {
        category: CONTROL_CATEGORY.slot
      },
      control: 'text'
    },
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'BUTTON_COLOR'
        }
      },
      control: {
        type: 'select'
      },
      options: BUTTON_COLORS
    },
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    loading: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'BUTTON_SIZE'
        }
      },
      control: {
        type: 'select'
      },
      options: BUTTON_SIZES
    },
    variant: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'BUTTON_VARIANT'
        }
      },
      control: {
        type: 'select'
      },
      options: BUTTON_VARIANTS
    }
  }),
  args: {
    children: 'My button'
  }
}`,...(x=(R=c.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var L,U,w;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  globals: {
    imports: \`import { BUTTON_COLOR, Button } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Button color={BUTTON_COLOR.critical}>Critical</Button>
      <Button color={BUTTON_COLOR.information}>Information</Button>
      <Button color={BUTTON_COLOR.neutral}>Neutral</Button>
      <Button color={BUTTON_COLOR.primary}>Primary</Button>
      <Button color={BUTTON_COLOR.success}>Success</Button>
      <Button color={BUTTON_COLOR.warning}>Warning</Button>
    </>
}`,...(w=(U=l.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};var M,k,F;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Button>
      My button
    </Button>
}`,...(F=(k=i.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var V,z,P;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Button loading={true}>
      Loading button
    </Button>
}`,...(P=(z=m.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var Z,D,G;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Button>
      Button
    </Button>
}`,...(G=(D=d.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var Y,j,W;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  globals: {
    imports: \`import { BUTTON_SIZE, Button } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Button size={BUTTON_SIZE.md}>MD button</Button>
      <Button size={BUTTON_SIZE.sm}>SM button</Button>
      <Button size={BUTTON_SIZE.xs}>XS button</Button>
    </>
}`,...(W=(j=u.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var X,q,H;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  globals: {
    imports: \`import { BUTTON_VARIANT, Button } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Button variant={BUTTON_VARIANT.default}>Default button</Button>
      <Button variant={BUTTON_VARIANT.outline}>Outline button</Button>
      <Button variant={BUTTON_VARIANT.ghost}>Ghost button</Button>
    </>
}`,...(H=(q=p.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Button>
      Clear
    </Button>
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var $,ee,te;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Button, Icon } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Button aria-label='Clear'>
        <Icon name={ICON_NAME.xmark} />
    </Button>
}`,...(te=(ee=B.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,oe,ne;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Button, Icon } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Button>
      <Icon name={ICON_NAME.xmark} />
    </Button>
}`,...(ne=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ae,se,ce;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  globals: {
    imports: \`import { ICON_NAME, Button, Icon } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Button aria-labelledby="filter-btn">
        <Icon name={ICON_NAME.filter} />
      </Button>
      <span id="filter-btn">Filter your search results</span>
    </>
}`,...(ce=(se=b.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var le,ie,me;O.parameters={...O.parameters,docs:{...(le=O.parameters)==null?void 0:le.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  globals: {
    imports: \`import { ICON_NAME, Button, Icon } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Button>
        <Icon name={ICON_NAME.filter} />
      </Button>
      <span>Filter your search results</span>
    </>
}`,...(me=(ie=O.parameters)==null?void 0:ie.docs)==null?void 0:me.source}}};var de,ue,pe;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button } from '@ovhcloud/ods-react';
import { useState } from 'react';\`
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: () => {
    const [message, setMessage] = useState('');
    const handleClick = () => {
      setMessage('Copied to clipboard.');
    };
    return <>
        <Button onClick={handleClick}>
          Copy
        </Button>

        <span style={{
        marginLeft: '1rem'
      }}>
          {message}
        </span>
      </>;
  }
}`,...(pe=(ue=f.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ge,Be,ye;v.parameters={...v.parameters,docs:{...(ge=v.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button } from '@ovhcloud/ods-react';
import { useState } from 'react';\`
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: () => {
    const [message, setMessage] = useState('');
    const handleClick = () => {
      setMessage('Copied to clipboard.');
    };
    return <>
        <Button onClick={handleClick}>
          Copy
        </Button>

        <span aria-live="polite" role="status" style={{
        marginLeft: '1rem'
      }}>
          {message}
        </span>
      </>;
  }
}`,...(ye=(Be=v.parameters)==null?void 0:Be.docs)==null?void 0:ye.source}}};var be,Oe,fe;T.parameters={...T.parameters,docs:{...(be=T.parameters)==null?void 0:be.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button } from '@ovhcloud/ods-react';
import { useState } from 'react';\`
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: () => {
    const [error, setError] = useState('');
    const handleClick = () => {
      setError('A critical error occurred while saving.');
    };
    return <>
        <Button onClick={handleClick}>
          Save
        </Button>

        <span style={{
        marginLeft: '1rem',
        color: 'red'
      }}>
          {error}
        </span>
      </>;
  }
}`,...(fe=(Oe=T.parameters)==null?void 0:Oe.docs)==null?void 0:fe.source}}};var ve,Te,Ce;C.parameters={...C.parameters,docs:{...(ve=C.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button } from '@ovhcloud/ods-react';
import { useState } from 'react';\`
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: () => {
    const [error, setError] = useState('');
    const handleClick = () => {
      setError('A critical error occurred while saving!');
    };
    return <>
        <Button onClick={handleClick}>
          Save
        </Button>

        <span role="alert" style={{
        marginLeft: '1rem',
        color: 'red'
      }}>
          {error}
        </span>
      </>;
  }
}`,...(Ce=(Te=C.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source}}};const he=["Demo","Color","Default","Loading","Overview","Size","Variant","AccessibilityExplicitTextContent","AccessibilityIconOnly","AccessibilityBadPracticeIconOnly","AccessibilityLabelledBy","AccessibilityBadPracticeLabelledBy","AccessibilityBadPracticesRoleStatus","AccessibilityRoleStatus","AccessibilityBadPracticesRoleAlert","AccessibilityRoleAlert"],Me=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityBadPracticeIconOnly:y,AccessibilityBadPracticeLabelledBy:O,AccessibilityBadPracticesRoleAlert:T,AccessibilityBadPracticesRoleStatus:f,AccessibilityExplicitTextContent:g,AccessibilityIconOnly:B,AccessibilityLabelledBy:b,AccessibilityRoleAlert:C,AccessibilityRoleStatus:v,Color:l,Default:i,Demo:c,Loading:m,Overview:d,Size:u,Variant:p,__namedExportsOrder:he,default:Ie},Symbol.toStringTag,{value:"Module"}));export{g as A,Me as B,l as C,i as D,m as L,d as O,u as S,p as V,B as a,b,y as c,O as d,f as e,v as f,T as g,C as h};
