import SlideRenderer from './slide-renderer';

export default class SlideDeck {
  constructor(slideData, slideContainer, pb) {
    this.sd = slideData;
    this.pb = pb;
    this.sn = 0;
    this.sr = new SlideRenderer(slideContainer);

    this.navigateSlideDeck = this.navigateSlideDeck.bind(this);
  }

  navigateSlideDeck(pbInfo) {
    console.warn(pbInfo);
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

    if (this.sn + ONE <= this.sd.length - ONE) {
      this.sn += ONE;
    } else {
      this.sn = this.sd.length - ONE;
    }

    this.renderSlide();
  }

  prevSlide() {
    const ONE = 1;
    const ZERO = 0;

    if (this.sn - ONE > ZERO) {
      this.sn -= ONE;
    } else {
      this.sn = ZERO;
    }

    this.renderSlide();
  }

  renderSlide() {
    this.sr.clearSlideContainer();
    this.sr.displaySlide(this.sd[this.sn]);

    this.pb.publish('render', {
      action: 'render',
      info: {
        slide: this.sn,
        length: this.sd.length,
      },
    });
  }

  init() {
    this.pb.subscribe('prev', this.navigateSlideDeck);
    this.pb.subscribe('next', this.navigateSlideDeck);
  }
}
