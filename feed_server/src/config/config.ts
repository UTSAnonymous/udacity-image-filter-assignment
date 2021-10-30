/*
export const config = {
  "dev": {
    "username": "udagramnicdev",
    "password": "applemacbook",
    "database": "udagramnicdev",
    "host": "udagramnicdev.czddrxyarb7t.us-east-1.rds.amazonaws.com",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-nics3-dev",
    "dialect": "postgres"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
*/
export const config = {
  "dev": {
    "username": process.env.POSTGRESS_USRNAME, //"udagramnicdev",
    "password": process.env.POSTGRESS_PASSWORD, //"applemacbook",
    "database": process.env.POSTGRESS_DATABASE, //"udagramnicdev",
    "host": process.env.POSTGRESS_HOST, //"udagramnicdev.czddrxyarb7t.us-east-1.rds.amazonaws.com",
    "aws_region": process.env.AWS_REGION, //"us-east-1",
    "aws_profile": process.env.AWS_PROFILE, //"default",
    "aws_media_bucket": process.env.AWS_MEDIA, //"udagram-nics3-dev",
    "dialect": "postgres"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "sercret": "helloworld"
  }
}
