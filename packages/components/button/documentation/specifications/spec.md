* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)

## Interfaces

### OdsButtonAttribute
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`circle`** | _boolean_ |  |  | use a circle shape|
|**`color`** | `ODS_THEME_COLOR_INTENT` |  |  | main color: see component principles|
|**`contrasted`** | _boolean_ |  |  | contrasted or not: see component principles|
|**`disabled`** | _boolean_ |  |  | disabled or not: see component principles|
|**`download`** | _string_ |  |  | Button with href as download source|
|**`href`** | _string_ |  |  | use a button as a link with `<a>` element|
|**`inline`** | _boolean_ |  |  | inline or not: see component principles|
|**`rel`** | `OdsHTMLAnchorElementRel` |  |  | Button with href relationship|
|**`size`** | `ODS_BUTTON_SIZE` |  |  | size: see component principles|
|**`target`** | `OdsHTMLAnchorElementTarget` |  |  | link target if we are in a link-mode (using `href` attribute)|
|**`textAlign`** | `ODS_BUTTON_TEXT_ALIGN` |  |  | type of the vanilla button|
|**`type`** | `ODS_BUTTON_TYPE` |  |  | |
|**`variant`** | `ODS_BUTTON_VARIANT` |  |  | used design aspect|

## Types

### ODS_BUTTON_SIZE
|  |
|:---:|
| `md` |
| `sm` |

### ODS_BUTTON_TEXT_ALIGN
|  |
|:---:|
| `center` |
| `end` |
| `start` |

### ODS_BUTTON_TYPE
|  |
|:---:|
| `button` |
| `reset` |
| `submit` |

### ODS_BUTTON_VARIANT
|  |
|:---:|
| `flat` |
| `ghost` |
| `stroked` |

## Classes

### OsdsButton