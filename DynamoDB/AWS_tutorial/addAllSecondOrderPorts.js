// Import required AWS SDK clients and commands for Node.js
import { BatchWriteItemCommand } from '@aws-sdk/client-dynamodb';
import { ddbClient } from './client.js';
import { secondOrderPortsTableName } from './consts.js';
import { marshall } from '@aws-sdk/util-dynamodb';
import secondOrderPorts from './second_order_ports.js';

const ports = [...secondOrderPorts];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const run = async () => {
  const chanksOf25Ports = [];
  while (ports.length > 1) {
    chanksOf25Ports.push(ports.splice(0, 25));
  }

  try {
    for (const chank of chanksOf25Ports) {
      const params = {
        RequestItems: {},
      };
      params.RequestItems[secondOrderPortsTableName] = [];

      for (const port of chank) {
        const item = {
          PutRequest: {
            Item: marshall(port),
          },
        };

        params.RequestItems[secondOrderPortsTableName].push(item);
      }

      await ddbClient.send(new BatchWriteItemCommand(params));
      // await ddbClient.send(new BatchWriteItemCommand(params));
      await sleep(50);
    }
  } catch (e) {
    console.error(e);
  }
};

run();
