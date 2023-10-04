const main = `

[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)

{{> header}}

{{#each commitGroups}}

{{#if title}}
### {{title}}

{{/if}}
{{#each commits}}
{{> commit root=@root}}
{{/each}}

{{/each}}
{{> footer}}
`;

const header = `
{{#if isPatch~}}
  # [{{version}}](https://ovh.github.io/design-system/{{currentTag}}/?path=/docs/design-system-changelog--page)
{{~else~}}
  # [{{version}}](https://ovh.github.io/design-system/{{currentTag}}/?path=/docs/design-system-changelog--page)
{{~/if}}
{{~#if title}} "{{title}}"
{{~/if}}
{{~#if date}} ({{date}})
{{/if}}
{{#if @root.linkCompare~}}
  [compare](
  {{~#if @root.repository~}}
    {{~#if @root.host}}
      {{~@root.host}}/
    {{~/if}}
    {{~#if @root.owner}}
      {{~@root.owner}}/
    {{~/if}}
    {{~@root.repository}}
  {{~else}}
    {{~@root.repoUrl}}
  {{~/if~}}
  /compare/{{previousTag}}...{{currentTag}})
{{~else}}
  {{~version}}
{{~/if}}
`;

module.exports = Promise.resolve()
  .then(() => require('conventional-changelog-angular'))
  .then(preset => {
    preset.writerOpts.mainTemplate = main;
    preset.writerOpts.headerPartial = header;
    preset.writerOpts.commitUrlFormat = '{{host}}/{{owner}}/{{repository}}/commits/{{hash}}';
    preset.writerOpts.compareUrlFormat = '{{host}}/{{owner}}/{{repository}}/compare/{{currentTag}}...{{previousTag}}';
    return preset;
  })
