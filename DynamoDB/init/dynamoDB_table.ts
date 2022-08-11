const {
  DynamoDBClient,
  BatchExecuteStatementCommand,
  GetItemCommand,
  PostItemCommand,
  CreateTableCommand,
} = require('@aws-sdk/client-dynamodb');

const TableName = 'ofer_test_table';
const region = 'us-east-1';

const client = new DynamoDBClient({
  region,
});

const newTable = async () => {
  //* it's working!!!
  try {
    const params = {
      AttributeDefinitions: [
        {
          AttributeName: 'email',
          AttributeType: 'S',
        },
        {
          AttributeName: 'password',
          AttributeType: 'S',
        },
      ],
      KeySchema: [
        {
          AttributeName: 'email',
          KeyType: 'HASH',
        },
        {
          AttributeName: 'password',
          KeyType: 'RANGE',
        },
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5,
      },
      TableName,
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

const getItem = async () => {
  try {
    const params = {
      TableName,
      Key: {
        email: { S: 'ofer@email.com' },
      },
    };
    const command = new GetItemCommand(params);
    const response = await client.send(command);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};

const newItem = async () => {
  try {
    const params = {
      TableName,
      item: {
        email: { S: 'ofer@email.com' },
        password: { S: 'Ofer123ToBeHashed' },
      },
    };
    const command = new PostItemCommand(params);
    const response = await client.send(command);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};

// _getItem();
// newTable(); //* it's working!!!
// newItem();
getItem();
