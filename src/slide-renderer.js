import SlideContent from './slide-content';

export default class SlideRenderer {
  constructor(slideContainer){
    this._sc = slideContainer;
  }

  clearSlideContainer(){
    while (this._sc.hasChildNodes()) {
      this._sc.removeChild(this._sc.lastChild);
    }
  }

  displaySlide(slideData){
    // Get the content and add it to cache
    const sc = new SlideContent(slideData);

    this._sc.appendChild(sc.getMarkup());
  }

}
