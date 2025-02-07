import { virtual } from '@guidepup/virtual-screen-reader';

describe('ods-accordion a11y', () => {
  it("should navigate to the input and announce the placeholder", async () => {

    // define in page.evaluate

    document.body.innerHTML = `
      <ods-accordion>
        <span slot="summary">Hello, world!</span>

        <p aria-label="test">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
        </p>
      </ods-accordion>
    `;
    // console.log('document.body', document.body)

    // Start the Virtual Screen Reader.
    await virtual.start({ container: document.body });

    // Move through several items.
    do {
      await virtual.next();
    } while (await virtual.lastSpokenPhrase() !== 'end of document')

    console.log('await virtual.spokenPhraseLog()', await virtual.spokenPhraseLog())

    expect(await virtual.spokenPhraseLog()).toContain(
      'Hello, world!'
    );

    // Stop the Virtual Screen Reader.
    await virtual.stop();
  });
});
