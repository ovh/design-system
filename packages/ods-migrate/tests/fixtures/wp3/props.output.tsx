import { FileUploadItem, Input, INPUT_TYPE, Modal, ModalTrigger } from '@ovhcloud/ods-react';

export const A = ({ label }) => <FileUploadItem />;
export const B = () => <FileUploadItem fileName="a" />;
export const C = () => <ModalTrigger value="42" />;
export const D = () => <ModalTrigger value="-1" />;
export const E = () => <ModalTrigger /* TODO(ods-v20): <ModalTrigger value={[…]}>: the value of a trigger is a string in v20: join the values or use one trigger per value */ value={[ 'a', 'b' ]} />;
export const F = ({ v }) => <ModalTrigger value={ v } />;
export const G = () => <Input type="password" />;
export const H = () => <Input type={ INPUT_TYPE.password } maskOption={{ enable: true }} />;
export const I = (props) => <Input type="password" { ...props } />;
export const J = ({ hidden }) => <Input type={ hidden ? INPUT_TYPE.password : 'text' } />;
export const K = () => <Modal positionerStyle={{ zIndex: 98 }} />;
export const K2 = () => <Modal positionerStyle={{ /* TODO(ods-v20): <Modal positionerStyle={{ zIndex }}>: check this stacking: modals are at 400 in v20. Once decided, put a comment `ods-v20: checked` right before it, so that ods-migrate and --check leave it. */ zIndex: 150 }} />;
export const K3 = () => <Modal positionerStyle={{ zIndex: 99999 }} />;
export const L = () => <Modal positionerStyle={{ zIndex: 'calc(var(--ods-theme-overlay-z-index) + 1)' }} />;
export const M = ({ z }) => <Modal positionerStyle={{ zIndex: z }} />;
