[![Build Status](https://travis-ci.org/GALAglobal/TAPICC-API-implementation.svg?branch=master)](https://travis-ci.org/GALAglobal/TAPICC-API-implementation) [![Waffle.io - Columns and their card count](https://badge.waffle.io/GALAglobal/TAPICC-API-implementation.svg?columns=all)](https://waffle.io/GALAglobal/TAPICC-API-implementation)



# Note
this is a work in progress, some things needs to be done first so we can call this production ready.
- [ ] swagger API definition version 1.0.0
- [ ] system accounts and authentication
- [ ] automated tests written and implemented

# Roadmap
you can see issues/bugs/user stories prioritized in waffle.io [kanban board](https://waffle.io/GALAglobal/TAPICC-API-implementation)

# Installation
download this repository

```git clone https://github.com/GALAglobal/TAPICC-API-implementation.git```

navigate into it

```cd TAPICC-API-implementation```

install dependencies

```yarn install```

# Running
```yarn start```


# Seeing the swagger documentation
When you are running the server, you can navigate to http://localhost:1337/docs

# Generating swagger file (deprecated)
```yarn run generateSwagger```

creates or overwrites *swagger.json*

We don't use the generated swagger file anymore.
The swagger definition is [hosted on SwaggerHub](https://app.swaggerhub.com/apis/Alino/tapicc-api), and the changes are being synchronised to this github repo [_assets/swaggerhub_](https://github.com/GALAglobal/TAPICC-API-implementation/tree/master/assets/swaggerhub) folder.



# Testing
```yarn test```
