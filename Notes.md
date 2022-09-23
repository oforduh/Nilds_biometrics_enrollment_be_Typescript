## generate package.json file

npm init -y

## Install dev dependencies

yarn add typescript ts-node-dev @types/express @types/config pino-pretty @types/nodemailer @types/lodash @types/jsonwebtoken -D

## Init TypeScript

tsc --init

## Install Express

yarn add express@5

## Install dependencies

yarn add mongoose @typegoose/typegoose config argon2 pino dayjs nanoid nodemailer lodash jsonwebtoken dotenv zod

# Heroku Commands

## Update Heroku Cli

heroku update

## Heroku Login

heroku login -i .25

## Get API key and use instead of password.

login to heroku, go to settings and reveal your API Key
