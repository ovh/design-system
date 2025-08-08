import{e}from"./index-D_CmzhJ4.js";import{I as a,a as X,b as W}from"./icon-name-CL_C5kfn.js";import{o as V,C as J}from"./controls-BtiQQn1l.js";const Z={arrowCrossed:[],arrowDown:[],arrowDownLeft:[],arrowDownRight:[],arrowLeft:[],arrowLeftRight:[],arrowRight:[],arrowUp:[],arrowUpDown:[],arrowUpLeft:[],arrowUpRight:[],bell:["notification"],bill:["invoice"],book:[],box:["pack"],calendar:["day","month","year"],check:["validation"],chevronDoubleLeft:[],chevronDoubleRight:[],chevronDown:[],chevronLeft:[],chevronRight:[],chevronUp:[],circleCheck:["validation"],circleInfo:[],circleQuestion:[],circleThreeNodes:[],circleUser:[],circleXmark:["clear","times"],clockTimeFour:[],clockTimeNine:[],clockTimeSix:[],clockTimeThree:[],clockTimeTwelve:[],cloud:[],cloudCheck:["validation"],cloudDownload:[],cloudLock:[],cloudUpload:[],cloudXmark:["clear","times"],cog:[],columns:["filter","table"],comment:["chat","message"],creditCard:[],dPad:[],diamondExclamation:[],diamondExclamationFull:[],diamondsFull:[],download:[],ellipsisHorizontal:[],ellipsisVertical:[],email:[],emoticon:[],emoticonDizzy:[],emoticonNeutral:[],emoticonSad:[],emoticonSmile:[],emoticonWink:[],equal:[],externalLink:[],eye:[],eyeOff:[],file:[],fileCopy:[],fileMinus:[],filePlus:[],filter:[],flaskEmpty:["lab"],flaskFull:["lab"],flaskHalf:["lab"],focus:[],folder:[],folderMinus:[],folderPlus:[],gameConsole:[],gameController:[],gameControllerAlt:[],gathering:[],globe:[],grid:["apps"],gridAlt:[],hamburgerMenu:[],hexagonExclamation:[],hexagonExclamationFull:[],hierarchy:[],home:[],key:[],leaf:[],lifeBuoy:[],lightbulb:[],list:[],location:[],lockClose:[],lockOpen:[],magnifyingGlass:["search"],minus:[],money:[],monitor:["display","screen"],network:[],pen:[],phone:[],plus:[],printer:[],question:[],refresh:[],resize:[],server:["rack"],serverRack:[],shareNodes:[],shield:[],shieldCheck:["validation"],shieldExclamation:[],shieldFirewall:[],shieldLock:[],shieldMinus:[],shieldOff:[],shieldPlus:[],shieldXmark:["clear","times"],shoppingCart:[],shoppingCartError:[],shoppingCartMinus:[],shoppingCartPlus:[],shoppingCartXmark:["clear","times"],shrink:[],shutdown:[],sortAlphaDown:[],sortAlphaUp:[],sortNumericDown:[],sortNumericUp:[],star:[],starFull:[],store:[],tag:[],timer:["alarm","clock"],trafficCone:[],trash:[],triangleExclamation:[],triangleExclamationFull:[],triangleThreeNodes:[],truck:[],undo:[],upload:[],user:[],xmark:["clear","times"]},$={component:a,title:"React Components/Icon"},t={argTypes:V({name:{table:{category:J.general,type:{summary:"ICON_NAME"}},control:{type:"select"},options:W}}),args:{name:X.home}},o={tags:["!dev"],render:({})=>e.createElement(a,{"aria-label":"home",name:"home",role:"img"})},n={render:u=>{const Y=new RegExp(u.search),K=u.search?Object.entries(X).filter(([r,g])=>[g].concat(Z[r]||[]).some(Q=>Y.test(Q))).map(([r,g])=>g):W;return e.createElement("div",{style:{display:"flex",flexFlow:"row",flexWrap:"wrap",gap:"1rem"}},K.map(r=>e.createElement(a,{key:r,name:r,title:r})))},argTypes:{name:{table:{disable:!0}},search:{control:{type:"text"},description:"Search for a specific icon name or tag"}}},l={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(a,{name:"home",style:{fontSize:"2rem",color:"var(--ods-color-primary-500)"}})},s={tags:["!dev"],render:({})=>e.createElement(a,{name:"home"})},i={tags:["!dev"],render:({})=>e.createElement(a,{name:"home"})},c={tags:["!dev"],render:({})=>e.createElement(a,{"aria-label":"Help",name:"circle-question",role:"img"})},m={tags:["!dev"],render:({})=>e.createElement(a,{name:"home"})},d={tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement("label",{htmlFor:"rating"},"Rating"),e.createElement("div",{id:"rating"},e.createElement(a,{name:"star",tabIndex:0,"aria-label":"one star",role:"img"}),e.createElement(a,{name:"star",tabIndex:0,"aria-label":"two star",role:"img"}),e.createElement(a,{name:"star",tabIndex:0,"aria-label":"three star",role:"img"}),e.createElement(a,{name:"star",tabIndex:0,"aria-label":"four star",role:"img"}),e.createElement(a,{name:"star",tabIndex:0,"aria-label":"five star",role:"img"})))},p={tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement("label",{id:"rating-label",htmlFor:"rating"},"Rating"),e.createElement("div",{id:"rating",role:"radiogroup","aria-labelledby":"rating-label"},e.createElement(a,{name:"star",role:"radio",tabIndex:-1,"aria-label":"one star","aria-checked":"false"}),e.createElement(a,{name:"star",role:"radio",tabIndex:0,"aria-label":"two star","aria-checked":"true"}),e.createElement(a,{name:"star",role:"radio",tabIndex:-1,"aria-label":"three star","aria-checked":"false"}),e.createElement(a,{name:"star",role:"radio",tabIndex:-1,"aria-label":"four star","aria-checked":"false"}),e.createElement(a,{name:"star",role:"radio",tabIndex:-1,"aria-label":"five star","aria-checked":"false"})))};var b,h,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  argTypes: orderControls({
    name: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'ICON_NAME'
        }
      },
      control: {
        type: 'select'
      },
      options: ICON_NAMES
    }
  }),
  args: {
    name: ICON_NAME.home
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,I,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Icon aria-label="home" name="home" role="img" />
}`,...(y=(I=o.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var x,E,k;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (arg: AllArg) => {
    const regexp = new RegExp(arg.search);
    const names = arg.search ? Object.entries<string>(ICON_NAME).filter(([key, name]) => {
      return [name].concat(ODS_ICON_TAG[key as IconNameKey] || []).some(value => regexp.test(value));
    }).map(([_, name]) => name) : ICON_NAMES;
    return <div style={{
      display: 'flex',
      flexFlow: 'row',
      flexWrap: 'wrap',
      gap: '1rem'
    }}>
        {names.map(name => <Icon key={name} name={name as ICON_NAME} title={name} />)}
      </div>;
  },
  argTypes: {
    name: {
      table: {
        disable: true
      }
    },
    search: {
      control: {
        type: 'text'
      },
      description: 'Search for a specific icon name or tag'
    }
  }
}`,...(k=(E=n.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var w,C,A;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Icon name="home" style={{
    fontSize: '2rem',
    color: 'var(--ods-color-primary-500)'
  }} />
}`,...(A=(C=l.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var N,O,S;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Icon name="home" />
}`,...(S=(O=s.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var _,D,R;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Icon name="home" />
}`,...(R=(D=i.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var T,F,M;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Icon aria-label="Help" name="circle-question" role="img" />
}`,...(M=(F=c.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var L,P,U;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Icon name="home" />
}`,...(U=(P=m.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var z,B,G;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <>
      <label htmlFor="rating">Rating</label>
      <div id="rating">
        <Icon name="star" tabIndex={0} aria-label="one star" role="img" />
        <Icon name="star" tabIndex={0} aria-label="two star" role="img" />
        <Icon name="star" tabIndex={0} aria-label="three star" role="img" />
        <Icon name="star" tabIndex={0} aria-label="four star" role="img" />
        <Icon name="star" tabIndex={0} aria-label="five star" role="img" />
      </div>
    </>
}`,...(G=(B=d.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var j,q,H;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <>
      <label id="rating-label" htmlFor="rating">Rating</label>
      <div id="rating" role="radiogroup" aria-labelledby="rating-label">
        <Icon name="star" role="radio" tabIndex={-1} aria-label="one star" aria-checked="false" />
        <Icon name="star" role="radio" tabIndex={0} aria-label="two star" aria-checked="true" />
        <Icon name="star" role="radio" tabIndex={-1} aria-label="three star" aria-checked="false" />
        <Icon name="star" role="radio" tabIndex={-1} aria-label="four star" aria-checked="false" />
        <Icon name="star" role="radio" tabIndex={-1} aria-label="five star" aria-checked="false" />
      </div>
    </>
}`,...(H=(q=p.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};const ee=["Demo","AccessibilityInformative","All","Overview","Decorative","Default","Informative","AccessibilityBadPracticeDecorative","AccessibilityBadPracticeRating","AccessibilityRating"],oe=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityBadPracticeDecorative:m,AccessibilityBadPracticeRating:d,AccessibilityInformative:o,AccessibilityRating:p,All:n,Decorative:s,Default:i,Demo:t,Informative:c,Overview:l,__namedExportsOrder:ee,default:$},Symbol.toStringTag,{value:"Module"}));export{o as A,i as D,oe as I,l as O,s as a,c as b,m as c,d,p as e};
