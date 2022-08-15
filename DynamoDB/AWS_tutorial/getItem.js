import { GetItemCommand } from '@aws-sdk/client-dynamodb';
import { ddbClient } from './client.js';
import { TableName } from './consts.js';

const params = {
  TableName,
  Key: {
    Season: { N: '4' },
  },
  ProjectionExpression: 'Season',
};

const run = async () => {
  try {
    const data = await ddbClient.send(new GetItemCommand(params));
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
run();
