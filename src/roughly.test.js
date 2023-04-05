import { test } from 'uvu';
import * as assert from 'uvu/assert';
import roughly from '../build/index.js';

test('hour goes up after 30', () => {
  var time = roughly(new Date('2019-10-11 15:33:00'));
  assert.equal(time.hour, 'four')
  assert.equal(time.transition, 'to');
  assert.equal(time.estimate, 'twenty-five');
});

test.run();