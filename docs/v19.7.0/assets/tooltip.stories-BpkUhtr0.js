import{e,r as X}from"./index-jIWwRBLr.js";import{B as $}from"./Button-B-GJ-1TA.js";import{I as l,a as i}from"./icon-name-D0KNfDOz.js";import{T as t,a as o,b as n}from"./index-Ct9O8XVq.js";import{e as ee,o as te,C as a}from"./controls-BtiQQn1l.js";import{s as oe}from"./source-CPEZJ6oD.js";import{O as ne,a as y}from"./overlay-CZHjGBMC.js";const re={argTypes:ee(["onOpenChange","open","overlayConfig","positionerStyle"]),component:n,subcomponents:{TooltipContent:o,TooltipTrigger:t},title:"React Components/Tooltip"},p={parameters:{layout:"centered"},render:r=>e.createElement(n,{closeDelay:r.closeDelay,openDelay:r.openDelay,overlayConfig:{gutter:r.gutter,position:r.position,sameWidth:r.sameWidth}},e.createElement(t,{asChild:!0},e.createElement(l,{name:i.circleQuestion,style:{fontSize:"24px"}})),e.createElement(o,{withArrow:r.withArrow},r.content)),argTypes:te({closeDelay:{table:{category:a.general},control:"number"},content:{table:{category:a.slot},control:"text"},gutter:{table:{category:a.design,type:{summary:"number"}},control:"number"},openDelay:{table:{category:a.general},control:"number"},position:{table:{category:a.general,type:{summary:"TOOLTIP_POSITION"}},control:{type:"select"},options:ne},sameWidth:{table:{category:a.design},control:{type:"boolean"}},withArrow:{table:{category:a.design,defaultValue:{summary:!1},type:{summary:"boolean"}},control:{type:"boolean"}}}),args:{content:"My tooltip content"}},s={tags:["!dev"],render:({})=>e.createElement(n,{open:!0,overlayConfig:{flip:!1,position:y.top}},e.createElement(t,{asChild:!0},e.createElement(l,{name:i.circleQuestion,style:{fontSize:"24px"}})),e.createElement(o,{createPortal:!1},"This is the tooltip content"))},c={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],globals:{imports:`import { ICON_NAME, Button, Icon, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...oe()}}},render:({})=>{const[r,J]=X.useState(!1);function K(){J(U=>!U)}return e.createElement(e.Fragment,null,e.createElement($,{onClick:K},"Toggle tooltip"),e.createElement(n,{open:r},e.createElement(t,{asChild:!0},e.createElement(l,{name:i.circleQuestion,style:{fontSize:"24px"}})),e.createElement(o,{withArrow:!0},"This is the tooltip content")))}},T={globals:{imports:"import { ICON_NAME, Icon, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(t,{asChild:!0},e.createElement(l,{name:i.circleQuestion,style:{fontSize:"24px"}})),e.createElement(o,null,"This is the tooltip content"))},m={globals:{imports:"import { Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(t,null,"Show tooltip"),e.createElement(o,null,"This is the tooltip content"))},g={decorators:[r=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(3, 1fr)",gap:"20px",padding:"50px 150px"}},r())],globals:{imports:"import { Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(n,{overlayConfig:{position:"top-start"}},e.createElement(t,null,"Top Left"),e.createElement(o,{withArrow:!0},"Top Left tooltip")),e.createElement(n,{overlayConfig:{position:"top"}},e.createElement(t,null,"Top"),e.createElement(o,{withArrow:!0},"Top tooltip")),e.createElement(n,{overlayConfig:{position:"top-end"}},e.createElement(t,null,"Top Right"),e.createElement(o,{withArrow:!0},"Top Right tooltip")),e.createElement(n,{overlayConfig:{position:"left"}},e.createElement(t,null,"Middle Left"),e.createElement(o,{withArrow:!0},"Middle Left tooltip")),e.createElement("div",null),e.createElement(n,{overlayConfig:{position:"right"}},e.createElement(t,null,"Middle Right"),e.createElement(o,{withArrow:!0},"Middle Right tooltip")),e.createElement(n,{overlayConfig:{position:"bottom-start"}},e.createElement(t,null,"Bottom Left"),e.createElement(o,{withArrow:!0},"Bottom Left tooltip")),e.createElement(n,{overlayConfig:{position:"bottom"}},e.createElement(t,null,"Bottom"),e.createElement(o,{withArrow:!0},"Bottom tooltip")),e.createElement(n,{overlayConfig:{position:"bottom-end"}},e.createElement(t,null,"Bottom Right"),e.createElement(o,{withArrow:!0},"Bottom Right tooltip")))},d={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(n,null,e.createElement(t,{asChild:!0},e.createElement(l,{name:i.circleQuestion,style:{fontSize:"24px"}})),e.createElement(o,null,"This is the tooltip content"))},u={globals:{imports:"import { ICON_NAME, Icon, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(t,{asChild:!0},e.createElement(l,{"aria-label":"Open tooltip",name:i.circleInfo,role:"img",style:{fontSize:"24px"}})),e.createElement(o,null,"Some additional context."))},C={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",gap:"16px",alignItems:"center"}},e.createElement(n,null,e.createElement(t,{asChild:!0},e.createElement(l,{name:i.circleQuestion,style:{fontSize:"24px"}})),e.createElement(o,{createPortal:!1},"This is the tooltip content")),e.createElement(n,null,e.createElement(t,{asChild:!0},e.createElement(l,{name:i.circleInfo,style:{fontSize:"24px"}})),e.createElement(o,{createPortal:!1,withArrow:!0},"This is the tooltip content")))},f={globals:{imports:"import { ICON_NAME, Icon, TOOLTIP_POSITION, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement("span",null,"Default Z-axis order:"),e.createElement(n,{open:!0},e.createElement(t,{asChild:!0},e.createElement(l,{name:i.circleInfo,style:{fontSize:"24px"}})),e.createElement(o,{withArrow:!0},"Back")),e.createElement(n,{open:!0},e.createElement(t,{asChild:!0},e.createElement(l,{name:i.circleInfo,style:{fontSize:"24px"}})),e.createElement(o,{withArrow:!0},"Front")),e.createElement("br",null),e.createElement("span",null,"Custom Z-axis order:"),e.createElement(n,{open:!0,overlayConfig:{position:y.bottom},positionerStyle:{zIndex:"calc(var(--ods-theme-overlay-z-index) + 1)"}},e.createElement(t,{asChild:!0},e.createElement(l,{name:i.circleInfo,style:{fontSize:"24px"}})),e.createElement(o,{withArrow:!0},"Front")),e.createElement(n,{open:!0,overlayConfig:{position:y.bottom}},e.createElement(t,{asChild:!0},e.createElement(l,{name:i.circleInfo,style:{fontSize:"24px"}})),e.createElement(o,{withArrow:!0},"Back")))};var h,E,O;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: (arg: DemoArg) => <Tooltip closeDelay={arg.closeDelay} openDelay={arg.openDelay} overlayConfig={{
    gutter: arg.gutter,
    position: arg.position,
    sameWidth: arg.sameWidth
  }}>
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
    gutter: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'number'
        }
      },
      control: 'number'
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
    sameWidth: {
      table: {
        category: CONTROL_CATEGORY.design
      },
      control: {
        type: 'boolean'
      }
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
}`,...(O=(E=p.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var I,w,v;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Tooltip open overlayConfig={{
    flip: false,
    position: TOOLTIP_POSITION.top
  }}>
      <TooltipTrigger asChild>
        <Icon name={ICON_NAME.circleQuestion} style={{
        fontSize: '24px'
      }} />
      </TooltipTrigger>

      <TooltipContent createPortal={false}>
        This is the tooltip content
      </TooltipContent>
    </Tooltip>
}`,...(v=(w=s.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var A,b,S;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(S=(b=c.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var N,x,_;T.parameters={...T.parameters,docs:{...(N=T.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(_=(x=T.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var R,M,L;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(L=(M=m.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var z,P,B;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
      <Tooltip overlayConfig={{
      position: 'top-start'
    }}>
        <TooltipTrigger>
          Top Left
        </TooltipTrigger>
        <TooltipContent withArrow>
          Top Left tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip overlayConfig={{
      position: 'top'
    }}>
        <TooltipTrigger>
          Top
        </TooltipTrigger>
        <TooltipContent withArrow>
          Top tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip overlayConfig={{
      position: 'top-end'
    }}>
        <TooltipTrigger>
          Top Right
        </TooltipTrigger>
        <TooltipContent withArrow>
          Top Right tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip overlayConfig={{
      position: 'left'
    }}>
        <TooltipTrigger>
          Middle Left
        </TooltipTrigger>
        <TooltipContent withArrow>
          Middle Left tooltip
        </TooltipContent>
      </Tooltip>

      <div />

      <Tooltip overlayConfig={{
      position: 'right'
    }}>
        <TooltipTrigger>
          Middle Right
        </TooltipTrigger>
        <TooltipContent withArrow>
          Middle Right tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip overlayConfig={{
      position: 'bottom-start'
    }}>
        <TooltipTrigger>
          Bottom Left
        </TooltipTrigger>
        <TooltipContent withArrow>
          Bottom Left tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip overlayConfig={{
      position: 'bottom'
    }}>
        <TooltipTrigger>
          Bottom
        </TooltipTrigger>
        <TooltipContent withArrow>
          Bottom tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip overlayConfig={{
      position: 'bottom-end'
    }}>
        <TooltipTrigger>
          Bottom Right
        </TooltipTrigger>
        <TooltipContent withArrow>
          Bottom Right tooltip
        </TooltipContent>
      </Tooltip>
    </>
}`,...(B=(P=g.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var D,G,Q;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(Q=(G=d.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var F,Y,Z;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var k,W,V;C.parameters={...C.parameters,docs:{...(k=C.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(V=(W=C.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var j,q,H;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
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

      <Tooltip open overlayConfig={{
      position: TOOLTIP_POSITION.bottom
    }} positionerStyle={{
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

      <Tooltip open overlayConfig={{
      position: TOOLTIP_POSITION.bottom
    }}>
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
}`,...(H=(q=f.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};const le=["Demo","AnatomyTech","Controlled","CustomTrigger","Default","Grid","Overview","AccessibilityTooltip","ThemeGenerator","ZIndex"],ge=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityTooltip:u,AnatomyTech:s,Controlled:c,CustomTrigger:T,Default:m,Demo:p,Grid:g,Overview:d,ThemeGenerator:C,ZIndex:f,__namedExportsOrder:le,default:re},Symbol.toStringTag,{value:"Module"}));export{u as A,T as C,m as D,g as G,d as O,ge as T,f as Z,s as a,c as b};
