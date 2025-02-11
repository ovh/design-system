jest.mock('../../src/controller/ods-input');

import { virtual } from '@guidepup/virtual-screen-reader';
import { defineCustomElements } from '@ovhcloud/ods-components/dist/loader';

describe('ods-accordion a11y', () => {
  it('should navigate to the input and announce the placeholder', async() => {

    // define in page.evaluate
    defineCustomElements();

    document.body.innerHTML = `
      <ods-input placeholder="Placeholder">
      </ods-input>
    `;

    // Start the Virtual Screen Reader.
    await virtual.start({ container: document.body });

    // Move through several items.
    while ((await virtual.lastSpokenPhrase()) !== "end of document") {
      console.log('lastSpokenPhrase', await virtual.lastSpokenPhrase());
      await virtual.next();
    }

    console.log('await virtual.spokenPhraseLog()', await virtual.spokenPhraseLog());

    expect(await virtual.spokenPhraseLog()).toContain(
      'Hello, world!',
    );

    // Stop the Virtual Screen Reader.
    await virtual.stop();
  });
});
