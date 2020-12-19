# kintone-utility Documentation

## Table of Contents

### Record

-   [kintoneUtility.rest.getRecord](#getRecord)
-   [kintoneUtility.rest.getRecords](#getRecords)
-   [kintoneUtility.rest.getAllRecordsByQuery](#getAllRecordsByQuery)
-   [kintoneUtility.rest.postRecord](#postRecord)
-   [kintoneUtility.rest.postRecords](#postRecords)
-   [kintoneUtility.rest.postAllRecords](#postAllRecords)
-   [kintoneUtility.rest.putRecord](#putRecord)
-   [kintoneUtility.rest.putRecords](#putRecords)
-   [kintoneUtility.rest.putAllRecords](#putAllRecords)
-   [kintoneUtility.rest.deleteRecords](#deleteRecords)
-   [kintoneUtility.rest.deleteAllRecords](#deleteAllRecords)
-   [kintoneUtility.rest.deleteAllRecordsByQuery](#deleteAllRecordsByQuery)
-   [kintoneUtility.rest.upsertRecord](#upsertRecord)
-   [kintoneUtility.rest.upsertRecords](#upsertRecords)
-   [kintoneUtility.rest.downloadFile](#downloadFile)
-   [kintoneUtility.rest.uploadFile](#uploadFile)

### App

-   [kintoneUtility.rest.getApp](#getApp)
-   [kintoneUtility.rest.getApps](#getApps)
-   [kintoneUtility.rest.getAllApps](#getAllApps)
-   [kintoneUtility.rest.getFormFields](#getFormFields)
-   [kintoneUtility.rest.getFormLayout](#getFormLayout)
-   [kintoneUtility.rest.postDeployAppSettings](#postDeployAppSettings)
-   [kintoneUtility.rest.getAppDeployStatus](#getAppDeployStatus)
-   [kintoneUtility.rest.getCustomization](#getCustomization)
-   [kintoneUtility.rest.updateCustomization](#updateCustomization)

### Authentication

-   [kintoneUtility.rest.setUserAuth](#setUserAuth)
-   [kintoneUtility.rest.setApiTokenAuth](#setApiTokenAuth)
-   [kintoneUtility.rest.setDomain](#setDomain)
-   [kintoneUtility.rest.setBasicAuth](#setBasicAuth)
-   [kintoneUtility.rest.setGuestSpaceId](#setGuestSpaceId)
-   [kintoneUtility.rest.clearUserAuth](#clearUserAuth)
-   [kintoneUtility.rest.clearApiTokenAuth](#clearApiTokenAuth)
-   [kintoneUtility.rest.clearDomain](#clearDomain)
-   [kintoneUtility.rest.clearBasicAuth](#clearBasicAuth)
-   [kintoneUtility.rest.clearGuestSpaceId](#clearGuestSpaceId)  

### Cursor

-   [kintoneUtility.rest.postCursor](#postCursor)
-   [kintoneUtility.rest.getCursor](#getCursor)
-   [kintoneUtility.rest.deleteCursor](#deleteCursor)

## Record

### <a name="getRecord"> kintoneUtility.rest.getRecord(param)

-   Get a single record.

#### Parameter

| Name          | Data type | Required | Description                                                               |
| :------------ | :-------: | :------: | :------------------------------------------------------------------------ |
| param         |   Object  |    Yes   |                                                                           |
| param.app     |   Number  |    Yes   | The app ID.                                                               |
| param.id      |   Number  |    Yes   | The Record ID.                                                            |
| param.isGuest |  Boolean  | Optional | The default is false, to be true if the app is belonged to a guest space. |

#### Response

    Promise Object

#### Example

```js
kintoneUtility.rest.getRecord({
  app: 542,
  id: 18616,
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

### <a name="getRecords"> kintoneUtility.rest.getRecords(param)

-   Get multiple records.
-   The maximum number of records that can be retrieved is 500.

#### Parameter

| Name             | Data type | Required | Description                                                                                                                                                                                                                             |
| :--------------- | :-------: | :------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| param            |   Object  |    Yes   |                                                                                                                                                                                                                                         |
| param.app        |   Number  |    Yes   | The App ID.                                                                                                                                                                                                                             |
| param.query      |   String  | Optional | The query string that will specify what records will be responded. If nothing is specified, fields will be returned from all accessible records.<br>\[The query detail](https&#x3A;//developer.kintone.io/hc/en-us/articles/213149287/) |
| param.fields     |   Array   | Optional | The field codes that you want in the response. If nothing is specified, all accessible fields in the app will be returned.                                                                                                              |
| param.totalCount |  Boolean  | Optional | If set to "true", the request will retrieve the total count of records that were retrieved that match the query conditions. If ignored, null is returned for the totalCount value.                                                      |
| param.isGuest    |  Boolean  | Optional | The default is false, to be true if the app is belonged to a guest space.                                                                                                                                                               |

#### Response

    Promise Object

#### Example

```js
kintoneUtility.rest.getRecords({
  app: 542,
  query: 'Number > 0 limit 500 offset 100',
  fields: ['String', 'Number'],
  totalCount: true,
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

### <a name="getAllRecordsByQuery"> kintoneUtility.rest.getAllRecordsByQuery(param)

-   Get all records indicated by query.
-   Can't indicate limit and offset of query.

#### Parameter

| Name          | Data type | Required | Description                                                                                                                                                                                                                                                                         |
| :------------ | :-------: | :------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| param         |   Object  |    Yes   |                                                                                                                                                                                                                                                                                     |
| param.app     |   Number  |    Yes   | The App ID.                                                                                                                                                                                                                                                                         |
| param.query   |   String  | Optional | The query string that will specify what records will be responded. If nothing is specified, fields will be returned from all accessible records.<br>\[The query detail](https&#x3A;//developer.kintone.io/hc/en-us/articles/213149287/)<br>Can't indicate **limit** and **offset**. |
| param.fields  |   Array   | Optional | The field codes that you want in the response. If nothing is specified, all accessible fields in the app will be returned.                                                                                                                                                          |
| param.isGuest |  Boolean  | Optional | The default is false, to be true if the app is belonged to a guest space.                                                                                                                                                                                                           |

#### Response

    Promise Object

#### Example

```js
kintoneUtility.rest.getAllRecordsByQuery({
  app: 542,
  query: 'Number > 0',
  fields: ['String', 'Number'],
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

### <a name="postRecord"> kintoneUtility.rest.postRecord(param)

-   Insert a record to kintone app.

#### Parameter

| Name          | Data type | Required | Description                                                                                                                                                                                |
| :------------ | :-------: | :------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| param         |   Object  |    Yes   |                                                                                                                                                                                            |
| param.app     |   Number  |    Yes   | The app ID.                                                                                                                                                                                |
| param.record  |   Object  | Optional | Field codes and values are specified in this object. If ignored, the record will be added with default field values. If field codes that don't exist are specified, these will be ignored. |
| param.isGuest |  Boolean  | Optional | The default is false, to be true if the app is belonged to a guest space.                                                                                                                  |

#### Response

    Promise Object

#### Example

```js
const record = {
  Number: {
    value: 1234
  },
  String: {
    value: 'string'
  },
};
kintoneUtility.rest.postRecord({
  app: 542,
  record: record,
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

### <a name="postRecords"> kintoneUtility.rest.postRecords(param)

-   **Insert up to 2000 records to kintone app.**
-   **If the records are over 2000, It is thrown Error.**
-   **If request is failed, no record is inserted.**

#### Parameter

| Name          | Data type | Required | Description                                                               |
| :------------ | :-------: | :------: | :------------------------------------------------------------------------ |
| param         |   Object  |    Yes   |                                                                           |
| param.app     |   Number  |    Yes   | The app ID.                                                               |
| param.records |   Array   |    Yes   | Holds an array of record objects.                                         |
| param.isGuest |  Boolean  | Optional | The default is false, to be true if the app is belonged to a guest space. |

#### Response

    Promise Object

#### Example

```js
const records = [
  {
    Number: {
      value: 1234
    },
    String: {
      value: 'string1'
    },
  },
  {
    Number: {
      value: 5678
    },
    String: {
      value: 'string2'
    },
  }
];
kintoneUtility.rest.postRecords({
  app: 542,
  records: records,
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

### <a name="postAllRecords"> kintoneUtility.rest.postAllRecords(param)

-   **Can insert over 2000 records to kintone app, but can't do rollback.**

#### Parameter

| Name          | Data type | Required | Description                                                               |
| :------------ | :-------: | :------: | :------------------------------------------------------------------------ |
| param         |   Object  |    Yes   |                                                                           |
| param.app     |   Number  |    Yes   | The app ID.                                                               |
| param.records |   Array   |    Yes   | Holds an array of record objects.                                         |
| param.isGuest |  Boolean  | Optional | The default is false, to be true if the app is belonged to a guest space. |

#### Response

    Promise Object

#### Example

```js
const records = [
  {
    Number: {
      value: 1234
    },
    String: {
      value: 'string1'
    },
  },
  {
    Number: {
      value: 5678
    },
    String: {
      value: 'string2'
    },
  }
];
kintoneUtility.rest.postAllRecords({
  app: 542,
  records: records,
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

### <a name="putRecord"> kintoneUtility.rest.putRecord(param)

-   Update a record to kintone app.

#### Parameter

| Name                  | Data type |                      Required                     | Description                                                                                                                                                                                         |
| :-------------------- | :-------: | :-----------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| param                 |   Object  |                        Yes                        |                                                                                                                                                                                                     |
| param.app             |   Number  |                        Yes                        | The app ID.                                                                                                                                                                                         |
| param.id              |   Number  | No (Required, if updateKey will not be specified) | The record ID.                                                                                                                                                                                      |
| param.updateKey       |   Object  |     No (Required, if id will not be specified)    | To specify this field, the field must have the "Prohibit duplicate values" option turned on.                                                                                                        |
| param.updateKey.field |   String  |   No (Required, if updateKey will be specified)   | The field code of unique key.                                                                                                                                                                       |
| param.updateKey.value |   String  |   No (Required, if updateKey will be specified)   | The value of unique key.                                                                                                                                                                            |
| param.revision        |   Number  |                      Optional                     | The expected revision number. If the value does not match, an error will occur and the record will not be updated. If the value is not specified or is -1, the revision number will not be checked. |
| param.record          |   Object  |                      Optional                     | Field codes and values are specified in this object. If ignored, the record will not be updated.                                                                                                    |
| param.isGuest         |  Boolean  |                      Optional                     | The default is false, to be true if the app is belonged to a guest space.                                                                                                                           |

#### Response

    Promise Object

#### Example

```js
const record = {
  Number: {
    value: 1234
  },
  String: {
    value: 'string'
  },
};
//update by id
kintoneUtility.rest.putRecord({
  app: 542,
  id: 18616,
  record: record,
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
//update by unique key
kintoneUtility.rest.putRecord({
  app: 542,
  updateKey: {
    field: 'unique_field_code',
    value: 'unique_field_value'
  },
  record: record,
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

### <a name="putRecords"> kintoneUtility.rest.putRecords(param)

-   **Update up to 2000 records to kintone app.**
-   **If the records are over 2000, It is thrown Error.**
-   **If request is failed, no record is Updated.**

#### Parameter

| Name          | Data type | Required | Description                                                                                                                                        |
| :------------ | :-------: | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| param         |   Object  |    Yes   |                                                                                                                                                    |
| param.app     |   Number  |    Yes   | The app ID.                                                                                                                                        |
| param.records |   Array   |    Yes   | \[Array of record objects that include id/updateKey, revision and record objects.](https&#x3A;//developer.kintone.io/hc/en-us/articles/213149027/) |
| param.isGuest |  Boolean  | Optional | The default is false, to be true if the app is belonged to a guest space.                                                                          |

#### Response

    Promise Object

#### Example

```js
const records = [
  {
    id: 18616,
    record: {
      Number: {
        value: 1234
      },
      String: {
        value: 'string1'
      },
    },
  },
  {
    id: 18617,
    record: {
      Number: {
        value: 5678
      },
      String: {
        value: 'string2'
      },
    },
  }
];
kintoneUtility.rest.putRecords({
  app: 542,
  records: records,
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

### <a name="putAllRecords"> kintoneUtility.rest.putAllRecords(param)

-   **Can update over 2000 records to kintone app, but can't do rollback.**

#### Parameter

| Name          | Data type | Required | Description                                                                                                                                        |
| :------------ | :-------: | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| param         |   Object  |    Yes   |                                                                                                                                                    |
| param.app     |   Number  |    Yes   | kintone app ID.                                                                                                                                    |
| param.records |   Array   |    Yes   | \[Array of record objects that include id/updateKey, revision and record objects.](https&#x3A;//developer.kintone.io/hc/en-us/articles/213149027/) |
| param.isGuest |  Boolean  | Optional | The default is false, to be true if the app is belonged to a guest space.                                                                          |

#### Response

    Promise Object

#### Example

```js
const records = [
  {
    updateKey: {
      field: 'unique_field_code',
      value: 'unique_field_value1'
    },
    record: {
      Number: {
        value: 1234
      },
      String: {
        value: 'string1'
      },
    },
  },
  {
    updateKey: {
      field: 'unique_field_code',
      value: 'unique_field_value2'
    },
    record: {
      Number: {
        value: 5678
      },
      String: {
        value: 'string2'
      },
    },
  }
];
kintoneUtility.rest.putAllRecords({
  app: 542,
  records: records,
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

### <a name="deleteRecords"> kintoneUtility.rest.deleteRecords(param)

-   **Can't delete over 2000 records.**
-   **If the records are over 2000, It is thrown Error.**
-   **If request is failed, no record is deleted.**

#### Parameter

| Name            | Data type | Required | Description                                                                                                                                                                                                                                                                                                                                                                                   |
| :-------------- | :-------: | :------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| param           |   Object  |    Yes   |                                                                                                                                                                                                                                                                                                                                                                                               |
| param.app       |   Number  |    Yes   | The app ID.                                                                                                                                                                                                                                                                                                                                                                                   |
| param.ids       |   Array   |    Yes   | Array of record IDs that will be deleted.                                                                                                                                                                                                                                                                                                                                                     |
| param.revisions |   Array   | Optional | The expected revision number. The first id number will correspond to the first revision number in the array, the second id to the second revision number, and so on.<br>If the revision number does not match, an error will occur and no records will be deleted.<br>If the revision number is left blank or is -1, the revision number will not be checked for the corresponding record ID. |
| param.isGuest   |  Boolean  | Optional | The default is false, to be true if the app is belonged to a guest space.                                                                                                                                                                                                                                                                                                                     |

#### Response

    Promise Object

#### Example

```js
const ids = [
  18619,
  18618
];
kintoneUtility.rest.deleteRecords({
  app: 542,
  ids: ids,
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

### <a name="deleteAllRecords"> kintoneUtility.rest.deleteAllRecords(param)

-   Delete all records by indicating query.
-   **Can delete over 2000 records, but can't do rollback.**

#### Parameter

| Name          | Data type | Required | Description                                                               |
| :------------ | :-------: | :------: | :------------------------------------------------------------------------ |
| param         |   Object  |    Yes   |                                                                           |
| param.app     |   Number  |    Yes   | kintone app ID.                                                           |
| param.ids     |   Array   |    Yes   | Array of record IDs that will be deleted.                                 |
| param.isGuest |  Boolean  | Optional | The default is false, to be true if the app is belonged to a guest space. |

#### Response

    Promise Object

#### Example

```js
const ids = [
  18619,
  18618
];
kintoneUtility.rest.deleteAllRecords({
  app: 542,
  ids: ids,
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

### <a name="deleteAllRecordsByQuery"> kintoneUtility.rest.deleteAllRecordsByQuery(param)

-   Can delete over 2000 records, but can't do rollback.

#### Parameter

| Name          | Data type | Required | Description                                                                                                                                                                                                                                                                         |
| :------------ | :-------: | :------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| param         |   Object  |    Yes   |                                                                                                                                                                                                                                                                                     |
| param.app     |   Number  |    Yes   | The App ID.                                                                                                                                                                                                                                                                         |
| param.query   |   String  | Optional | The query string that will specify what records will be responded. If nothing is specified, fields will be returned from all accessible records.<br>\[The query detail](https&#x3A;//developer.kintone.io/hc/en-us/articles/213149287/)<br>Can't indicate **limit** and **offset**. |
| param.isGuest |  Boolean  | Optional | The default is false, to be true if the app is belonged to a guest space.                                                                                                                                                                                                           |

#### Response

    Promise Object

#### Example

```js
kintoneUtility.rest.deleteAllRecordsByQuery({
  app: 542,
  query: 'Number > 0',
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

### <a name="upsertRecord"> kintoneUtility.rest.upsertRecord(param)

-   Insert or update a record to kintone app.
-   Insert the record if the updateKey doesn't exists.
-   Update the record if the updateKey exists.

#### Parameter

| Name                  | Data type | Required | Description                                                                                                                                                                                         |
| :-------------------- | :-------: | :------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| param                 |   Object  |    Yes   |                                                                                                                                                                                                     |
| param.app             |   Number  |    Yes   | The app ID.                                                                                                                                                                                         |
| param.updateKey       |   Object  |    Yes   | To specify this field, the field must have the "Prohibit duplicate values" option turned on.                                                                                                        |
| param.updateKey.field |   String  |    Yes   | The field code of unique key.                                                                                                                                                                       |
| param.updateKey.value |   String  |    Yes   | The value of unique key.                                                                                                                                                                            |
| param.revision        |   Number  | Optional | The expected revision number. If the value does not match, an error will occur and the record will not be updated. If the value is not specified or is -1, the revision number will not be checked. |
| param.record          |   Object  | Optional | Field codes and values are specified in this object. If ignored, the record will not be updated.                                                                                                    |
| param.isGuest         |  Boolean  | Optional | The default is false, to be true if the app is belonged to a guest space.                                                                                                                           |

#### Response

    Promise Object

#### Example

```js
const record = {
  Number: {
    value: 1234
  }
};
kintoneUtility.rest.upsertRecord({
  app: 542,
  updateKey: {
    field: 'String',
    value: 'string2'
  },
  record: record
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});;
```

### <a name="upsertRecords"> kintoneUtility.rest.upsertRecords(param)

-   insert or update up to 1500 records to kintone app.
-   If the records are over 1500, It is thrown Error.
-   Insert the records if the updateKey doesn't exists.
-   Update the records if the updateKey exists.

#### Parameter

| Name          | Data type | Required | Description                                                                    |
| :------------ | :-------: | :------: | :----------------------------------------------------------------------------- |
| param         |   Object  |    Yes   |                                                                                |
| param.app     |   Number  |    Yes   | The app ID.                                                                    |
| param.records |   Array   |    Yes   | Holds an array of objects that include updateKey, revision and record objects. |
| param.isGuest |  Boolean  | Optional | The default is false, to be true if the app is belonged to a guest space.      |

#### Response

    Promise Object

#### Example

```js
const records = [
  {
    updateKey: {
      field: 'String',
      value: 'string1'
    },
    record: {
      Number: {
        value: 12345
      }
    }
  },
  {
    updateKey: {
      field: 'String',
      value: 'string2'
    },
    record: {
      Number: {
        value: 123456
      }
    }
  }
];
kintoneUtility.rest.upsertRecords({
  app: 542,
  records: records,
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

### <a name="downloadFile"> kintoneUtility.rest.downloadFile(param)

-   Download a file attached to record.
-   You can get file key by "kintoneUtility.rest.getRecord" or "kintoneUtility.rest.getRecords".

#### Parameter

| Name          | Data type | Required | Description                                                               |
| :------------ | :-------: | :------: | :------------------------------------------------------------------------ |
| param         |   Object  |    Yes   |                                                                           |
| param.fileKey |   String  |    Yes   | The file key that you want to download.                                   |
| param.isGuest |  Boolean  | Optional | The default is false, to be true if the app is belonged to a guest space. |

#### Response

    Promise Object

#### Example

```js
kintoneUtility.rest.downloadFile({
  fileKey: '20170403061310F33E961E5B7C43079759269996409F50150',
  isGuest: false
}).then(function(response) {
  console.log(response); //Blob
}).catch(function(error) {
  console.log(error);
});
```

### <a name="uploadFile"> kintoneUtility.rest.uploadFile(param)

-   Upload a file to kintone.
-   Should specify Blob format data.

#### Parameter

| Name           | Data type | Required | Description                                                               |
| :------------- | :-------: | :------: | :------------------------------------------------------------------------ |
| param          |   Object  |    Yes   |                                                                           |
| param.fileName |   String  |    Yes   | The file name you will upload.                                            |
| param.blob     |   Object  |    Yes   | The blob format data.                                                     |
| param.isGuest  |  Boolean  | Optional | The default is false, to be true if the app is belonged to a guest space. |

#### Response

    Promise Object

#### Example

```js
kintoneUtility.rest.uploadFile({
  fileName: 'sample.txt',
  blob: new Blob(['Sample Text File'], {type:'text\/plain'}),
  isGuest: false
}).then(function(response) {
  console.log(response); //fileKey
}).catch(function(error) {
  console.log(error);
});
```

## App

### <a name="getApp"> kintoneUtility.rest.getApp(param)

-   Get a single app information.

#### Parameter

| Name          | Data type | Required | Description                                                               |
| :------------ | :-------: | :------: | :------------------------------------------------------------------------ |
| param         |   Object  |    Yes   |                                                                           |
| param.id      |   Number  |    Yes   | The App ID.                                                               |
| param.isGuest |  Boolean  | Optional | The default is false, to be true if the app is belonged to a guest space. |

#### Response

    Promise Object

#### Example

```js
kintoneUtility.rest.getApp({
  id: 123,
  isGuest: true
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

### <a name="getApps"> kintoneUtility.rest.getApps(param)

-   Get multiple apps information.

#### Parameter

| Name           | Data type | Required | Description                                                               |
| :------------- | :-------: | :------: | :------------------------------------------------------------------------ |
| param          |   Object  | Optional |                                                                           |
| param.ids      | Number\[] | Optional | The App IDs to get information.                                           |
| param.codes    | String\[] | Optional | The App codes to get information.                                         |
| param.name     |   String  | Optional | The App name to search                                                    |
| param.spaceIds | Number\[] | Optional | The Space IDs in a app belongs to                                         |
| param.limit    |   Number  | Optional | The number of apps to get (default: 100)                                  |
| param.offset   |   Number  | Optional | The offset of the number of apps to get                                   |
| param.isGuest  |  Boolean  | Optional | The default is false, to be true if the app is belonged to a guest space. |

#### Response

    Promise Object

#### Example

```js
kintoneUtility.rest.getApp({
    ids: [123, 456],
    isGuest: false
}).then(function(response) {
    console.log(response);
}).catch(function(error) {
    console.log(error);
});
```

### <a name="getAllApps"> kintoneUtility.rest.getAllApps(param)

-   Get all the apps information by one request.

#### Parameter

| Name          | Data type | Required | Description                                                               |
| :------------ | :-------: | :------: | :------------------------------------------------------------------------ |
| param         |   Object  | Optional |                                                                           |
| param.isGuest |  Boolean  | Optional | The default is false, to be true if the app is belonged to a guest space. |

#### Response

    Promise Object

#### Example

```js
kintoneUtility.rest.getAllApp().then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

### <a name="getFormFields"> kintoneUtility.rest.getFormFields(param)

-   Get the list of fields and field settings of an App.

#### Parameter

| Name            | Data type | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :-------------- | :-------: | :------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| param           |   Object  |    Yes   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| param.app       |   Number  |    Yes   | The app ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| param.lang      |   String  | Optional | The localized language to retrieve the data in:<br><br>default: retrieves the default names<br>en: retrieves the localized English names<br>zh: retrieves the localized Chinese names<br>ja: retrieves the localized Japanese names<br>user: retrieves the localized names, in the same language as the language setting\_ set on the user used for the authentication.<br><br>If ignored, the default names will be retrieved.<br><br>\_If the user language setting is set to "Use Web browser settings", the settings set in the Accept-Language header will be used. If there is no Accept-Language header, the language set in the "Localization" settings in the System Administrator's menu will be used. |
| param.isPreview |  Boolean  | Optional | The default is false, to be true if you want to get pre-live setting.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| param.isGuest   |  Boolean  | Optional | The default is false, to be true if the app is belonged to a guest space.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

#### Response

    Promise Object

#### Example

```js
kintoneUtility.rest.getFormFields({
  app: 542,
  lang: 'default',
  isPreview: false,
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

### <a name="getFormLayout"> kintoneUtility.rest.getFormLayout(param)

-   Get the field layout info of a form in an App.

#### Parameter

| Name            | Data type | Required | Description                                                               |
| :-------------- | :-------: | :------: | :------------------------------------------------------------------------ |
| param           |   Object  |    Yes   |                                                                           |
| param.app       |   Number  |    Yes   | The app ID.                                                               |
| param.isPreview |  Boolean  | Optional | The default is false, to be true if you want to get pre-live setting.     |
| param.isGuest   |  Boolean  | Optional | The default is false, to be true if the app is belonged to a guest space. |

#### Response

    Promise Object

#### Example

```js
kintoneUtility.rest.getFormLayout({
  app: 542,
  isPreview: false,
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

### <a name="postDeployAppSettings"> kintoneUtility.rest.postDeployAppSettings(param)

-   Deploy the apps to the production environments.

#### Parameter

| Name                   | Data type | Required | Description                                                                                                                                                                                         |
| :--------------------- | :-------: | :------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| param                  |   Object  |    Yes   |                                                                                                                                                                                                     |
| param.apps             |   Object  |    Yes   | The array of the app information.                                                                                                                                                                   |
| param.apps\[].app      |   Number  |    Yes   | The app ID.                                                                                                                                                                                         |
| param.apps\[].revision |   Number  | Optional | The expected revision number. If the value does not match, an error will occur and the record will not be updated. If the value is not specified or is -1, the revision number will not be checked. |
| param.revert           |  Boolean  | Optional | **Default:** `false`. Set `true` if you want to revert the deploy when some error occur during it.                                                                                                  |
| param.isPreview        |  Boolean  | Optional | **Default:** `false`. Set `true` if you want to get pre-live setting.                                                                                                                               |
| param.isGuest          |  Boolean  | Optional | **Default:** `false`. Set `true` if the app belongs to a guest space.                                                                                                                               |

#### Response

    Promise Object

#### Example

```js
kintoneUtility.rest.postDeployAppSettings({
  apps: [
    { app: 542 },
  ],
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

### <a name="getAppDeployStatus"> kintoneUtility.rest.getAppDeployStatus(param)

-   Get the status of the deployments of the apps.

#### Parameter

| Name          | Data type | Required | Description                                                           |
| :------------ | :-------: | :------: | :-------------------------------------------------------------------- |
| param         |   Object  |    Yes   |                                                                       |
| param.apps    | Number\[] |    Yes   | The array of the ids of the apps.                                     |
| param.isGuest |  Boolean  | Optional | **Default:** `false`. Set `true` if the app belongs to a guest space. |

#### Response

    Promise Object

#### Example

```js
kintoneUtility.rest.getAppDeployStatus({
  apps: [ 542 ],
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

### <a name="getCustomization"> kintoneUtility.rest.getCustomization(param)

-   Gets the JavaScript and CSS Customization settings of an App.

#### Parameter

| Name            | Data type | Required | Description                                                           |
| :-------------- | :-------: | :------: | :-------------------------------------------------------------------- |
| param           |   Object  |    Yes   |                                                                       |
| param.app       |   Number  |    Yes   | The app ID.                                                           |
| param.isPreview |  Boolean  | Optional | **Default:** `false`. Set `true` if you want to get pre-live setting. |
| param.isGuest   |  Boolean  | Optional | **Default:** `false`. Set `true` if the app belongs to a guest space. |

#### Response

    Promise Object

#### Example

```js
kintoneUtility.rest.getCustomization({
  app: 542,
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

### <a name="updateCustomization"> kintoneUtility.rest.updateCustomization(param)

-   Updates the JavaScript and CSS Customization settings of an App.

#### Parameter

| Name                              | Data type | Required | Description                                                                                                                                                                                         |
| :-------------------------------- | :-------: | :------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| param                             |   Object  |    Yes   |                                                                                                                                                                                                     |
| param.app                         |   Number  |    Yes   | The app ID.                                                                                                                                                                                         |
| param.scope                       |   String  | Optional | The target to apply this setting: `ALL`, `ADMIN`, or `NONE`.                                                                                                                                        |
| param.desktop                     |   Object  | Optional | Customize files for the desktop app.                                                                                                                                                                |
| param.desktop.js                  | Object\[] | Optional | JavaScript files information.                                                                                                                                                                       |
| param.desktop.js\[].type          |   String  |    Yes   | The type of the file: `URL` or `FILE`.                                                                                                                                                              |
| param.desktop.js\[].url           |   String  | Optional | The URL of the file. Required when `URL` is specified as the type.                                                                                                                                  |
| param.desktop.js\[].file          |   Object  | Optional | The information of the uploaded file.  Required when `FILE` is specified as the type.                                                                                                               |
| param.desktop.js\[].file.fileKey  |   String  |    Yes   | The file key of the uploaded file.                                                                                                                                                                  |
| param.desktop.css                 | Object\[] | Optional | CSS files information.                                                                                                                                                                              |
| param.desktop.css\[].type         |   String  |    Yes   | The type of the file: `URL` or `FILE`.                                                                                                                                                              |
| param.desktop.css\[].url          |   String  | Optional | The URL of the file. Required when `URL` is specified as the type.                                                                                                                                  |
| param.desktop.css\[].file         |   Object  | Optional | The information of the uploaded file.  Required when `FILE` is specified as the type.                                                                                                               |
| param.desktop.css\[].file.fileKey |   String  |    Yes   | The file key of the uploaded file.                                                                                                                                                                  |
| param.mobile                      |   Object  | Optional | Customize files for the mobile app.                                                                                                                                                                 |
| param.mobile.js                   | Object\[] | Optional |                                                                                                                                                                                                     |
| param.mobile.js\[].type           |   String  |    Yes   | The type of the file: `URL` or `FILE`.                                                                                                                                                              |
| param.mobile.js\[].url            |   String  | Optional | The URL of the file. Required when `URL` is specified as the type.                                                                                                                                  |
| param.mobile.js\[].file           |   Object  | Optional | The information of the uploaded file.  Required when `FILE` is specified as the type.                                                                                                               |
| param.mobile.js\[].file.fileKey   |   String  |    Yes   | The file key of the uploaded file.                                                                                                                                                                  |
| param.revision                    |   Number  | Optional | The expected revision number. If the value does not match, an error will occur and the record will not be updated. If the value is not specified or is -1, the revision number will not be checked. |
| param.isGuest                     |  Boolean  | Optional | **Default:** `false`. Set `true` if the app belongs to a guest space.                                                                                                                               |

#### Response

    Promise Object

#### Example

```js
kintoneUtility.rest.updateCustomization({
  app: 542,
  desktop: {
    js: [
      {
        type: 'URL',
        url: 'https://kintone.github.io/kintoneUtility/kintoneUtility.min.js',
      },
    ],
    css: [
      {
        type: 'FILE',
        file: { fileKey: 'xxxxxxxxxxxxxxxx' },
      }
    ],
  },
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

## Authentication

### <a name="setUserAuth"> kintoneUtility.rest.setUserAuth(loginName, password)

-   Specify login name and password when execute API except for user logged in to kintone.

#### Parameter

| Name      | Data type | Required | Description                             |
| :-------- | :-------: | :------: | :-------------------------------------- |
| loginName |   String  |    Yes   | The login name for user authentication. |
| password  |   String  |    Yes   | The password for user authentication.   |

#### Response

None

#### Example

```js
kintoneUtility.rest.setUserAuth('loginName', 'password');
```

### <a name="setApiTokenAuth"> kintoneUtility.rest.setApiTokenAuth(apiToken)

-   Specify API token when you need to execute API by token.

#### Parameter

| Name     | Data type | Required | Description                                |
| :------- | :-------: | :------: | :----------------------------------------- |
| apiToken |   String  |    Yes   | The API Token that will be created by app. |

#### Response

None

#### Example

```js
kintoneUtility.rest.setApiTokenAuth('vZCkStSK3SD7zyHh17auyRrBJajjFrVaffit738');
```

### <a name="setDomain"> kintoneUtility.rest.setDomain(domain)

-   Specify the domain when you need.
-   In many cases it is not necessary.

#### Parameter

| Name   | Data type | Required | Description                                       |
| :----- | :-------: | :------: | :------------------------------------------------ |
| domain |   String  |    Yes   | Your kintone's domain. (e.g. 'sample.cybozu.com') |

#### Response

None

#### Example

```js
kintoneUtility.rest.setDomain('sample.cybozu.com');
```

### <a name="setBasicAuth"> kintoneUtility.rest.setBasicAuth(userName, password)

-   Specify user name and password for basic authentication when you need.
-   In many cases it is not necessary.

#### Parameter

| Name     | Data type | Required | Description                             |
| :------- | :-------: | :------: | :-------------------------------------- |
| userName |   String  |    Yes   | The user name for basic authentication. |
| password |   String  |    Yes   | The password for basic authentication.  |

#### Response

None

#### Example

```js
kintoneUtility.rest.setBasicAuth('userName', 'password');
```

### <a name="setGuestSpaceId"> kintoneUtility.rest.setGuestSpaceId(guestSpaceId)

-   Can specify guest space ID.
-   isGuest parameter is not necessary when you use "kintoneUtility.rest.setGuestSpaceId".

#### Parameter

| Name         | Data type | Required | Description                                          |
| :----------- | :-------: | :------: | :--------------------------------------------------- |
| guestSpaceId |   Number  |    Yes   | The guest space ID to which the application belongs. |

#### Response

None

#### Example

```js
kintoneUtility.rest.setGuestSpaceId('12');
```

### <a name="clearUserAuth"> kintoneUtility.rest.clearUserAuth()

-   Clear the info that you set by "kintoneUtility.rest.setUserAuth".

#### Parameter

None

#### Response

None

#### Example

```js
kintoneUtility.rest.clearUserAuth();
```

### <a name="clearApiTokenAuth"> kintoneUtility.rest.clearApiTokenAuth()

-   Clear the info that you set by "kintoneUtility.rest.setApiTokenAuth".

#### Parameter

None

#### Response

None

#### Example

```js
kintoneUtility.rest.clearApiTokenAuth();
```

### <a name="clearDomain"> kintoneUtility.rest.clearDomain()

-   Clear the info that you set by "kintoneUtility.rest.setDomain".

#### Parameter

None

#### Response

None

#### Example

```js
kintoneUtility.rest.clearDomain();
```

### <a name="clearBasicAuth"> kintoneUtility.rest.clearBasicAuth()

-   Clear the info that you set by "kintoneUtility.rest.setBasicAuth".

#### Parameter

None

#### Response

None

#### Example

```js
kintoneUtility.rest.clearBasicAuth();
```

### <a name="clearGuestSpaceId"> kintoneUtility.rest.clearGuestSpaceId()

-   Clear the info that you set by "kintoneUtility.rest.setGuestSpaceId".

#### Parameter

None

#### Response

None

#### Example

```js
kintoneUtility.rest.clearGuestSpaceId();
```

## Cursor

### <a name="postCursor"> kintoneUtility.rest.postCursor(params)

Creates a database cursor to fetch records to which the query matches.

#### Parameter

| Name          |   Data type   | Required | Description                                                                                                                                                                                                                                                                                             |
| :------------ | :-----------: | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| param         |     Object    |    Yes   |                                                                                                                                                                                                                                                                                                         |
| param.app     |     Number    |    Yes   | The App ID to fetch records.                                                                                                                                                                                                                                                                            |
| param.query   |     String    | Optional | The query string to specify the condition of the records to fetch. If not specified, all accessible records will be returned.<br>\[The detail of the query](https&#x3A;//developer.kintone.io/hc/en-us/articles/213149287/)<br>You cannot include **limit** and **offset** in the query on this method. |
| param.fields  | Array<String> | Optional | The field codes that you want to be included in the record of the response. If not specified, all accessible fields will be returned.                                                                                                                                                                   |
| param.isGuest |    Boolean    | Optional | Set to `true` if the app belongs to a guest space. (Default: `false`)                                                                                                                                                                                                                                   |

#### Response

    Promise<{id: String , totalCount: String}>

-   `id`: The cursor id corresponding this request.
-   `totalCount`: The string representation of the number of records matched to the query. You can fetch this number of records from the cursor. (Note that the type is `String` not `Number` i.e. `"12345"` not `12345`)

#### Example

```js
const { id, totalCount } = await kintoneUtility.rest.postCursor({
  id: 1234,
  query: 'count >= 1000',
  fields: ['name', 'quality', 'count'],
});

console.log(`cursor id: ${id}`);
console.log(`totalCount: ${totalCount}`);
```

### <a name="getCursor"> kintoneUtility.rest.getCursor(params)

Get records using the cursor created by `postCursor()`.

#### Parameter

| Name          | Data type | Required | Description                                                           |
| :------------ | :-------: | :------: | :-------------------------------------------------------------------- |
| param         |   Object  |    Yes   |                                                                       |
| param.id      |   String  |    Yes   | The cursor ID to fetch records.                                       |
| param.isGuest |  Boolean  | Optional | Set to `true` if the app belongs to a guest space. (Default: `false`) |

#### Response

    Promise<{records: object[]}>

#### Example

```js
const { records } = kintoneUtility.rest.postCursor({
  id: 1234,
  query: 'count >= 1000',
  fields: ['name', 'quality', 'count'],
});
records.foreach(console.log);
```

### <a name="deleteCursor"> kintoneUtility.rest.deleteCursor(params)

Delete the cursor created by `postCursor()`.

Note that you must not delete the cursor
from which you've fetched all records.
Because that cursor is deleted automatically on the server
and trying to delete it resulted in throwing an exception.
So you must check the number of records you've already fetched
to confirm the deletion of the cursor or wait for 10 minutes
for its expiration. 
This is a specification of the Kintone platform.

#### Parameter

| Name          | Data type | Required | Description                                                           |
| :------------ | :-------: | :------: | :-------------------------------------------------------------------- |
| param         |   Object  |    Yes   |                                                                       |
| param.id      |   String  |    Yes   | The cursor ID to fetch records.                                       |
| param.isGuest |  Boolean  | Optional | Set to `true` if the app belongs to a guest space. (Default: `false`) |

#### Response

None

#### Example

```js
kintoneUtility.rest.deleteCursor({ id: 1234 });
```
