import{e,r as I}from"./index-jIWwRBLr.js";import{B as t,a as x,b as Ae,c as _,d as h}from"./Button-B-GJ-1TA.js";import{C as _e,a}from"./colors-DSObuHxd.js";import{I as C,a as N}from"./icon-name-C581wThh.js";import{o as he,C as s}from"./controls-BtiQQn1l.js";import{s as A}from"./source-CPEZJ6oD.js";const Re={component:t,title:"React Components/Button"},l={argTypes:he({children:{table:{category:s.slot},control:"text"},color:{table:{category:s.design,type:{summary:"BUTTON_COLOR"}},control:{type:"select"},options:_e},disabled:{table:{category:s.general,type:{summary:"boolean"}},control:"boolean"},loading:{table:{category:s.general},control:"boolean"},size:{table:{category:s.design,type:{summary:"BUTTON_SIZE"}},control:{type:"select"},options:Ae},variant:{table:{category:s.design,type:{summary:"BUTTON_VARIANT"}},control:{type:"select"},options:x}}),args:{children:"My button"}},c={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],globals:{imports:"import { BUTTON_COLOR, Button } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{color:a.critical},"Critical"),e.createElement(t,{color:a.information},"Information"),e.createElement(t,{color:a.neutral},"Neutral"),e.createElement(t,{color:a.primary},"Primary"),e.createElement(t,{color:a.success},"Success"),e.createElement(t,{color:a.warning},"Warning"))},i={globals:{imports:"import { Button } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,"My button")},m={globals:{imports:"import { Button } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{loading:!0},"Loading button")},d={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(t,null,"Button")},u={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],globals:{imports:"import { BUTTON_SIZE, Button } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{size:_.md},"MD button"),e.createElement(t,{size:_.sm},"SM button"),e.createElement(t,{size:_.xs},"XS button"))},p={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],globals:{imports:"import { BUTTON_VARIANT, Button } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{variant:h.default},"Default button"),e.createElement(t,{variant:h.outline},"Outline button"),e.createElement(t,{variant:h.ghost},"Ghost button"))},g={globals:{imports:"import { Button } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,"Clear")},y={globals:{imports:"import { ICON_NAME, Button, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{"aria-label":"Clear"},e.createElement(C,{name:N.xmark}))},B={globals:{imports:"import { ICON_NAME, Button, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(C,{name:N.xmark}))},v={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],globals:{imports:"import { ICON_NAME, Button, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{"aria-labelledby":"filter-btn"},e.createElement(C,{name:N.filter})),e.createElement("span",{id:"filter-btn"},"Filter your search results"))},f={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],globals:{imports:"import { ICON_NAME, Button, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,null,e.createElement(C,{name:N.filter})),e.createElement("span",null,"Filter your search results"))},b={globals:{imports:`import { Button } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...A()}}},render:()=>{const[r,n]=I.useState(""),o=()=>{n("Copied to clipboard.")};return e.createElement(e.Fragment,null,e.createElement(t,{onClick:o},"Copy"),e.createElement("span",{style:{marginLeft:"1rem"}},r))}},O={globals:{imports:`import { Button } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...A()}}},render:()=>{const[r,n]=I.useState(""),o=()=>{n("Copied to clipboard.")};return e.createElement(e.Fragment,null,e.createElement(t,{onClick:o},"Copy"),e.createElement("span",{"aria-live":"polite",role:"status",style:{marginLeft:"1rem"}},r))}},T={globals:{imports:`import { Button } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...A()}}},render:()=>{const[r,n]=I.useState(""),o=()=>{n("A critical error occurred while saving.")};return e.createElement(e.Fragment,null,e.createElement(t,{onClick:o},"Save"),e.createElement("span",{style:{marginLeft:"1rem",color:"red"}},r))}},S={globals:{imports:`import { Button } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...A()}}},render:()=>{const[r,n]=I.useState(""),o=()=>{n("A critical error occurred while saving!")};return e.createElement(e.Fragment,null,e.createElement(t,{onClick:o},"Save"),e.createElement("span",{role:"alert",style:{marginLeft:"1rem",color:"red"}},r))}},E={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px"}},Ae.map(r=>e.createElement("div",{key:r,style:{display:"flex",flexDirection:"column",gap:"8px"}},x.map(n=>e.createElement("div",{key:`${String(r)}-${String(n)}`,style:{display:"flex",flexFlow:"row wrap",gap:"8px",alignItems:"center"}},_e.map(o=>e.createElement(t,{key:`${String(r)}-${String(n)}-${String(o)}`,size:r,variant:n,color:o},`${String(n)} ${String(o)}`)))),e.createElement("div",{style:{display:"flex",flexFlow:"row wrap",gap:"8px",alignItems:"center"}},x.map(n=>e.createElement(t,{key:`disabled-${String(r)}-${String(n)}`,size:r,variant:n,disabled:!0},"Disabled"))),e.createElement("div",{style:{display:"flex",flexFlow:"row wrap",gap:"8px",alignItems:"center"}},x.map(n=>e.createElement(t,{key:`loading-${String(r)}-${String(n)}`,size:r,variant:n,loading:!0},"Loading"))))),e.createElement("div",null,e.createElement(t,null,e.createElement(C,{name:N.xmark})," Close")))};var R,w,L;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(L=(w=l.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var k,U,F;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(F=(U=c.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var M,$,z;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Button>
      My button
    </Button>
}`,...(z=($=i.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var V,D,G;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Button loading={true}>
      Loading button
    </Button>
}`,...(G=(D=m.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var P,Z,Y;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Button>
      Button
    </Button>
}`,...(Y=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:Y.source}}};var j,W,X;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(X=(W=u.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var q,H,J;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(J=(H=p.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,ee;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Button>
      Clear
    </Button>
}`,...(ee=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var te,re,ne;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Button, Icon } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Button aria-label='Clear'>
        <Icon name={ICON_NAME.xmark} />
    </Button>
}`,...(ne=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,ae,se;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Button, Icon } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Button>
      <Icon name={ICON_NAME.xmark} />
    </Button>
}`,...(se=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var le,ce,ie;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ie=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var me,de,ue;f.parameters={...f.parameters,docs:{...(me=f.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ue=(de=f.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,ge,ye;b.parameters={...b.parameters,docs:{...(pe=b.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ye=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var Be,ve,fe;O.parameters={...O.parameters,docs:{...(Be=O.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(fe=(ve=O.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var be,Oe,Te;T.parameters={...T.parameters,docs:{...(be=T.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Te=(Oe=T.parameters)==null?void 0:Oe.docs)==null?void 0:Te.source}}};var Se,Ee,Ce;S.parameters={...S.parameters,docs:{...(Se=S.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ce=(Ee=S.parameters)==null?void 0:Ee.docs)==null?void 0:Ce.source}}};var Ne,xe,Ie;E.parameters={...E.parameters,docs:{...(Ne=E.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Ie=(xe=E.parameters)==null?void 0:xe.docs)==null?void 0:Ie.source}}};const we=["Demo","Color","Default","Loading","Overview","Size","Variant","AccessibilityExplicitTextContent","AccessibilityIconOnly","AccessibilityBadPracticeIconOnly","AccessibilityLabelledBy","AccessibilityBadPracticeLabelledBy","AccessibilityBadPracticesRoleStatus","AccessibilityRoleStatus","AccessibilityBadPracticesRoleAlert","AccessibilityRoleAlert","ThemeGenerator"],ze=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityBadPracticeIconOnly:B,AccessibilityBadPracticeLabelledBy:f,AccessibilityBadPracticesRoleAlert:T,AccessibilityBadPracticesRoleStatus:b,AccessibilityExplicitTextContent:g,AccessibilityIconOnly:y,AccessibilityLabelledBy:v,AccessibilityRoleAlert:S,AccessibilityRoleStatus:O,Color:c,Default:i,Demo:l,Loading:m,Overview:d,Size:u,ThemeGenerator:E,Variant:p,__namedExportsOrder:we,default:Re},Symbol.toStringTag,{value:"Module"}));export{g as A,ze as B,c as C,i as D,m as L,d as O,u as S,p as V,y as a,v as b,B as c,f as d,b as e,O as f,T as g,S as h};
