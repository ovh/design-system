import{e as t,r as j}from"./index-jIWwRBLr.js";import{B as k}from"./Button-B-GJ-1TA.js";import{I as l,a as i}from"./icon-name-C581wThh.js";import{T as e,a as o,b as n}from"./TooltipTrigger-CtwhYrHp.js";import{O as q}from"./overlay-CZHjGBMC.js";import{e as H,o as J,C as a}from"./controls-BtiQQn1l.js";import{s as K}from"./source-CPEZJ6oD.js";const U={argTypes:H(["onOpenChange","open"]),component:n,subcomponents:{TooltipContent:o,TooltipTrigger:e},title:"React Components/Tooltip"},p={parameters:{layout:"centered"},render:r=>t.createElement(n,{closeDelay:r.closeDelay,openDelay:r.openDelay,position:r.position},t.createElement(e,{asChild:!0},t.createElement(l,{name:i.circleQuestion,style:{fontSize:"24px"}})),t.createElement(o,{withArrow:r.withArrow},r.content)),argTypes:J({closeDelay:{table:{category:a.general},control:"number"},content:{table:{category:a.slot},control:"text"},openDelay:{table:{category:a.general},control:"number"},position:{table:{category:a.general,type:{summary:"TOOLTIP_POSITION"}},control:{type:"select"},options:q},withArrow:{table:{category:a.design,defaultValue:{summary:!1},type:{summary:"boolean"}},control:{type:"boolean"}}}),args:{content:"My tooltip content"}},s={decorators:[r=>t.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],globals:{imports:`import { ICON_NAME, Button, Icon, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...K()}}},render:({})=>{const[r,Y]=j.useState(!1);function F(){Y(V=>!V)}return t.createElement(t.Fragment,null,t.createElement(k,{onClick:F},"Toggle tooltip"),t.createElement(n,{open:r},t.createElement(e,{asChild:!0},t.createElement(l,{name:i.circleQuestion,style:{fontSize:"24px"}})),t.createElement(o,{withArrow:!0},"This is the tooltip content")))}},c={globals:{imports:"import { ICON_NAME, Icon, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(n,null,t.createElement(e,{asChild:!0},t.createElement(l,{name:i.circleQuestion,style:{fontSize:"24px"}})),t.createElement(o,null,"This is the tooltip content"))},T={globals:{imports:"import { Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(n,null,t.createElement(e,null,"Show tooltip"),t.createElement(o,null,"This is the tooltip content"))},m={decorators:[r=>t.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(3, 1fr)",gap:"20px",padding:"50px 150px"}},r())],globals:{imports:"import { Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(t.Fragment,null,t.createElement(n,{position:"top-start"},t.createElement(e,null,"Top Left"),t.createElement(o,{withArrow:!0},"Top Left tooltip")),t.createElement(n,{position:"top"},t.createElement(e,null,"Top"),t.createElement(o,{withArrow:!0},"Top tooltip")),t.createElement(n,{position:"top-end"},t.createElement(e,null,"Top Right"),t.createElement(o,{withArrow:!0},"Top Right tooltip")),t.createElement(n,{position:"left"},t.createElement(e,null,"Middle Left"),t.createElement(o,{withArrow:!0},"Middle Left tooltip")),t.createElement("div",null),t.createElement(n,{position:"right"},t.createElement(e,null,"Middle Right"),t.createElement(o,{withArrow:!0},"Middle Right tooltip")),t.createElement(n,{position:"bottom-start"},t.createElement(e,null,"Bottom Left"),t.createElement(o,{withArrow:!0},"Bottom Left tooltip")),t.createElement(n,{position:"bottom"},t.createElement(e,null,"Bottom"),t.createElement(o,{withArrow:!0},"Bottom tooltip")),t.createElement(n,{position:"bottom-end"},t.createElement(e,null,"Bottom Right"),t.createElement(o,{withArrow:!0},"Bottom Right tooltip")))},g={tags:["!dev"],parameters:{layout:"centered"},render:({})=>t.createElement(n,null,t.createElement(e,{asChild:!0},t.createElement(l,{name:i.circleQuestion,style:{fontSize:"24px"}})),t.createElement(o,null,"This is the tooltip content"))},d={globals:{imports:"import { ICON_NAME, Icon, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(n,null,t.createElement(e,{asChild:!0},t.createElement(l,{"aria-label":"Open tooltip",name:i.circleInfo,role:"img",style:{fontSize:"24px"}})),t.createElement(o,null,"Some additional context."))},u={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>t.createElement("div",{style:{display:"flex",gap:"16px",alignItems:"center"}},t.createElement(n,null,t.createElement(e,{asChild:!0},t.createElement(l,{name:i.circleQuestion,style:{fontSize:"24px"}})),t.createElement(o,{createPortal:!1},"This is the tooltip content")),t.createElement(n,null,t.createElement(e,{asChild:!0},t.createElement(l,{name:i.circleInfo,style:{fontSize:"24px"}})),t.createElement(o,{createPortal:!1,withArrow:!0},"This is the tooltip content")))};var C,h,E;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: (arg: DemoArg) => <Tooltip closeDelay={arg.closeDelay} openDelay={arg.openDelay} position={arg.position}>
      <TooltipTrigger asChild>
        <Icon name={ICON_NAME.circleQuestion} style={{
        fontSize: '24px'
      }} />
      </TooltipTrigger>

      <TooltipContent withArrow={arg.withArrow}>
        {arg.content}
      </TooltipContent>
    </Tooltip>,
  argTypes: orderControls({
    closeDelay: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'number'
    },
    content: {
      table: {
        category: CONTROL_CATEGORY.slot
      },
      control: 'text'
    },
    openDelay: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'number'
    },
    position: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'TOOLTIP_POSITION'
        }
      },
      control: {
        type: 'select'
      },
      options: TOOLTIP_POSITIONS
    },
    withArrow: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: {
        type: 'boolean'
      }
    }
  }),
  args: {
    content: 'My tooltip content'
  }
}`,...(E=(h=p.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var f,y,O;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  globals: {
    imports: \`import { ICON_NAME, Button, Icon, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';
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
    const [isOpen, setIsOpen] = useState(false);
    function toggleTooltip() {
      setIsOpen(isOpen => !isOpen);
    }
    return <>
        <Button onClick={toggleTooltip}>
          Toggle tooltip
        </Button>

        <Tooltip open={isOpen}>
          <TooltipTrigger asChild>
            <Icon name={ICON_NAME.circleQuestion} style={{
            fontSize: '24px'
          }} />
          </TooltipTrigger>

          <TooltipContent withArrow>
            This is the tooltip content
          </TooltipContent>
        </Tooltip>
      </>;
  }
}`,...(O=(y=s.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var w,A,I;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Icon, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tooltip>
      <TooltipTrigger asChild>
        <Icon name={ICON_NAME.circleQuestion} style={{
        fontSize: '24px'
      }} />
      </TooltipTrigger>

      <TooltipContent>
        This is the tooltip content
      </TooltipContent>
    </Tooltip>
}`,...(I=(A=c.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var b,S,v;T.parameters={...T.parameters,docs:{...(b=T.parameters)==null?void 0:b.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tooltip>
      <TooltipTrigger>
        Show tooltip
      </TooltipTrigger>

      <TooltipContent>
        This is the tooltip content
      </TooltipContent>
    </Tooltip>
}`,...(v=(S=T.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var x,N,R;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: '20px',
    padding: '50px 150px'
  }}>
      {story()}
    </div>],
  globals: {
    imports: \`import { Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Tooltip position="top-start">
        <TooltipTrigger>
          Top Left
        </TooltipTrigger>
        <TooltipContent withArrow>
          Top Left tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip position="top">
        <TooltipTrigger>
          Top
        </TooltipTrigger>
        <TooltipContent withArrow>
          Top tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip position="top-end">
        <TooltipTrigger>
          Top Right
        </TooltipTrigger>
        <TooltipContent withArrow>
          Top Right tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip position="left">
        <TooltipTrigger>
          Middle Left
        </TooltipTrigger>
        <TooltipContent withArrow>
          Middle Left tooltip
        </TooltipContent>
      </Tooltip>

      <div />

      <Tooltip position="right">
        <TooltipTrigger>
          Middle Right
        </TooltipTrigger>
        <TooltipContent withArrow>
          Middle Right tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip position="bottom-start">
        <TooltipTrigger>
          Bottom Left
        </TooltipTrigger>
        <TooltipContent withArrow>
          Bottom Left tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip position="bottom">
        <TooltipTrigger>
          Bottom
        </TooltipTrigger>
        <TooltipContent withArrow>
          Bottom tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip position="bottom-end">
        <TooltipTrigger>
          Bottom Right
        </TooltipTrigger>
        <TooltipContent withArrow>
          Bottom Right tooltip
        </TooltipContent>
      </Tooltip>
    </>
}`,...(R=(N=m.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var _,M,L;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Tooltip>
      <TooltipTrigger asChild>
        <Icon name={ICON_NAME.circleQuestion} style={{
        fontSize: '24px'
      }} />
      </TooltipTrigger>

      <TooltipContent>
        This is the tooltip content
      </TooltipContent>
    </Tooltip>
}`,...(L=(M=g.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var D,B,z;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Icon, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tooltip>
      <TooltipTrigger asChild>
        <Icon aria-label="Open tooltip" name={ICON_NAME.circleInfo} role="img" style={{
        fontSize: '24px'
      }} />
      </TooltipTrigger>

      <TooltipContent>
        Some additional context.
      </TooltipContent>
    </Tooltip>
}`,...(z=(B=d.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var P,G,Q;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Icon name={ICON_NAME.circleQuestion} style={{
          fontSize: '24px'
        }} />
        </TooltipTrigger>
        <TooltipContent createPortal={false}>This is the tooltip content</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Icon name={ICON_NAME.circleInfo} style={{
          fontSize: '24px'
        }} />
        </TooltipTrigger>
        <TooltipContent createPortal={false} withArrow>This is the tooltip content</TooltipContent>
      </Tooltip>
    </div>
}`,...(Q=(G=u.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};const W=["Demo","Controlled","CustomTrigger","Default","Grid","Overview","AccessibilityTooltip","ThemeGenerator"],rt=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityTooltip:d,Controlled:s,CustomTrigger:c,Default:T,Demo:p,Grid:m,Overview:g,ThemeGenerator:u,__namedExportsOrder:W,default:U},Symbol.toStringTag,{value:"Module"}));export{d as A,c as C,T as D,m as G,g as O,rt as T,s as a};
