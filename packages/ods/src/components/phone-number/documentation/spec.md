## OdsPhoneNumber
### Properties
| Property | Type | Required | Default value |
| --- | --- | --- | --- |
| ariaLabel | `null | string` | `true` | `null` |
| ariaLabelledby | `string` | `false` | `undefined` |
| countries | `OdsPhoneNumberCountryIsoCode[] | OdsPhoneNumberCountryPreset | string` | `false` | `undefined` |
| defaultValue | `string` | `false` | `undefined` |
| hasError | `boolean` | `true` | `false` |
| isClearable | `boolean` | `true` | `false` |
| isDisabled | `boolean` | `true` | `false` |
| isLoading | `boolean` | `true` | `false` |
| isReadonly | `boolean` | `true` | `false` |
| isRequired | `boolean` | `true` | `false` |
| isoCode | `OdsPhoneNumberCountryIsoCode` | `false` | `undefined` |
| locale | `OdsPhoneNumberLocale` | `false` | `undefined` |
| name | `string` | `true` | `undefined` |
| pattern | `string` | `false` | `undefined` |
| value | `null | string` | `true` | `null` |
### Methods
• **clear**(): `Promise<void>`

• **getValidity**(): `Promise<undefined | ValidityState>`

• **reset**(): `Promise<void>`
### Events
• **odsBlur**(): `EventEmitter<void>`

• **odsChange**(): `EventEmitter<OdsPhoneNumberChangeEventDetail>`

• **odsClear**(): `EventEmitter<void>`

• **odsFocus**(): `EventEmitter<void>`

• **odsReset**(): `EventEmitter<void>`
### Enums
#### ODS_PHONE_NUMBER_COUNTRY_ISO_CODE

• **ad** = `"ad"`

• **ae** = `"ae"`

• **af** = `"af"`

• **ag** = `"ag"`

• **ai** = `"ai"`

• **al** = `"al"`

• **am** = `"am"`

• **ao** = `"ao"`

• **ar** = `"ar"`

• **as** = `"as"`

• **at** = `"at"`

• **au** = `"au"`

• **aw** = `"aw"`

• **ax** = `"ax"`

• **az** = `"az"`

• **ba** = `"ba"`

• **bb** = `"bb"`

• **bd** = `"bd"`

• **be** = `"be"`

• **bf** = `"bf"`

• **bg** = `"bg"`

• **bh** = `"bh"`

• **bi** = `"bi"`

• **bj** = `"bj"`

• **bl** = `"bl"`

• **bm** = `"bm"`

• **bn** = `"bn"`

• **bo** = `"bo"`

• **br** = `"br"`

• **bs** = `"bs"`

• **bt** = `"bt"`

• **bw** = `"bw"`

• **by** = `"by"`

• **bz** = `"bz"`

• **ca** = `"ca"`

• **cc** = `"cc"`

• **cd** = `"cd"`

• **cf** = `"cf"`

• **cg** = `"cg"`

• **ch** = `"ch"`

• **ci** = `"ci"`

• **ck** = `"ck"`

• **cl** = `"cl"`

• **cm** = `"cm"`

• **cn** = `"cn"`

• **co** = `"co"`

• **cr** = `"cr"`

• **cu** = `"cu"`

• **cv** = `"cv"`

• **cw** = `"cw"`

• **cx** = `"cx"`

• **cy** = `"cy"`

• **cz** = `"cz"`

• **de** = `"de"`

• **dj** = `"dj"`

• **dk** = `"dk"`

• **dm** = `"dm"`

• **do** = `"do"`

• **dz** = `"dz"`

• **ec** = `"ec"`

• **ee** = `"ee"`

• **eg** = `"eg"`

• **eh** = `"eh"`

• **er** = `"er"`

• **es** = `"es"`

• **et** = `"et"`

• **fi** = `"fi"`

• **fj** = `"fj"`

• **fk** = `"fk"`

• **fm** = `"fm"`

• **fo** = `"fo"`

• **fr** = `"fr"`

• **ga** = `"ga"`

• **gb** = `"gb"`

• **gd** = `"gd"`

• **ge** = `"ge"`

• **gg** = `"gg"`

• **gh** = `"gh"`

• **gi** = `"gi"`

• **gl** = `"gl"`

• **gm** = `"gm"`

• **gn** = `"gn"`

• **gq** = `"gq"`

• **gr** = `"gr"`

• **gt** = `"gt"`

• **gu** = `"gu"`

• **gw** = `"gw"`

• **gy** = `"gy"`

• **hk** = `"hk"`

• **hn** = `"hn"`

• **hr** = `"hr"`

• **ht** = `"ht"`

• **hu** = `"hu"`

• **id** = `"id"`

• **ie** = `"ie"`

• **il** = `"il"`

