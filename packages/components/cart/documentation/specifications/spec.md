* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)

## Interfaces

### OdsCartAttribute
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`collapsed`** | _boolean_ |  |  | is the cart is collapsed (if collapsible)|
|**`collapsible`** | _boolean_ |  |  | is the cart can be collapsed in a smaller view|
|**`inline`** | _boolean_ |  |  | full width or not: see component principles|
|**`rounded`** | `ODS_CART_ROUNDED` |  |  | rounds corners of cart's outer border edge|
|**`size`** | `sm` |  |  | size: see component principles|

### OdsCartHeaderAttribute
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`headerTitle`** | _string_ |  |  | |

### OdsCartHeaderMethod
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`refresh`** | _void_ | ✴️ |  | Render manually the cart header in order to refresh the component.|

### OdsCartManagerAttribute
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`footer`** | `OdsCartManagerFooter` |  |  | describe what the footer is made of|
|**`i18n`** | `OdsI18nHook` |  |  | internationalisation system connector|
|**`inline`** | _boolean_ |  |  | full width or not: see component principles|
|**`period`** | `ODS_PERIOD_ISO_CODE` |  |  | ISO period code that describe the duration of a periodical payment|
|**`sections`** | _unknown_ | ✴️ |  | Sections made of one item and multiple options|
|**`size`** | `sm` |  |  | size: see component principles|
|**`vatMode`** | _boolean_ |  |  | is the cart display the Value Added Tax|

### OdsCartManagerFooter
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`items`** | _unknown_ | ✴️ |  | |

### OdsCartManagerMethod
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`getProductQuantity`** | `Promise<number>` | ✴️ |  | get the number of item flagged as product|
|**`getTotalAmount`** | `Promise<number>` | ✴️ |  | get the total amount of the cart|

### OdsCartManagerSection
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`item`** | `OdsCartManagerItem` | ✴️ |  | |
|**`options`** | _unknown_ | ✴️ |  | |

### OdsCartMethod
|name | Type | Required | Default | Description|
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

## Classes

### OsdsCart
#### Methods
> **getItemQuantity**() => `Promise<number>`


> **refresh**() => `Promise<void>`



### OsdsCartHeader
#### Methods
> **refresh**() => `Promise<void>`



### OsdsCartItem

### OsdsCartItemOption

### OsdsCartManager
#### Methods
> **getProductQuantity**() => `Promise<number>`


> **getTotalAmount**() => `Promise<number>`



### OsdsCartSection

### OsdsCartTotal