import { APIGatewayProxyHandler } from 'aws-lambda'

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
export const handler = async (event: APIGatewayProxyHandler) => {
  console.log(`EVENT: ${JSON.stringify(event)}`)
  return {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify('Hello from Lambda!'),
  }
}
