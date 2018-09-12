const dev= {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-upload-2018",
      ACCESS_KEY:"AKIAJH3VRGKQME7EGH3Q",
      SECRET_ACCESS_KEY:"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"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_LpSyCfrdz",
      APP_CLIENT_ID: "1906idcbbv71saqcf1vrammel9",
      IDENTITY_POOL_ID: "us-east-1:ff72d58d-e073-4790-aee2-06e7c2a5a9c5",
      ENVIRONMENT: 'DEV'
    }
  };
const prod= {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-upload-2018",
      ACCESS_KEY:"AKIAJH3VRGKQME7EGH3Q",
      SECRET_ACCESS_KEY:"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"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_LpSyCfrdz",
      APP_CLIENT_ID: "1906idcbbv71saqcf1vrammel9",
      IDENTITY_POOL_ID: "us-east-1:ff72d58d-e073-4790-aee2-06e7c2a5a9c5",
      ENVIRONMENT: 'PROD'
    }
  };

  // Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
? prod
: dev;

export default {
// Add common config values here
MAX_ATTACHMENT_SIZE: 5000000,
...config
};