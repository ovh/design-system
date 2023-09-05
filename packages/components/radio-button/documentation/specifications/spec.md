* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsRadioButtonAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`checked`** | _boolean_ |  |  | The checked status of the radio button|
|**`checking`** | _boolean_ |  |  | |
|**`color`** | `OdsThemeColorIntent` |  |  | The color theme|
|**`disabled`** | _boolean_ |  |  | Prevent the user from clicking on the radio button|
|**`hasFocus`** | _boolean_ |  |  | Display a focus style (only if interactive)|
|**`interactive`** | _boolean_ |  |  | Display an interactive style when clicking or hovering the radio button|
|**`size`** | `ODS_RADIO_BUTTON_SIZE` |  |  | Size of the radio button|

## Types

### ODS_RADIO_BUTTON_SIZE
|  |
|:---:|
| `md` |
| `sm` |

## Classes

### OdsRadioButtonController
_common controller logic for radio button component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._


## Type alias

### OdsRadioButton

interface description of all implementation of `ods-radio-button`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsRadioButtonAttributes

> _Based on `OdsComponentAttributes`_

### OdsRadioButtonEvents

> _Based on `OdsComponentEvents`_

### OdsRadioButtonMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsRadioButtonDefaultAttributes
`OdsRadioButtonAttributes`