// const DynamoDB = require('@aws-sdk/clients/dynamodb');
// const portsTableName = require('./consts');

import { GetItemCommand } from '@aws-sdk/client-dynamodb';
import { ddbClient } from './client.js';
import { portsTableName } from './consts.js';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';

const run = async () => {
  const params = {
    TableName: portsTableName,

    Key: marshall({ id: 'wld_trs_ports_wfp.15263' }),
  };

  try {
    const data = await ddbClient.send(new GetItemCommand(params));
    console.log(data);
    const a = unmarshall(data.Item);
    console.log(a);
  } catch (err) {
    console.error(err);
  }
};

run();
