# all-the-package-types

*Maintained by [jsDelivr](https://github.com/jsdelivr). Please consider [becoming a sponsor](https://github.com/sponsors/jsdelivr) to support us.*

A list of all the `@types` packages on npm with metadata. Updated daily.

## Installation

```sh
npm install all-the-package-types
```

## Usage

The module exports an array of package names:

```js
const types = require("all-the-package-types")

// [
//   {
//     "p": "https://github.com/11ty/eleventy-img", <= the matching library repository, if detected
//     "l": "@11ty/eleventy-img", <= the matching library name, if detected
//     "t": "11ty__eleventy-img" <= the "@types" package name
//   },
//   ...
// ]

```

## CLI Usage

You can also use it on the command line. Newline-delimited packages are piped to
STDOUT:

```sh
npm i -g all-the-package-types
all-the-package-types | grep spell
```

## Tests

```sh
npm install
npm test
```

## Dependencies

None

## Dev Dependencies

- [all-the-package-repos](https://github.com/nice-registry/all-the-package-repos): Normalized repository URLs for every package in the npm registry.
- [tap-spec](https://github.com/scottcorgan/tap-spec): Formatted TAP output like Mocha&#39;s spec reporter
- [tape](https://github.com/substack/tape): tap-producing test harness for node and browsers

## License

MIT
