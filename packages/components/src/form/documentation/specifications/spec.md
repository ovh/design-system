* [**Interfaces**](#interfaces)

## Interfaces

### OdsFormAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`initialValues`** | `string` \| `Record<string, OdsInputValue>` | ✴️ |  | You can init the input with initialValuesThe attributes is an object with the input name for key and this valueyou need to set all the input you want to use|

### OdsFormEvent
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsOnReset`** | `EventEmitter<void>` | ✴️ |  | Event trigger when the form is reset|
|**`odsOnSubmit`** | `EventEmitter<Record<string, OdsInputValue>>` | ✴️ |  | Event trigger when the form is submit|

### OdsFormMethod
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`getFieldError`** | `Promise<undefined` \| `boolean>` | ✴️ |  | Get the error for a field|
|**`getFieldValue`** | `Promise<undefined` \| `OdsInputValue>` | ✴️ |  | Get the value for a field|
|**`getFormErrors`** | `Promise<Record<string, boolean>>` | ✴️ |  | Get all the errors associated with the field|
|**`getFormValues`** | `Promise<Record<string, OdsInputValue>>` | ✴️ |  | Get all the values associated with the field|
|**`isFormValid`** | `Promise<boolean>` | ✴️ |  | |
|**`reset`** | `Promise<void>` | ✴️ |  | Reset the form|
|**`setFieldError`** | `Promise<void>` | ✴️ |  | Set an error for a field|
|**`setFieldValue`** | `Promise<void>` | ✴️ |  | Set a value for a field|
|**`submit`** | `Promise<void>` | ✴️ |  | Submit the formYou can submit only if the form is valid|