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
