* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)

## Interfaces

### OdsLinkAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`color`** | `ODS_THEME_COLOR_INTENT` |  |  | Link color theme|
|**`contrasted`** | _boolean_ |  |  | Link design as contrasted version|
|**`disabled`** | _boolean_ |  |  | Link should be disabled or not|
|**`download`** | _string_ |  |  | Link as download source|
|**`href`** | _string_ |  |  | Link URL|
|**`referrerpolicy`** | `ODS_LINK_REFERRER_POLICY` |  |  | Link referrer policy|
|**`rel`** | `OdsHTMLAnchorElementRel` |  |  | Link relationship|
|**`target`** | `OdsHTMLAnchorElementTarget` |  |  | Link target typeIf href is set the default value `_self` is set|
|**`type`** | _string_ |  |  | Link type (for download source)|

## Types

### ODS_LINK_REFERRER_POLICY
|  |
|:---:|
| `noReferrer` |
| `noReferrerWhenDowngrade` |
| `origin` |
| `originWhenCrossOrigin` |
| `sameOrigin` |
| `strictOriginWhenCrossOrigin` |
| `unsafeUrl` |

## Classes

### OsdsLink