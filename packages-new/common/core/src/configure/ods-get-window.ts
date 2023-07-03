import { OdsWindow } from './ods-window';

/**
 * get the window element typed as ODS window
 */
export function getOdsWindow(): OdsWindow | undefined {
  // node protection or other env : window may not exist
  if (typeof window !== "undefined") {
    const win: OdsWindow = window;
    (win as any).winId = (win as any).winId ? (win as any).winId : Date.now();
    //console.log('want window id=', (win as any).winId, { setupId: win.ods?.setupId, config: win.ods?.config });
    return win;
  }
  return undefined;
}
