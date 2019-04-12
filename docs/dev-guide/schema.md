---
sidebar: auto
---

# Data Schema

_ICJIA Research Hub_ has the following four content types:

- [Apps](#apps)
- [Articles](#articles)
- [Authors](#authors)
- [Datasets](#datasets)

Each of these content types have common fields as well as content-specific fields.

::: warning NOTE
The "strapi type" in the fields tables below refers to "attribute types" offered by Strapi. See the full list of [here](https://strapi.io/documentation/3.x.x/guides/models.html#define-the-attributes). Also see [here](https://strapi.io/documentation/3.x.x/guides/models.html#relations) for more on the "relations" type and [here](https://strapi.io/documentation/3.x.x/guides/upload.html#usage) for more on uploaded files ("files" type in tables below).
:::

## Apps

### Apps fields

|    field     | strapi type | definition                         | values                                                                |
| :----------: | :---------: | ---------------------------------- | --------------------------------------------------------------------- |
|    title     |   string    | Title of the item                  | e.g. "This is an app"                                                 |
|    status    |   string    | Status in the publication process  | "created" \| "submitted" \| "published"                               |
|     slug     |   string    | Slug for the item URL              | e.g. "this-is-an-app"                                                 |
|     date     |    date     | Date created or updated            | e.g. "2019-01-01"                                                     |
| cateogories  |    json     | Relevant categories                | "corrections" \| "courts" \| "crimes" \| "law enforcement" \| "other" |
|     tags     |    json     | Relevant tags                      | -                                                                     |
|    image     |   string    | Image in Base64                    | -                                                                     |
| contributors |    json     | Contributors' title and URL if any | -                                                                     |
| description  |   string    | A short description of the item    | -                                                                     |
|     url      |   string    | URL for the item                   | -                                                                     |
|   articles   |  relations  | Related Article items if any       | -                                                                     |
|   datasets   |  relations  | Related Dataset items if any       | -                                                                     |

### Apps in JSON

```json
{
  "title": "",
  "status": "",
  "slug": "",
  "date": "",
  "categories": [""],
  "tags": [""],
  "image": "",
  "contributors": [
    {
      "title": "",
      "url": ""
    }
  ],
  "description": "",
  "url": "",
  "articles": [
    {
      "...": "..."
    }
  ],
  "datasets": [
    {
      "...": "..."
    }
  ]
}
```

## Articles

### Articles fields

|    field    | strapi type | definition                        | values                                                                |
| :---------: | :---------: | --------------------------------- | --------------------------------------------------------------------- |
|    title    |   string    | Title of Article item             | e.g. "This is an article"                                             |
|   status    |   string    | Status in the publication process | "created" \| "submitted" \| "published"                               |
|    slug     |   string    | Slug for Article item URL         | e.g. "this-is-an-article"                                             |
|    date     |    date     | Date created or updated           | e.g. "2019-01-01"                                                     |
| cateogories |    json     | Relevant categories               | "corrections" \| "courts" \| "crimes" \| "law enforcement" \| "other" |
|    tags     |    json     | Relevant tags                     | -                                                                     |
|   splash    |   string    | Splash image in Base64            | -                                                                     |
|   images    |    json     | Article figures in Base64         | -                                                                     |
|   summary   |   string    | Article abstract                  | -                                                                     |
|  markdown   |    text     | Article body in markdown          | -                                                                     |
|  reportpdf  |    files    | Article in PDF if any             | -                                                                     |
|  slidespdf  |    files    | Article slides in PDF if any      | -                                                                     |
|    apps     |  relations  | Related App items if any          | -                                                                     |
|   authors   |  relations  | Related Author items              | -                                                                     |
|  datasets   |  relations  | Related Dataset items if any      | -                                                                     |

### Articles in JSON

```json
{
  "title": "",
  "status": "",
  "slug": "",
  "date": "",
  "type": [""],
  "categories": [""],
  "tags": [""],
  "splash": "",
  "images": [
    {
      "title": "",
      "src": ""
    }
  ],
  "summary": "",
  "markdown": "",
  "reportpdf": {
    "...": "..."
  },
  "slidespdf": {
    "...": "..."
  },
  "apps": [
    {
      "...": "..."
    }
  ],
  "authors": [
    {
      "...": "..."
    }
  ],
  "datasets": [
    {
      "...": "..."
    }
  ]
}
```

## Authors

### Authors fields

|    field    | strapi type | definition               |
| :---------: | :---------: | ------------------------ |
|    title    |   string    | Title of Author item     |
|    slug     |   string    | Slug for Author item URL |
| description |   string    | Short description        |
|  articles   |  relations  | Related Article items    |

### Authors in JSON

```json
{
  "title": "",
  "slug": "",
  "description": "",
  "articles": [
    {
      "...": "..."
    }
  ]
}
```

## Datasets

### Datasets fields

|    field     | strapi type | definition                        | values                                                                |
| :----------: | :---------: | --------------------------------- | --------------------------------------------------------------------- |
|    title     |   string    | Title of Dataset item             | e.g. "This is a dataset"                                              |
|    status    |   string    | Status in the publication process | "created" \| "submitted" \| "published"                               |
|     slug     |   string    | Slug for Dataset item URL         | e.g. "this-is-a-dataset"                                              |
|     date     |    date     | Date created or updated           | e.g. "2019-01-01"                                                     |
| cateogories  |    json     | Relevant categories               | "corrections" \| "courts" \| "crimes" \| "law enforcement" \| "other" |
|     tags     |    json     | Relevant tags                     | -                                                                     |
|   sources    |    json     | Dataset sources                   | -                                                                     |
|     unit     |   string    | Unit of observation               | "state" \| "county" \| "individual" \| "other"                        |
|   agegroup   |   string    | Age group                         | "adult" \| "all" \| "juvenile"                                        |
|  timeperiod  |    json     | Time period                       | e.g. { "yeartype": "calendar", "yearmin": "2009", "yearmax": "2019" } |
| description  |   string    | Short description of Dataset item | -                                                                     |
|    notes     |    json     | Caveats, warnings, etc.           | -                                                                     |
|  variables   |    json     | Variables information             | -                                                                     |
|   datacsv    |    json     | Data in CSV                       | -                                                                     |
| datafilename |    json     | Filename when downloaded          | -                                                                     |
|   datafile   |    file     | Data in non-CSV format if needed  | -                                                                     |
|     apps     |  relations  | Related App items if any          | -                                                                     |
|   authors    |  relations  | Related Dataset items if any      | -                                                                     |

### Datasets in JSON

```json
{
  "title": "",
  "status": "",
  "slug": "",
  "date": "",
  "categories": [""],
  "tags": [""],
  "sources": [
    {
      "title": "",
      "url": ""
    }
  ],
  "unit": "",
  "agegroup": "",
  "timeperiod": {
    "yeartype": "",
    "yearmin": "",
    "yearmax": ""
  },
  "description": "",
  "notes": [""],
  "variables": [
    {
      "title": "",
      "type": "",
      "definition": "",
      "values": ""
    }
  ],
  "datacsv": "",
  "datafilename": "",
  "datafile": [
    {
      "...": "..."
    }
  ],
  "apps": [
    {
      "...": "..."
    }
  ],
  "articles": [
    {
      "...": "..."
    }
  ]
}
```
