import { GetItemCommand } from '@aws-sdk/client-dynamodb';
import { ddbClient } from './client.js';
import { TableName } from './consts.js';

const season = 'Season';
const key = `"Season": { N: '12' }`;

const params = {
  TableName,
  Key: key,
  ProjectionExpression: 'Season',
};

// const GetItemCommandParams = { Statement: `SELECT * FROM ${TableName}` };

const command = new GetItemCommand(params);

const run = async () => {
  try {
    // const data = await ddbClient.send(new GetItemCommand(params));
    const data = await ddbClient.send(command);
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
run();
