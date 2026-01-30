import{e,r as J}from"./index-jIWwRBLr.js";import{B as K}from"./Button-B-GJ-1TA.js";import{I as l,a as i}from"./icon-name-BpdEc4-2.js";import{T as t,a as o,b as n}from"./TooltipTrigger-CRWH95NO.js";import{O as U,a as h}from"./overlay-CZHjGBMC.js";import{e as W,o as X,C as a}from"./controls-BtiQQn1l.js";import{s as $}from"./source-CPEZJ6oD.js";const ee={argTypes:W(["onOpenChange","open"]),component:n,subcomponents:{TooltipContent:o,TooltipTrigger:t},title:"React Components/Tooltip"},p={parameters:{layout:"centered"},render:r=>e.createElement(n,{closeDelay:r.closeDelay,openDelay:r.openDelay,position:r.position},e.createElement(t,{asChild:!0},e.createElement(l,{name:i.circleQuestion,style:{fontSize:"24px"}})),e.createElement(o,{withArrow:r.withArrow},r.content)),argTypes:X({closeDelay:{table:{category:a.general},control:"number"},content:{table:{category:a.slot},control:"text"},openDelay:{table:{category:a.general},control:"number"},position:{table:{category:a.general,type:{summary:"TOOLTIP_POSITION"}},control:{type:"select"},options:U},withArrow:{table:{category:a.design,defaultValue:{summary:!1},type:{summary:"boolean"}},control:{type:"boolean"}}}),args:{content:"My tooltip content"}},s={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],globals:{imports:`import { ICON_NAME, Button, Icon, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...$()}}},render:({})=>{const[r,j]=J.useState(!1);function q(){j(H=>!H)}return e.createElement(e.Fragment,null,e.createElement(K,{onClick:q},"Toggle tooltip"),e.createElement(n,{open:r},e.createElement(t,{asChild:!0},e.createElement(l,{name:i.circleQuestion,style:{fontSize:"24px"}})),e.createElement(o,{withArrow:!0},"This is the tooltip content")))}},c={globals:{imports:"import { ICON_NAME, Icon, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(t,{asChild:!0},e.createElement(l,{name:i.circleQuestion,style:{fontSize:"24px"}})),e.createElement(o,null,"This is the tooltip content"))},T={globals:{imports:"import { Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(t,null,"Show tooltip"),e.createElement(o,null,"This is the tooltip content"))},m={decorators:[r=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(3, 1fr)",gap:"20px",padding:"50px 150px"}},r())],globals:{imports:"import { Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(n,{position:"top-start"},e.createElement(t,null,"Top Left"),e.createElement(o,{withArrow:!0},"Top Left tooltip")),e.createElement(n,{position:"top"},e.createElement(t,null,"Top"),e.createElement(o,{withArrow:!0},"Top tooltip")),e.createElement(n,{position:"top-end"},e.createElement(t,null,"Top Right"),e.createElement(o,{withArrow:!0},"Top Right tooltip")),e.createElement(n,{position:"left"},e.createElement(t,null,"Middle Left"),e.createElement(o,{withArrow:!0},"Middle Left tooltip")),e.createElement("div",null),e.createElement(n,{position:"right"},e.createElement(t,null,"Middle Right"),e.createElement(o,{withArrow:!0},"Middle Right tooltip")),e.createElement(n,{position:"bottom-start"},e.createElement(t,null,"Bottom Left"),e.createElement(o,{withArrow:!0},"Bottom Left tooltip")),e.createElement(n,{position:"bottom"},e.createElement(t,null,"Bottom"),e.createElement(o,{withArrow:!0},"Bottom tooltip")),e.createElement(n,{position:"bottom-end"},e.createElement(t,null,"Bottom Right"),e.createElement(o,{withArrow:!0},"Bottom Right tooltip")))},g={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(n,null,e.createElement(t,{asChild:!0},e.createElement(l,{name:i.circleQuestion,style:{fontSize:"24px"}})),e.createElement(o,null,"This is the tooltip content"))},d={globals:{imports:"import { ICON_NAME, Icon, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(t,{asChild:!0},e.createElement(l,{"aria-label":"Open tooltip",name:i.circleInfo,role:"img",style:{fontSize:"24px"}})),e.createElement(o,null,"Some additional context."))},u={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",gap:"16px",alignItems:"center"}},e.createElement(n,null,e.createElement(t,{asChild:!0},e.createElement(l,{name:i.circleQuestion,style:{fontSize:"24px"}})),e.createElement(o,{createPortal:!1},"This is the tooltip content")),e.createElement(n,null,e.createElement(t,{asChild:!0},e.createElement(l,{name:i.circleInfo,style:{fontSize:"24px"}})),e.createElement(o,{createPortal:!1,withArrow:!0},"This is the tooltip content")))},C={globals:{imports:"import { ICON_NAME, Icon, TOOLTIP_POSITION, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement("span",null,"Default Z-axis order:"),e.createElement(n,{open:!0},e.createElement(t,{asChild:!0},e.createElement(l,{name:i.circleInfo,style:{fontSize:"24px"}})),e.createElement(o,{withArrow:!0},"Back")),e.createElement(n,{open:!0},e.createElement(t,{asChild:!0},e.createElement(l,{name:i.circleInfo,style:{fontSize:"24px"}})),e.createElement(o,{withArrow:!0},"Front")),e.createElement("br",null),e.createElement("span",null,"Custom Z-axis order:"),e.createElement(n,{open:!0,position:h.bottom,positionerStyle:{zIndex:"calc(var(--ods-theme-overlay-z-index) + 1)"}},e.createElement(t,{asChild:!0},e.createElement(l,{name:i.circleInfo,style:{fontSize:"24px"}})),e.createElement(o,{withArrow:!0},"Front")),e.createElement(n,{open:!0,position:h.bottom},e.createElement(t,{asChild:!0},e.createElement(l,{name:i.circleInfo,style:{fontSize:"24px"}})),e.createElement(o,{withArrow:!0},"Back")))};var E,f,y;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(y=(f=p.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var O,I,w;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(w=(I=s.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var A,S,x;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(x=(S=c.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var N,b,v;T.parameters={...T.parameters,docs:{...(N=T.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(v=(b=T.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var _,M,R;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(R=(M=m.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var z,L,B;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(B=(L=g.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var D,P,G;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(G=(P=d.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var F,Q,Y;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(Y=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,k,V;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Icon, TOOLTIP_POSITION, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <span>Default Z-axis order:</span>

      <Tooltip open>
        <TooltipTrigger asChild>
          <Icon name={ICON_NAME.circleInfo} style={{
          fontSize: '24px'
        }} />
        </TooltipTrigger>

        <TooltipContent withArrow>
          Back
        </TooltipContent>
      </Tooltip>

      <Tooltip open>
        <TooltipTrigger asChild>
          <Icon name={ICON_NAME.circleInfo} style={{
          fontSize: '24px'
        }} />
        </TooltipTrigger>

        <TooltipContent withArrow>
          Front
        </TooltipContent>
      </Tooltip>

      <br />

      <span>Custom Z-axis order:</span>

      <Tooltip open position={TOOLTIP_POSITION.bottom} positionerStyle={{
      zIndex: 'calc(var(--ods-theme-overlay-z-index) + 1)'
    }}>
        <TooltipTrigger asChild>
          <Icon name={ICON_NAME.circleInfo} style={{
          fontSize: '24px'
        }} />
        </TooltipTrigger>

        <TooltipContent withArrow>
          Front
        </TooltipContent>
      </Tooltip>

      <Tooltip open position={TOOLTIP_POSITION.bottom}>
        <TooltipTrigger asChild>
          <Icon name={ICON_NAME.circleInfo} style={{
          fontSize: '24px'
        }} />
        </TooltipTrigger>

        <TooltipContent withArrow>
          Back
        </TooltipContent>
      </Tooltip>
    </>
}`,...(V=(k=C.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};const te=["Demo","Controlled","CustomTrigger","Default","Grid","Overview","AccessibilityTooltip","ThemeGenerator","ZIndex"],se=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityTooltip:d,Controlled:s,CustomTrigger:c,Default:T,Demo:p,Grid:m,Overview:g,ThemeGenerator:u,ZIndex:C,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{d as A,c as C,T as D,m as G,g as O,se as T,C as Z,s as a};
