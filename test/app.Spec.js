import SlideData from '../src/slideData'
import {expect} from 'chai'

describe('test getData', function() {
    const slideData = new SlideData();

  it('has a getSlidesData function', function() {
    expect(typeof slideData.getSlidesData).to.be.a('function');
  });
})
