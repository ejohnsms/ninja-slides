import { expect } from 'chai';
import DataAccess from '../src/data-access';

describe('test data access', () => {
  const dataAccess = new DataAccess();

  it('has a makeAjax function', () => {
    expect(dataAccess).to.have.property('makeAjax');
  });
});
