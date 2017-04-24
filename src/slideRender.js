export default class SlideRender {
  constructor(slideContainer){
    this._slideContainer = slideContainer;
  }

  removeAllSlide(){
    while (this._slideContainer.hasChildNodes()) {
      this._slideContainer.removeChild(this._slideContainer.lastChild);
    }
  }

  displaySlide(slideData){
    const t = document.querySelector(slideData.type);

    switch (slideData.type) {
      case basic:
          let [h1] = t.content.querySelectorAll('h1');
          h1.textContent = slideData.title;

          let [p] = t.content.querySelectorAll('p');
          h1.textContent = slideData.description;

          let [ul] = t.content.querySelectorAll('ul');
          slideData.points.forEach((point) => {
            document.createElement('li');
            li.textContent = point;
            ul.appendChild(li);
          });

          const clone = document.importNode(t.content, true);
          this._slideContainer.appendChild(clone);
        break;
      case interstitial:
          let [img] = t.content.querySelectorAll('img');
          img.src = slideData.image;

          let [h1] = t.content.querySelectorAll('h1');
          h1.textContent = slideData.title;

          const clone = document.importNode(t.content, true);
          this._slideContainer.appendChild(clone);
        break;
      case dankmeme:
          let [img] = t.content.querySelectorAll('img');
          img.src = slideData.image;

          let [ul] = t.content.querySelectorAll('ul');
          slideData.points.forEach((point) => {
            document.createElement('li');
            li.textContent = point;
            ul.appendChild(li);
          });

          const clone = document.importNode(t.content, true);
          this._slideContainer.appendChild(clone);
        break;
      default:
    }
  }

}
