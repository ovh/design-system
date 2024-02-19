## OdsDatepicker
### Properties
| Property | Type | Required | Default value |
| --- | --- | --- | --- |
| ariaLabel | `null | string` | `true` | `null` |
| ariaLabelledby | `string` | `false` | `undefined` |
| datesDisabled | `Date[]` | `true` | `[]` |
| daysOfWeekDisabled | `OdsDatepickerDay[]` | `true` | `[]` |
| defaultValue | `Date` | `false` | `undefined` |
| format | `string` | `true` | `'dd/mm/yyyy'` |
| hasError | `boolean` | `true` | `false` |
| isClearable | `boolean` | `true` | `false` |
| isDisabled | `boolean` | `true` | `false` |
| isLoading | `boolean` | `true` | `false` |
| isReadonly | `boolean` | `true` | `false` |
| isRequired | `boolean` | `true` | `false` |
| locale | `OdsDatepickerLocale` | `true` | `ODS_DATEPICKER_LOCALE.en` |
| max | `Date` | `false` | `undefined` |
| min | `Date` | `false` | `undefined` |
| name | `string` | `true` | `undefined` |
| placeholder | `string` | `false` | `undefined` |
| value | `null | Date` | `true` | `null` |
### Methods
• **clear**(): `Promise<void>`

• **close**(): `Promise<void>`

• **getValidity**(): `Promise<undefined | ValidityState>`

• **open**(): `Promise<void>`

• **reset**(): `Promise<void>`
### Events
• **odsBlur**(): `EventEmitter<void>`

• **odsChange**(): `EventEmitter<OdsDatepickerChangeEventDetail>`

• **odsClear**(): `EventEmitter<void>`

• **odsFocus**(): `EventEmitter<void>`

• **odsReset**(): `EventEmitter<void>`
### Enums
#### ODS_DATEPICKER_DAY

• **friday** = `"5"`

• **monday** = `"1"`

• **saturday** = `"6"`

• **sunday** = `"0"`

• **thursday** = `"4"`

• **tuesday** = `"2"`

• **wednesday** = `"3"`


#### ODS_DATEPICKER_LOCALE

• **de** = `"de"`

• **en** = `"en"`

• **es** = `"es"`

• **fr** = `"fr"`

• **it** = `"it"`

• **nl** = `"nl"`

• **pl** = `"pl"`

• **pt** = `"pt"`

