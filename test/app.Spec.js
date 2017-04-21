import Slides from '../src/app';
import {expect} from 'chai'

describe('testing Slides', function() {
  const slideDeck = new Slides('ninja slides');

  beforeEach(function() {
    slideDeck.Name = "new slide deck";
  });

  it('has a new name', function() {
    expect(slideDeck.Name).to.equal('new slide deck');
  });
})
