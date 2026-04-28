import{e,r as ne}from"./index-jIWwRBLr.js";import{B as a,d as f}from"./Button-B-GJ-1TA.js";import{a as ae}from"./colors-DSObuHxd.js";import{D as pe}from"./divider-color-2AUX7hAv.js";import{I as p,a as i}from"./icon-name-D0KNfDOz.js";import{P as o,a as r,b as t}from"./index-DyJ6-P7h.js";import{e as ie,o as le,C as l}from"./controls-BtiQQn1l.js";import{s as se}from"./source-CPEZJ6oD.js";import{O as ce,a as E}from"./overlay-CZHjGBMC.js";const me={argTypes:ie(["autoFocus","onOpenChange","onPositionChange","open","overlayConfig","positionerStyle","triggerId"]),component:t,subcomponents:{PopoverContent:r,PopoverTrigger:o},title:"React Components/Popover"},s={parameters:{layout:"centered"},render:n=>e.createElement(t,{overlayConfig:{gutter:n.gutter,position:n.position,sameWidth:n.sameWidth}},e.createElement(o,null,"Show popover"),e.createElement(r,{withArrow:n.withArrow},n.content)),argTypes:le({content:{table:{category:l.slot},control:"text"},gutter:{table:{category:l.design,type:{summary:"number"}},control:"number"},position:{table:{category:l.general,type:{summary:"POPOVER_POSITION"}},control:{type:"select"},options:ce},sameWidth:{table:{category:l.design},control:{type:"boolean"}},withArrow:{table:{category:l.design,defaultValue:{summary:!1},type:{summary:"boolean"}},control:{type:"boolean"}}}),args:{content:"My popover content"}},c={tags:["!dev"],render:({})=>e.createElement(t,{open:!0,overlayConfig:{flip:!1,position:E.top}},e.createElement(o,{asChild:!0},e.createElement(a,null,"Popover trigger")),e.createElement(r,{createPortal:!1},"This is the popover content"))},m={decorators:[n=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},n())],globals:{imports:`import { ICON_NAME, Button, Icon, Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...se()}}},render:({})=>{const[n,oe]=ne.useState(!1);function re(){oe(te=>!te)}return e.createElement(e.Fragment,null,e.createElement(a,{onClick:re},"Toggle popover"),e.createElement(t,{open:n},e.createElement(o,{asChild:!0},e.createElement(p,{name:i.cog})),e.createElement(r,{withArrow:!0},"This is the popover content")))}},v={globals:{imports:"import { Button, Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(a,null,"Custom Trigger")),e.createElement(r,null,"This is the popover content"))},g={globals:{imports:"import { Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,null,"Show popover"),e.createElement(r,null,"This is the popover content"))},d={decorators:[n=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(3, 1fr)",gap:"20px",padding:"50px 150px"}},n())],globals:{imports:"import { Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{overlayConfig:{position:"top-start"}},e.createElement(o,null,"Top Left"),e.createElement(r,{withArrow:!0},"Top Left popover")),e.createElement(t,{overlayConfig:{position:"top"}},e.createElement(o,null,"Top"),e.createElement(r,{withArrow:!0},"Top popover")),e.createElement(t,{overlayConfig:{position:"top-end"}},e.createElement(o,null,"Top Right"),e.createElement(r,{withArrow:!0},"Top Right popover")),e.createElement(t,{overlayConfig:{position:"left"}},e.createElement(o,null,"Middle Left"),e.createElement(r,{withArrow:!0},"Middle Left popover")),e.createElement("div",null),e.createElement(t,{overlayConfig:{position:"right"}},e.createElement(o,null,"Middle Right"),e.createElement(r,{withArrow:!0},"Middle Right popover")),e.createElement(t,{overlayConfig:{position:"bottom-start"}},e.createElement(o,null,"Bottom Left"),e.createElement(r,{withArrow:!0},"Bottom Left popover")),e.createElement(t,{overlayConfig:{position:"bottom"}},e.createElement(o,null,"Bottom"),e.createElement(r,{withArrow:!0},"Bottom popover")),e.createElement(t,{overlayConfig:{position:"bottom-end"}},e.createElement(o,null,"Bottom Right"),e.createElement(r,{withArrow:!0},"Bottom Right popover")))},u={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(a,null,"Show popover")),e.createElement(r,null,"This is the popover content"))},P={globals:{imports:"import { BUTTON_COLOR, BUTTON_VARIANT, ICON_NAME, Button, Divider, Icon, Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,{"aria-haspopup":"menu",asChild:!0},e.createElement(a,null,e.createElement(p,{name:i.ellipsisVertical}))),e.createElement(r,{"aria-label":"Profile menu",withArrow:!0},e.createElement("div",{role:"menu",style:{display:"flex",flexDirection:"column"}},e.createElement(a,{role:"menuitem",variant:f.ghost},"Information"),e.createElement(a,{role:"menuitem",variant:f.ghost},"Notifications"),e.createElement(pe,{style:{width:"100%"}}),e.createElement(a,{color:ae.critical,role:"menuitem",variant:f.ghost},"Sign out"))))},h={globals:{imports:"import { Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{overlayConfig:{sameWidth:!0}},e.createElement(o,null,"Show popover that will take this width as reference"),e.createElement(r,null,"The popover content"))},C={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexFlow:"row wrap",gap:"12px"}},e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(a,null,"Default")),e.createElement(r,{createPortal:!1},"This is the popover content")),e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(a,null,"With Arrow")),e.createElement(r,{createPortal:!1,withArrow:!0},"This is the popover content")))},T={globals:{imports:"import { ICON_NAME, Icon, POPOVER_POSITION, Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement("span",null,"Default Z-axis order:"),e.createElement(t,{open:!0},e.createElement(o,{asChild:!0},e.createElement(p,{name:i.circleInfo,style:{fontSize:"24px"}})),e.createElement(r,{withArrow:!0},"Back")),e.createElement(t,{open:!0},e.createElement(o,{asChild:!0},e.createElement(p,{name:i.circleInfo,style:{fontSize:"24px"}})),e.createElement(r,{withArrow:!0},"Front")),e.createElement("br",null),e.createElement("span",null,"Custom Z-axis order:"),e.createElement(t,{open:!0,overlayConfig:{position:E.bottom},positionerStyle:{zIndex:"calc(var(--ods-theme-overlay-z-index) + 1)"}},e.createElement(o,{asChild:!0},e.createElement(p,{name:i.circleInfo,style:{fontSize:"24px"}})),e.createElement(r,{withArrow:!0},"Front")),e.createElement(t,{open:!0,overlayConfig:{position:E.bottom}},e.createElement(o,{asChild:!0},e.createElement(p,{name:i.circleInfo,style:{fontSize:"24px"}})),e.createElement(r,{withArrow:!0},"Back")))};var y,w,O;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: (arg: DemoArg) => <Popover overlayConfig={{
    gutter: arg.gutter,
    position: arg.position,
    sameWidth: arg.sameWidth
  }}>
      <PopoverTrigger>
        Show popover
      </PopoverTrigger>

      <PopoverContent withArrow={arg.withArrow}>
        {arg.content}
      </PopoverContent>
    </Popover>,
  argTypes: orderControls({
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
    position: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'POPOVER_POSITION'
        }
      },
      control: {
        type: 'select'
      },
      options: POPOVER_POSITIONS
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
    content: 'My popover content'
  }
}`,...(O=(w=s.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var A,I,N;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Popover open={true} overlayConfig={{
    flip: false,
    position: POPOVER_POSITION.top
  }}>
      <PopoverTrigger asChild>
        <Button>
          Popover trigger
        </Button>
      </PopoverTrigger>

      <PopoverContent createPortal={false}>
        This is the popover content
      </PopoverContent>
    </Popover>
}`,...(N=(I=c.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var b,S,B;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  globals: {
    imports: \`import { ICON_NAME, Button, Icon, Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';
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
    function togglePopover() {
      setIsOpen(isOpen => !isOpen);
    }
    return <>
        <Button onClick={togglePopover}>
          Toggle popover
        </Button>

        <Popover open={isOpen}>
          <PopoverTrigger asChild>
            <Icon name={ICON_NAME.cog} />
          </PopoverTrigger>

          <PopoverContent withArrow>
            This is the popover content
          </PopoverContent>
        </Popover>
      </>;
  }
}`,...(B=(S=m.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var R,x,_;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Popover>
      <PopoverTrigger asChild>
        <Button>
          Custom Trigger
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        This is the popover content
      </PopoverContent>
    </Popover>
}`,...(_=(x=v.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var M,L,V;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Popover>
      <PopoverTrigger>
        Show popover
      </PopoverTrigger>

      <PopoverContent>
        This is the popover content
      </PopoverContent>
    </Popover>
}`,...(V=(L=g.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var D,W,z;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
    imports: \`import { Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Popover overlayConfig={{
      position: 'top-start'
    }}>
        <PopoverTrigger>
          Top Left
        </PopoverTrigger>
        <PopoverContent withArrow>
          Top Left popover
        </PopoverContent>
      </Popover>

      <Popover overlayConfig={{
      position: 'top'
    }}>
        <PopoverTrigger>
          Top
        </PopoverTrigger>
        <PopoverContent withArrow>
          Top popover
        </PopoverContent>
      </Popover>

      <Popover overlayConfig={{
      position: 'top-end'
    }}>
        <PopoverTrigger>
          Top Right
        </PopoverTrigger>
        <PopoverContent withArrow>
          Top Right popover
        </PopoverContent>
      </Popover>

      <Popover overlayConfig={{
      position: 'left'
    }}>
        <PopoverTrigger>
          Middle Left
        </PopoverTrigger>
        <PopoverContent withArrow>
          Middle Left popover
        </PopoverContent>
      </Popover>

      <div />

      <Popover overlayConfig={{
      position: 'right'
    }}>
        <PopoverTrigger>
          Middle Right
        </PopoverTrigger>
        <PopoverContent withArrow>
          Middle Right popover
        </PopoverContent>
      </Popover>

      <Popover overlayConfig={{
      position: 'bottom-start'
    }}>
        <PopoverTrigger>
          Bottom Left
        </PopoverTrigger>
        <PopoverContent withArrow>
          Bottom Left popover
        </PopoverContent>
      </Popover>

      <Popover overlayConfig={{
      position: 'bottom'
    }}>
        <PopoverTrigger>
          Bottom
        </PopoverTrigger>
        <PopoverContent withArrow>
          Bottom popover
        </PopoverContent>
      </Popover>

      <Popover overlayConfig={{
      position: 'bottom-end'
    }}>
        <PopoverTrigger>
          Bottom Right
        </PopoverTrigger>
        <PopoverContent withArrow>
          Bottom Right popover
        </PopoverContent>
      </Popover>
    </>
}`,...(z=(W=d.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var F,G,U;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Popover>
      <PopoverTrigger asChild>
        <Button>
          Show popover
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        This is the popover content
      </PopoverContent>
    </Popover>
}`,...(U=(G=u.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var k,Y,Z;P.parameters={...P.parameters,docs:{...(k=P.parameters)==null?void 0:k.docs,source:{originalSource:`{
  globals: {
    imports: \`import { BUTTON_COLOR, BUTTON_VARIANT, ICON_NAME, Button, Divider, Icon, Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Popover>
      <PopoverTrigger aria-haspopup="menu" asChild>
        <Button>
          <Icon name={ICON_NAME.ellipsisVertical} />
        </Button>
      </PopoverTrigger>

      <PopoverContent aria-label="Profile menu" withArrow>
        <div role="menu" style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
          <Button role="menuitem" variant={BUTTON_VARIANT.ghost}>
            Information
          </Button>

          <Button role="menuitem" variant={BUTTON_VARIANT.ghost}>
            Notifications
          </Button>

          <Divider style={{
          width: '100%'
        }} />

          <Button color={BUTTON_COLOR.critical} role="menuitem" variant={BUTTON_VARIANT.ghost}>
            Sign out
          </Button>
        </div>
      </PopoverContent>
    </Popover>
}`,...(Z=(Y=P.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var j,q,H;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Popover overlayConfig={{
    sameWidth: true
  }}>
      <PopoverTrigger>
        Show popover that will take this width as reference
      </PopoverTrigger>

      <PopoverContent>
        The popover content
      </PopoverContent>
    </Popover>
}`,...(H=(q=h.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var J,K,Q;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    flexFlow: 'row wrap',
    gap: '12px'
  }}>
      <Popover>
        <PopoverTrigger asChild>
          <Button>Default</Button>
        </PopoverTrigger>
        <PopoverContent createPortal={false}>This is the popover content</PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button>With Arrow</Button>
        </PopoverTrigger>
        <PopoverContent createPortal={false} withArrow>This is the popover content</PopoverContent>
      </Popover>
    </div>
}`,...(Q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,$,ee;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Icon, POPOVER_POSITION, Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <span>Default Z-axis order:</span>

      <Popover open>
        <PopoverTrigger asChild>
          <Icon name={ICON_NAME.circleInfo} style={{
          fontSize: '24px'
        }} />
        </PopoverTrigger>

        <PopoverContent withArrow>
          Back
        </PopoverContent>
      </Popover>

      <Popover open>
        <PopoverTrigger asChild>
          <Icon name={ICON_NAME.circleInfo} style={{
          fontSize: '24px'
        }} />
        </PopoverTrigger>

        <PopoverContent withArrow>
          Front
        </PopoverContent>
      </Popover>

      <br />

      <span>Custom Z-axis order:</span>

      <Popover open overlayConfig={{
      position: POPOVER_POSITION.bottom
    }} positionerStyle={{
      zIndex: 'calc(var(--ods-theme-overlay-z-index) + 1)'
    }}>
        <PopoverTrigger asChild>
          <Icon name={ICON_NAME.circleInfo} style={{
          fontSize: '24px'
        }} />
        </PopoverTrigger>

        <PopoverContent withArrow>
          Front
        </PopoverContent>
      </Popover>

      <Popover open overlayConfig={{
      position: POPOVER_POSITION.bottom
    }}>
        <PopoverTrigger asChild>
          <Icon name={ICON_NAME.circleInfo} style={{
          fontSize: '24px'
        }} />
        </PopoverTrigger>

        <PopoverContent withArrow>
          Back
        </PopoverContent>
      </Popover>
    </>
}`,...(ee=($=T.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const ve=["Demo","AnatomyTech","Controlled","CustomTrigger","Default","Grid","Overview","AccessibilityWithMenu","SameWidth","ThemeGenerator","ZIndex"],ye=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityWithMenu:P,AnatomyTech:c,Controlled:m,CustomTrigger:v,Default:g,Demo:s,Grid:d,Overview:u,SameWidth:h,ThemeGenerator:C,ZIndex:T,__namedExportsOrder:ve,default:me},Symbol.toStringTag,{value:"Module"}));export{P as A,v as C,g as D,d as G,u as O,ye as P,h as S,T as Z,c as a,m as b};
