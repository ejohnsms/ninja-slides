import SlideRender from './slide-renderer';
import SlideUtil from './slide-util';

export default class SlideDeck {
  constructor(slideData, slideContainer) {
    this._slideData = slideData;
    this._slideContainer = slideContainer;

    this._slideIterator = SlideUtil.slideIterator(this._slideData);
    this._render = new SlideRender(this._slideContainer);
  }

  handleSlideNav(evt){
    if (evt.type === 'prev'){
      this.render.displaySlide(this._slideIterator.prev().value);
    } else if (evt.type === 'next'){
      this.render.displaySlide(this._slideIterator.next().value);
    }
  }

  init(){
    this._slideContainer.addEventListener('prev', this.handleSlideNav, false);
    this._slideContainer.addEventListener('next', this.handleSlideNav, false);
  }

}
