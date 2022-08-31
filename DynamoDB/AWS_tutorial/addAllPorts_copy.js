// Import required AWS SDK clients and commands for Node.js
import { BatchWriteItemCommand } from '@aws-sdk/client-dynamodb';
import { ddbClient } from './client.js';
import { chankesPortsTableName } from './consts.js';
import { chankes } from './chankes.js';
import { marshall } from '@aws-sdk/util-dynamodb';

const run = async () => {
  const chankRecords = [];

  for (let i = 60; i < chankes.length; i++) {
    const unit = {
      PutRequest: {
        Item: marshall(chankes[i]),
      },
    };
    chankRecords.push(unit);
  }

  // chankes.map((chank) => {
  //   return { PutRequest: { Item: marshall(chank) } };
  // });

  const params = {
    RequestItems: {
      operational_dashboard_ports_chankes: chankRecords,
    },
  };

  try {
    const res = await ddbClient.send(new BatchWriteItemCommand(params));
    console.log(res);
  } catch (e) {
    console.error('Error! \n\n', e);
  }
};

run();
