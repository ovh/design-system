jest.mock('../../src/controller/ods-input');

import type { SpecPage } from '@stencil/core/testing';
import { virtual } from '@guidepup/virtual-screen-reader';
import { newSpecPage } from '@stencil/core/testing';
import { OdsInput } from '../../src';

// @ts-ignore for test purposes
global.MutationObserver = jest.fn(() => ({
  disconnect: jest.fn(),
  observe: jest.fn(),
}));

describe('ods-input a11y', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation((msg) => {
      // Hide the Stencil error about internals being not implemented on spec tests
      if (!msg.startsWith('NOTE: Property validity was accessed on ElementInternals, but this property is not implemented.')) {
        console.error(msg);
      }
    });
  });

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsInput],
      html,
    });

    root = page.root;
  }

  it('should navigate to the input and announce the placeholder', async () => {
    await setup(`
      <ods-input name="test" placeholder="Placeholder">
      </ods-input>
    `);

    console.log('', page.body.innerHTML)
    // Start the Virtual Screen Reader.
    await virtual.start({ container: page.rootInstance });

    do {
      await virtual.next();
      console.log('await virtual.lastSpokenPhrase()', await virtual.lastSpokenPhrase())
    } while (await virtual.lastSpokenPhrase() !== 'end of document');

    console.log('await virtual.spokenPhraseLog()', await virtual.spokenPhraseLog());

    expect(await virtual.spokenPhraseLog()).toContain(
      'Hello, world!',
    );

    // Stop the Virtual Screen Reader.
    await virtual.stop();
  });
});
