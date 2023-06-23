# OSDS unit tests guideline

## Package structure

```html
├── packages
    ├── stencil
    │   ├── components
    │       ├── <component>
    │           ├── osds-<component>.spec.ts
    └── libraries
        ├── testing
            ├── src
                ├── components
                    ├── <component>
                        ├── ods-<component>-base-attributes.ts
                        └── public-api.ts
```

## Testing package

*This package is used to declare all component configurations required for testing. Once built, you can import all content from `@ovhcloud/ods-testing`.*

#### ods-\<component\>-base-attributes.ts

Default base attributes declaration

```ts
export const odsButtonBaseAttributes: OdsButtonAttributes = {
    ...
};
```

You can add many configurations using a file per configuration
e.g. `ods-<component>-<config-name>-attributes.ts`

```ts
export const odsButtonStrokedAttributes: OdsButtonAttributes = {
    ...
};
```

Both configurations must be exported from public-api.ts

```ts
export * from './ods-button-base-attributes';
export * from './ods-button-stroked-attributes';
```

## Stencil package

#### osds-\<component\>.spec.ts

1. Init tests
```ts
describe('spec:osds-button', () => {});
```

2. Declare setup function
```ts
async function setup({ attributes, html = '' }: { attributes?: Partial<OdsButtonAttributes>, html?: string } = {});
```

3. Implements setup
```ts
import { newSpecPage } from '@stencil/core/testing';
import { OsdsButton } from './osds-button';
import {
  OdsButtonAttributes,
  OdsComponentAttributes2StringAttributes,
  odsButtonDefaultAttributes
} from '@ovhcloud/ods-core';
import {
  OdsStringAttributes2Str,
  OdsCreateAttributes,
  odsButtonBaseAttributes
} from '@ovhcloud/ods-testing';
...
describe('spec:osds-button', () => {
    let page: SpecPage;
    let htmlButton: HTMLButtonElement;
    let mainSlot: HTMLElement;
    let instance: OsdsButton;

    async function setup(...) {

        // Add attibutes from params to config
        const minimalAttributes: OdsButtonAttributes = OdsCreateAttributes(attributes, odsButtonBaseAttributes);

        // Stringify attributes
        const stringAttributes = OdsComponentAttributes2StringAttributes<OdsButtonAttributes>(minimalAttributes, odsButtonDefaultAttributes);

        // Init page with component
        page = await newSpecPage({
            components: [OsdsButton],
            html: `<osds-button ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-button>`,
        });

        // Get instance 
        instance = page.rootInstance;

        // Get HTML native(s) element(s) from component
        htmlButton = page.root.shadowRoot.querySelector('button');

        // Get slot(s)
        mainSlot = page.root.shadowRoot.querySelector('slot:not([name])');
    }
}
```

4. Page should render
```ts
describe('spec:osds-button', () => {
    ...
    it('should render', async () => {
        await setup({});
        expect(page.root.shadowRoot).toBeTruthy();
        expect(page.rootInstance).toBeTruthy();
    });
});
```

5. Contents should exists
```ts
describe('spec:osds-button', () => {
    ...
  describe('contents', () => {
    it('should have a main slot', async () => {
      await setup({ attributes: {}, html: `<slot></slot>` });
      expect(mainSlot).toBeTruthy();
    });

    it('should have a button', async () => {
      await setup();
      expect(htmlButton).toBeTruthy();
    });
  });
});
```

5. Test attributes
```ts
import { odsButtonDefaultAttributes } from '@ovhcloud/ods-core';
import { odsUnitTestAttribute } from '@ovhcloud/ods-testing';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';
import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
...
describe('spec:osds-button', () => {
    ...
    describe('attributes', () => {
        const config = {
            page: () => page,
            instance: () => instance,
            setup
        };
        ...
        describe('color', () => {
            odsUnitTestAttribute<OdsButtonAttributes, 'color'>({
                ...getAttributeContextOptions<OdsButtonAttributes, OsdsButton, 'color'>({
                    name: 'color',
                    list: OdsThemeColorIntentList,
                    defaultValue: odsButtonDefaultAttributes.color,
                    ...config
                })
            });
        });
    });
});
```
