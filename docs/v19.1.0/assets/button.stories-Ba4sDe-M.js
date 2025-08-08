import{e,r as S}from"./index-D_CmzhJ4.js";import{B as t,a as Se,b as fe,c as R,d as x}from"./Button-Cu9Xbu09.js";import{C as Ae,a as o}from"./colors-DSObuHxd.js";import{I as f,a as A}from"./icon-name-CL_C5kfn.js";import{o as Ne,C as s}from"./controls-BtiQQn1l.js";import{s as N}from"./source-d0g_Nd0q.js";const Re={component:t,title:"React Components/Button"},c={argTypes:Ne({children:{table:{category:s.slot},control:"text"},color:{table:{category:s.design,type:{summary:"BUTTON_COLOR"}},control:{type:"select"},options:Ae},disabled:{table:{category:s.general,type:{summary:"boolean"}},control:"boolean"},loading:{table:{category:s.general},control:"boolean"},size:{table:{category:s.design,type:{summary:"BUTTON_SIZE"}},control:{type:"select"},options:fe},variant:{table:{category:s.design,type:{summary:"BUTTON_VARIANT"}},control:{type:"select"},options:Se}}),args:{children:"My button"}},l={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{color:o.critical},"Critical"),e.createElement(t,{color:o.information},"Information"),e.createElement(t,{color:o.neutral},"Neutral"),e.createElement(t,{color:o.primary},"Primary"),e.createElement(t,{color:o.success},"Success"),e.createElement(t,{color:o.warning},"Warning"))},i={tags:["!dev"],render:({})=>e.createElement(t,null,"My button")},d={tags:["!dev"],render:({})=>e.createElement(t,{loading:!0},"Loading button")},m={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(t,null,"Button")},u={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{size:R.md},"MD button"),e.createElement(t,{size:R.sm},"SM button"),e.createElement(t,{size:R.xs},"XS button"))},p={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{variant:x.default},"Default button"),e.createElement(t,{variant:x.outline},"Outline button"),e.createElement(t,{variant:x.ghost},"Ghost button"))},g={tags:["!dev"],render:({})=>e.createElement(t,null,"Clear")},y={tags:["!dev"],render:({})=>e.createElement(t,{"aria-label":"Clear"},e.createElement(f,{name:A.xmark}))},B={tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(f,{name:A.xmark}))},O={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{"aria-labelledby":"filter-btn"},e.createElement(f,{name:A.filter})),e.createElement("span",{id:"filter-btn"},"Filter your search results"))},b={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,null,e.createElement(f,{name:A.filter})),e.createElement("span",null,"Filter your search results"))},C={tags:["!dev"],parameters:{docs:{source:{...N()}}},render:()=>{const[r,n]=S.useState(""),a=()=>{n("Copied to clipboard.")};return e.createElement(e.Fragment,null,e.createElement(t,{onClick:a},"Copy"),e.createElement("span",{style:{marginLeft:"1rem"}},r))}},E={tags:["!dev"],parameters:{docs:{source:{...N()}}},render:()=>{const[r,n]=S.useState(""),a=()=>{n("Copied to clipboard.")};return e.createElement(e.Fragment,null,e.createElement(t,{onClick:a},"Copy"),e.createElement("span",{role:"status","aria-live":"polite",style:{marginLeft:"1rem"}},r))}},T={tags:["!dev"],parameters:{docs:{source:{...N()}}},render:()=>{const[r,n]=S.useState(""),a=()=>{n("A critical error occurred while saving.")};return e.createElement(e.Fragment,null,e.createElement(t,{onClick:a},"Save"),e.createElement("span",{style:{marginLeft:"1rem",color:"red"}},r))}},v={tags:["!dev"],parameters:{docs:{source:{...N()}}},render:()=>{const[r,n]=S.useState(""),a=()=>{n("A critical error occurred while saving!")};return e.createElement(e.Fragment,null,e.createElement(t,{onClick:a},"Save"),e.createElement("span",{role:"alert",style:{marginLeft:"1rem",color:"red"}},r))}};var I,_,L;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(L=(_=c.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var h,w,U;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <Button color={BUTTON_COLOR.critical}>Critical</Button>
      <Button color={BUTTON_COLOR.information}>Information</Button>
      <Button color={BUTTON_COLOR.neutral}>Neutral</Button>
      <Button color={BUTTON_COLOR.primary}>Primary</Button>
      <Button color={BUTTON_COLOR.success}>Success</Button>
      <Button color={BUTTON_COLOR.warning}>Warning</Button>
    </>
}`,...(U=(w=l.parameters)==null?void 0:w.docs)==null?void 0:U.source}}};var k,F,M;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Button>
      My button
    </Button>
}`,...(M=(F=i.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var z,P,V;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Button loading={true}>
      Loading button
    </Button>
}`,...(V=(P=d.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var D,G,Z;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Button>
      Button
    </Button>
}`,...(Z=(G=m.parameters)==null?void 0:G.docs)==null?void 0:Z.source}}};var Y,j,W;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
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
  tags: ['!dev'],
  render: ({}) => <>
      <Button variant={BUTTON_VARIANT.default}>Default button</Button>
      <Button variant={BUTTON_VARIANT.outline}>Outline button</Button>
      <Button variant={BUTTON_VARIANT.ghost}>Ghost button</Button>
    </>
}`,...(H=(q=p.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Button>
      Clear
    </Button>
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var $,ee,te;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Button aria-label='Clear'>
        <Icon name={ICON_NAME.xmark} />
    </Button>
}`,...(te=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ne,ae;B.parameters={...B.parameters,docs:{...(re=B.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Button>
      <Icon name={ICON_NAME.xmark} />
    </Button>
}`,...(ae=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,se,ce;O.parameters={...O.parameters,docs:{...(oe=O.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <Button aria-labelledby="filter-btn">
        <Icon name={ICON_NAME.filter} />
      </Button>
      <span id="filter-btn">Filter your search results</span>
    </>
}`,...(ce=(se=O.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var le,ie,de;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <Button>
        <Icon name={ICON_NAME.filter} />
      </Button>
      <span>Filter your search results</span>
    </>
}`,...(de=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var me,ue,pe;C.parameters={...C.parameters,docs:{...(me=C.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(pe=(ue=C.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ge,ye,Be;E.parameters={...E.parameters,docs:{...(ge=E.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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

        <span role="status" aria-live="polite" style={{
        marginLeft: '1rem'
      }}>
          {message}
        </span>
      </>;
  }
}`,...(Be=(ye=E.parameters)==null?void 0:ye.docs)==null?void 0:Be.source}}};var Oe,be,Ce;T.parameters={...T.parameters,docs:{...(Oe=T.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Ce=(be=T.parameters)==null?void 0:be.docs)==null?void 0:Ce.source}}};var Ee,Te,ve;v.parameters={...v.parameters,docs:{...(Ee=v.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(ve=(Te=v.parameters)==null?void 0:Te.docs)==null?void 0:ve.source}}};const xe=["Demo","Color","Default","Loading","Overview","Size","Variant","AccessibilityExplicitTextContent","AccessibilityIconOnly","AccessibilityBadPracticeIconOnly","AccessibilityLabelledBy","AccessibilityBadPracticeLabelledBy","AccessibilityBadPracticesRoleStatus","AccessibilityRoleStatus","AccessibilityBadPracticesRoleAlert","AccessibilityRoleAlert"],ke=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityBadPracticeIconOnly:B,AccessibilityBadPracticeLabelledBy:b,AccessibilityBadPracticesRoleAlert:T,AccessibilityBadPracticesRoleStatus:C,AccessibilityExplicitTextContent:g,AccessibilityIconOnly:y,AccessibilityLabelledBy:O,AccessibilityRoleAlert:v,AccessibilityRoleStatus:E,Color:l,Default:i,Demo:c,Loading:d,Overview:m,Size:u,Variant:p,__namedExportsOrder:xe,default:Re},Symbol.toStringTag,{value:"Module"}));export{g as A,ke as B,l as C,i as D,d as L,m as O,u as S,p as V,y as a,O as b,B as c,b as d,C as e,E as f,T as g,v as h};
