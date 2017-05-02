import DataAccess from '../src/data-access'
import {expect} from 'chai'

describe('test data access', function() {
    const dataAccess = new DataAccess();

  it('has a makeAjax function', function() {
    expect(dataAccess).to.have.property('makeAjax');
  });
})
