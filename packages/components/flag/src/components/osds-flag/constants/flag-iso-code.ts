import { ODS_COUNTRY_ISO_CODE } from "@ovhcloud/ods-common-core";

const ODS_FLAG_ISO_CODE = Object.freeze({
    ...ODS_COUNTRY_ISO_CODE,   
    EU: 'eu', // Europe
    UN: 'un', // United Nations
    XK: 'xk', // Kosovo
});

type ODS_FLAG_ISO_CODE_UNION = typeof ODS_FLAG_ISO_CODE[keyof typeof ODS_FLAG_ISO_CODE];

const ODS_FLAG_ISO_CODES =  Object.freeze(Object.values(ODS_FLAG_ISO_CODE).sort());

export {
    ODS_FLAG_ISO_CODE,
    ODS_FLAG_ISO_CODES,
    ODS_FLAG_ISO_CODE_UNION,
}