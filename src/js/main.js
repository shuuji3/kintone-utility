import getRecord from './rest/getRecord';
import getRecords from './rest/getRecords';
import getAllRecordsByQuery from './rest/getAllRecordsByQuery';
import postRecord from './rest/postRecord';
import postRecords from './rest/postRecords';
import postAllRecords from './rest/postAllRecords';
import putRecord from './rest/putRecord';
import putRecords from './rest/putRecords';
import putAllRecords from './rest/putAllRecords';
import deleteRecords from './rest/deleteRecords';
import deleteAllRecords from './rest/deleteAllRecords';
import deleteAllRecordsByQuery from './rest/deleteAllRecordsByQuery';
import upsertRecord from './rest/upsertRecord';
import upsertRecords from './rest/upsertRecords';
import setBasicAuth from './rest/setBasicAuth';
import setUserAuth from './rest/setUserAuth';
import setApiTokenAuth from './rest/setApiTokenAuth';
import setDomain from './rest/setDomain';
import setGuestSpaceId from './rest/setGuestSpaceId';
import clearBasicAuth from './rest/clearBasicAuth';
import clearUserAuth from './rest/clearUserAuth';
import clearApiTokenAuth from './rest/clearApiTokenAuth';
import clearDomain from './rest/clearDomain';
import clearGuestSpaceId from './rest/clearGuestSpaceId';
import downloadFile from './rest/downloadFile';
import uploadFile from './rest/uploadFile';
import getApp from './rest/getApp';
import getApps from './rest/getApps';
import getAllApps from './rest/getAllApps';
import getFormFields from './rest/getFormFields';
import getFormLayout from './rest/getFormLayout';
import postDeployAppSettings from './rest/postDeployAppSettings';
import getAppDeployStatus from './rest/getAppDeployStatus';
import getCustomization from './rest/getCustomization';
import updateCustomization from './rest/updateCustomization';
import postCursor from './rest/postCursor';
import getCursor from './rest/getCursor';
import deleteCursor from './rest/deleteCursor';

const kintoneUtility = {
    rest: {
        // Record
        getRecord,
        getRecords,
        getAllRecordsByQuery,
        postRecord,
        postRecords,
        postAllRecords,
        putRecord,
        putRecords,
        putAllRecords,
        deleteRecords,
        deleteAllRecords,
        deleteAllRecordsByQuery,
        upsertRecord,
        upsertRecords,
        downloadFile,
        uploadFile,

        // App
        getApp,
        getApps,
        getAllApps,
        getFormFields,
        getFormLayout,
        postDeployAppSettings,
        getAppDeployStatus,
        getCustomization,
        updateCustomization,

        // Authentication
        setBasicAuth,
        setUserAuth,
        setApiTokenAuth,
        setDomain,
        setGuestSpaceId,
        clearBasicAuth,
        clearUserAuth,
        clearApiTokenAuth,
        clearDomain,
        clearGuestSpaceId,

        // Cursor
        postCursor,
        getCursor,
        deleteCursor
    },
    ui: {}
};

window.kintoneUtility = kintoneUtility;
export default kintoneUtility;
