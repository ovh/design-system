* [**Interfaces**](#interfaces)

## Interfaces

### OdsBreadcrumbAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`contrasted`** | _boolean_ |  |  | contrasted or not: see component principles|
|**`items`** | `string` \| `OdsBreadcrumbAttributeItem[]` | ✴️ |  | List of breadcrumb items to display|

### OdsBreadcrumbAttributeItem
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`disabled`** | _boolean_ |  |  | Item should be disabled or not|
|**`href`** | _string_ |  |  | Item link to redirect to|
|**`icon`** | `ODS_ICON_NAME` |  |  | Icon to display|
|**`label`** | _string_ |  |  | Text to display|
|**`referrerpolicy`** | `ODS_LINK_REFERRER_POLICY` |  |  | Link referrer policy|
|**`rel`** | _string_ |  |  | Link relationship|
|**`target`** | `OdsHTMLAnchorElementTarget` |  |  | Specifies where to open the link|

### OdsBreadcrumbItemAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`contrasted`** | _boolean_ |  |  | contrasted or not: see component principles|
|**`disabled`** | _boolean_ |  |  | Item should be disabled or not|
|**`href`** | _string_ |  |  | Item link to redirect to|
|**`icon`** | `ODS_ICON_NAME` |  |  | Icon to display|
|**`label`** | _string_ |  |  | Text to display|
|**`referrerpolicy`** | _string_ |  |  | Link referrer policy|
|**`rel`** | _string_ |  |  | Link relationship|
|**`target`** | `OdsHTMLAnchorElementTarget` |  |  | Link target typeSpecifies where to open the link|

### OdsBreadcrumbItemEvent
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsBreadcrumbItemClick`** | `EventEmitter<OdsBreadcrumbAttributeItem & { event: MouseEvent }>` | ✴️ |  | Event triggered item click|
|**`odsBreadcrumbItemCollapsedClick`** | `EventEmitter<void>` | ✴️ |  | Event triggered on collapsed item click|