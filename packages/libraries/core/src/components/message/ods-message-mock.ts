import { OdsIconName } from "../icon/ods-icon-size";
import { OdsMessage } from "./ods-message";
import { OdsMessageController } from "./ods-message-controller";
import { OdsMessageEvents } from "./ods-message-events";
import { OdsMessageMethods } from "./ods-message-methods";
import { OdsMessageType } from "./ods-message-type";
import { OdsThemeColorIntent } from "@ovhcloud/ods-theming";

/**
 * Mocked generic implementation that represents an `OdsMessage`.
 * it allows to test the controller with a stub implementation.
 */
export class OdsMessageMock implements OdsMessage<OdsMessageMethods, OdsMessageEvents> {
  color?: OdsThemeColorIntent;
  flex?: boolean;
  icon?: OdsIconName;
  removable?: boolean;
  type?: OdsMessageType;
  contrasted?: boolean;

  controller: OdsMessageController = jest.fn() as unknown as OdsMessageController;

  odsRemoveClick!: void;

  removeClicked = jest.fn();

  beforeInit = jest.fn();
}
