## OdsTimepicker
### Properties
| Property | Type | Required | Default value |
| --- | --- | --- | --- |
| ariaLabel | `null | string` | `true` | `null` |
| ariaLabelledby | `string` | `false` | `undefined` |
| currentTimezone | `OdsTimezone` | `false` | `undefined` |
| defaultValue | `string` | `false` | `undefined` |
| hasError | `boolean` | `true` | `false` |
| isDisabled | `boolean` | `true` | `false` |
| isReadonly | `boolean` | `true` | `false` |
| isRequired | `boolean` | `true` | `false` |
| name | `string` | `true` | `undefined` |
| timezones | `OdsTimezone[] | OdsTimezonePreset | string` | `false` | `undefined` |
| value | `null | string` | `true` | `null` |
| withSeconds | `boolean` | `true` | `false` |
### Methods
• **clear**(): `Promise<void>`

• **getValidity**(): `Promise<undefined | ValidityState>`

• **reset**(): `Promise<void>`
### Events
• **odsBlur**(): `EventEmitter<void>`

• **odsChange**(): `EventEmitter<OdsTimepickerChangeEventDetail>`

• **odsClear**(): `EventEmitter<void>`

• **odsFocus**(): `EventEmitter<void>`

• **odsReset**(): `EventEmitter<void>`
### Enums
#### ODS_TIMEZONE

• **UTC** = `"UTC+0"`

• **UTC1** = `"UTC+1"`

• **UTC10** = `"UTC+10"`

• **UTC11** = `"UTC+11"`

• **UTC12** = `"UTC+12"`

• **UTC2** = `"UTC+2"`

• **UTC3** = `"UTC+3"`

• **UTC4** = `"UTC+4"`

• **UTC5** = `"UTC+5"`

• **UTC6** = `"UTC+6"`

• **UTC7** = `"UTC+7"`

• **UTC8** = `"UTC+8"`

• **UTC9** = `"UTC+9"`

• **UTC_1** = `"UTC-1"`

• **UTC_10** = `"UTC-10"`

• **UTC_11** = `"UTC-11"`

• **UTC_12** = `"UTC-12"`

• **UTC_2** = `"UTC-2"`

• **UTC_3** = `"UTC-3"`

• **UTC_4** = `"UTC-4"`

• **UTC_5** = `"UTC-5"`

• **UTC_6** = `"UTC-6"`

• **UTC_7** = `"UTC-7"`

• **UTC_8** = `"UTC-8"`

• **UTC_9** = `"UTC-9"`


#### ODS_TIMEZONES_PRESET

• **All** = `"all"`

