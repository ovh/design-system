* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)

## Interfaces

### OdsTextAreaAttribute
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`ariaLabel`** | `undefined` \| `string` | ✴️ |  | ariaLabel: see component principles|
|**`ariaLabelledby`** | _string_ |  |  | ariaLabelledby: see component principles|
|**`color`** | `ODS_THEME_COLOR_INTENT` |  |  | main color: see component principles|
|**`cols`** | _number_ |  |  | cols: see component principles|
|**`contrasted`** | _boolean_ |  |  | contrasted: see component principles|
|**`defaultValue`** | _string_ |  |  | defaultValue: see component principles|
|**`disabled`** | _boolean_ |  |  | cols: see component principles|
|**`error`** | _boolean_ |  |  | on error or not|
|**`errorStateControl`** | `OdsErrorStateControl` |  |  | |
|**`formControl`** | `OdsFormControl` |  |  | textarea form control|
|**`hasFocus`** | _boolean_ | ✴️ |  | hasFocus or not|
|**`inline`** | _boolean_ |  |  | inline or not: see component principles|
|**`name`** | _string_ |  |  | name : see component principles|
|**`placeholder`** | _string_ |  |  | placeholder : see component principles|
|**`readOnly`** | _boolean_ |  |  | readOnly or not : see component principles|
|**`required`** | _boolean_ |  |  | required or not : see component principles|
|**`resizable`** | _boolean_ |  |  | resizable or not : see component principles|
|**`rows`** | _number_ |  |  | row: see component principles|
|**`size`** | `md` |  |  | textarea size|
|**`spellcheck`** | _boolean_ | ✴️ |  | spellcheck: see component principles|
|**`textAreaId`** | _string_ |  |  | textarea id|
|**`value`** | _string_ | ✴️ |  | value: see component principles|

### OdsTextAreaEvent
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsBlur`** | `EventEmitter<void>` | ✴️ |  | Event triggered on textarea blur|
|**`odsFocus`** | `EventEmitter<void>` | ✴️ |  | Event triggered on textarea focus|
|**`odsValueChange`** | `EventEmitter<OdsTextAreaValueChangeEvent>` | ✴️ |  | the textarea value changed|

### OdsTextAreaMethod
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`clear`** | `Promise<void>` | ✴️ |  | empty the value|
|**`getValidity`** | `Promise<OdsTextAreaValidityState>` | ✴️ |  | get the validity state|
|**`reset`** | `Promise<void>` | ✴️ |  | restore the value to the initial state|
|**`setFocus`** | `Promise<void>` | ✴️ |  | active the focus on the textarea in order to let the user write something|
|**`setTextAreaTabindex`** | `Promise<void>` | ✴️ |  | set a custom tab index for easier navigation|

### OdsTextAreaValueChangeEvent
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`oldValue`** | `undefined` \| `string` |  |  | |
|**`validity`** | `OdsTextAreaValidityState` |  |  | |
|**`value`** | `undefined` \| `string` |  |  | |

## Types

### ODS_TEXTAREA_SIZE
|  |
|:---:|
| `md` |

## Classes

### OsdsTextArea
#### Methods
> **clear**() => `Promise<void>`


> **getValidity**() => `Promise<OdsTextAreaValidityState>`


> **reset**() => `Promise<void>`


> **setFocus**() => `Promise<void>`


> **setTextAreaTabindex**(`value`: _number_) => `Promise<void>`

Name | Type | Description 
---|---|---
**value** | _number_ |  |