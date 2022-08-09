const {
  DynamoDBClient,
  BatchExecuteStatementCommand,
} = require('@aws-sdk/client-dynamodb');

require('dotenv').config();

const client = new DynamoDBClient({ region: 'ew-west-2' });

const getItem1 = async () => {
  try {
    const params = {
      TableName: 'my_first_table',
      Key: {
        id: 1,
      },
    };
    const command = new BatchExecuteStatementCommand({});
    const data = await client.send({});
    console.log(data);
  } catch (err) {
    console.warn(err);
  }
};

getItem1();
