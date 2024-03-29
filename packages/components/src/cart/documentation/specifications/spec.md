* [**Interfaces**](#interfaces)
* [**Types**](#types)

## Interfaces

### OdsCartAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`collapsed`** | _boolean_ |  |  | is the cart is collapsed (if collapsible)|
|**`collapsible`** | _boolean_ |  |  | is the cart can be collapsed in a smaller view|
|**`inline`** | _boolean_ |  |  | full width or not: see component principles|
|**`rounded`** | `ODS_CART_ROUNDED` |  |  | rounds corners of cart's outer border edge|
|**`size`** | `sm` |  |  | size: see component principles|

### OdsCartHeaderAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`headerTitle`** | _string_ |  |  | |

### OdsCartHeaderMethod
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`refresh`** | _void_ | ✴️ |  | Render manually the cart header in order to refresh the component.|

### OdsCartManagerAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`footer`** | `OdsCartManagerFooter` |  |  | describe what the footer is made of|
|**`i18n`** | `OdsI18nHook` |  |  | internationalisation system connector|
|**`inline`** | _boolean_ |  |  | full width or not: see component principles|
|**`period`** | `ODS_PERIOD_ISO_CODE` |  |  | ISO period code that describe the duration of a periodical payment|
|**`sections`** | OdsCartManagerSection[] | ✴️ |  | Sections made of one item and multiple options|
|**`size`** | `sm` |  |  | size: see component principles|
|**`vatMode`** | _boolean_ |  |  | is the cart display the Value Added Tax|

### OdsCartManagerFooter
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`items`** | OdsCartManagerFooterItem` \| `OdsCartManagerTotal[] | ✴️ |  | |

### OdsCartManagerMethod
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`getProductQuantity`** | `Promise<number>` | ✴️ |  | get the number of item flagged as product|
|**`getTotalAmount`** | `Promise<number>` | ✴️ |  | get the total amount of the cart|

### OdsCartManagerSection
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`item`** | `OdsCartManagerItem` | ✴️ |  | |
|**`options`** | OdsCartManagerItem[] | ✴️ |  | |

### OdsCartMethod
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`getItemQuantity`** | `Promise<number>` | ✴️ |  | get the number of cart items detected in the DOM|
|**`refresh`** | `Promise<void>` | ✴️ |  | Render manually the cart in order to refresh the component.|

## Types

### ODS_CART_ROUNDED
|  |
|:---:|
| `all` |
| `none` |
| `top` |

### ODS_CART_SIZE
|  |
|:---:|
| `sm` |