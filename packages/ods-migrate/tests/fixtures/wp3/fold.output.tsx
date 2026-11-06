/* TODO(ods-v20): TABLE_VARIANT: removed in v20, delete it from this import once the places marked below no longer use it */ import { ModalContent, Table, TABLE_VARIANT } from '@ovhcloud/ods-react';

export const A = ({ isCritical }) => <ModalContent role={ isCritical ? 'alertdialog' : undefined } />;
export const B = ({ s }) => <Table striped={ s } />;
export const C = ({ s }) => <Table striped={ !s } />;
export const D = () => <Table striped />;
export const E = ({ a, b }) => <Table striped={ a && b } />;
export const F = ({ v }) => <Table /* TODO(ods-v20): <Table variant={…}> is removed in v20 and its value is computed at runtime: use the `striped` boolean */ variant={ v || TABLE_VARIANT.default } />;
export const G = ({ c }) => <ModalContent />;
export const H = ({ a, b }) => <ModalContent role={ a ? 'alertdialog' : b ? undefined : 'alertdialog' } />;
export const I = ({ c }) => <ModalContent role="dialog" />;
