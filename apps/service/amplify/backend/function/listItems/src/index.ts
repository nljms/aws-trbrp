import { APIGatewayProxyEvent, Context } from 'aws-lambda'

import awsServerlessExpress from 'aws-serverless-express'
const app = require('./app')

/**
 * @type {import('http').Server}
 */
const server = awsServerlessExpress.createServer(app)

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
export const handler = (event: APIGatewayProxyEvent, context: Context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`, { context })
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise
}
