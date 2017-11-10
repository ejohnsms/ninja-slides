import SlideRenderer from './slide-renderer';

export default class SlideDeck {
  constructor(slideData, slideContainer, pb) {
    this._sd = slideData;
    this._pb = pb;
    this._sn = 0;
    this._sr = new SlideRenderer(slideContainer);

    this.navigateSlideDeck = this.navigateSlideDeck.bind(this);
  }

  navigateSlideDeck(pbInfo) {
    switch (pbInfo.action) {
      case 'next':
        this.nextSlide();
        break;
      case 'prev':
        this.prevSlide();
        break;
      default:

    }
  }

  nextSlide() {
    const ONE = 1;

    if (this._sn + ONE <= this._sd.length - ONE) {
      this._sn += ONE;
    } else {
      this._sn = this._sd.length - ONE;
    }

    this.renderSlide();
  }

  prevSlide() {
    const ONE = 1,
      ZERO = 0;

    if (this._sn - ONE > ZERO) {
      this._sn -= ONE;
    } else {
      this._sn = ZERO;
    }

    this.renderSlide();
  }

  renderSlide() {
    this._sr.clearSlideContainer();
    this._sr.displaySlide(this._sd[this._sn]);
  }

  init(){
    this._pb.subscribe('prev', this.navigateSlideDeck);
    this._pb.subscribe('next', this.navigateSlideDeck);
  }

}
