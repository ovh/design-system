import { OdsCode } from "./ods-code";
import { OdsCodeController } from "./ods-code-controller";
import { OdsCodeEvents } from "./ods-code-events";
import { OdsCodeMethods } from "./ods-code-methods";
import { OdsCodeSize } from "./ods-code-size";
import { OdsThemeColorIntent } from "@ovhcloud/ods-theming";

export class OdsCodeMock implements OdsCode<OdsCodeMethods, OdsCodeEvents> {
  beforeInit = jest.fn();
  codeEl!: HTMLElement;

  color?: OdsThemeColorIntent;
  contrasted?: boolean;
  controller: OdsCodeController = jest.fn() as unknown as OdsCodeController;
  createCopyIconElement = jest.fn().mockImplementation(() => document.createElement('osds-icon'));
  el!: HTMLElement;
  emitCopy = jest.fn();
  odsCodeCopy!: void;
  onCopyClick = jest.fn();
  size?: OdsCodeSize;
}
