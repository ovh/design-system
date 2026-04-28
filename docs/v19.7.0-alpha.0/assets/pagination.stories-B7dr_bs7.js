import{e,r as X}from"./index-jIWwRBLr.js";import{P as a}from"./Pagination-Dpz-9c1x.js";import{e as Z,o as ee,C as t}from"./controls-BtiQQn1l.js";import{s as K}from"./source-CPEZJ6oD.js";const ae={argTypes:Z(["defaultPage","onPageChange","onPageSizeChange","page","pageSize","renderTotalItemsLabel"]),component:a,title:"React Components/Pagination"},o={argTypes:ee({disabled:{table:{category:t.general}},labelTooltipNext:{table:{category:t.general}},labelTooltipPrev:{table:{category:t.general}},pageSize:{table:{category:t.general}},page:{table:{category:t.general}},siblingCount:{table:{category:t.general}},totalItems:{table:{category:t.general}},withPageSizeSelector:{table:{category:t.general}}}),args:{totalItems:5e3}},r={globals:{imports:"import { Pagination } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{"aria-label":"Pagination",totalItems:5e3})},n={globals:{imports:`import { Pagination } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...K()}}},render:({})=>{const[u,Q]=X.useState(1);function U({page:V}){Q(V)}return e.createElement(a,{onPageChange:U,page:u,totalItems:500})}},s={globals:{imports:"import { Pagination } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{totalItems:5e3})},l={globals:{imports:"import { Pagination } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{disabled:!0,totalItems:500})},i={globals:{imports:"import { Pagination } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{pageSize:25,totalItems:500})},c={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(a,{totalItems:100,withPageSizeSelector:!0})},g={globals:{imports:"import { Pagination } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{defaultPage:5,siblingCount:2,totalItems:500})},m={globals:{imports:"import { Pagination } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{labelTooltipPrev:"Go to previous page",labelTooltipNext:"Go to next page",totalItems:500})},d={globals:{imports:"import { Pagination } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...K()}}},render:({})=>e.createElement(a,{renderTotalItemsLabel:({totalItems:u})=>`of ${u} results`,totalItems:500,withPageSizeSelector:!0})},p={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"flex-start"}},e.createElement(a,{totalItems:100}),e.createElement(a,{totalItems:500,pageSize:25}),e.createElement(a,{totalItems:500,disabled:!0}),e.createElement(a,{totalItems:100,withPageSizeSelector:!0}))};var b,P,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
    withPageSizeSelector: {
      table: {
        category: CONTROL_CATEGORY.general
      }
    }
  }),
  args: {
    totalItems: 5000
  }
}`,...(v=(P=o.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var S,f,C;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Pagination aria-label="Pagination" totalItems={5000} />
}`,...(C=(f=r.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var I,h,T;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination } from '@ovhcloud/ods-react';
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
    return <Pagination onPageChange={handlePageChange} page={page} totalItems={500} />;
  }
}`,...(T=(h=n.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var O,y,E;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Pagination totalItems={5000} />
}`,...(E=(y=s.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var R,x,z;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Pagination disabled totalItems={500} />
}`,...(z=(x=l.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var L,G,_;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Pagination pageSize={25} totalItems={500} />
}`,...(_=(G=i.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var N,A,D;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Pagination totalItems={100} withPageSizeSelector />
}`,...(D=(A=c.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var w,Y,W;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Pagination defaultPage={5} siblingCount={2} totalItems={500} />
}`,...(W=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:W.source}}};var j,$,F;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Pagination labelTooltipPrev={'Go to previous page'} labelTooltipNext={'Go to next page'} totalItems={500} />
}`,...(F=($=m.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var M,k,q;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => <Pagination renderTotalItemsLabel={({
    totalItems
  }) => \`of \${totalItems} results\`} totalItems={500} withPageSizeSelector />
}`,...(q=(k=d.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var B,H,J;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
      <Pagination totalItems={100} />
      <Pagination totalItems={500} pageSize={25} />
      <Pagination totalItems={500} disabled />
      <Pagination totalItems={100} withPageSizeSelector />
    </div>
}`,...(J=(H=p.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const te=["Demo","AccessibilityLabel","Controlled","Default","Disabled","ItemsPerPage","Overview","SiblingCount","WithLabels","TotalItems","ThemeGenerator"],le=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityLabel:r,Controlled:n,Default:s,Demo:o,Disabled:l,ItemsPerPage:i,Overview:c,SiblingCount:g,ThemeGenerator:p,TotalItems:d,WithLabels:m,__namedExportsOrder:te,default:ae},Symbol.toStringTag,{value:"Module"}));export{r as A,n as C,s as D,i as I,c as O,le as P,g as S,d as T,m as W,l as a};
