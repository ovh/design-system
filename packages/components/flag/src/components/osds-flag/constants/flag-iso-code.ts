import { ODS_COUNTRY_ISO_CODE } from "@ovhcloud/ods-common-core";

const ODS_FLAG_ISO_CODE = {
    ...ODS_COUNTRY_ISO_CODE,   
    EU: 'eu', // Europe
    UN: 'un', // United Nations
    XK: 'xk', // Kosovo
}

const ODS_FLAG_ISO_CODES =  Object.freeze(Object.values(ODS_FLAG_ISO_CODE));

export { 
    ODS_FLAG_ISO_CODE,
    ODS_FLAG_ISO_CODES,
}