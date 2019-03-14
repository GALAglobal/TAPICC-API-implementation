[![Build Status](https://travis-ci.org/GALAglobal/TAPICC-API-implementation.svg?branch=master)](https://travis-ci.org/GALAglobal/TAPICC-API-implementation) [![Waffle.io - Columns and their card count](https://badge.waffle.io/GALAglobal/TAPICC-API-implementation.svg?columns=all)](https://waffle.io/GALAglobal/TAPICC-API-implementation)



## Note
### !!! This implementation is out of sync with current version of swagger file !!!
### !!! Only swagger file is being updated and not the TAPICC server implementation !!!
### !!! Please consider the swagger file as a single source of truth !!!

## Roadmap
you can see issues/bugs/user stories prioritized in waffle.io [kanban board](https://waffle.io/GALAglobal/TAPICC-API-implementation)

## Installation
download this repository

```git clone https://github.com/GALAglobal/TAPICC-API-implementation.git```

navigate into it

```cd TAPICC-API-implementation```

install dependencies

```yarn install```

## Running
```yarn start```


## Seeing the Swagger UI interactive documentation
When you are running the server, you can navigate to http://localhost:1337/docs


# Authentication and account management
Every TAPICC implementation is free to implement authentication and account management differently.
As soon as you are using Authorization Bearer strategy, it will be valid with the swagger definition.

Your API requests must contain this header ```Authorization: Bearer {api_key}```

An alternative is to use the api_key in URL query param `?api_key={api_key}`
(this is useful, when you want to try the API in the browser)

## Accounts
Here is the data model for an Account

https://github.com/GALAglobal/TAPICC-API-implementation/blob/master/api/models/Account.js

### Default localhost system Account
In this implementation there is a default localhost system account in the Account collection:
```json
{
    "hostname": "localhost",
    "api_key": "111"
}
```
With this localhost account you can access all API endpoints with no restrictions.

### Working with Accounts API endpoints
```GET /accounts```
displays all accounts with hostnames and api_keys.

example:
```curl -X GET "http://localhost:1337/accounts" -H "accept: application/json" -H "Authorization: Bearer 111"```

----
```POST /accounts```
creates a new account

example:
```curl -X POST "http://localhost:1337/accounts" -H "accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer 111" -d "{ \"hostname\": \"symfonie.com\", \"organisation\": \"Moravia\"}"```

if you omit ```api_key``` in the request body, it will be randomly generated automatically.

----
```PUT /accounts/{accountId}```
updates an existing account by id

example:
```curl -X POST "http://localhost:1337/accounts/1" -H "accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer 111" -d "{ \"api_key\": \"MySecretPassword123\"}"```

----
```DELETE /accounts/{accountId}```
deletes an account by id

example:
```curl -X DELETE "http://localhost:1337/accounts/2" -H "accept: application/json" -H "Authorization: Bearer 111"```



# Dev section
## Generating swagger file (deprecated)
```yarn run generateSwagger```

creates or overwrites *swagger.json*

We don't use the generated swagger file anymore.
The swagger definition is [hosted on SwaggerHub](https://app.swaggerhub.com/apis/Alino/tapicc-api), and the changes are being synchronised to this github repo [_assets/swaggerhub_](https://github.com/GALAglobal/TAPICC-API-implementation/tree/master/assets/swaggerhub) folder.



## Testing
```yarn test```
