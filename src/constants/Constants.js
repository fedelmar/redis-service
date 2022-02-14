const assert = require('assert');
require('dotenv').config();

const {
  PORT,
  ENVIRONMENT,
  NAME,
  VERSION,
  DIDI_SERVER,
  MONGO_URI,
  REDIS_URI,
  IP_ADDRESS,
  VERSION_APP,
  PREFIJO_REDIS,
} = process.env;


module.exports = {
  PORT,
  ENVIRONMENT,
  NAME,
  VERSION,
  DIDI_SERVER,
  MONGO_URI,
  REDIS_URI,
  PREFIJO_REDIS,
  VUS_URLS: {
    NEW_OPERATION: `${VUS_URL}/newOperation`,
    CANCEL_OPERATION: `${VUS_URL}/cancelOperation`,
    ADD_FRONT: `${VUS_URL}/addFront`,
    ADD_DOCUMENT_IMAGE: `${VUS_URL}/addDocumentImage`,
    ADD_BACK: `${VUS_URL}/addBack`,
  },
  VUS_API_KEY,
  VUS_API,
  VUS_APP_VERS,
  AUTHENTICATION_REQUEST: {
    IN_PROGRESS: 'In Progress',
    SUCCESSFUL: 'Successful',
    FALIED: 'Falied',
    CANCELLED: 'Cancelled',
  },

  VALIDATION_TYPES: {
    IS_AUTH_TOKEN: 'IsAuthToken',
    IS_MOBILE_PHONE: 'isMobilePhone',
    IS_EMAIL: 'isEmail',
    IS_STRING: 'isString',
    IS_DATE_TIME: 'isDateTime',
    IS_BOOLEAN: 'isBoolean',
    IS_PASSWORD: 'isPassword',
    IS_BASE_64_IMAGE: 'isBase64Image',
    IS_FINGER_PRINT: 'isFingerPrint',
    IS_NUMBER: 'isNumber',
    IS_DNI: 'isDni',
    IS_IP: 'isIp',
    MAX_MB: 3,
  },

  VERSION_APP,
  IP_ADDRESS,
};
