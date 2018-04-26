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

Note the above will only work when using `esm`,
it will fail on Node v10 as `process.mainModule` is `undefined` for `.mjs`.


```js
const isMain = require('is-main')

if (isMain(module)) {
  console.log('is main')
}
```
