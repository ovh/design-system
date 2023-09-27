* [**Interfaces**](#interfaces)
* [**Classes**](#classes)

## Interfaces

### OdsBreadcrumbAttribute
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`contrasted`** | _boolean_ |  |  | contrasted or not: see component principles|
|**`items`** | `string` \| `array` | ✴️ |  | List of breadcrumb items to display|

### OdsBreadcrumbAttributeItem
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`href`** | _string_ | ✴️ |  | Item link to redirect to|
|**`icon`** | `ODS_ICON_NAME` |  |  | Icon to display|
|**`label`** | _string_ |  |  | Text to display|

## Classes

### OsdsBreadcrumb