export default class SlideRenderer {
  constructor(slideContainer){
    this._slideContainer = slideContainer;
  }

  removeAllSlide(){
    while (this._slideContainer.hasChildNodes()) {
      this._slideContainer.removeChild(this._slideContainer.lastChild);
    }
  }

  displaySlide(slideData){
    const slideContent = document.querySelector(slideData.type);

    let h1 = null,
          img = null,
          para = null,
          ul = null,
          li = null,
          basicClone = null,
          interstitialClone = null,
          dankMemeClone = null;

    switch (slideData.type) {
      case 'basic':
          [h1] = slideContent.content.querySelectorAll('h1');

          h1.textContent = slideData.title;

          [para] = slideContent.content.querySelectorAll('p');

          para.textContent = slideData.description;

          [ul] = slideContent.content.querySelectorAll('ul');

          slideData.points.forEach((point) => {
            li = document.createElement('li');
            li.textContent = point;
            ul.appendChild(li);
          });

          basicClone = document.importNode(slideContent.content, true);

          this._slideContainer.appendChild(basicClone);
        break;
      case 'interstitial':
          [img] = slideContent.content.querySelectorAll('img');

          img.src = slideData.image;

          [h1] = slideContent.content.querySelectorAll('h1');

          h1.textContent = slideData.title;

          interstitialClone = document.importNode(slideContent.content, true);

          this._slideContainer.appendChild(interstitialClone);
        break;
      case 'dankmeme':
          [img] = slideContent.content.querySelectorAll('img');

          img.src = slideData.image;

          [ul] = slideContent.content.querySelectorAll('ul');

          slideData.points.forEach((point) => {
            li = document.createElement('li');
            li.textContent = point;
            ul.appendChild(li);
          });

          dankMemeClone = document.importNode(slideContent.content, true);

          this._slideContainer.appendChild(dankMemeClone);
        break;
      default:
    }
  }

}
