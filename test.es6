import assert from 'assert';
import flipAll from './';

let div = (x,y,z) => x/y/z;
let flipDiv = flipAll(div);

it('fj-flipAll', () => {
  assert.equal(flipDiv(10,2,5),0.25);
});
