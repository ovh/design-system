import{e}from"./index-E9JSHJbc.js";import{O as r,a as U,b as z}from"./icon-name-BXMPYDqj.js";import{o as q,C as H}from"./controls-CQ2mnOwv.js";const X={arrowCrossed:[],arrowDown:[],arrowDownLeft:[],arrowDownRight:[],arrowLeft:[],arrowLeftRight:[],arrowRight:[],arrowUp:[],arrowUpDown:[],arrowUpLeft:[],arrowUpRight:[],bell:["notification"],bill:["invoice"],book:[],box:["pack"],calendar:["day","month","year"],check:["validation"],chevronDoubleLeft:[],chevronDoubleRight:[],chevronDown:[],chevronLeft:[],chevronRight:[],chevronUp:[],circleCheck:["validation"],circleInfo:[],circleQuestion:[],circleThreeNodes:[],circleUser:[],circleXmark:["clear","times"],clockTimeFour:[],clockTimeNine:[],clockTimeSix:[],clockTimeThree:[],clockTimeTwelve:[],cloud:[],cloudCheck:["validation"],cloudDownload:[],cloudLock:[],cloudUpload:[],cloudXmark:["clear","times"],cog:[],columns:["filter","table"],comment:["chat","message"],creditCard:[],dPad:[],diamondExclamation:[],diamondExclamationFull:[],diamondsFull:[],download:[],ellipsisHorizontal:[],ellipsisVertical:[],email:[],emoticon:[],emoticonDizzy:[],emoticonNeutral:[],emoticonSad:[],emoticonSmile:[],emoticonWink:[],equal:[],externalLink:[],eye:[],eyeOff:[],file:[],fileCopy:[],fileMinus:[],filePlus:[],filter:[],flaskEmpty:["lab"],flaskFull:["lab"],flaskHalf:["lab"],focus:[],folder:[],folderMinus:[],folderPlus:[],gameConsole:[],gameController:[],gameControllerAlt:[],gathering:[],globe:[],grid:["apps"],gridAlt:[],hamburgerMenu:[],hexagonExclamation:[],hexagonExclamationFull:[],hierarchy:[],home:[],key:[],leaf:[],lifeBuoy:[],lightbulb:[],list:[],location:[],lockClose:[],lockOpen:[],magnifyingGlass:["search"],minus:[],money:[],monitor:["display","screen"],network:[],pen:[],phone:[],plus:[],printer:[],question:[],refresh:[],resize:[],server:["rack"],serverRack:[],shareNodes:[],shield:[],shieldCheck:["validation"],shieldExclamation:[],shieldFirewall:[],shieldLock:[],shieldMinus:[],shieldOff:[],shieldPlus:[],shieldXmark:["clear","times"],shoppingCart:[],shoppingCartError:[],shoppingCartMinus:[],shoppingCartPlus:[],shoppingCartXmark:["clear","times"],shrink:[],shutdown:[],sortAlphaDown:[],sortAlphaUp:[],sortNumericDown:[],sortNumericUp:[],star:[],starFull:[],store:[],tag:[],timer:["alarm","clock"],trafficCone:[],trash:[],triangleExclamation:[],triangleExclamationFull:[],triangleThreeNodes:[],truck:[],undo:[],upload:[],user:[],xmark:["clear","times"]},V={component:r,title:"ODS Components/Icon"},o={argTypes:q({name:{table:{category:H.general,defaultValue:{summary:"ø"}},control:{type:"select"},options:z}}),args:{name:U.home}},t={tags:["!dev"],render:({})=>e.createElement(r,{"aria-hidden":"true",name:"cloud"})},n={tags:["!dev"],render:({})=>e.createElement(r,{"aria-label":"home",name:"home"})},s={render:p=>{const P=new RegExp(p.search),G=p.search?Object.entries(U).filter(([a,d])=>[d].concat(X[a]||[]).some(j=>P.test(j))).map(([a,d])=>d):z;return e.createElement("div",{style:{display:"flex",flexFlow:"row",flexWrap:"wrap",gap:"1rem"}},G.map(a=>e.createElement(r,{key:a,name:a,title:a})))},argTypes:{search:{control:{type:"text"},description:"Search for a specific icon name or tag"}}},c={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,{"aria-hidden":"true",name:"home",style:{fontSize:"2rem",color:"var(--ods-color-primary-500)"}})},l={tags:["!dev"],render:({})=>e.createElement(r,{"aria-hidden":"true",name:"home"})},i={tags:["!dev"],render:({})=>e.createElement(r,{name:"home"})},m={tags:["!dev"],render:({})=>e.createElement(r,{"aria-label":"Help",name:"circle-question"})};var u,h,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  argTypes: orderControls({
    name: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_ICON_NAMES
    }
  }),
  args: {
    name: ODS_ICON_NAME.home
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,y,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsIcon aria-hidden="true" name="cloud" />
}`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var O,k,w;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsIcon aria-label="home" name="home" />
}`,...(w=(k=n.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var C,b,S;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  // @ts-ignore see how to type this correctly
  render: (args: any) => {
    const regexp = new RegExp(args.search);
    const names = args.search ? Object.entries<string>(ODS_ICON_NAME).filter(([key, name]) => {
      return [name].concat(ODS_ICON_TAG[key as IconNameKey] || []).some(value => regexp.test(value));
    }).map(([_, name]) => name) : ODS_ICON_NAMES;
    return <div style={{
      display: 'flex',
      flexFlow: 'row',
      flexWrap: 'wrap',
      gap: '1rem'
    }}>
        {names.map(name => <OdsIcon key={name} name={name as ODS_ICON_NAME} title={name} />)}
      </div>;
  },
  argTypes: {
    // @ts-ignore see how to type this custom param correctly
    search: {
      control: {
        type: 'text'
      },
      description: 'Search for a specific icon name or tag'
    }
  }
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var D,E,x;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <OdsIcon aria-hidden="true" name="home" style={{
    fontSize: '2rem',
    color: 'var(--ods-color-primary-500)'
  }} />
}`,...(x=(E=c.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var _,I,N;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsIcon aria-hidden="true" name="home" />
}`,...(N=(I=l.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var A,T,M;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsIcon name="home" />
}`,...(M=(T=i.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var R,L,F;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsIcon aria-label="Help" name="circle-question" />
}`,...(F=(L=m.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};const W=["Demo","AccessibilityDecorative","AccessibilityInformative","All","Overview","Decorative","Default","Informative"],Q=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityDecorative:t,AccessibilityInformative:n,All:s,Decorative:l,Default:i,Demo:o,Informative:m,Overview:c,__namedExportsOrder:W,default:V},Symbol.toStringTag,{value:"Module"}));export{t as A,i as D,Q as I,c as O,n as a,l as b,m as c};
