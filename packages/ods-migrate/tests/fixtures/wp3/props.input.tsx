import { FileUploadItem, Input, INPUT_TYPE, Modal, ModalTrigger } from '@ovhcloud/ods-react';

export const A = ({ label }) => <FileUploadItem uploadSuccessLabel={ label } />;
export const B = () => <FileUploadItem fileName="a" uploadSuccessLabel="Done" />;
export const C = () => <ModalTrigger value={ 42 } />;
export const D = () => <ModalTrigger value={ -1 } />;
export const E = () => <ModalTrigger value={[ 'a', 'b' ]} />;
export const F = ({ v }) => <ModalTrigger value={ v } />;
export const G = () => <Input type="password" />;
export const H = () => <Input type={ INPUT_TYPE.password } maskOption={{ enable: true }} />;
export const I = (props) => <Input type="password" { ...props } />;
export const J = ({ hidden }) => <Input type={ hidden ? INPUT_TYPE.password : 'text' } />;
export const K = () => <Modal positionerStyle={{ zIndex: 98 }} />;
export const K2 = () => <Modal positionerStyle={{ zIndex: 150 }} />;
export const K3 = () => <Modal positionerStyle={{ zIndex: 99999 }} />;
export const L = () => <Modal positionerStyle={{ zIndex: 'calc(var(--ods-theme-overlay-z-index) + 1)' }} />;
export const M = ({ z }) => <Modal positionerStyle={{ zIndex: z }} />;
