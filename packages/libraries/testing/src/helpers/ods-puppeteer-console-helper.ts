import { E2EPage } from '@stencil/core/testing';

export const odsPuppeteerConsoleHelper = (page: E2EPage) => {
  page.on('console', async msg => {
    const args = await msg.args()
    for (const arg of args) {
      const val = await arg.jsonValue()
      if (JSON.stringify(val) !== JSON.stringify({})) console.log(val)
      else {
        const { type, subtype, description } = arg._remoteObject
        console.log(`type: ${type}, subtype: ${subtype}, description:\n ${description}`)
      }
    }
  });
}
