import { virtual } from '@guidepup/virtual-screen-reader';
import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsInput } from '../../../input/src';

jest.mock('../../../input/src/controller/ods-input');

describe('ods-accordion a11y', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsInput],
      html,
    });

    root = page.root;
  }

  it("should navigate to the input and announce the placeholder", async () => {
    await setup(`
      <ods-accordion is-disabled>
          <span slot="summary">Hello, world!</span>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
          </p>
        </ods-accordion>
    `);

    // console.log('', page.body.innerHTML)
    // Start the Virtual Screen Reader.
    await virtual.start({ container: page.body });

    do {
      await virtual.next();
    } while (await virtual.lastSpokenPhrase() !== 'end of document')

    console.log('await virtual.spokenPhraseLog()', await virtual.spokenPhraseLog())

    expect(await virtual.spokenPhraseLog()).toContain(
      'Hello, world!',
    );

    // Stop the Virtual Screen Reader.
    await virtual.stop();
  });
});
