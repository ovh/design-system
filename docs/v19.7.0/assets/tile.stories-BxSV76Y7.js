import{r as o,e}from"./index-jIWwRBLr.js";import{c as y,b as k,C as R}from"./index-DaUvfsZM.js";import{c as de,b as S,a as _,R as L}from"./index-DrSf431n.js";import{j as C}from"./jsx-runtime-Cfl8ynUo.js";import{c as ae}from"./index-CqY9YpN0.js";import{C as ie}from"./Card-DNx-3noX.js";import{a as ce}from"./colors-DSObuHxd.js";import{u as pe}from"./context-C_-r2uoG.js";import{o as me,C as O}from"./controls-BtiQQn1l.js";import{s as le}from"./source-CPEZJ6oD.js";const oe=o.createContext(void 0);function re({children:t,disabled:a,selected:n}){return C.jsx(oe.Provider,{value:{disabled:a,selected:n},children:t})}function ue(){return pe(oe)}re.__docgenInfo={description:"",methods:[],displayName:"TileProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Pick"]};const he="_tile_16kx8_2",T={tile:he,"tile--selected":"_tile--selected_16kx8_17","tile--disabled":"_tile--disabled_16kx8_17"},E=o.forwardRef(({className:t,children:a,disabled:n=!1,selected:x=!1,...b},f)=>C.jsx(re,{disabled:n,selected:x,children:C.jsx(ie,{className:ae(T.tile,{[T["tile--selected"]]:x},{[T["tile--disabled"]]:n},t),color:ce.neutral,"data-ods":"tile",ref:f,...b,children:a})}));E.displayName="Tile";E.__docgenInfo={description:"",methods:[],displayName:"Tile",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled.",defaultValue:{value:"false",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"Whether the component is selected.",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const v={"tile-alt-container":"_tile-alt-container_mzuph_2","tile-alt-container--selected":"_tile-alt-container--selected_mzuph_8","tile-alt-container--disabled":"_tile-alt-container--disabled_mzuph_11"},r=o.forwardRef(({children:t,className:a,...n},x)=>{const b=ue(),f=b.selected??!1,se=b.disabled??!1;return C.jsx("div",{className:ae(v["tile-alt-container"],{[v["tile-alt-container--selected"]]:f},{[v["tile-alt-container--disabled"]]:se},a),"data-ods":"tile-alt-container",ref:x,...n,children:t})});r.displayName="TileAltContainer";r.__docgenInfo={description:"",methods:[],displayName:"TileAltContainer",composes:["ComponentPropsWithRef"]};const l=Object.assign(E,{AltContainer:r}),ge={component:l,subcomponents:{TileAltContainer:r},title:"React Components/Tile"},s={render:t=>e.createElement(l,{disabled:t.disabled,selected:t.selected,style:{padding:"16px",width:"300px"}},"This is a tile content."),argTypes:me({disabled:{table:{category:O.general},control:"boolean"},selected:{table:{category:O.general},control:"boolean"}})},d={tags:["!dev"],render:({})=>{const[t,a]=o.useState(!1);return e.createElement(l,{selected:t},e.createElement(y,{checked:t,onCheckedChange:n=>a(n.checked===!0)},e.createElement("div",null,e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"16px"}},e.createElement(k,null),e.createElement(R,null,"Checkbox tile")),e.createElement(r,{style:{padding:"16px"}},"Additional information"))))}},i={globals:{imports:"import { Tile } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(l,null,"This is a tile content.")},c={globals:{imports:"import { Tile } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(l,{disabled:!0},"This tile is disabled.")},p={globals:{imports:"import { Tile } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(l,{selected:!0},"This tile is selected.")},m={globals:{imports:`import { Tile, Checkbox, CheckboxControl, CheckboxLabel } from '@ovhcloud/ods-react';
    import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...le()}}},render:({})=>{const[t,a]=o.useState(!1);return e.createElement(l,{selected:t},e.createElement(y,{checked:t,onCheckedChange:n=>a(n.checked===!0)},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"16px"}},e.createElement(k,null),e.createElement(R,null,"Checkbox tile"))))}},u={globals:{imports:`import { Tile, Radio, RadioGroup, RadioControl, RadioLabel } from '@ovhcloud/ods-react';
    import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...le()}}},render:({})=>{const[t,a]=o.useState("radio-1");return e.createElement(de,{value:t,onValueChange:n=>a(n.value||"")},e.createElement("div",null,e.createElement(l,{selected:t==="radio-1"},e.createElement(S,{value:"radio-1"},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"16px"}},e.createElement(_,null),e.createElement(L,null,"Radio 1"))))),e.createElement("div",null,e.createElement(l,{selected:t==="radio-2"},e.createElement(S,{value:"radio-2"},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"16px"}},e.createElement(_,null),e.createElement(L,null,"Radio 2"))))))}},h={tags:["!dev"],parameters:{layout:"centered"},render:({})=>{const[t,a]=o.useState(!1);return e.createElement(l,{selected:t},e.createElement(y,{checked:t,onCheckedChange:n=>a(n.checked===!0)},e.createElement("div",null,e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"16px"}},e.createElement(k,null),e.createElement(R,null,"Checkbox tile")),e.createElement(r,{style:{padding:"16px"}},"Additional information"))))}},g={name:"ThemeGenerator",parameters:{docs:{disable:!0},options:{showPanel:!1}},tags:["!dev","hidden"],render:({})=>e.createElement("div",{style:{display:"flex",gap:"16px",padding:"16px"}},e.createElement(l,{style:{padding:"16px",width:"200px"}},"Default tile"),e.createElement(l,{selected:!0,style:{padding:"16px",width:"200px"}},"Selected tile"),e.createElement(l,{disabled:!0,style:{padding:"16px",width:"200px"}},"Disabled tile"))};var A,w,G;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <Tile disabled={args.disabled} selected={args.selected} style={{
    padding: '16px',
    width: '300px'
  }}>
      This is a tile content.
    </Tile>,
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    selected: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    }
  })
}`,...(G=(w=s.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var I,N,D;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => {
    const [selected, setSelected] = useState(false);
    return <Tile selected={selected}>
        <Checkbox checked={selected} onCheckedChange={detail => setSelected(detail.checked === true)}>
          <div>
            <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '16px'
          }}>
              <CheckboxControl />
              <CheckboxLabel>Checkbox tile</CheckboxLabel>
            </div>

            <TileAltContainer style={{
            padding: '16px'
          }}>
              Additional information
            </TileAltContainer>
          </div>
        </Checkbox>
      </Tile>;
  }
}`,...(D=(N=d.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var j,P,W;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tile } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tile>
      This is a tile content.
    </Tile>
}`,...(W=(P=i.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var z,V,q;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tile } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tile disabled>
      This tile is disabled.
    </Tile>
}`,...(q=(V=c.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var Y,$,M;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tile } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tile selected>
      This tile is selected.
    </Tile>
}`,...(M=($=p.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var B,F,H;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tile, Checkbox, CheckboxControl, CheckboxLabel } from '@ovhcloud/ods-react';
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
    const [selected, setSelected] = useState(false);
    return <Tile selected={selected}>
        <Checkbox checked={selected} onCheckedChange={detail => setSelected(detail.checked === true)}>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '16px'
        }}>
            <CheckboxControl />
            <CheckboxLabel>Checkbox tile</CheckboxLabel>
          </div>
        </Checkbox>
      </Tile>;
  }
}`,...(H=(F=m.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var J,K,Q;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tile, Radio, RadioGroup, RadioControl, RadioLabel } from '@ovhcloud/ods-react';
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
    const [selected, setSelected] = useState('radio-1');
    return <RadioGroup value={selected} onValueChange={detail => setSelected(detail.value || '')}>
        <div>
          <Tile selected={selected === 'radio-1'}>
            <Radio value={'radio-1'}>
              <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px'
            }}>
                <RadioControl />
                <RadioLabel>
                  Radio 1
                </RadioLabel>
              </div>
            </Radio>
          </Tile>
        </div>
        <div>
          <Tile selected={selected === 'radio-2'}>
            <Radio value={'radio-2'}>
              <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px'
            }}>
                <RadioControl />
                <RadioLabel>
                  Radio 2
                </RadioLabel>
              </div>
            </Radio>
          </Tile>
        </div>
      </RadioGroup>;
  }
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Z;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => {
    const [selected, setSelected] = useState(false);
    return <Tile selected={selected}>
        <Checkbox checked={selected} onCheckedChange={detail => setSelected(detail.checked === true)}>
          <div>
            <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '16px'
          }}>
              <CheckboxControl />
              <CheckboxLabel>Checkbox tile</CheckboxLabel>
            </div>

            <TileAltContainer style={{
            padding: '16px'
          }}>
              Additional information
            </TileAltContainer>
          </div>
        </Checkbox>
      </Tile>;
  }
}`,...(Z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ne;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'ThemeGenerator',
  parameters: {
    docs: {
      disable: true
    },
    options: {
      showPanel: false
    }
  },
  tags: ['!dev', 'hidden'],
  render: ({}) => <div style={{
    display: 'flex',
    gap: '16px',
    padding: '16px'
  }}>
      <Tile style={{
      padding: '16px',
      width: '200px'
    }}>
        Default tile
      </Tile>
      <Tile selected style={{
      padding: '16px',
      width: '200px'
    }}>
        Selected tile
      </Tile>
      <Tile disabled style={{
      padding: '16px',
      width: '200px'
    }}>
        Disabled tile
      </Tile>
    </div>
}`,...(ne=(te=g.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const xe=["Demo","AnatomyTech","Default","Disabled","Selected","WithCheckbox","WithRadioGroup","Overview","ThemeGenerator"],_e=Object.freeze(Object.defineProperty({__proto__:null,AnatomyTech:d,Default:i,Demo:s,Disabled:c,Overview:h,Selected:p,ThemeGenerator:g,WithCheckbox:m,WithRadioGroup:u,__namedExportsOrder:xe,default:ge},Symbol.toStringTag,{value:"Module"}));export{d as A,i as D,h as O,p as S,_e as T,m as W,c as a,u as b};
