// Import the slideData object
// Get a promise object and resolve it

// Import the template binder
// Take the slide data and attach it to the proper template
import ButtonWidget from './ButtonWidget';
import SlideData from './slideData';
import SlideDeck from './slideDeck';

const gistSlidesUrl = 'https://gist.githubusercontent.com/ejohnsms/078f3601da7128a48ae916c6e9c74654/raw/0154593bfab52875622ff06e3f0ecda2ba091309/slides.json',
      slideData = new SlideData(),
      dataPromise = slideData.getSlideData(gistSlidesUrl),
      [pBtnEl] = document.getElementsByName('prev-button'),
      [nBtnEl] = document.getElementsByName('next-button'),
      [slideContainer] = document.getElementsByTagName('main'),
      pBtn = new ButtonWidget(pBtnEl, 'prev'),
      nBtn = new ButtonWidget(nBtnEl, 'next');

let slides = null,
    sDeck = null;

dataPromise.then((responseData) => {
  slides = Object.assign({}, responseData);
  sDeck = new SlideDeck(slides, slideContainer);
  console.warn(`success: ${responseData}`);
},
(errorMessage) => {
  console.warn(`error: ${errorMessage}`);
});

pBtn.init();
nBtn.init();

sDeck.init();





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
