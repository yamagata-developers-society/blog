# YDS Homepage

Site: https://yamagata-developers-society.github.io/blog/

Official homepage of Yamagata Developers Society

## Requirements

**Recommended** install [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm)

- [NodeJS](https://nodejs.org/en/) (Version 9 or greater recommended, built with 9.11.1)
- npm (Version 6.9.0 or grater recommended, build with 6.9.0)
- [GatsbyCLI](https://www.gatsbyjs.org/docs/)

```bash
$ nvm install && nvm use
$ npm install --global gatsby-cli
```

## Setup

```bash
$ git clone https://github.com/yamagata-developers-society/blog.git
$ cd blog
$ npm install && npm start
```

## Available Commands

1. **npm start**

- Alias command for `gatsby develop`. Builds development assets and starts local server at `http://localhost:8000/`

2. **npm run build**

- Builds production assets **without** development server. Use [simple-server](https://github.com/steveklabnik/simple-server) to run local server with production assets. Note: `pathPrefix: '/blog',` is automatically added to production asset paths for deployment with github pages.

3. **npm run clean**

- Removes public directory. Useful if you're having problems with changes not showing up. Use `npm run fullclean` to remove `/public` and `.cache` folders.

4. **npm run deploy**

- Reserved command for site administrators. Builds production assets and deploys to github pages via `gh-pages` branch.

## Adding articles

I. Create a branch using the following branch name format:

```bash
article_name_of_your_article
```

II. To create a new article, add an `.md` file to `/src/content/` folder. New posts require a frontmatter section. For example:

```md
---
layout: post
title: 'Learning XYZ'
author: 'The Great Gatsby'
tags: ['tutorial'] // lowercase and comma-separated
image: 'img/cover01.jpg'
date: '2018-12-01T18:00:00.000Z'
draft: false
---
```

III. For images, add your image to the `/src/content/img/` folder. Include a relative path to your image as follows: `img/cover01.jpg`. Gatsby will do the rest.

IV. If you are a new author or add a new tag, make sure you update the `src/content/author.yaml` and `src/content/tag.yaml` files, respectively.

V. Finally, commit your changes and create a **Pull Request**, and a site administrator will review your changes before deploying.

## Troubleshooting

If you are getting strange starup errors, or your changes are not showing up try the following:

```bash
$ npm run clean
$ gatsby develop
```

This will remove the public directory.

A second option is to try removing the `.cache` folder:

```bash
$ rimraf .cache
$ gatsby develop
```

In both cases, `gatsby develop` command will rebuild `/public` and `.cache` directories.
