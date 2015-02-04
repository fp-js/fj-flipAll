"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var flipAll = _interopRequire(require("./"));

var div = function (x, y, z) {
  return x / y / z;
};
var flipDiv = flipAll(div);

it("fj-flipAll", function () {
  assert.equal(flipDiv(10, 2, 5), 0.25);
});