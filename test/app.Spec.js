import chai from 'chai';
import ButtonWidget from '../src/button-widget';
import '../styles/index.spec.css';

const { expect } = chai;

describe('button widget', () => {
  describe('button has properties', () => {
    const bw = new ButtonWidget();

    it('should have a hide property', () => {
      expect(bw).to.have.property('hide');
    });

    it('should have a show property', () => {
      expect(bw).to.have.property('show');
    });

    it('should have a init property', () => {
      expect(bw).to.have.property('init');
    });

    it('should have a handleClick property', () => {
      expect(bw).to.have.property('handleClick');
    });
  });
});
