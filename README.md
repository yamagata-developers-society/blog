# YDS Homepage

Site: https://yamagata-developers-society.github.io/yds/

This is the official homepage of Yamagata Developers Society

## Requirements

- [NodeJS](https://nodejs.org/en/) (Version 9 or greater recommended, built with 9.11.1)
- [GatsbyCLI](https://www.gatsbyjs.org/docs/)

```bash
$ npm install --global gatsby-cli
```

## Setup

```bash
$ git clone https://github.com/yamagata-developers-society/yds.git
$ cd yds
$ npm install && npm start
```

## Available Commands

1. `$ npm start` or `$npm run dev` -- Alias command for `$ gatsby develop`. Builds development assets and starts local server at `http://localhost:8000/`
1. `$ npm run build` -- Builds production assets **without** development server. Use [simple-server](https://github.com/steveklabnik/simple-server) to run local server with production assets. Note: `pathPrefix: '/yds',` is automatically added to production asset paths for deployment with github pages.
1. `$ npm run clean` -- Removes public directory. Useful for clearing cache if your having problems with changes not showing up.
1. `$ npm run deploy` -- Reserved command for site administrators. Builds productoin assets and deploys to github pages `gh-pages` branch.

## Adding articles

To create a new article, add a `.md` file to `/src/content/` folder. New posts require a frontmatter section. For example:

```md
---
layout: post
title: 'Learning XYZ'
author: 'The Great Gatsby'
tags: ['npm']
image: img/cover01.jpg
date: '2018-12-01T18:00:00.000Z'
draft: false
---
```

For images, add your image to the `/src/content/img/` folder. Include a relative path to your image as follows: `img/cover01.jpg`. Gatsby will do the rest.

Create a branch using the following branch name format:

```bash
article/name_of_your_article
```

Finally, commit your changes and create a Pull request.
