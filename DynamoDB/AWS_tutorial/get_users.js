import { GetItemCommand } from '@aws-sdk/client-dynamodb';
// import { ddbClient } from './client.js';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';

// Create service client module using ES6 syntax.
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
// Set the AWS Region.
const REGION = 'us-east-1'; //e.g. "us-east-1"
// Create an Amazon DynamoDB service client object.
const ddbClient = new DynamoDBClient({ region: REGION });

const TableName = 'operational_dashboard_users';

const params = {
  TableName,
  Key: marshall({ email: 'maya@email.com' }),
};

const run = async () => {
  try {
    const res = await ddbClient.send(
      new GetItemCommand({
        TableName: 'operational_dashboard_users',
        Key: { email: { S: 'maya@email.com' } },
      })
    );

    if (!res.Item) {
      console.log('Error!');
      return;
    }

    console.log(unmarshall(res.Item));
  } catch (err) {
    console.error(err);
  }
};
run();
