enum ODS_MESSAGE_TYPE {
    error = 'error',
    info = 'info',
    success = 'success',
    warning = 'warning',
}

const ODS_MESSAGE_TYPES = Object.freeze(Object.values(ODS_MESSAGE_TYPE));

export {
    ODS_MESSAGE_TYPE,
    ODS_MESSAGE_TYPES,
};
