// Import the slideData object
// Get a promise object and resolve it

// Import the template binder
// Take the slide data and attach it to the proper template
import ButtonWidget from './button-widget';
import PubSub from './pub-sub';
import SlideData from './data-access';
import SlideDeck from './slide-deck';

const gistSlidesUrl = 'https://gist.githubusercontent.com/ejohnsms/078f3601da7128a48ae916c6e9c74654/raw/ecf40674d5cb5e5aa2b592fae5fb10502f28c33a/slides.json',
      slideData = new SlideData(),
      dataPromise = slideData.getSlideData(gistSlidesUrl),
      [slideContainer] = document.getElementsByClassName('slide-container'),
      [pBtnEl] = document.getElementsByName('prev-button'),
      [nBtnEl] = document.getElementsByName('next-button'),
      pb = new PubSub(),
      pBtn = new ButtonWidget(pBtnEl, 'prev', pb),
      nBtn = new ButtonWidget(nBtnEl, 'next', pb);

let slides = null,
    slideDeck = null;

dataPromise.then((responseData) => {
  slides = Object.assign([], responseData);
  slideDeck = new SlideDeck(slides, slideContainer, pb);

  pBtn.init();
  nBtn.init();
  slideDeck.init();

  slideDeck.renderSlide();
},
(errorMessage) => {
  console.warn(`error: ${errorMessage}`);
});
