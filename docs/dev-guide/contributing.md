---
sidebar: auto
---

# Contributing Guildelines

First of all, we appreciate your interest in contributing to _ICJIA Research Hub_! :+1::heart_eyes:

_ICJIA Research Hub_ aspires to be an open-source project that allows you as a member of the public to shape it to best reflect your interests and concerns and improve your user experience.

You see below to find the relevant information for contributing to the _ICJIA Research Hub_ project, either to its codebase or contents.

## Code of Conduct

The _ICJIA Research Hub_ project and everyone participating in it is governed by a shared Code of Conduct found [here](). By participating, you are expected to uphold this code.

## Contributing to codebase

Each GitHub repository for an individual _ICJIA Research Hub_ component contains a CONTRIBUTING.md file. Please find each CONTRIBUTING.md file by clicking the following:

- [Research Hub CMS](https://github.com/ICJIA/research-hub-cms/blob/master/CONTRIBUTING.md)
- [Research Hub Stack](https://github.com/ICJIA/research-hub-stack/blob/master/CONTRIBUTING.md)
- [Research Hub Studio](https://github.com/ICJIA/research-hub-studio/blob/master/CONTRIBUTING.md)
- [Research Hub UI](https://github.com/ICJIA/research-hub-ui/blob/master/CONTRIBUTING.md)

::: warning NOTE
See [the Project Architecture page](#architecture.md) of this document for more on each components.
:::

## Contributing contents

To serve as a "Hub" for research on criminal justice in Illinois, _ICJIA Research Hub_ accepts external contributions for Apps, Articles and Datasets. By contributing your work to _ICJIA Research Hub_, you not only help _ICJIA Research Hub_ to become a truly comprehensive library of criminal justice resesarch in Illinois but also find a broader audience for your own work.

For any content submission to be considered for publication, it must be about criminal justice in Illinois and related subjects. Also, it must include information on a set of required and optional fields to be considered. Please read below for what the relevent fields are for each content type.

Once you have your materials ready, please submit it to [email@icjia.cloud](mailto:email@icjia.cloud).

::: warning NOTE
Currently, _ICJIA Research Hub_ only accepts content submissions from select contributors. We are working on establishing an internal protocol to accept submissions from the general public.
:::

### Apps

You can submit web applications that explores and analyzes criminal justice data. An Apps submission must be self-hosted and available online to be considered by _ICJIA Research Hub_.

The required fields for an Apps submission are as follows; all fields are required unless marked otherwise:

- Title
- URL for the Apps submission
- Information on each contributor
  - Name of person or institution
  - (optional) URL
  - (optional) Short description
- Description
- Suggested category(ies): `corrections`, `courts`, `crimes`, `law enforcement`, or `other`
- (optional) Suggested tags (max 5)
- (optional) Suggested citation
- (optional) Funding acknowledgement

### Articles

You can submit research articles and publications on criminal justice in the State of Illinois. An Articles submission must be a summary of key findings and implications of a published research work to be considered by _ICJIA Research Hub_. Also, the body of the Articles submission must be a separate file in Markdown format.

::: warning NOTE
If you are making an Articles submission, you are highly encouraged to also make a Dataset submission with data used for analysis in the Articles submission.
:::

The required fields for an Articles submission are as follows; all fields are required unless marked otherwise:

- Title
- URL for the Articles submission
- Information on each contributor
  - Name of person or institution
  - (optional) URL
  - (optional) Short description
- Abstract (max 250 words)
- Article body file in the Markdown format
  - Minimum 4 paragraphs, maximum 10 paragraphs
  - Maximum 2 figures (PNG or JPG)
- Suggested category(ies): `corrections`, `courts`, `crimes`, `law enforcement`, or `other`
- (optional) Suggested tags (max 5)
- (optional) Suggested citation
- (optional) Funding information

#### Articles markdown format

_ICJIA Research Hub_ uses markdown for Articles body.

Section titles use level-2 heading (`##`) and subsection titles use level-3 heading (`###`). Also note the custom templates for including figures and tables as shown in the following:

```md
## This is a section title

An article must start with a section unlesss it has no section at all.

If the first section title is missing, it will be "Introduction" by default.[^1]

[^1]: This is a footnote.

### This is a subsection title

Use the following template for including a figure:

<div class="article-figure">

#### Figure 1

#### Title of this figure

![alt text][filename]

###### Additional note (data source, etc.)

</div>

Use the following template for including a table:

<div class="article-table">

#### Table 1

#### Title of this table

| column | names | here   |
| ------ | ----- | ------ |
| put    | value | here   |
| for    | each  | column |

###### Additional note (data source, etc.)

</div>
```

::: tip
For more on basic markdown syntax, please refer to [this article](https://www.markdownguide.org/basic-syntax) or [this cheat sheet](https://www.markdownguide.org/cheat-sheet/) by _Markdown Guide_.
:::

### Datasets

You can submit datasets that provide information on criminal justice and related areas. A Datasets submission must be a single file in the comma separated value (CSV) format to be considered by _ICJIA Research Hub_.

The required fields for an Datasets submission are as follows; all fields are required unless marked otherwise:

- Title
- Information on each contributor
  - Name of person or institution
  - (optional) URL
  - (optional) Short description
- Description
- Data file in the CSV format
  - Maximum size ??? MB
  - If larger, you may provide a link for download
- Suggested category(ies): `corrections`, `courts`, `crimes`, `law enforcement`, or `other`
- (optional) Suggested tags (max 5)
- (optional) Time period
  - Min year (yyyy)
  - Max year (yyyy)
  - Year type: `calendar`, `fiscal-federal`, or `fiscal-Illinois`
- (optional) Age group: `all`, `adult`, `juvenile`
- (optional) Unit of analysis: `national`, `state`, `county`, `municipal`, or `other`
- (optional) Notes
- (optional) Suggested citation
- (optional) Funding acknowledgement
- Variables information
  - Name
  - Type: `int` (integer), `str` (string/text), `float` (real number), or `bool` (true/false)
  - Definition
  - (optional) possible values

#### Variables information example

| name        | type  | definition              | values                  |
| ----------- | ----- | ----------------------- | ----------------------- |
| year        | int   | Data year               | Between 2000 and 2019   |
| county      | str   | County name             | Illinois county         |
| cook        | bool  | Is Cook county?         | 1 for true, 0 for false |
| arrest      | int   | Arrest count            | Non-negative            |
| arrest_rate | float | Arrest rate per 100,000 | Non-negative            |

## License

_ICJIA Research Hub_ includes a mix of the following:

All contributions to this project
