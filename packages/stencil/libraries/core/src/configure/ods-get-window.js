/**
 * get the window element typed as ODS window
 */
export function getOdsWindow() {
  // node protection or other env : window may not exist
  if (typeof window !== "undefined") {
    const win = window;
    win.winId = win.winId ? win.winId : Date.now();
    //console.log('want window id=', (win as any).winId, { setupId: win.ods?.setupId, config: win.ods?.config });
    return win;
  }
  return undefined;
}
