import{j as n}from"./jsx-runtime-Dn0LW--f.js";import{u as a}from"./index-DeyDdHvX.js";import{M as i,C as t,d as l}from"./index-BM3JsZOq.js";import{B as d}from"./banner-DPlTyHjv.js";import{P as o,O as c,C as m,D as h,a as u,b as f,E as p,L as g,c as b,I as j,d as x,R as v}from"./phone-number.stories-Da8xxpnf.js";import{e as y}from"./form-field.stories-BcV_EKSO.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-DryTTbHl.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./unsafe-html-HR6uCwaW.js";const w='## OdsPhoneNumber\n### Properties\n| Property | Type | Required | Default value |\n| --- | --- | --- | --- |\n| ariaLabel | `null | string` | `true` | `null` |\n| ariaLabelledby | `string` | `false` | `undefined` |\n| countries | `OdsPhoneNumberCountryIsoCode[] | OdsPhoneNumberCountryPreset | string` | `false` | `undefined` |\n| defaultValue | `string` | `false` | `undefined` |\n| hasError | `boolean` | `true` | `false` |\n| isClearable | `boolean` | `true` | `false` |\n| isDisabled | `boolean` | `true` | `false` |\n| isLoading | `boolean` | `true` | `false` |\n| isReadonly | `boolean` | `true` | `false` |\n| isRequired | `boolean` | `true` | `false` |\n| isoCode | `OdsPhoneNumberCountryIsoCode` | `false` | `undefined` |\n| locale | `OdsPhoneNumberLocale` | `false` | `undefined` |\n| name | `string` | `true` | `undefined` |\n| pattern | `string` | `false` | `undefined` |\n| value | `null | string` | `true` | `null` |\n### Methods\n• **clear**(): `Promise<void>`\n\n• **getValidity**(): `Promise<undefined | ValidityState>`\n\n• **reset**(): `Promise<void>`\n### Events\n• **odsBlur**(): `EventEmitter<void>`\n\n• **odsChange**(): `EventEmitter<OdsPhoneNumberChangeEventDetail>`\n\n• **odsClear**(): `EventEmitter<void>`\n\n• **odsFocus**(): `EventEmitter<void>`\n\n• **odsReset**(): `EventEmitter<void>`\n### Enums\n#### ODS_PHONE_NUMBER_COUNTRY_ISO_CODE\n\n• **ad** = `"ad"`\n\n• **ae** = `"ae"`\n\n• **af** = `"af"`\n\n• **ag** = `"ag"`\n\n• **ai** = `"ai"`\n\n• **al** = `"al"`\n\n• **am** = `"am"`\n\n• **ao** = `"ao"`\n\n• **ar** = `"ar"`\n\n• **as** = `"as"`\n\n• **at** = `"at"`\n\n• **au** = `"au"`\n\n• **aw** = `"aw"`\n\n• **ax** = `"ax"`\n\n• **az** = `"az"`\n\n• **ba** = `"ba"`\n\n• **bb** = `"bb"`\n\n• **bd** = `"bd"`\n\n• **be** = `"be"`\n\n• **bf** = `"bf"`\n\n• **bg** = `"bg"`\n\n• **bh** = `"bh"`\n\n• **bi** = `"bi"`\n\n• **bj** = `"bj"`\n\n• **bl** = `"bl"`\n\n• **bm** = `"bm"`\n\n• **bn** = `"bn"`\n\n• **bo** = `"bo"`\n\n• **br** = `"br"`\n\n• **bs** = `"bs"`\n\n• **bt** = `"bt"`\n\n• **bw** = `"bw"`\n\n• **by** = `"by"`\n\n• **bz** = `"bz"`\n\n• **ca** = `"ca"`\n\n• **cc** = `"cc"`\n\n• **cd** = `"cd"`\n\n• **cf** = `"cf"`\n\n• **cg** = `"cg"`\n\n• **ch** = `"ch"`\n\n• **ci** = `"ci"`\n\n• **ck** = `"ck"`\n\n• **cl** = `"cl"`\n\n• **cm** = `"cm"`\n\n• **cn** = `"cn"`\n\n• **co** = `"co"`\n\n• **cr** = `"cr"`\n\n• **cu** = `"cu"`\n\n• **cv** = `"cv"`\n\n• **cw** = `"cw"`\n\n• **cx** = `"cx"`\n\n• **cy** = `"cy"`\n\n• **cz** = `"cz"`\n\n• **de** = `"de"`\n\n• **dj** = `"dj"`\n\n• **dk** = `"dk"`\n\n• **dm** = `"dm"`\n\n• **do** = `"do"`\n\n• **dz** = `"dz"`\n\n• **ec** = `"ec"`\n\n• **ee** = `"ee"`\n\n• **eg** = `"eg"`\n\n• **eh** = `"eh"`\n\n• **er** = `"er"`\n\n• **es** = `"es"`\n\n• **et** = `"et"`\n\n• **fi** = `"fi"`\n\n• **fj** = `"fj"`\n\n• **fk** = `"fk"`\n\n• **fm** = `"fm"`\n\n• **fo** = `"fo"`\n\n• **fr** = `"fr"`\n\n• **ga** = `"ga"`\n\n• **gb** = `"gb"`\n\n• **gd** = `"gd"`\n\n• **ge** = `"ge"`\n\n• **gg** = `"gg"`\n\n• **gh** = `"gh"`\n\n• **gi** = `"gi"`\n\n• **gl** = `"gl"`\n\n• **gm** = `"gm"`\n\n• **gn** = `"gn"`\n\n• **gq** = `"gq"`\n\n• **gr** = `"gr"`\n\n• **gt** = `"gt"`\n\n• **gu** = `"gu"`\n\n• **gw** = `"gw"`\n\n• **gy** = `"gy"`\n\n• **hk** = `"hk"`\n\n• **hn** = `"hn"`\n\n• **hr** = `"hr"`\n\n• **ht** = `"ht"`\n\n• **hu** = `"hu"`\n\n• **id** = `"id"`\n\n• **ie** = `"ie"`\n\n• **il** = `"il"`\n\n• **im** = `"im"`\n\n• **in** = `"in"`\n\n• **iq** = `"iq"`\n\n• **ir** = `"ir"`\n\n• **is** = `"is"`\n\n• **it** = `"it"`\n\n• **je** = `"je"`\n\n• **jm** = `"jm"`\n\n• **jo** = `"jo"`\n\n• **jp** = `"jp"`\n\n• **ke** = `"ke"`\n\n• **kg** = `"kg"`\n\n• **kh** = `"kh"`\n\n• **ki** = `"ki"`\n\n• **km** = `"km"`\n\n• **kn** = `"kn"`\n\n• **kp** = `"kp"`\n\n• **kr** = `"kr"`\n\n• **kw** = `"kw"`\n\n• **ky** = `"ky"`\n\n• **kz** = `"kz"`\n\n• **la** = `"la"`\n\n• **lb** = `"lb"`\n\n• **lc** = `"lc"`\n\n• **li** = `"li"`\n\n• **lk** = `"lk"`\n\n• **lr** = `"lr"`\n\n• **ls** = `"ls"`\n\n• **lt** = `"lt"`\n\n• **lu** = `"lu"`\n\n• **lv** = `"lv"`\n\n• **ly** = `"ly"`\n\n• **ma** = `"ma"`\n\n• **mc** = `"mc"`\n\n• **md** = `"md"`\n\n• **me** = `"me"`\n\n• **mf** = `"mf"`\n\n• **mg** = `"mg"`\n\n• **mh** = `"mh"`\n\n• **mk** = `"mk"`\n\n• **ml** = `"ml"`\n\n• **mm** = `"mm"`\n\n• **mn** = `"mn"`\n\n• **mo** = `"mo"`\n\n• **mp** = `"mp"`\n\n• **mq** = `"mq"`\n\n• **mr** = `"mr"`\n\n• **ms** = `"ms"`\n\n• **mt** = `"mt"`\n\n• **mu** = `"mu"`\n\n• **mv** = `"mv"`\n\n• **mw** = `"mw"`\n\n• **mx** = `"mx"`\n\n• **my** = `"my"`\n\n• **mz** = `"mz"`\n\n• **na** = `"na"`\n\n• **nc** = `"nc"`\n\n• **ne** = `"ne"`\n\n• **nf** = `"nf"`\n\n• **ng** = `"ng"`\n\n• **ni** = `"ni"`\n\n• **nl** = `"nl"`\n\n• **no** = `"no"`\n\n• **np** = `"np"`\n\n• **nr** = `"nr"`\n\n• **nu** = `"nu"`\n\n• **nz** = `"nz"`\n\n• **om** = `"om"`\n\n• **pa** = `"pa"`\n\n• **pe** = `"pe"`\n\n• **pf** = `"pf"`\n\n• **pg** = `"pg"`\n\n• **ph** = `"ph"`\n\n• **pk** = `"pk"`\n\n• **pl** = `"pl"`\n\n• **pr** = `"pr"`\n\n• **ps** = `"ps"`\n\n• **pt** = `"pt"`\n\n• **pw** = `"pw"`\n\n• **py** = `"py"`\n\n• **qa** = `"qa"`\n\n• **ro** = `"ro"`\n\n• **rs** = `"rs"`\n\n• **ru** = `"ru"`\n\n• **rw** = `"rw"`\n\n• **sa** = `"sa"`\n\n• **sb** = `"sb"`\n\n• **sc** = `"sc"`\n\n• **sd** = `"sd"`\n\n• **se** = `"se"`\n\n• **sg** = `"sg"`\n\n• **sh** = `"sh"`\n\n• **si** = `"si"`\n\n• **sk** = `"sk"`\n\n• **sl** = `"sl"`\n\n• **sm** = `"sm"`\n\n• **sn** = `"sn"`\n\n• **so** = `"so"`\n\n• **sr** = `"sr"`\n\n• **ss** = `"ss"`\n\n• **st** = `"st"`\n\n• **sv** = `"sv"`\n\n• **sy** = `"sy"`\n\n• **sz** = `"sz"`\n\n• **tc** = `"tc"`\n\n• **td** = `"td"`\n\n• **tg** = `"tg"`\n\n• **th** = `"th"`\n\n• **tj** = `"tj"`\n\n• **tk** = `"tk"`\n\n• **tl** = `"tl"`\n\n• **tm** = `"tm"`\n\n• **tn** = `"tn"`\n\n• **to** = `"to"`\n\n• **tr** = `"tr"`\n\n• **tt** = `"tt"`\n\n• **tv** = `"tv"`\n\n• **tw** = `"tw"`\n\n• **tz** = `"tz"`\n\n• **ua** = `"ua"`\n\n• **ug** = `"ug"`\n\n• **us** = `"us"`\n\n• **uy** = `"uy"`\n\n• **uz** = `"uz"`\n\n• **va** = `"va"`\n\n• **vc** = `"vc"`\n\n• **ve** = `"ve"`\n\n• **vg** = `"vg"`\n\n• **vi** = `"vi"`\n\n• **vn** = `"vn"`\n\n• **vu** = `"vu"`\n\n• **wf** = `"wf"`\n\n• **ws** = `"ws"`\n\n• **ye** = `"ye"`\n\n• **yt** = `"yt"`\n\n• **za** = `"za"`\n\n• **zm** = `"zm"`\n\n• **zw** = `"zw"`\n\n\n#### ODS_PHONE_NUMBER_COUNTRY_PRESET\n\n• **all** = `"all"`\n\n\n#### ODS_PHONE_NUMBER_LOCALE\n\n• **de** = `"de"`\n\n• **en** = `"en"`\n\n• **es** = `"es"`\n\n• **fr** = `"fr"`\n\n• **it** = `"it"`\n\n• **nl** = `"nl"`\n\n• **pl** = `"pl"`\n\n• **pt** = `"pt"`\n\n';function r(s){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...a(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:o,name:"Technical information"}),`
`,n.jsx(d,{of:o}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(t,{of:c,sourceState:"none"}),`
`,n.jsx(l,{children:w}),`
`,n.jsx(e.h2,{id:"style-customization",children:"Style customization"}),`
`,n.jsxs(e.p,{children:["You can add your own style on the country selector element using the part ",n.jsx(e.code,{children:"select"}),` and on
the input element using the part `,n.jsx(e.code,{children:"input"}),"."]}),`
`,n.jsx(e.p,{children:`Please note that current select component does not provide a high level of style customization, if you encounter
a situation where it prevents you yo use the phone-number component, please reach out to us.`}),`
`,n.jsx(e.p,{children:"Custom CSS:"}),`
`,n.jsx(t,{of:m,sourceState:"shown"}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"default",children:"Default"}),`
`,n.jsx(t,{of:h,sourceState:"shown"}),`
`,n.jsx(e.h3,{id:"clearable",children:"Clearable"}),`
`,n.jsx(t,{of:u,sourceState:"shown"}),`
`,n.jsx(e.h3,{id:"disabled",children:"Disabled"}),`
`,n.jsx(t,{of:f,sourceState:"shown"}),`
`,n.jsx(e.h3,{id:"error",children:"Error"}),`
`,n.jsx(t,{of:p,sourceState:"shown"}),`
`,n.jsx(e.h3,{id:"loading",children:"Loading"}),`
`,n.jsx(t,{of:g,sourceState:"shown"}),`
`,n.jsx(e.h3,{id:"locale",children:"Locale"}),`
`,n.jsxs(e.p,{children:["For further explanation about locale strategy, see ",n.jsx(e.a,{href:"?path=/docs/ods-components-form-elements-phone-number--documentation#locale",children:'the "Locale" behavior'})]}),`
`,n.jsx(t,{of:b,sourceState:"shown"}),`
`,n.jsx(e.h3,{id:"iso-code",children:"ISO code"}),`
`,n.jsxs(e.p,{children:["For further explanation about ISO code strategy, see ",n.jsx(e.a,{href:"?path=/docs/ods-components-form-elements-phone-number--documentation#iso-code",children:'the "Iso Code" behavior'})]}),`
`,n.jsx(t,{of:j,sourceState:"shown"}),`
`,n.jsx(e.h3,{id:"pattern",children:"Pattern"}),`
`,n.jsx(e.p,{children:"With this pattern setting, the component will only allow for numeric characters:"}),`
`,n.jsx(t,{of:x,sourceState:"shown"}),`
`,n.jsx(e.h3,{id:"readonly",children:"Readonly"}),`
`,n.jsx(t,{of:v,sourceState:"shown"}),`
`,n.jsxs(e.h3,{id:"included-in-a-form-field",children:["Included in a ",n.jsx(e.a,{href:"?path=/docs/ods-components-form-elements-form-field--technical-information",children:n.jsx(e.strong,{children:"Form Field"})})]}),`
`,n.jsx(t,{of:y,sourceState:"shown"})]})}function F(s={}){const{wrapper:e}={...a(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{F as default};
