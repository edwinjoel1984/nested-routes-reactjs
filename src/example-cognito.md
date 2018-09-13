aws cognito-idp sign-up \
  --region us-east-1 \
  --client-id 1906idcbbv71saqcf1vrammel9 \
  --username edwinjoel@notes.co \
  --password Uni389rf_

  aws cognito-idp admin-confirm-sign-up \
  --region us-east-1 \
  --user-pool-id us-east-1_LpSyCfrdz \
  --username edwinjoel@notes.co
-----------------------------------------------
aws cognito-idp sign-up \
  --region us-east-1 \
  --client-id 1906idcbbv71saqcf1vrammel9 \
  --username edwin.ulloa@ideaware.co \
  --password Uni389rf_
  
  aws cognito-idp admin-confirm-sign-up \
  --region us-east-1 \
  --user-pool-id us-east-1_LpSyCfrdz \
  --username edwin.ulloa@ideaware.co


  STEPS BY DEPLOYING
  yarn build
  aws s3 sync build/ s3://notes-app-client-2018 --delete
  aws cloudfront create-invalidation --distribution-id EBN4SZ43ACFE3 --paths "/*"
  aws cloudfront create-invalidation --distribution-id YOUR_WWW_CF_DISTRIBUTION_ID --paths "/*"

  "predeploy": "npm run build",
    "deploy": "aws s3 sync build/ s3://notes-app-client-2018 --delete",
    "postdeploy": "aws cloudfront create-invalidation --distribution-id EBN4SZ43ACFE3 --paths '/*'",