• **im** = `"im"`

• **in** = `"in"`

• **iq** = `"iq"`

• **ir** = `"ir"`

• **is** = `"is"`

• **it** = `"it"`

• **je** = `"je"`

• **jm** = `"jm"`

• **jo** = `"jo"`

• **jp** = `"jp"`

• **ke** = `"ke"`

• **kg** = `"kg"`

• **kh** = `"kh"`

• **ki** = `"ki"`

• **km** = `"km"`

• **kn** = `"kn"`

• **kp** = `"kp"`

• **kr** = `"kr"`

• **kw** = `"kw"`

• **ky** = `"ky"`

• **kz** = `"kz"`

• **la** = `"la"`

• **lb** = `"lb"`

• **lc** = `"lc"`

• **li** = `"li"`

• **lk** = `"lk"`

• **lr** = `"lr"`

• **ls** = `"ls"`

• **lt** = `"lt"`

• **lu** = `"lu"`

• **lv** = `"lv"`

• **ly** = `"ly"`

• **ma** = `"ma"`

• **mc** = `"mc"`

• **md** = `"md"`

• **me** = `"me"`

• **mf** = `"mf"`

• **mg** = `"mg"`

• **mh** = `"mh"`

• **mk** = `"mk"`

• **ml** = `"ml"`

• **mm** = `"mm"`

• **mn** = `"mn"`

• **mo** = `"mo"`

• **mp** = `"mp"`

• **mq** = `"mq"`

• **mr** = `"mr"`

• **ms** = `"ms"`

• **mt** = `"mt"`

• **mu** = `"mu"`

• **mv** = `"mv"`

• **mw** = `"mw"`

• **mx** = `"mx"`

• **my** = `"my"`

• **mz** = `"mz"`

• **na** = `"na"`

• **nc** = `"nc"`

• **ne** = `"ne"`

• **nf** = `"nf"`

• **ng** = `"ng"`

• **ni** = `"ni"`

• **nl** = `"nl"`

• **no** = `"no"`

• **np** = `"np"`

• **nr** = `"nr"`

• **nu** = `"nu"`

• **nz** = `"nz"`

• **om** = `"om"`

• **pa** = `"pa"`

• **pe** = `"pe"`

• **pf** = `"pf"`

• **pg** = `"pg"`

• **ph** = `"ph"`

• **pk** = `"pk"`

• **pl** = `"pl"`

• **pr** = `"pr"`

• **ps** = `"ps"`

• **pt** = `"pt"`

• **pw** = `"pw"`

• **py** = `"py"`

• **qa** = `"qa"`

• **ro** = `"ro"`

• **rs** = `"rs"`

• **ru** = `"ru"`

• **rw** = `"rw"`

• **sa** = `"sa"`

• **sb** = `"sb"`

• **sc** = `"sc"`

• **sd** = `"sd"`

• **se** = `"se"`

• **sg** = `"sg"`

• **sh** = `"sh"`

• **si** = `"si"`

• **sk** = `"sk"`

• **sl** = `"sl"`

• **sm** = `"sm"`

• **sn** = `"sn"`

• **so** = `"so"`

• **sr** = `"sr"`

• **ss** = `"ss"`

• **st** = `"st"`

• **sv** = `"sv"`

• **sy** = `"sy"`

• **sz** = `"sz"`

• **tc** = `"tc"`

• **td** = `"td"`

• **tg** = `"tg"`

• **th** = `"th"`

• **tj** = `"tj"`

• **tk** = `"tk"`

• **tl** = `"tl"`

• **tm** = `"tm"`

• **tn** = `"tn"`

• **to** = `"to"`

• **tr** = `"tr"`

• **tt** = `"tt"`

• **tv** = `"tv"`

• **tw** = `"tw"`

• **tz** = `"tz"`

• **ua** = `"ua"`

• **ug** = `"ug"`

• **us** = `"us"`

• **uy** = `"uy"`

• **uz** = `"uz"`

• **va** = `"va"`

• **vc** = `"vc"`

• **ve** = `"ve"`

• **vg** = `"vg"`

• **vi** = `"vi"`

• **vn** = `"vn"`

• **vu** = `"vu"`

• **wf** = `"wf"`

• **ws** = `"ws"`

• **ye** = `"ye"`

• **yt** = `"yt"`

• **za** = `"za"`

• **zm** = `"zm"`

• **zw** = `"zw"`


#### ODS_PHONE_NUMBER_COUNTRY_PRESET

• **all** = `"all"`


#### ODS_PHONE_NUMBER_LOCALE

• **de** = `"de"`

• **en** = `"en"`

• **es** = `"es"`

• **fr** = `"fr"`

• **it** = `"it"`

• **nl** = `"nl"`

• **pl** = `"pl"`

• **pt** = `"pt"`

