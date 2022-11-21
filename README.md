# U of Toronto Graduate Astronomy Students Association Astrotours

Use ``master`` branch to do development work, will be auto-pusheded to department server under https://www.astro.utoronto.ca/~gasa/astrotours-devel/

Use ``release`` branch to do release, will be auto-pushed to department server under under http://www.astro.utoronto.ca/astrotours/


## Local development

This website is developed using ``HUGO`` (https://gohugo.io/), please install ``HUGO`` before developing this website locally

To preiew the website locally, do ``hugo serve -D`` in the root directory of this repository

## Modifying CSS

We use scss to build the CSS stylesheet for the website. It makes it easier to for example upgrade bootstrap version while keeping our own style. To build a new one

``npm i bootstrap autoprefixer upath sass shelljs`` and ``node scripts/build-scss.js`` in the root directory of this repository

## When you have finished development

1. Check https://www.astro.utoronto.ca/~gasa/astrotours-devel/ to make sure everything is alright
1. Do ``git checkout release``
1. And then ``git merge master`` to merge the ``release`` branch with the development ``master`` branch
1. Finally you can push the ``release`` branch to github, wait a few minutes and your updated work should be on http://www.astro.utoronto.ca/astrotours/
