// Import required AWS SDK clients and commands for Node.js
import { PutItemCommand } from '@aws-sdk/client-dynamodb';
import { ddbClient } from './client.js';
import { portsTableName } from './consts.js';
import { portsData } from './portsData.js';

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

const params = {
  TableName: portsTableName,
  Item: convertPortObjToDynamoDbItemFormat(portsData.features[3]),
};

const run = async () => {
  try {
    const data = await ddbClient.send(new PutItemCommand(params));
    console.log(data);
    return data;
  } catch (err) {
    console.error('error!!!!!!!');
    console.error(err);
  }
};

run();

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

const extractPortData = (rawPort) => {
  const { type, id, geometry, geometry_name, properties } = rawPort;
  const { portname, country, iso3, iso3_op } = properties;
  return {
    type: { S: type },
    id: { S: id },
    geometry: { S: geometry },
    geometry_name,
    properties: { portname, country, iso3, iso3_op },
  };
};

// const run = () => {
//   const port = extractPortData(portsData.features[0]);
//   console.log(port);
// };

// run();
