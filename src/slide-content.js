export default class SlideContent {
  constructor(slideData){
    this._sd = slideData;
  }

  getMarkup() {
    const ID_SELECTOR = '#',
          slideContent = document.querySelector(ID_SELECTOR + this._sd.type);

    Object.keys(this._sd).forEach(function(key) {
      switch (key) {
        case 'title': {
          const [h1] = slideContent.content.querySelectorAll('h1');

          h1.textContent = this._sd.title;
          break;
        }
        case 'description': {
          const [para] = slideContent.content.querySelectorAll('p');

          para.textContent = this._sd.description;
          break;
        }
        case 'points': {
          const [ul] = slideContent.content.querySelectorAll('ul');

          ul.innerHTML = '';
          this._sd.points.forEach((point) => {
            const li = document.createElement('li');

            li.textContent = point;
            ul.appendChild(li);
          });
          break;
        }
        case 'img': {
          const [img] = slideContent.content.querySelectorAll('img');

          img.src = this._sd.image;
          break;
        }
        default:

      }
    }, this);

    return document.importNode(slideContent.content, true);
  }
}
