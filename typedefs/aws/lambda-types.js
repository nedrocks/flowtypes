/**
 * Taken from @rricard's lambda-es-example project:
 * https://github.com/rricard/lambda-es6-example/blob/14e5d89f0cc73cb45d8226f3abe85cd269805fd3/lib/lambda-types.js
 *
 * @flow
 */

 export type AWSAmazonCognitoIdentity = {
   cognito_identity_id: number | string,
   cognito_identity_pool_id: number | string
 };

 export type AWSMobileSDKClient = {
   installation_id: number | string,
   app_title: string,
   app_version_name: string,
   app_version_code: number | string,
   app_package_name: string
 };

 export type AWSMobileSDKClientEnv = {
   platform_version: number | string,
   platform: string,
   make: any,
   model: any,
   locale: string
 };


 export type AWSMobileSDKClientContext = {
   client: AWSMobileSDKClient,
   Custom: any,
   env: AWSMobileSDKClientEnv
 };

 export type AWSLambdaContext = {
   succeed: (result: any) => void,
   fail: (error: Error) => void,
   done: (error: Error, result: any) => void,
   getRemainingTimeInMillis: () => number,
   functionName: string,
   functionVersion: number | string,
   invokedFunctionArn: string,
   memoryLimitInMB: number,
   awsRequestId: number | string,
   logGroupName: string,
   logStreamName: string,
   identity: ?AWSAmazonCognitoIdentity,
   clientContext: ?AWSMobileSDKClientContext
 };
