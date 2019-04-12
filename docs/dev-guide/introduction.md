---
sidebar: auto
---

# Developer Guide

Welcome to _ICJIA Research Hub_ Developer Guide!

## Contents

[**API Reference**](api.md): Reference for _ICJIA Research Hub_ API.

[**Contributing Guidelines**](contributing.md): Guidelines for contributing to _ICJIA Research Hub_ codebase and/or contents.

[**Data Schema**](schema.md): Explanation for _ICJIA Research Hub_ data schema.

[**Project Architecture**](architecture.md): Explanation for _ICJIA Research Hub_ project architecture.

## Running locally

_ICJIA Research Hub_ is an open-source project and you can run it on your workstation locally.

### Full setup

To run _ICJIA Research Hub_ locally, you need to have the following installed on your workstation:

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Docker](https://docs.docker.com/install/)

And follow these steps:

1. Enable the Docker swarm mode.

```
docker swarm init
```

2. Clone or download [this repository](https://github.com/ICJIA/research-hub-stack).

```
git clone https://github.com/ICJIA/research-hub-stack.git
```

3. Change directory.

```
cd research-hub-stack
```

4. Deploy the _ICJIA Research Hub_ app as a stack.

```
docker stack deploy
```

5. Download NPM modules and insert sample data into the app's database.

```
npm install && npm run insert
```

::: tip
See [the Using Docker section of the Project Architecture page](architecture.md#using-docker) for more on the use of Docker in this project.
:::

### Individual service

You can also run each key element of _ICJIA Research Hub_ is also a standalone app without Docker.

However, you will not be able to replicate the full _ICJIA Research Hub_ experience. In addition, some features of Research Hub UI and Research Hub Studio, especially those requiring asynchronous data fetching, will not work as expected right out of the box.

#### Research Hub UI or Research Hub Studio

1. Clone or download the source repository (UI or Studio).

```
git clone https://github.com/ICJIA/research-hub-ui.git
git clone https://github.com/ICJIA/research-hub-studio.git
```

2. Change directory.

```
cd research-hub-ui
cd research-hub-studio
```

3. Download NPM modules.

```
npm install
```

4. Generate static documentation.

```
npm run docs:build
```

5. Serve the app for development.

```
npm run serve
```

6. Build the app for production.

```
npm run build
```

#### Research Hub CMS

1. Clone or download the source repository (CMS).

```
git clone https://github.com/ICJIA/research-hub-cms.git
```

2. Change directory.

```
cd research-hub-ui
cd research-hub-studio
```

3. Install Strapi globally.

```
npm install strapi@alpha -g
```

4. Run Strapi app.

```
strapi start
```
