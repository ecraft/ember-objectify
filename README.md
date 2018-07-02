ember-objectify
==============================================================================

An Ember addon to recursively turn POJOs and Arrays into Ember Objects and Ember Arrays.

Installation
------------------------------------------------------------------------------

```
ember install ember-objectify
```


Usage
------------------------------------------------------------------------------

```js
import { objectify, deepObjectify } from 'ember-objectify';
```

```js
const pojo = {
  foo: 'bar',
  baz: {
    zot: [1, 2, 3]
  }
};

const result = deepObjectify(pojo);
```


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-objectify`
* `yarn install`

### Linting

* `yarn lint:js`
* `yarn lint:js --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions


For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
