import{e,r as oe}from"./index-jIWwRBLr.js";import{P as a,a as o,b as S,c as t}from"./PaginationPageSelector-BM82wr0C.js";import{e as re,o as ie,C as n}from"./controls-BtiQQn1l.js";import{s as se}from"./source-CPEZJ6oD.js";const le={argTypes:re(["defaultPage","onPageChange","onPageSizeChange","page","pageSize","renderTotalItemsLabel"]),component:t,subcomponents:{PaginationPageSelector:S,PaginationPageSizeSelector:o,PaginationPages:a},title:"React Components/Pagination"},r={render:({totalItems:v,withPageSelector:E,withPageSizeSelector:C,...f})=>e.createElement(t,{totalItems:v??5e3,...f},C&&e.createElement(o,null),e.createElement(a,null),E&&e.createElement(S,null)),argTypes:ie({disabled:{table:{category:n.general}},labelTooltipNext:{table:{category:n.general}},labelTooltipPrev:{table:{category:n.general}},pageSize:{table:{category:n.general}},page:{table:{category:n.general}},siblingCount:{table:{category:n.general}},totalItems:{table:{category:n.general}},withPageSelector:{table:{category:n.general}},withPageSizeSelector:{table:{category:n.general}}}),args:{totalItems:5e3}},i={globals:{imports:"import { Pagination, PaginationPages } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{"aria-label":"Pagination",totalItems:5e3},e.createElement(a,null))},s={tags:["!dev"],render:({})=>e.createElement(t,{totalItems:100},e.createElement(o,null),e.createElement(a,null),e.createElement(S,null))},l={globals:{imports:`import { Pagination, PaginationPages } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...se()}}},render:({})=>{const[v,E]=oe.useState(1);function C({page:f}){E(f)}return e.createElement(t,{onPageChange:C,page:v,totalItems:500},e.createElement(a,null))}},g={globals:{imports:"import { Pagination, PaginationPages } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{totalItems:5e3},e.createElement(a,null))},c={globals:{imports:"import { Pagination, PaginationPages } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{disabled:!0,totalItems:500},e.createElement(a,null))},m={globals:{imports:"import { Pagination, PaginationPages } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{pageSize:25,totalItems:500},e.createElement(a,null))},P={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(t,{totalItems:100},e.createElement(o,null),e.createElement(a,null),e.createElement(S,null))},d={globals:{imports:"import { Pagination, PaginationPageSizeSelector, PaginationPages } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{totalItems:500},e.createElement(o,null),e.createElement(a,null))},p={globals:{imports:"import { Pagination, PaginationPages } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{defaultPage:5,siblingCount:2,totalItems:500},e.createElement(a,null))},u={globals:{imports:"import { Pagination, PaginationPages } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{labelTooltipPrev:"Go to previous page",labelTooltipNext:"Go to next page",totalItems:500},e.createElement(a,null))},b={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"flex-start"}},e.createElement(t,{totalItems:100},e.createElement(a,null)),e.createElement(t,{totalItems:500,pageSize:25},e.createElement(a,null)),e.createElement(t,{totalItems:500,disabled:!0},e.createElement(a,null)),e.createElement(t,{totalItems:100},e.createElement(o,null),e.createElement(a,null),e.createElement(S,null)))};var I,h,T;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: ({
    totalItems,
    withPageSelector,
    withPageSizeSelector,
    ...arg
  }: DemoArg) => <Pagination totalItems={totalItems ?? 5000} {...arg}>
      {withPageSizeSelector && <PaginationPageSizeSelector />}

      <PaginationPages />

      {withPageSelector && <PaginationPageSelector />}
    </Pagination>,
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general
      }
    },
    labelTooltipNext: {
      table: {
        category: CONTROL_CATEGORY.general
      }
    },
    labelTooltipPrev: {
      table: {
        category: CONTROL_CATEGORY.general
      }
    },
    pageSize: {
      table: {
        category: CONTROL_CATEGORY.general
      }
    },
    page: {
      table: {
        category: CONTROL_CATEGORY.general
      }
    },
    siblingCount: {
      table: {
        category: CONTROL_CATEGORY.general
      }
    },
    totalItems: {
      table: {
        category: CONTROL_CATEGORY.general
      }
    },
    withPageSelector: {
      table: {
        category: CONTROL_CATEGORY.general
      }
    },
    withPageSizeSelector: {
      table: {
        category: CONTROL_CATEGORY.general
      }
    }
  }),
  args: {
    totalItems: 5000
  }
}`,...(T=(h=r.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var O,y,z;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination, PaginationPages } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Pagination aria-label="Pagination" totalItems={5000}>
      <PaginationPages />
    </Pagination>
}`,...(z=(y=i.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var R,x,A;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Pagination totalItems={100}>
      <PaginationPageSizeSelector />
      <PaginationPages />
      <PaginationPageSelector />
    </Pagination>
}`,...(A=(x=s.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var G,_,L;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination, PaginationPages } from '@ovhcloud/ods-react';
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
  render: ({}) => {
    const [page, setPage] = useState(1);
    function handlePageChange({
      page
    }: PaginationPageChangeDetail) {
      setPage(page);
    }
    return <Pagination onPageChange={handlePageChange} page={page} totalItems={500}>
        <PaginationPages />
      </Pagination>;
  }
}`,...(L=(_=l.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var N,D,w;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination, PaginationPages } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Pagination totalItems={5000}>
      <PaginationPages />
    </Pagination>
}`,...(w=(D=g.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var Y,W,j;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination, PaginationPages } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Pagination disabled totalItems={500}>
      <PaginationPages />
    </Pagination>
}`,...(j=(W=c.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var F,M,k;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination, PaginationPages } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Pagination pageSize={25} totalItems={500}>
      <PaginationPages />
    </Pagination>
}`,...(k=(M=m.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var q,B,H;P.parameters={...P.parameters,docs:{...(q=P.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Pagination totalItems={100}>
      <PaginationPageSizeSelector />
      <PaginationPages />
      <PaginationPageSelector />
    </Pagination>
}`,...(H=(B=P.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var J,K,Q;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination, PaginationPageSizeSelector, PaginationPages } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Pagination totalItems={500}>
      <PaginationPageSizeSelector />

      <PaginationPages />
    </Pagination>
}`,...(Q=(K=d.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,V,X;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination, PaginationPages } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Pagination defaultPage={5} siblingCount={2} totalItems={500}>
      <PaginationPages />
    </Pagination>
}`,...(X=(V=p.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Z,$,ee;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination, PaginationPages } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Pagination labelTooltipPrev="Go to previous page" labelTooltipNext="Go to next page" totalItems={500}>
      <PaginationPages />
    </Pagination>
}`,...(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,te,ne;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
      <Pagination totalItems={100}>
        <PaginationPages />
      </Pagination>
      <Pagination totalItems={500} pageSize={25}>
        <PaginationPages />
      </Pagination>
      <Pagination totalItems={500} disabled>
        <PaginationPages />
      </Pagination>
      <Pagination totalItems={100}>
        <PaginationPageSizeSelector />
        <PaginationPages />
        <PaginationPageSelector />
      </Pagination>
    </div>
}`,...(ne=(te=b.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const ge=["Demo","AccessibilityLabel","AnatomyTech","Controlled","Default","Disabled","ItemsPerPage","Overview","PageSizeSelection","SiblingCount","WithTooltipLabels","ThemeGenerator"],pe=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityLabel:i,AnatomyTech:s,Controlled:l,Default:g,Demo:r,Disabled:c,ItemsPerPage:m,Overview:P,PageSizeSelection:d,SiblingCount:p,ThemeGenerator:b,WithTooltipLabels:u,__namedExportsOrder:ge,default:le},Symbol.toStringTag,{value:"Module"}));export{i as A,l as C,g as D,m as I,P as O,pe as P,p as S,u as W,s as a,c as b,d as c};
