//import assert from 'assert';
import projetyoman from '../lib';
import { should } from 'chai';

should(); // Modifies objects prototype to include the 'should' property
describe('projetyoman', function () {
  it('should have a version number!', function () {
    projetyoman.should.have.property('VERSION');
    /*assert(typeof projetyoman.VERSION !== 'undefined', 'The Project should have a VERSION, whatever the actual version.');*/
  });
});
