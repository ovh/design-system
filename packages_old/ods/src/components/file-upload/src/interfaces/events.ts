import { type OdsFile } from './attributes';
import { type OdsFileRejectionCause } from '../constants/file-error';

interface OdsFileChangeEventDetail {
  files: File[];
  noError: boolean;
}

interface OdsFileRejectedEventDetail {
  files: File[];
  reason: OdsFileRejectionCause;
}

type OdsFileCancelEvent = CustomEvent<OdsFile>;
type OdsFileChangeEvent = CustomEvent<OdsFileChangeEventDetail>;
type OdsFileRejectedEvent = CustomEvent<OdsFileRejectedEventDetail>;

export {
  type OdsFileCancelEvent,
  type OdsFileChangeEvent,
  type OdsFileChangeEventDetail,
  type OdsFileRejectedEvent,
  type OdsFileRejectedEventDetail,
};
