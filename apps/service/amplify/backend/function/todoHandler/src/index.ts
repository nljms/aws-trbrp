/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

import { APIGatewayProxyHandler } from 'aws-lambda'
import { DynamoDB } from 'aws-sdk'

const ddb = new DynamoDB({
  region: 'ap-southeast-2',
  logger: {
    log: console.log,
    warn: console.warn,
    write: console.info,
  },
})

exports.handler = async (event: APIGatewayProxyHandler) => {
  console.log(`EVENT: ${JSON.stringify(event)}`)
  const tableNames = await (await ddb.listTables().promise()).TableNames
  const todoTbl = tableNames.find((tblName) => tblName === 'todos')

  return {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify(todoTbl),
  }
}
