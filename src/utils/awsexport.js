import env from "./environment";
const {
  REGION,
  USER_POOL_ID,
  USER_POOL_WEB_CLIENT_ID,
  IDENTITY_POOL_ID,
  POOL_ARN,
} = env;

export const awsExport = {
  Auth: {
    region: REGION,
    userPoolId: USER_POOL_ID,
    userPoolWebClientId: USER_POOL_WEB_CLIENT_ID,
    identityPoolId: IDENTITY_POOL_ID,
    poolArn: POOL_ARN,
  },
};
