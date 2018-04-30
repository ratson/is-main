# is-main

Check if current module is main module.

## Installation

```
npm install is-main --save
```

## Usage

<!-- eslint-disable strict -->

```js
import isMain from 'is-main'

if (isMain(import.meta)) {
  console.log('is main')
}
```

```js
const isMain = require('is-main')

if (isMain(module)) {
  console.log('is main')
}
```

## Note

While it is useful to put main script with the module code in the same file,
move main script into a separate file is often better,
given there is no standard way for detecting main script.

See this [Node issue](https://github.com/nodejs/node/issues/15760) for more information.

## Related

- [esmeta](https://github.com/ratson/esmeta) - Handy function to handle import.meta
