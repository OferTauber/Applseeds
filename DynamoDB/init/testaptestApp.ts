// const {
//   DynamoDBClient,
//   BatchExecuteStatementCommand,
// } = require('@aws-sdk/client-dynamodb');

const AWS = require('aws-sdk');

// require('dotenv').config();

AWS.config.update({
  region: 'us-est-1',
});

const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

// const client = new DynamoDBClient({ region: 'ew-west-2' });

const getItem = async () => {
  try {
    const params = {
      TableName: 'my_first_table',
      Key: {
        id: 1,
      },
    };
    const data = await dynamodb.getItem(params);
    console.log(data);
  } catch (err) {
    console.warn(err);
  }
};

getItem();
