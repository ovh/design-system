* [**Interfaces**](#interfaces)

## Interfaces

### OdsFlagAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`assetPath`** | _string_ |  |  | override the `ODS` directory path of the assets.if not set, the configured path in `ODS` will be used.|
|**`iso`** | `ODS_FLAG_ISO_CODE_UNION` |  |  | Flag ISO country code|
|**`lazy`** | _boolean_ | ✴️ |  | allow to lazy load the content only when it's visible|
|**`src`** | _string_ |  |  | override with custom src to the svg file.|