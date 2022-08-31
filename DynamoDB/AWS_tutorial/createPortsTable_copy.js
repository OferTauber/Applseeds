// Import required AWS SDK clients and commands for Node.js
import { CreateTableCommand } from '@aws-sdk/client-dynamodb';
import { ddbClient } from './client.js';
import { chankesPortsTableName } from './consts.js';

// Set the parameters
export const params = {
  AttributeDefinitions: [
    {
      AttributeName: 'chankNum',
      AttributeType: 'N',
    },
  ],
  KeySchema: [
    {
      AttributeName: 'chankNum',
      KeyType: 'HASH',
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 100,
    WriteCapacityUnits: 100,
  },
  TableName: chankesPortsTableName,
  StreamSpecification: {
    StreamEnabled: false,
  },
};

export const run = async () => {
  try {
    const data = await ddbClient.send(new CreateTableCommand(params));
    console.log('Table Created', data);
    return data;
  } catch (err) {
    console.log('Error', err);
  }
};
run();
