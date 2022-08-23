// Import required AWS SDK clients and commands for Node.js
import { PutItemCommand } from '@aws-sdk/client-dynamodb';
import { ddbClient } from './client.js';
import { TableName } from './consts.js';

// Set the parameters
export const params = {
  TableName: TableName,
  Item: {
    Season: { N: '12' },
    Episode: { N: '3' },
    text: { S: 'Hellow world2022' },
    aaa: { S: 'aaaa' },
  },
};

const run = async () => {
  try {
    const data = await ddbClient.send(new PutItemCommand(params));
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
run();
