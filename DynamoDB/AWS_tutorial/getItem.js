import {
  GetItemCommand,
  ExecuteStatementCommand,
} from '@aws-sdk/client-dynamodb';
import { ddbClient } from './client.js';
import { TableName } from './consts.js';

const season = 'Season';
const key = { [season]: { N: '12' } };

const params = {
  TableName,
  Key: {
    Season: { N: '12' },
  },
};

const executeStatementParams = { Statement: `SELECT * FROM ${TableName}` };

const Statement = new ExecuteStatementCommand(executeStatementParams);

const run = async () => {
  try {
    // const data = await ddbClient.send(new GetItemCommand(params));
    const data = await ddbClient.send(Statement);
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
run();
