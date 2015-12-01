import assert from 'assert';
import projetyoman from '../lib';

describe('projetyoman', function () {
  it('should have a version number!', function () {
    assert(typeof projetyoman.VERSION !== 'undefined', 'The Project should have a VERSION, whatever the actual version.');
  });
});
