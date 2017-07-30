# AWS Lambda & Serverless + React DEMO

## Backend and Frontend code are included in this same repo, the reason behind is that it is just a demo so you can get an idea of how to use serverless, AWS Lambda and wire them together with your Frontend

## Requirements:
1. A working AWS profile with access to AWS Lambda and API Gateway so you can deploy using [Serverless](https://serverless.com/framework/docs/)
2. Once you have an AWS profile, make sure to set it up in your serverless.yml file.
3. [Yarn](https://yarnpkg.com/lang/en/) and [Serverless](https://serverless.com/) installed globally.
4. For the frontend, [Typescript](https://www.typescriptlang.org/) service installed and running. If you use [Visual Studio Code Editor](https://code.visualstudio.com/) you can skip this part as it provides native support for TS.
5. If you plan to use the same frontend, make sure to edit the code (backend) to use some sort of database. Currently it's using a Postgres (AWS RDS).

## Structure of this repo:

* The source code for the frontend can be found under `./src`, it is 100% typescript. Feel free to delete that code and start from scratch using pure JS, or any variation you want.

* The source code for the backend can be found under `./api`, this is pure javascript/nodejs, which is one of the options in AWS Lambda. You could typescript it too but you would have to make sure to compile it before deploying.

* There are a set of very basic lambdas included in the `./api` directory that follow the RESTful aproach, the lambdas are `create.js`, `read.js`, `update.js` and `delete.js`. When creating new lambdas make sure to follow the [AWS specification](http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html) for Nodejs lambda handlers

## Example commands:

### Edit `serverless.yml` under `./api` directory and add your AWS profile next to the `profile:` key, then deploy your stack with the following command

`cd ./api; serverless deploy -v`

### Everything is already deployed, you modify the code of one of the lambdas and need to redeploy that one function? No need to deploy everything again, just run:

`serverless deploy function -f functionName`

* _The above solution works when you add a new package under your `include` directories too_


#### If you have any questions or corrections feel free to drop me an email to seba.grillo @ gmail.

