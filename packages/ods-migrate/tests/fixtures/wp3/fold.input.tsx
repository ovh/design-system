import { ModalContent, MODAL_COLOR, Table, TABLE_VARIANT } from '@ovhcloud/ods-react';

export const A = ({ isCritical }) => <ModalContent color={ isCritical ? MODAL_COLOR.critical : MODAL_COLOR.neutral } />;
export const B = ({ s }) => <Table variant={ s ? TABLE_VARIANT.striped : TABLE_VARIANT.default } />;
export const C = ({ s }) => <Table variant={ s ? TABLE_VARIANT.default : TABLE_VARIANT.striped } />;
export const D = () => <Table variant={ TABLE_VARIANT.striped } />;
export const E = ({ a, b }) => <Table variant={ a && b ? 'striped' : 'default' } />;
export const F = ({ v }) => <Table variant={ v || TABLE_VARIANT.default } />;
export const G = ({ c }) => <ModalContent color={ c ? 'neutral' : 'information' } />;
export const H = ({ a, b }) => <ModalContent color={ a ? 'critical' : b ? 'neutral' : 'critical' } />;
export const I = ({ c }) => <ModalContent role="dialog" color={ c ? 'critical' : 'neutral' } />;
