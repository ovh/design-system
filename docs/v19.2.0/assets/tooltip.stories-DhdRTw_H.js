import{e as t,r as Q}from"./index-jIWwRBLr.js";import{B as Y}from"./Button-Dwx1IzdD.js";import{I as g,a as d}from"./icon-name-C581wThh.js";import{T as o,a as e,b as n}from"./TooltipTrigger-CjaENt2x.js";import{O as F}from"./overlay-CZHjGBMC.js";import{e as V,o as j,C as l}from"./controls-BtiQQn1l.js";import{s as k}from"./source-CPEZJ6oD.js";const q={argTypes:V(["onOpenChange","open"]),component:n,subcomponents:{TooltipContent:e,TooltipTrigger:o},title:"React Components/Tooltip"},i={parameters:{layout:"centered"},render:r=>t.createElement(n,{closeDelay:r.closeDelay,openDelay:r.openDelay,position:r.position},t.createElement(o,{asChild:!0},t.createElement(g,{name:d.circleQuestion,style:{fontSize:"24px"}})),t.createElement(e,{withArrow:r.withArrow},r.content)),argTypes:j({closeDelay:{table:{category:l.general},control:"number"},content:{table:{category:l.slot},control:"text"},openDelay:{table:{category:l.general},control:"number"},position:{table:{category:l.general,type:{summary:"TOOLTIP_POSITION"}},control:{type:"select"},options:F},withArrow:{table:{category:l.design,defaultValue:{summary:!1},type:{summary:"boolean"}},control:{type:"boolean"}}}),args:{content:"My tooltip content"}},p={decorators:[r=>t.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],globals:{imports:`import { ICON_NAME, Button, Icon, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...k()}}},render:({})=>{const[r,z]=Q.useState(!1);function G(){z(P=>!P)}return t.createElement(t.Fragment,null,t.createElement(Y,{onClick:G},"Toggle tooltip"),t.createElement(n,{open:r},t.createElement(o,{asChild:!0},t.createElement(g,{name:d.circleQuestion,style:{fontSize:"24px"}})),t.createElement(e,{withArrow:!0},"This is the tooltip content")))}},a={globals:{imports:"import { ICON_NAME, Icon, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(n,null,t.createElement(o,{asChild:!0},t.createElement(g,{name:d.circleQuestion,style:{fontSize:"24px"}})),t.createElement(e,null,"This is the tooltip content"))},s={globals:{imports:"import { Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(n,null,t.createElement(o,null,"Show tooltip"),t.createElement(e,null,"This is the tooltip content"))},c={decorators:[r=>t.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(3, 1fr)",gap:"20px",padding:"50px 150px"}},r())],globals:{imports:"import { Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(t.Fragment,null,t.createElement(n,{position:"top-start"},t.createElement(o,null,"Top Left"),t.createElement(e,{withArrow:!0},"Top Left tooltip")),t.createElement(n,{position:"top"},t.createElement(o,null,"Top"),t.createElement(e,{withArrow:!0},"Top tooltip")),t.createElement(n,{position:"top-end"},t.createElement(o,null,"Top Right"),t.createElement(e,{withArrow:!0},"Top Right tooltip")),t.createElement(n,{position:"left"},t.createElement(o,null,"Middle Left"),t.createElement(e,{withArrow:!0},"Middle Left tooltip")),t.createElement("div",null),t.createElement(n,{position:"right"},t.createElement(o,null,"Middle Right"),t.createElement(e,{withArrow:!0},"Middle Right tooltip")),t.createElement(n,{position:"bottom-start"},t.createElement(o,null,"Bottom Left"),t.createElement(e,{withArrow:!0},"Bottom Left tooltip")),t.createElement(n,{position:"bottom"},t.createElement(o,null,"Bottom"),t.createElement(e,{withArrow:!0},"Bottom tooltip")),t.createElement(n,{position:"bottom-end"},t.createElement(o,null,"Bottom Right"),t.createElement(e,{withArrow:!0},"Bottom Right tooltip")))},T={tags:["!dev"],parameters:{layout:"centered"},render:({})=>t.createElement(n,null,t.createElement(o,{asChild:!0},t.createElement(g,{name:d.circleQuestion,style:{fontSize:"24px"}})),t.createElement(e,null,"This is the tooltip content"))},m={globals:{imports:"import { ICON_NAME, Icon, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(n,null,t.createElement(o,{asChild:!0},t.createElement(g,{"aria-label":"Open tooltip",name:d.circleInfo,role:"img",style:{fontSize:"24px"}})),t.createElement(e,null,"Some additional context."))};var u,C,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(C=i.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var E,y,f;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(f=(y=p.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var O,w,A;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(A=(w=a.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var b,I,S;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(S=(I=s.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var v,N,x;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(N=c.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var R,_,M;T.parameters={...T.parameters,docs:{...(R=T.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(M=(_=T.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var L,D,B;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(B=(D=m.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};const H=["Demo","Controlled","CustomTrigger","Default","Grid","Overview","AccessibilityTooltip"],tt=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityTooltip:m,Controlled:p,CustomTrigger:a,Default:s,Demo:i,Grid:c,Overview:T,__namedExportsOrder:H,default:q},Symbol.toStringTag,{value:"Module"}));export{m as A,a as C,s as D,c as G,T as O,tt as T,p as a};
