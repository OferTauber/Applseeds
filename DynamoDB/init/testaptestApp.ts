const {
  DynamoDBClient,
  BatchExecuteStatementCommand,
} = require('@aws-sdk/client-dynamodb');

require('dotenv').config();

const client = new DynamoDBClient({ region: 'ew-west-2' });

console.log(process.env.TEST_MY_MANE);
