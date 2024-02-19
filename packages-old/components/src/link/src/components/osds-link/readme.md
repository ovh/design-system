# osds-link



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute        | Description                                                      | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Default                            |
| ---------------- | ---------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| `color`          | `color`          | Link color theme                                                 | `ODS_THEME_COLOR_INTENT.accent \| ODS_THEME_COLOR_INTENT.default \| ODS_THEME_COLOR_INTENT.error \| ODS_THEME_COLOR_INTENT.info \| ODS_THEME_COLOR_INTENT.primary \| ODS_THEME_COLOR_INTENT.promotion \| ODS_THEME_COLOR_INTENT.success \| ODS_THEME_COLOR_INTENT.text \| ODS_THEME_COLOR_INTENT.warning \| undefined`                                                                                                                                                                                                                       | `DEFAULT_ATTRIBUTE.color`          |
| `contrasted`     | `contrasted`     | Link design as contrasted version                                | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `DEFAULT_ATTRIBUTE.contrasted`     |
| `disabled`       | `disabled`       | Link should be disabled or not                                   | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `DEFAULT_ATTRIBUTE.disabled`       |
| `download`       | `download`       | Link as download source                                          | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `DEFAULT_ATTRIBUTE.download`       |
| `href`           | `href`           | Link URL                                                         | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `DEFAULT_ATTRIBUTE.href`           |
| `referrerpolicy` | `referrerpolicy` | Link referrer policy                                             | `ODS_LINK_REFERRER_POLICY.noReferrer \| ODS_LINK_REFERRER_POLICY.noReferrerWhenDowngrade \| ODS_LINK_REFERRER_POLICY.origin \| ODS_LINK_REFERRER_POLICY.originWhenCrossOrigin \| ODS_LINK_REFERRER_POLICY.sameOrigin \| ODS_LINK_REFERRER_POLICY.strictOriginWhenCrossOrigin \| ODS_LINK_REFERRER_POLICY.unsafeUrl \| undefined`                                                                                                                                                                                                             | `DEFAULT_ATTRIBUTE.referrerpolicy` |
| `rel`            | `rel`            | Link relationship                                                | `OdsHTMLAnchorElementRel.alternate \| OdsHTMLAnchorElementRel.author \| OdsHTMLAnchorElementRel.bookmark \| OdsHTMLAnchorElementRel.external \| OdsHTMLAnchorElementRel.help \| OdsHTMLAnchorElementRel.license \| OdsHTMLAnchorElementRel.me \| OdsHTMLAnchorElementRel.next \| OdsHTMLAnchorElementRel.nofollow \| OdsHTMLAnchorElementRel.noopener \| OdsHTMLAnchorElementRel.noreferrer \| OdsHTMLAnchorElementRel.opener \| OdsHTMLAnchorElementRel.prev \| OdsHTMLAnchorElementRel.search \| OdsHTMLAnchorElementRel.tag \| undefined` | `DEFAULT_ATTRIBUTE.rel`            |
| `target`         | `target`         | Link target type If href is set the default value `_self` is set | `OdsHTMLAnchorElementTarget._blank \| OdsHTMLAnchorElementTarget._parent \| OdsHTMLAnchorElementTarget._self \| OdsHTMLAnchorElementTarget._top \| undefined`                                                                                                                                                                                                                                                                                                                                                                                | `DEFAULT_ATTRIBUTE.target`         |
| `type`           | `type`           | Link type (for download source)                                  | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `DEFAULT_ATTRIBUTE.type`           |


## Slots

| Slot          | Description              |
| ------------- | ------------------------ |
| `"(unnamed)"` | Link content             |
| `"end"`       | Fixed end link content   |
| `"start"`     | Fixed start link content |


## Shadow Parts

| Part     | Description |
| -------- | ----------- |
| `"link"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
