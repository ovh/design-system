import{e,r as z}from"./index-jIWwRBLr.js";import{B as p,d as u}from"./Button-Tqe-VRSF.js";import{a as q}from"./colors-DSObuHxd.js";import{D as H}from"./Divider-Dh8-cuUJ.js";import{I as U,a as Y}from"./icon-name-C581wThh.js";import{P as o,a as r,b as t}from"./PopoverTrigger-DrWuZNFw.js";import{O as J}from"./overlay-CZHjGBMC.js";import{e as K,o as Q,C as a}from"./controls-BtiQQn1l.js";import{s as X}from"./source-CPEZJ6oD.js";const Z={argTypes:K(["autoFocus","onOpenChange","onPositionChange","open","triggerId"]),component:t,subcomponents:{PopoverContent:r,PopoverTrigger:o},title:"React Components/Popover"},i={parameters:{layout:"centered"},render:n=>e.createElement(t,{gutter:n.gutter,position:n.position,sameWidth:n.sameWidth},e.createElement(o,null,"Show popover"),e.createElement(r,{withArrow:n.withArrow},n.content)),argTypes:Q({content:{table:{category:a.slot},control:"text"},gutter:{table:{category:a.design,type:{summary:"number"}},control:"number"},position:{table:{category:a.general,type:{summary:"POPOVER_POSITION"}},control:{type:"select"},options:J},sameWidth:{table:{category:a.design},control:{type:"boolean"}},withArrow:{table:{category:a.design,defaultValue:{summary:!1},type:{summary:"boolean"}},control:{type:"boolean"}}}),args:{content:"My popover content"}},s={decorators:[n=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},n())],globals:{imports:`import { ICON_NAME, Button, Icon, Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...X()}}},render:({})=>{const[n,F]=z.useState(!1);function k(){F(j=>!j)}return e.createElement(e.Fragment,null,e.createElement(p,{onClick:k},"Toggle popover"),e.createElement(t,{open:n},e.createElement(o,{asChild:!0},e.createElement(U,{name:Y.cog})),e.createElement(r,{withArrow:!0},"This is the popover content")))}},l={globals:{imports:"import { Button, Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(p,null,"Custom Trigger")),e.createElement(r,null,"This is the popover content"))},m={globals:{imports:"import { Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,null,"Show popover"),e.createElement(r,null,"This is the popover content"))},c={decorators:[n=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(3, 1fr)",gap:"20px",padding:"50px 150px"}},n())],globals:{imports:"import { Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{position:"top-start"},e.createElement(o,null,"Top Left"),e.createElement(r,{withArrow:!0},"Top Left popover")),e.createElement(t,{position:"top"},e.createElement(o,null,"Top"),e.createElement(r,{withArrow:!0},"Top popover")),e.createElement(t,{position:"top-end"},e.createElement(o,null,"Top Right"),e.createElement(r,{withArrow:!0},"Top Right popover")),e.createElement(t,{position:"left"},e.createElement(o,null,"Middle Left"),e.createElement(r,{withArrow:!0},"Middle Left popover")),e.createElement("div",null),e.createElement(t,{position:"right"},e.createElement(o,null,"Middle Right"),e.createElement(r,{withArrow:!0},"Middle Right popover")),e.createElement(t,{position:"bottom-start"},e.createElement(o,null,"Bottom Left"),e.createElement(r,{withArrow:!0},"Bottom Left popover")),e.createElement(t,{position:"bottom"},e.createElement(o,null,"Bottom"),e.createElement(r,{withArrow:!0},"Bottom popover")),e.createElement(t,{position:"bottom-end"},e.createElement(o,null,"Bottom Right"),e.createElement(r,{withArrow:!0},"Bottom Right popover")))},v={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(p,null,"Show popover")),e.createElement(r,null,"This is the popover content"))},g={globals:{imports:"import { BUTTON_COLOR, BUTTON_VARIANT, ICON_NAME, Button, Divider, Icon, Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,{"aria-haspopup":"menu",asChild:!0},e.createElement(p,null,e.createElement(U,{name:Y.ellipsisVertical}))),e.createElement(r,{"aria-label":"Profile menu",withArrow:!0},e.createElement("div",{role:"menu",style:{display:"flex",flexDirection:"column"}},e.createElement(p,{role:"menuitem",variant:u.ghost},"Information"),e.createElement(p,{role:"menuitem",variant:u.ghost},"Notifications"),e.createElement(H,{style:{width:"100%"}}),e.createElement(p,{color:q.critical,role:"menuitem",variant:u.ghost},"Sign out"))))},d={globals:{imports:"import { Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{sameWidth:!0},e.createElement(o,null,"Show popover that will take this width as reference"),e.createElement(r,null,"The popover content"))};var P,T,h;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: (arg: DemoArg) => <Popover gutter={arg.gutter} position={arg.position} sameWidth={arg.sameWidth}>
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
}`,...(h=(T=i.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var C,E,w;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(w=(E=s.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var O,f,y;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(y=(f=l.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var A,b,B;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(B=(b=m.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var R,N,I;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
      <Popover position="top-start">
        <PopoverTrigger>
          Top Left
        </PopoverTrigger>
        <PopoverContent withArrow>
          Top Left popover
        </PopoverContent>
      </Popover>

      <Popover position="top">
        <PopoverTrigger>
          Top
        </PopoverTrigger>
        <PopoverContent withArrow>
          Top popover
        </PopoverContent>
      </Popover>

      <Popover position="top-end">
        <PopoverTrigger>
          Top Right
        </PopoverTrigger>
        <PopoverContent withArrow>
          Top Right popover
        </PopoverContent>
      </Popover>

      <Popover position="left">
        <PopoverTrigger>
          Middle Left
        </PopoverTrigger>
        <PopoverContent withArrow>
          Middle Left popover
        </PopoverContent>
      </Popover>

      <div />

      <Popover position="right">
        <PopoverTrigger>
          Middle Right
        </PopoverTrigger>
        <PopoverContent withArrow>
          Middle Right popover
        </PopoverContent>
      </Popover>

      <Popover position="bottom-start">
        <PopoverTrigger>
          Bottom Left
        </PopoverTrigger>
        <PopoverContent withArrow>
          Bottom Left popover
        </PopoverContent>
      </Popover>

      <Popover position="bottom">
        <PopoverTrigger>
          Bottom
        </PopoverTrigger>
        <PopoverContent withArrow>
          Bottom popover
        </PopoverContent>
      </Popover>

      <Popover position="bottom-end">
        <PopoverTrigger>
          Bottom Right
        </PopoverTrigger>
        <PopoverContent withArrow>
          Bottom Right popover
        </PopoverContent>
      </Popover>
    </>
}`,...(I=(N=c.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var S,_,L;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(L=(_=v.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var x,M,D;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(D=(M=g.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var V,W,G;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Popover sameWidth>
      <PopoverTrigger>
        Show popover that will take this width as reference
      </PopoverTrigger>

      <PopoverContent>
        The popover content
      </PopoverContent>
    </Popover>
}`,...(G=(W=d.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};const $=["Demo","Controlled","CustomTrigger","Default","Grid","Overview","AccessibilityWithMenu","SameWidth"],le=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityWithMenu:g,Controlled:s,CustomTrigger:l,Default:m,Demo:i,Grid:c,Overview:v,SameWidth:d,__namedExportsOrder:$,default:Z},Symbol.toStringTag,{value:"Module"}));export{g as A,l as C,m as D,c as G,v as O,le as P,d as S,s as a};
