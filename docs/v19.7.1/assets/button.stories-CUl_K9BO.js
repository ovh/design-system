import{e,r as I}from"./index-jIWwRBLr.js";import{B as t,a as A,b as we,c as h,d as R}from"./Button-B-GJ-1TA.js";import{C as Le,a}from"./colors-DSObuHxd.js";import{I as N,a as x}from"./icon-name-D0KNfDOz.js";import{o as ke,C as s}from"./controls-BtiQQn1l.js";import{s as _}from"./source-CPEZJ6oD.js";const Ue={component:t,title:"React Components/Button"},l={argTypes:ke({children:{table:{category:s.slot},control:"text"},color:{table:{category:s.design,type:{summary:"BUTTON_COLOR"}},control:{type:"select"},options:Le},disabled:{table:{category:s.general,type:{summary:"boolean"}},control:"boolean"},loading:{table:{category:s.general},control:"boolean"},size:{table:{category:s.design,type:{summary:"BUTTON_SIZE"}},control:{type:"select"},options:we},variant:{table:{category:s.design,type:{summary:"BUTTON_VARIANT"}},control:{type:"select"},options:A}}),args:{children:"My button"}},c={tags:["!dev"],render:({})=>e.createElement(t,null,"Button")},i={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],globals:{imports:"import { BUTTON_COLOR, Button } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{color:a.critical},"Critical"),e.createElement(t,{color:a.information},"Information"),e.createElement(t,{color:a.neutral},"Neutral"),e.createElement(t,{color:a.primary},"Primary"),e.createElement(t,{color:a.success},"Success"),e.createElement(t,{color:a.warning},"Warning"))},m={globals:{imports:"import { Button } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,"My button")},d={globals:{imports:"import { Button } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{loading:!0},"Loading button")},u={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(t,null,"Button")},p={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],globals:{imports:"import { BUTTON_SIZE, Button } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{size:h.md},"MD button"),e.createElement(t,{size:h.sm},"SM button"),e.createElement(t,{size:h.xs},"XS button"))},g={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],globals:{imports:"import { BUTTON_VARIANT, Button } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{variant:R.default},"Default button"),e.createElement(t,{variant:R.outline},"Outline button"),e.createElement(t,{variant:R.ghost},"Ghost button"))},y={globals:{imports:"import { Button } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,"Clear")},B={globals:{imports:"import { ICON_NAME, Button, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{"aria-label":"Clear"},e.createElement(N,{name:x.xmark}))},v={globals:{imports:"import { ICON_NAME, Button, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(N,{name:x.xmark}))},f={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],globals:{imports:"import { ICON_NAME, Button, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{"aria-labelledby":"filter-btn"},e.createElement(N,{name:x.filter})),e.createElement("span",{id:"filter-btn"},"Filter your search results"))},b={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],globals:{imports:"import { ICON_NAME, Button, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,null,e.createElement(N,{name:x.filter})),e.createElement("span",null,"Filter your search results"))},O={globals:{imports:`import { Button } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{..._()}}},render:()=>{const[r,n]=I.useState(""),o=()=>{n("Copied to clipboard.")};return e.createElement(e.Fragment,null,e.createElement(t,{onClick:o},"Copy"),e.createElement("span",{style:{marginLeft:"1rem"}},r))}},T={globals:{imports:`import { Button } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{..._()}}},render:()=>{const[r,n]=I.useState(""),o=()=>{n("Copied to clipboard.")};return e.createElement(e.Fragment,null,e.createElement(t,{onClick:o},"Copy"),e.createElement("span",{"aria-live":"polite",role:"status",style:{marginLeft:"1rem"}},r))}},S={globals:{imports:`import { Button } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{..._()}}},render:()=>{const[r,n]=I.useState(""),o=()=>{n("A critical error occurred while saving.")};return e.createElement(e.Fragment,null,e.createElement(t,{onClick:o},"Save"),e.createElement("span",{style:{marginLeft:"1rem",color:"red"}},r))}},E={globals:{imports:`import { Button } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{..._()}}},render:()=>{const[r,n]=I.useState(""),o=()=>{n("A critical error occurred while saving!")};return e.createElement(e.Fragment,null,e.createElement(t,{onClick:o},"Save"),e.createElement("span",{role:"alert",style:{marginLeft:"1rem",color:"red"}},r))}},C={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px"}},we.map(r=>e.createElement("div",{key:r,style:{display:"flex",flexDirection:"column",gap:"8px"}},A.map(n=>e.createElement("div",{key:`${String(r)}-${String(n)}`,style:{display:"flex",flexFlow:"row wrap",gap:"8px",alignItems:"center"}},Le.map(o=>e.createElement(t,{key:`${String(r)}-${String(n)}-${String(o)}`,size:r,variant:n,color:o},`${String(n)} ${String(o)}`)))),e.createElement("div",{style:{display:"flex",flexFlow:"row wrap",gap:"8px",alignItems:"center"}},A.map(n=>e.createElement(t,{key:`disabled-${String(r)}-${String(n)}`,size:r,variant:n,disabled:!0},"Disabled"))),e.createElement("div",{style:{display:"flex",flexFlow:"row wrap",gap:"8px",alignItems:"center"}},A.map(n=>e.createElement(t,{key:`loading-${String(r)}-${String(n)}`,size:r,variant:n,loading:!0},"Loading"))))),e.createElement("div",null,e.createElement(t,null,e.createElement(N,{name:x.xmark})," Close")))};var w,L,k;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(L=l.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var U,F,M;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Button>
      Button
    </Button>
}`,...(M=(F=c.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var $,z,V;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(V=(z=i.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var D,G,P;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Button>
      My button
    </Button>
}`,...(P=(G=m.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var Z,Y,j;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Button loading={true}>
      Loading button
    </Button>
}`,...(j=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var W,X,q;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Button>
      Button
    </Button>
}`,...(q=(X=u.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var H,J,K;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,ee,te;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ne,oe;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Button>
      Clear
    </Button>
}`,...(oe=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ae,se,le;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Button, Icon } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Button aria-label='Clear'>
        <Icon name={ICON_NAME.xmark} />
    </Button>
}`,...(le=(se=B.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ce,ie,me;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Button, Icon } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Button>
      <Icon name={ICON_NAME.xmark} />
    </Button>
}`,...(me=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:me.source}}};var de,ue,pe;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(pe=(ue=f.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ge,ye,Be;b.parameters={...b.parameters,docs:{...(ge=b.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(Be=(ye=b.parameters)==null?void 0:ye.docs)==null?void 0:Be.source}}};var ve,fe,be;O.parameters={...O.parameters,docs:{...(ve=O.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(be=(fe=O.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var Oe,Te,Se;T.parameters={...T.parameters,docs:{...(Oe=T.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Se=(Te=T.parameters)==null?void 0:Te.docs)==null?void 0:Se.source}}};var Ee,Ce,Ne;S.parameters={...S.parameters,docs:{...(Ee=S.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ne=(Ce=S.parameters)==null?void 0:Ce.docs)==null?void 0:Ne.source}}};var xe,Ae,Ie;E.parameters={...E.parameters,docs:{...(xe=E.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ie=(Ae=E.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.source}}};var _e,he,Re;C.parameters={...C.parameters,docs:{...(_e=C.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      {BUTTON_SIZES.map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
          {BUTTON_VARIANTS.map(variant => <div key={\`\${String(size)}-\${String(variant)}\`} style={{
        display: 'flex',
        flexFlow: 'row wrap',
        gap: '8px',
        alignItems: 'center'
      }}>
              {BUTTON_COLORS.map(color => <Button key={\`\${String(size)}-\${String(variant)}-\${String(color)}\`} size={size} variant={variant} color={color}>
                  {\`\${String(variant)} \${String(color)}\`}
                </Button>)}
            </div>)}
          <div style={{
        display: 'flex',
        flexFlow: 'row wrap',
        gap: '8px',
        alignItems: 'center'
      }}>
            {BUTTON_VARIANTS.map(variant => <Button key={\`disabled-\${String(size)}-\${String(variant)}\`} size={size} variant={variant} disabled>
                Disabled
              </Button>)}
          </div>
          <div style={{
        display: 'flex',
        flexFlow: 'row wrap',
        gap: '8px',
        alignItems: 'center'
      }}>
            {BUTTON_VARIANTS.map(variant => <Button key={\`loading-\${String(size)}-\${String(variant)}\`} size={size} variant={variant} loading>
                Loading
              </Button>)}
          </div>
        </div>)}

      <div>
        <Button>
          <Icon name={ICON_NAME.xmark} /> Close
        </Button>
      </div>
    </div>
}`,...(Re=(he=C.parameters)==null?void 0:he.docs)==null?void 0:Re.source}}};const Fe=["Demo","AnatomyTech","Color","Default","Loading","Overview","Size","Variant","AccessibilityExplicitTextContent","AccessibilityIconOnly","AccessibilityBadPracticeIconOnly","AccessibilityLabelledBy","AccessibilityBadPracticeLabelledBy","AccessibilityBadPracticesRoleStatus","AccessibilityRoleStatus","AccessibilityBadPracticesRoleAlert","AccessibilityRoleAlert","ThemeGenerator"],Pe=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityBadPracticeIconOnly:v,AccessibilityBadPracticeLabelledBy:b,AccessibilityBadPracticesRoleAlert:S,AccessibilityBadPracticesRoleStatus:O,AccessibilityExplicitTextContent:y,AccessibilityIconOnly:B,AccessibilityLabelledBy:f,AccessibilityRoleAlert:E,AccessibilityRoleStatus:T,AnatomyTech:c,Color:i,Default:m,Demo:l,Loading:d,Overview:u,Size:p,ThemeGenerator:C,Variant:g,__namedExportsOrder:Fe,default:Ue},Symbol.toStringTag,{value:"Module"}));export{y as A,Pe as B,i as C,m as D,d as L,u as O,p as S,g as V,B as a,f as b,v as c,b as d,O as e,T as f,S as g,E as h,c as i};
