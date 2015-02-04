# fj-filpall

[![Build Status](https://travis-ci.org/fp-js/fj-filpall.svg)](https://travis-ci.org/fp-js/fj-filpall) [![npm version](https://badge.fury.io/js/fj-filpall.svg)](http://badge.fury.io/js/fj-filpall)
> Given a function, returns a new function with all it's arguments flipped.

## Installation

`npm install fj-filpall --save`

## Usage

```js
var filpall = require('fj-filpall');

var mergeThree = (a, b, c) =>  ([]).concat(a, b, c);

mergeThree(1, 2, 3); //=> [1, 2, 3]

filpall(mergeThree)(1, 2, 3); //=> [3,2,1]
```
