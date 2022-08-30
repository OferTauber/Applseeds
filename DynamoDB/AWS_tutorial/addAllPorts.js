// Import required AWS SDK clients and commands for Node.js
import { PutItemCommand } from '@aws-sdk/client-dynamodb';
import { ddbClient } from './client.js';
import { portsTableName } from './consts.js';
import { portsData } from './portsData.js';

const ports = portsData.features;

const convertPortObjToDynamoDbItemFormat = (port) => {
  const { id, geometry, properties, type } = port;

  return {
    id: { S: id },
    type: { S: type || '' },
    geometry: {
      M: {
        type: { S: geometry.type || '' },
        coordinates: {
          L: [
            { N: geometry.coordinates[0] + '' },
            { N: geometry.coordinates[1] + '' },
          ],
        },
      },
    },
    properties: {
      M: {
        portname: { S: properties.portname || '' },
        country: { S: properties.country || '' },
        iso3: { S: properties.iso3 || '' },
        iso3_op: { S: properties.iso3_op || '' },
      },
    },
  };
};

// const run = async () => {
//   try {
//     const data = await ddbClient.send(new PutItemCommand(params));
//     console.log(data);
//     return data;
//   } catch (err) {
//     console.error(err);
//   }
// };

// todo------------------------

// {
//   type: 'Feature',
//   id: 'wld_trs_ports_wfp.14314',
//   geometry: {
//     type: 'Point',
//     coordinates: [20.62966191, -0.94560244],
//   },
//   geometry_name: 'shape',
//   properties: {
//     portname: 'Watsi-Genge',
//     country: 'Democratic Republic of the Congo',
//     iso3_op: 'COD',
//   },
// },

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const run = async () => {
  try {
    for (const port of ports) {
      const params = {
        TableName: portsTableName,
        Item: convertPortObjToDynamoDbItemFormat(port),
      };
      await ddbClient.send(new PutItemCommand(params));
      await sleep(50);
    }
  } catch (e) {
    console.error(e);
  }
};

run();
