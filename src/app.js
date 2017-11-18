// Import the slideData object
// Get a promise object and resolve it

// Import the template binder
// Take the slide data and attach it to the proper template
import ButtonWidget from './button-widget';
import PubSub from './pub-sub';
import SlideData from './data-access';
import SlideDeck from './slide-deck';
import '../styles/index.css';

const gistSlidesUrl = 'https://gist.githubusercontent.com/ejohnsms/078f3601da7128a48ae916c6e9c74654/raw/b9b8a28736e41dd4f56d6d7edbb036a47075e031/slides.json';
const [slideContainer] = document.getElementsByClassName('slide-container');
const [pBtnEl] = document.getElementsByName('prev-button');
const [nBtnEl] = document.getElementsByName('next-button');
const pb = new PubSub();
const pBtn = new ButtonWidget(pBtnEl, 'prev', pb);
const nBtn = new ButtonWidget(nBtnEl, 'next', pb);

class SlideApp {
  constructor(pubSub, prevBtn, nextBtn) {
    this.pb = pubSub;
    this.pBtn = prevBtn;
    this.nBtn = nextBtn;

    this.handleRender = this.handleRender.bind(this);
  }

  init() {
    SlideData.getSlideData(gistSlidesUrl).then(
      (responseData) => {
        this.slides = Object.assign([], responseData);
        // this is a good place for a curry function
        // to delay the execution until the data is retrieved - fix this!
        this.slideDeck = new SlideDeck(this.slides, slideContainer, this.pb);

        this.pBtn.init();
        this.nBtn.init();
        this.slideDeck.init();

        this.pb.subscribe('render', this.handleRender);

        this.slideDeck.renderSlide();
      },
      (errorMessage) => {
        console.warn(`error: ${errorMessage}`);
      },
    );
  }

  handleRender(pbInfo) {
    if (pbInfo.info.slide === 0) {
      this.pBtn.hide();
      this.nBtn.show();
    } else if (pbInfo.info.slide === (pbInfo.info.length - 1)) {
      this.pBtn.show();
      this.nBtn.hide();
    } else {
      this.pBtn.show();
      this.nBtn.show();
    }
  }
}

const app = new SlideApp(pb, pBtn, nBtn);

// this is the entry point for the app
if (document.readyState === 'complete' ||
    document.readyState === 'loaded' ||
    document.readyState === 'interactive') {
  // check if the main container has loaded
  const main = document.querySelector('.content') || null;

  if (main.length < 1) {
    setTimeout(() => {
      app.init();
    }, 50); // giving the page some time, maybe it will load
  } else {
    app.init();
  }
} else {
  window.addEventListener('DOMContentLoaded', () => {
    // const main = document.querySelector('.content') || null;
    app.init();
  });
}
