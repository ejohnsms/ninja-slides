import SlideContent from './slide-content';

export default class SlideRenderer {
  constructor(slideContainer) {
    this.sc = slideContainer;
  }

  clearSlideContainer() {
    while (this.sc.hasChildNodes()) {
      this.sc.removeChild(this.sc.lastChild);
    }
  }

  displaySlide(slideData) {
    // Get the content and add it to cache
    const sc = new SlideContent(slideData);

    this.sc.appendChild(sc.getMarkup()); // this should be getMarkup.appendChild
  }
}
