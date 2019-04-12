---
sidebar: auto
---

# Project Architecture

_ICJIA Research Hub_ consists of many components. Each component is built on many popular open-source projects and deployed as a containerized service. _ICJIA Research Hub_ relies on Docker Swarm to orchestrate the services.

Key _ICJIA Research Hub_ services include:

- Research Hub UI ([GitHub](https://github.com/ICJIA/research-hub-ui))
- Research Hub CMS ([GitHub](https://github.com/ICJIA/research-hub-cms))
- Research Hub Studio ([GitHub](https://github.com/ICJIA/research-hub-studio))

Read [the Services section](#services) below for more on each service.

And there is a Research Hub Stack [GitHub repository](https://github.com/ICJIA/research-hub-stack) for a `docker-compose.yml` file for the _ICJIA Research Hub_ application.

Read [the Using Docker section](#using-docker) below for more on the use of Docker in _ICJIA Research Hub_.

## Environments

_ICJIA Research Hub_ is developed on ...

## Services

### Research Hub UI

Research Hub UI ([GitHub](https://github.com/ICJIA/research-hub-ui)) is a front-end web application to serve as a graphical user interface (GUI) to _ICJIA Research Hub_.

Research Hub UI is powered by the following key technologies:

- [Vue.js](https://vuejs.org/) for the JavaScript web application framework;
- [Nuxt.js](https://nuxtjs.org/) for a robust server-side rendering ("universal") setup of a Vue.js application and search engine optimizaation (SEO);
- [Vuetify.js](https://vuetifyjs.com/) for Material Design UI components; and
- [VuePress](https://vuepress.vuejs.org/) for the current documentation.

### Research Hub CMS

Research Hub CMS ([GitHub](https://github.com/ICJIA/research-hub-cms)) is a Node application to serve as a headless content management system (CMS) for _ICJIA Research Hub_ that makes its contents accessible via API.

Research Hub CMS is powered by [Strapi](https://strapi.io/).

::: tip
Read [this article](https://blog.strapi.io/10-reasons-headless-cms/) by the Strapi blog to learn more about headless CMS and its benefits.
:::

### Research Hub Studio

Research Hub Studio ([GitHub](https://github.com/ICJIA/research-hub-studio)) is a web application to streamline ICJIA's internal content publication process. While not a public-facing part of _ICJIA Research Hub_, Research Hub Studio is an integral element of the project that facilitate the publication and management of contents.

Research Hub Studio is powered by the following key technologies:

- [Vue.js](https://vuejs.org/) for the JavaScript web application framework;
- [Vuetify.js](https://vuetifyjs.com/) for Material Design UI components; and
- [VuePress](https://vuepress.vuejs.org/) for its documentation.

## Using Docker

_ICJIA Research Hub_ takes advantage of the modern containerization technology provided by Docker.

Each key _ICJIA Research Hub_ service is made into a Docker image and is available on [Docker Hub](https://hub.docker.com/). And the `docker-compose.yml` file, available on the Research Hub Stack [GitHub repository](https://github.com/ICJIA/research-hub-stack), defines and coordinates services as well as their dependencies that comprise the _ICJIA Research Hub_ application.
