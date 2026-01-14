import{r as d,e as o}from"./index-jIWwRBLr.js";import{B as i}from"./Button-B-GJ-1TA.js";import{a as m}from"./colors-DSObuHxd.js";import{a as h}from"./icon-name-BpdEc4-2.js";import{L as jt}from"./Link-C-y4OBrb.js";import{T as Z,a as Ut}from"./Text-CW33_IfE.js";import{j as B}from"./jsx-runtime-Cfl8ynUo.js";import{c as Q}from"./index-CqY9YpN0.js";import{r as qt}from"./index-DWDEzXrj.js";import{a as S}from"./overlay-CZHjGBMC.js";import{u as Ft}from"./context-C_-r2uoG.js";import{b as Gt,d as $t,M as Vt,a as Xt}from"./MessageIcon-Cv9gt_Zv.js";import{e as Yt,o as zt,C as G}from"./controls-BtiQQn1l.js";import{s as x}from"./source-CPEZJ6oD.js";var Ht=t=>typeof t=="function",J=(t,e)=>Ht(t)?t(e):t,Qt=(()=>{let t=0;return()=>(++t).toString()})(),Jt=20,K="default",xt=(t,e)=>{let{toastLimit:r}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,r)};case 1:return{...t,toasts:t.toasts.map(n=>n.id===e.toast.id?{...n,...e.toast}:n)};case 2:let{toast:s}=e;return xt(t,{type:t.toasts.find(n=>n.id===s.id)?1:0,toast:s});case 3:let{toastId:l}=e;return{...t,toasts:t.toasts.map(n=>n.id===l||l===void 0?{...n,dismissed:!0,visible:!1}:n)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(n=>n.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let f=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(n=>({...n,pauseDuration:n.pauseDuration+f}))}}},$=[],Rt={toasts:[],pausedAt:void 0,settings:{toastLimit:Jt}},O={},wt=(t,e=K)=>{O[e]=xt(O[e]||Rt,t),$.forEach(([r,s])=>{r===e&&s(O[e])})},At=t=>Object.keys(O).forEach(e=>wt(t,e)),Kt=t=>Object.keys(O).find(e=>O[e].toasts.some(r=>r.id===t)),V=(t=K)=>e=>{wt(e,t)},Zt={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Pt=(t={},e=K)=>{let[r,s]=d.useState(O[e]||Rt),l=d.useRef(O[e]);d.useEffect(()=>(l.current!==O[e]&&s(O[e]),$.push([e,s]),()=>{let n=$.findIndex(([y])=>y===e);n>-1&&$.splice(n,1)}),[e]);let f=r.toasts.map(n=>{var y,C,I;return{...t,...t[n.type],...n,removeDelay:n.removeDelay||((y=t[n.type])==null?void 0:y.removeDelay)||(t==null?void 0:t.removeDelay),duration:n.duration||((C=t[n.type])==null?void 0:C.duration)||(t==null?void 0:t.duration)||Zt[n.type],style:{...t.style,...(I=t[n.type])==null?void 0:I.style,...n.style}}});return{...r,toasts:f}},te=(t,e="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...r,id:(r==null?void 0:r.id)||Qt()}),F=t=>(e,r)=>{let s=te(e,t,r);return V(s.toasterId||Kt(s.id))({type:2,toast:s}),s.id},u=(t,e)=>F("blank")(t,e);u.error=F("error");u.success=F("success");u.loading=F("loading");u.custom=F("custom");u.dismiss=(t,e)=>{let r={type:3,toastId:t};e?V(e)(r):At(r)};u.dismissAll=t=>u.dismiss(void 0,t);u.remove=(t,e)=>{let r={type:4,toastId:t};e?V(e)(r):At(r)};u.removeAll=t=>u.remove(void 0,t);u.promise=(t,e,r)=>{let s=u.loading(e.loading,{...r,...r==null?void 0:r.loading});return typeof t=="function"&&(t=t()),t.then(l=>{let f=e.success?J(e.success,l):void 0;return f?u.success(f,{id:s,...r,...r==null?void 0:r.success}):u.dismiss(s),l}).catch(l=>{let f=e.error?J(e.error,l):void 0;f?u.error(f,{id:s,...r,...r==null?void 0:r.error}):u.dismiss(s)}),t};var ee=1e3,oe=(t,e="default")=>{let{toasts:r,pausedAt:s}=Pt(t,e),l=d.useRef(new Map).current,f=d.useCallback((c,v=ee)=>{if(l.has(c))return;let T=setTimeout(()=>{l.delete(c),n({type:4,toastId:c})},v);l.set(c,T)},[]);d.useEffect(()=>{if(s)return;let c=Date.now(),v=r.map(T=>{if(T.duration===1/0)return;let k=(T.duration||0)+T.pauseDuration-(c-T.createdAt);if(k<0){T.visible&&u.dismiss(T.id);return}return setTimeout(()=>u.dismiss(T.id,e),k)});return()=>{v.forEach(T=>T&&clearTimeout(T))}},[r,s,e]);let n=d.useCallback(V(e),[e]),y=d.useCallback(()=>{n({type:5,time:Date.now()})},[n]),C=d.useCallback((c,v)=>{n({type:1,toast:{id:c,height:v}})},[n]),I=d.useCallback(()=>{s&&n({type:6,time:Date.now()})},[s,n]),X=d.useCallback((c,v)=>{let{reverseOrder:T=!1,gutter:k=8,defaultPosition:g}=v||{},_=r.filter(E=>(E.position||g)===(c.position||g)&&E.height),Y=_.findIndex(E=>E.id===c.id),R=_.filter((E,z)=>z<Y&&E.visible).length;return _.filter(E=>E.visible).slice(...T?[R+1]:[0,R]).reduce((E,z)=>E+(z.height||0)+k,0)},[r]);return d.useEffect(()=>{r.forEach(c=>{if(c.dismissed)f(c.id,c.removeDelay);else{let v=l.get(c.id);v&&(clearTimeout(v),l.delete(c.id))}})},[r,f]),{toasts:r,handlers:{updateHeight:C,startPause:y,endPause:I,calculateOffset:X}}},Lt=u,b=(t=>(t[t.bottom=S.bottom]="bottom",t[t.bottomEnd=S.bottomEnd]="bottomEnd",t[t.bottomStart=S.bottomStart]="bottomStart",t[t.top=S.top]="top",t[t.topEnd=S.topEnd]="topEnd",t[t.topStart=S.topStart]="topStart",t))(b||{});const re=Object.freeze(Object.values(b)),Dt=d.createContext(void 0),Mt=({children:t,dismissible:e})=>B.jsx(Dt.Provider,{value:{dismissible:e},children:t});function ne(){return Ft(Dt)}Mt.__docgenInfo={description:"",methods:[],displayName:"ToasterProvider",props:{createPortal:{required:!1,tsType:{name:"boolean"},description:"Whether the component should be rendered in the DOM close to the body tag."},dismissible:{required:!1,tsType:{name:"boolean"},description:"Whether toasts can be manually removed."},duration:{required:!1,tsType:{name:"number"},description:"Toast duration before being removed."},max:{required:!1,tsType:{name:"number"},description:"The maximum number of toast displayed at the same time."},position:{required:!1,tsType:{name:"literal",value:"`${TOASTER_POSITION}`"},description:"The position on screen where the toasts will appear."},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function N(t,e){return Lt.custom(t||"",e)}const a=Object.assign(N,{critical:(t,e)=>N(t,{...e,color:m.critical}),information:(t,e)=>N(t,{...e,color:m.information}),neutral:(t,e)=>N(t,{...e,color:m.neutral}),primary:(t,e)=>N(t,{...e,color:m.primary}),remove:t=>Lt.remove(t),success:(t,e)=>N(t,{...e,color:m.success}),warning:(t,e)=>N(t,{...e,color:m.warning})}),se="_toast_b8xf3_2",ae={toast:se},Wt=({toast:t})=>{const{dismissible:e}=ne();return B.jsxs(Gt,{className:Q(ae.toast,t.className),color:t.color,dismissible:typeof t.dismissible=="boolean"?t.dismissible:e,onRemove:()=>a.remove(t.id),variant:$t.light,children:[t.icon&&B.jsx(Vt,{name:t.icon}),B.jsx(Xt,{children:J(t.message,t)})]})};Wt.displayName="Toast";const ie="_toaster_1ugyd_2",le="_toaster__toast_1ugyd_9",H={toaster:ie,toaster__toast:le,"toaster__toast--bottom":"_toaster__toast--bottom_1ugyd_13","toaster__toast--bottom-end":"_toaster__toast--bottom-end_1ugyd_13","toaster__toast--bottom-start":"_toaster__toast--bottom-start_1ugyd_13","toaster__toast--top":"_toaster__toast--top_1ugyd_18","toaster__toast--top-end":"_toaster__toast--top-end_1ugyd_18","toaster__toast--top-start":"_toaster__toast--top-start_1ugyd_18"},ce=d.forwardRef(({className:t,duration:e=3e3,id:r,max:s=3,position:l=b.topEnd,...f},n)=>{const{handlers:y}=oe({duration:e,removeDelay:0},r),{toasts:C}=Pt({duration:e,removeDelay:0},r),I=d.useMemo(()=>[b.bottom,b.bottomEnd,b.bottomStart].indexOf(l)>-1,[l]),X=d.useMemo(()=>!s||s<=0?[]:C.filter(g=>g.visible).filter((g,_)=>_<s),[s,C]),{calculateOffset:c,endPause:v,startPause:T,updateHeight:k}=y;return d.useEffect(()=>{(s||s===0)&&C.filter(g=>g.visible).filter((g,_)=>_>=s).forEach(g=>a.remove(g.id))},[s,C]),B.jsx("div",{"aria-live":"polite",className:Q(H.toaster,t),"data-ods":"toaster",ref:n,...f,onMouseEnter:T,onMouseLeave:v,children:X.map(g=>{const _=c(g,{gutter:8,reverseOrder:!1}),Y=R=>{if(R&&typeof g.height!="number"){const E=R.getBoundingClientRect().height;k(g.id,E)}};return B.jsx("div",{className:Q(H.toaster__toast,H[`toaster__toast--${l}`]),ref:Y,role:g.color===m.critical?"alert":"status",style:{transform:`translateY(${I?-_:_}px)`},children:B.jsx(Wt,{toast:g})},g.id)})})}),p=d.forwardRef(({className:t,createPortal:e=!0,dismissible:r,duration:s=3e3,id:l,max:f=3,position:n=b.topEnd,...y},C)=>{const I=B.jsx(ce,{className:t,duration:s,id:l,max:f,position:n,ref:C,...y});return B.jsx(Mt,{dismissible:r,children:e?qt.createPortal(I,document.body):I})});p.displayName="Toaster";p.__docgenInfo={description:"",methods:[],displayName:"Toaster",props:{createPortal:{required:!1,tsType:{name:"boolean"},description:"Whether the component should be rendered in the DOM close to the body tag.",defaultValue:{value:"true",computed:!1}},dismissible:{required:!1,tsType:{name:"boolean"},description:"Whether toasts can be manually removed."},duration:{required:!1,tsType:{name:"number"},description:"Toast duration before being removed.",defaultValue:{value:"3000",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"The maximum number of toast displayed at the same time.",defaultValue:{value:"3",computed:!1}},position:{required:!1,tsType:{name:"literal",value:"`${TOASTER_POSITION}`"},description:"The position on screen where the toasts will appear.",defaultValue:{value:"TOASTER_POSITION.topEnd",computed:!0}}}};const de={argTypes:Yt(["createPortal"]),component:p,tags:["new"],title:"React Components/Toaster"},w={render:t=>o.createElement(o.Fragment,null,o.createElement(p,{...t}),o.createElement(i,{onClick:()=>a("Notification message")},"Trigger toast")),argTypes:zt({dismissible:{table:{category:G.general},control:"boolean"},duration:{table:{category:G.general},control:"number"},position:{table:{category:G.general,type:{summary:"TOASTER_POSITION"}},control:{type:"select"},options:re},max:{table:{category:G.general},control:"number"}})},A={globals:{imports:"import { BUTTON_COLOR, Button, Toaster, toast } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...x()}}},tags:["!dev"],render:({})=>o.createElement(o.Fragment,null,o.createElement(p,{id:"colors"}),o.createElement("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"}},o.createElement(i,{color:m.critical,onClick:()=>a.critical("Critical",{toasterId:"colors"})},"Critical toast"),o.createElement(i,{color:m.information,onClick:()=>a.information("Information",{toasterId:"colors"})},"Information toast"),o.createElement(i,{color:m.neutral,onClick:()=>a.neutral("Neutral",{toasterId:"colors"})},"Neutral toast"),o.createElement(i,{color:m.primary,onClick:()=>a.primary("Primary",{toasterId:"colors"})},"Primary toast"),o.createElement(i,{color:m.success,onClick:()=>a.success("Success",{toasterId:"colors"})},"Success toast"),o.createElement(i,{color:m.warning,onClick:()=>a.warning("Warning",{toasterId:"colors"})},"Warning toast")))},P={globals:{imports:"import { ICON_NAME, TEXT_PRESET, Button, Link, Text, Toaster, toast } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...x()}}},tags:["!dev"],render:({})=>o.createElement(o.Fragment,null,o.createElement(p,{id:"custom-content"}),o.createElement(i,{onClick:()=>a(o.createElement("div",null,o.createElement(Z,{preset:Ut.label},"Toast title"),o.createElement(Z,null,"Toast text helps users providing feedback or information."),o.createElement(jt,null,"Some Link")),{icon:h.circleInfo,toasterId:"custom-content"})},"Trigger toast"))},L={globals:{imports:"import { Button, Toaster, toast } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...x()}}},tags:["!dev"],render:({})=>o.createElement(o.Fragment,null,o.createElement(p,null),o.createElement(i,{onClick:()=>a("Notification message")},"Trigger toast"))},D={globals:{imports:"import { Button, Toaster, toast } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...x()}}},tags:["!dev"],render:({})=>o.createElement(o.Fragment,null,o.createElement(p,{dismissible:!1,id:"dismissible"}),o.createElement("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"}},o.createElement(i,{onClick:()=>a("Non dismissible toast",{toasterId:"dismissible"})},"Trigger non dismissible toast"),o.createElement(i,{onClick:()=>a("Dismissible toast",{dismissible:!0,toasterId:"dismissible"})},"Trigger dismissible toast")))},M={globals:{imports:"import { Button, Toaster, toast } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...x()}}},tags:["!dev"],render:({})=>o.createElement(o.Fragment,null,o.createElement(p,{duration:1/0,id:"duration"}),o.createElement("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"}},o.createElement(i,{onClick:()=>a("Infinite toast",{toasterId:"duration"})},"Trigger infinite toast"),o.createElement(i,{onClick:()=>a("3 seconds toast",{duration:3e3,toasterId:"duration"})},"Trigger 3 seconds toast")))},W={globals:{imports:"import { ICON_NAME, Button, Toaster, toast } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...x()}}},tags:["!dev"],render:({})=>o.createElement(o.Fragment,null,o.createElement(p,{id:"icon"}),o.createElement(i,{onClick:()=>a("Notification message with icon",{icon:h.circleInfo,toasterId:"icon"})},"Trigger toast"))},j={tags:["!dev"],parameters:{layout:"centered"},render:({})=>{const[t,e]=d.useState(1);function r(){a(`Toast message ${t}`,{toasterId:"overview"}),e(s=>s+1)}return o.createElement(o.Fragment,null,o.createElement(p,{id:"overview"}),o.createElement(i,{onClick:r},"Trigger toast"))}},U={globals:{imports:"import { ICON_NAME, TOASTER_POSITION, Button, Toaster, toast } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>o.createElement(o.Fragment,null,o.createElement(p,{id:"top-start",position:b.topStart}),o.createElement(p,{id:"top",position:b.top}),o.createElement(p,{id:"top-end",position:b.topEnd}),o.createElement(p,{id:"bottom-start",position:b.bottomStart}),o.createElement(p,{id:"bottom",position:b.bottom}),o.createElement(p,{id:"bottom-end",position:b.bottomEnd}),o.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(2, 1fr)",gap:"20px"}},o.createElement(i,{onClick:()=>a("Top Start",{toasterId:"top-start"})},"Top Start"),o.createElement(i,{onClick:()=>a("Top",{toasterId:"top"})},"Top"),o.createElement(i,{onClick:()=>a("Top End",{toasterId:"top-end"})},"Top End"),o.createElement(i,{onClick:()=>a("Bottom Start",{toasterId:"bottom-start"})},"Bottom Start"),o.createElement(i,{onClick:()=>a("Bottom",{toasterId:"bottom"})},"Bottom"),o.createElement(i,{onClick:()=>a("Bottom End",{toasterId:"bottom-end"})},"Bottom End")))},q={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>o.createElement(o.Fragment,null,o.createElement(p,{duration:1/0,max:1/0}),o.createElement("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"}},o.createElement(i,{color:m.critical,onClick:()=>a.critical("Critical",{icon:h.circleXmark})},"Critical toast"),o.createElement(i,{color:m.information,onClick:()=>a.information("Information",{icon:h.circleInfo})},"Information toast"),o.createElement(i,{color:m.neutral,onClick:()=>a.neutral("Neutral",{icon:h.email})},"Neutral toast"),o.createElement(i,{color:m.primary,onClick:()=>a.primary("Primary",{icon:h.lightbulb})},"Primary toast"),o.createElement(i,{color:m.success,onClick:()=>a.success("Success",{icon:h.circleCheck})},"Success toast"),o.createElement(i,{color:m.warning,onClick:()=>a.warning("Warning",{icon:h.triangleExclamation})},"Warning toast")))};var tt,et,ot;w.parameters={...w.parameters,docs:{...(tt=w.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  render: arg => <>
      <Toaster {...arg} />

      <Button onClick={() => toast('Notification message')}>
        Trigger toast
      </Button>
    </>,
  argTypes: orderControls({
    dismissible: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    duration: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'number'
    },
    position: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'TOASTER_POSITION'
        }
      },
      control: {
        type: 'select'
      },
      options: TOASTER_POSITIONS
    },
    max: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'number'
    }
  })
}`,...(ot=(et=w.parameters)==null?void 0:et.docs)==null?void 0:ot.source}}};var rt,nt,st;A.parameters={...A.parameters,docs:{...(rt=A.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  globals: {
    imports: \`import { BUTTON_COLOR, Button, Toaster, toast } from '@ovhcloud/ods-react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Toaster id="colors" />

      <div style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>
        <Button color={BUTTON_COLOR.critical} onClick={() => toast.critical('Critical', {
        toasterId: 'colors'
      })}>
          Critical toast
        </Button>

        <Button color={BUTTON_COLOR.information} onClick={() => toast.information('Information', {
        toasterId: 'colors'
      })}>
          Information toast
        </Button>

        <Button color={BUTTON_COLOR.neutral} onClick={() => toast.neutral('Neutral', {
        toasterId: 'colors'
      })}>
          Neutral toast
        </Button>

        <Button color={BUTTON_COLOR.primary} onClick={() => toast.primary('Primary', {
        toasterId: 'colors'
      })}>
          Primary toast
        </Button>

        <Button color={BUTTON_COLOR.success} onClick={() => toast.success('Success', {
        toasterId: 'colors'
      })}>
          Success toast
        </Button>

        <Button color={BUTTON_COLOR.warning} onClick={() => toast.warning('Warning', {
        toasterId: 'colors'
      })}>
          Warning toast
        </Button>
      </div>
    </>
}`,...(st=(nt=A.parameters)==null?void 0:nt.docs)==null?void 0:st.source}}};var at,it,lt;P.parameters={...P.parameters,docs:{...(at=P.parameters)==null?void 0:at.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, TEXT_PRESET, Button, Link, Text, Toaster, toast } from '@ovhcloud/ods-react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Toaster id="custom-content" />

      <Button onClick={() => toast(<div>
            <Text preset={TEXT_PRESET.label}>
              Toast title
            </Text>

            <Text>
              Toast text helps users providing feedback or information.
            </Text>

            <Link>
              Some Link
            </Link>
          </div>, {
      icon: ICON_NAME.circleInfo,
      toasterId: 'custom-content'
    })}>
        Trigger toast
      </Button>
    </>
}`,...(lt=(it=P.parameters)==null?void 0:it.docs)==null?void 0:lt.source}}};var ct,dt,mt;L.parameters={...L.parameters,docs:{...(ct=L.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, Toaster, toast } from '@ovhcloud/ods-react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Toaster />

      <Button onClick={() => toast('Notification message')}>
        Trigger toast
      </Button>
    </>
}`,...(mt=(dt=L.parameters)==null?void 0:dt.docs)==null?void 0:mt.source}}};var ut,pt,gt;D.parameters={...D.parameters,docs:{...(ut=D.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, Toaster, toast } from '@ovhcloud/ods-react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Toaster dismissible={false} id="dismissible" />

      <div style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>
        <Button onClick={() => toast('Non dismissible toast', {
        toasterId: 'dismissible'
      })}>
          Trigger non dismissible toast
        </Button>

        <Button onClick={() => toast('Dismissible toast', {
        dismissible: true,
        toasterId: 'dismissible'
      })}>
          Trigger dismissible toast
        </Button>
      </div>
    </>
}`,...(gt=(pt=D.parameters)==null?void 0:pt.docs)==null?void 0:gt.source}}};var ft,Tt,bt;M.parameters={...M.parameters,docs:{...(ft=M.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, Toaster, toast } from '@ovhcloud/ods-react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Toaster duration={Infinity} id="duration" />

      <div style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>
        <Button onClick={() => toast('Infinite toast', {
        toasterId: 'duration'
      })}>
          Trigger infinite toast
        </Button>

        <Button onClick={() => toast('3 seconds toast', {
        duration: 3000,
        toasterId: 'duration'
      })}>
          Trigger 3 seconds toast
        </Button>
      </div>
    </>
}`,...(bt=(Tt=M.parameters)==null?void 0:Tt.docs)==null?void 0:bt.source}}};var vt,Et,Ct;W.parameters={...W.parameters,docs:{...(vt=W.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Button, Toaster, toast } from '@ovhcloud/ods-react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Toaster id="icon" />

      <Button onClick={() => toast('Notification message with icon', {
      icon: ICON_NAME.circleInfo,
      toasterId: 'icon'
    })}>
        Trigger toast
      </Button>
    </>
}`,...(Ct=(Et=W.parameters)==null?void 0:Et.docs)==null?void 0:Ct.source}}};var yt,_t,Ot;j.parameters={...j.parameters,docs:{...(yt=j.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => {
    const [count, setCount] = useState(1);
    function createToast(): void {
      toast(\`Toast message \${count}\`, {
        toasterId: 'overview'
      });
      setCount(c => c + 1);
    }
    return <>
        <Toaster id="overview" />

        <Button onClick={createToast}>
          Trigger toast
        </Button>
      </>;
  }
}`,...(Ot=(_t=j.parameters)==null?void 0:_t.docs)==null?void 0:Ot.source}}};var It,Bt,ht;U.parameters={...U.parameters,docs:{...(It=U.parameters)==null?void 0:It.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, TOASTER_POSITION, Button, Toaster, toast } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Toaster id="top-start" position={TOASTER_POSITION.topStart} />
      <Toaster id="top" position={TOASTER_POSITION.top} />
      <Toaster id="top-end" position={TOASTER_POSITION.topEnd} />
      <Toaster id="bottom-start" position={TOASTER_POSITION.bottomStart} />
      <Toaster id="bottom" position={TOASTER_POSITION.bottom} />
      <Toaster id="bottom-end" position={TOASTER_POSITION.bottomEnd} />

      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'repeat(2, 1fr)',
      gap: '20px'
    }}>
        <Button onClick={() => toast('Top Start', {
        toasterId: 'top-start'
      })}>
          Top Start
        </Button>

        <Button onClick={() => toast('Top', {
        toasterId: 'top'
      })}>
          Top
        </Button>

        <Button onClick={() => toast('Top End', {
        toasterId: 'top-end'
      })}>
          Top End
        </Button>

        <Button onClick={() => toast('Bottom Start', {
        toasterId: 'bottom-start'
      })}>
          Bottom Start
        </Button>

        <Button onClick={() => toast('Bottom', {
        toasterId: 'bottom'
      })}>
          Bottom
        </Button>

        <Button onClick={() => toast('Bottom End', {
        toasterId: 'bottom-end'
      })}>
          Bottom End
        </Button>
      </div>
    </>
}`,...(ht=(Bt=U.parameters)==null?void 0:Bt.docs)==null?void 0:ht.source}}};var Nt,kt,St;q.parameters={...q.parameters,docs:{...(Nt=q.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Toaster duration={Infinity} max={Infinity} />

      <div style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>
        <Button color={BUTTON_COLOR.critical} onClick={() => toast.critical('Critical', {
        icon: ICON_NAME.circleXmark
      })}>
          Critical toast
        </Button>

        <Button color={BUTTON_COLOR.information} onClick={() => toast.information('Information', {
        icon: ICON_NAME.circleInfo
      })}>
          Information toast
        </Button>

        <Button color={BUTTON_COLOR.neutral} onClick={() => toast.neutral('Neutral', {
        icon: ICON_NAME.email
      })}>
          Neutral toast
        </Button>

        <Button color={BUTTON_COLOR.primary} onClick={() => toast.primary('Primary', {
        icon: ICON_NAME.lightbulb
      })}>
          Primary toast
        </Button>

        <Button color={BUTTON_COLOR.success} onClick={() => toast.success('Success', {
        icon: ICON_NAME.circleCheck
      })}>
          Success toast
        </Button>

        <Button color={BUTTON_COLOR.warning} onClick={() => toast.warning('Warning', {
        icon: ICON_NAME.triangleExclamation
      })}>
          Warning toast
        </Button>
      </div>
    </>
}`,...(St=(kt=q.parameters)==null?void 0:kt.docs)==null?void 0:St.source}}};const me=["Demo","Colors","CustomContent","Default","Dismissible","Duration","Icon","Overview","Position","ThemeGenerator"],he=Object.freeze(Object.defineProperty({__proto__:null,Colors:A,CustomContent:P,Default:L,Demo:w,Dismissible:D,Duration:M,Icon:W,Overview:j,Position:U,ThemeGenerator:q,__namedExportsOrder:me,default:de},Symbol.toStringTag,{value:"Module"}));export{A as C,L as D,W as I,j as O,U as P,he as T,D as a,M as b,P as c};
