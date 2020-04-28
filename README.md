## Enviroment Variables:

Add these keys as environment variable

`TOKEN_SECRET_KEY`: Use to sign jwt tokens

`DB_HOST`: Database host

`DB_USER`: Database User

`DB_PASSWORD`: Database Password

`DB_NAME`: Database name

`PORT`: Api server port(default = 5000)

## Getting started:

#### Local

No need to run migration in local as db sync is true.

    npm run watch-ts  


#### Production

##### Migration

    npm run migration:generate -- -n "<migration name>"

    npm run migration:run

##### Deployment
    npm run build-ts
##### Run
    npm start  

PS: using `pm2` for production environment

## TODO:
- [ ] Move user auth on api request to redis
- [ ] Add social login support