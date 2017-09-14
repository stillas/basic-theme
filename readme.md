# Stillas theme

Basic theme for [Hugo](https://gohugo.io/) framework.

---

## Stylus/CSS

### Tasks (npm scripts)

Lint:

```bash
npm run css-lint
```

Compile to CSS:

```bash
npm run css-compile
```

All (lint and compile):

```bash
npm run css
```

Watch:

```bash
npm run css-watch
```

## JavaScript

Includes: [Babel](https://babeljs.io/), [Vue.js](https://vuejs.org/) and [Browserify](https://browserify.org/).

### Tasks

Lint:

```bash
npm run js-lint
```

Compile:

```bash
ENV=[development or production] npm run js-compile
```

All (lint and compile):

```bash
ENV=[development or production] npm run js
```

Watch (default: `ENV=development`):

```bash
npm run js-watch
```

## Watch Stylus and JavaScript

```bash
npm run watch
```

## License

The MIT License ([MIT](https://github.com/stillas/theme/blob/development/license.md))

Copyright (c) 2017 marcker
