export default class SlideContent {
  constructor(slideData) {
    this.sd = slideData;
  }

  getMarkup() {
    const ID_SELECTOR = '#';
    const slideContent = document.querySelector(ID_SELECTOR + this.sd.type);

    Object.keys(this.sd).forEach((key) => {
      switch (key) {
        case 'title': {
          const [h1] = slideContent.content.querySelectorAll('h1');

          h1.textContent = this.sd.title;
          break;
        }
        case 'description': {
          const [para] = slideContent.content.querySelectorAll('p');

          para.textContent = this.sd.description;
          break;
        }
        case 'points': {
          const [ul] = slideContent.content.querySelectorAll('ul');

          ul.innerHTML = '';
          this.sd.points.forEach((point) => {
            const li = document.createElement('li');

            li.textContent = point;
            ul.appendChild(li);
          });
          break;
        }
        case 'img': {
          const [img] = slideContent.content.querySelectorAll('img');

          img.src = this.sd.image;
          break;
        }
        default:
      }
    }, this);

    return document.importNode(slideContent.content, true);
  }
}
