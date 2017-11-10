// Import the slideData object
// Get a promise object and resolve it

// Import the template binder
// Take the slide data and attach it to the proper template
import ButtonWidget from './button-widget';
import PubSub from './pub-sub';
import SlideData from './data-access';
import SlideDeck from './slide-deck';

const gistSlidesUrl = 'https://gist.githubusercontent.com/ejohnsms/078f3601da7128a48ae916c6e9c74654/raw/0154593bfab52875622ff06e3f0ecda2ba091309/slides.json',
      slideData = new SlideData(),
      dataPromise = slideData.getSlideData(gistSlidesUrl),
      [slideContainer] = document.getElementsByTagName('main'),
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
},
(errorMessage) => {
  console.warn(`error: ${errorMessage}`);
});

// Const homeButton = document.getElementsByName('home-button')[0];
// Const basicSlide = document.querySelector('basic-slide');
// Const interSlide = document.querySelector('interstitial-slide');
// Const codeSlide = document.querySelector('dank-meme-slide');
//
// Const title = basicSlide.content.getElementsByTagName('h1');
// Const paragraph = basicSlide.content.getElementsByTagName('p');
// Const points = basicSlide.content.getElementsByTagName('ul');
// // Add in the li for each bullett point
//
// Export default class Slides {
//
//   Constructor(name) {
//     This._name = name;
//   }
//
//   Get Name(){
//     Return this._name;
//   }
//
//   Set Name(value){
//     This._name = value;
//   }
//
//   Get Path(){
//     Return this._path;
//   }
//
//   Set Path(value){
//     This._path = value;
//   }
// }
