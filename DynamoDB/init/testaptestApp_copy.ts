const {
  DynamoDBClient,
  BatchExecuteStatementCommand,
  GetItemCommand,
  CreateTableCommand,
} = require('@aws-sdk/client-dynamodb');

// require('dotenv').config();

const client = new DynamoDBClient({
  region: 'eu-west-2',
});

const _getItem = async () => {
  try {
    const params = {
      TableName: 'my_first_table',
      Key: {
        id: 1,
      },
    };
    const command = new GetItemCommand(params);
    const data = await client.send(command);
    console.log(data);
  } catch (err) {
    console.warn(err);
  }
};
const newTable = async () => {
  try {
    const tableParams = {
      TableName: 'my_new_table',
    };
    const params = {
      AttributeDefinitions: [
        {
          AttributeName: 'CUSTOMER_ID',
          AttributeType: 'N',
        },
        {
          AttributeName: 'CUSTOMER_NAME',
          AttributeType: 'S',
        },
      ],
      KeySchema: [
        {
          AttributeName: 'CUSTOMER_ID',
          KeyType: 'HASH',
        },
        {
          AttributeName: 'CUSTOMER_NAME',
          KeyType: 'RANGE',
        },
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
      TableName: 'my_new_table',
      StreamSpecification: {
        StreamEnabled: false,
      },
    };
    const command = new CreateTableCommand(params);
    const data = await client.send(command);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

// _getItem();
newTable();
