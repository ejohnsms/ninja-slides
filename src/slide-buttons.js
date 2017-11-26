export default class SlideButtons extends HTMLElement {
  constructor(buttonElement, actionName, pb) {
    super();

    // Create a shadow root
    const shadow = this.attachShadow({mode: 'open'});

    const prevBtn = document.createElement('button');
    prevBtn.name = this.getAttribute('data-previous-name');
    prevBtn.classList.add('btn');
    prevBtn.classList.add('btn-prev');
    prevBtn.hidden = true;

    const nextBtn = document.createElement('button');
    nextBtn.name = this.getAttribute('data-next-name');
    prevBtn.classList.add('btn');
    prevBtn.classList.add('btn-next');
    nextBtn.hidden = false;

    shadow.appendChild(prevBtn);
    shadow.appendChild(nextBtn);

    // this.action = actionName;
    // this.button = buttonElement;
    // this.pb = pb;
    //
    // this.handleClick = this.handleClick.bind(this);
  }

  // init() {
  //   this.button.addEventListener('click', () => {
  //     this.handleClick();
  //   });
  // }

  // handleClick() {
  //   this.pb.publish(this.action, {
  //     action: this.action,
  //     info: 'this is some info',
  //   });
  // }

  // show() {
  //   this.button.classList.remove('hidden');
  // }
  //
  // hide() {
  //   this.button.classList.add('hidden');
  // }
}

// Define the new element
customElements.define('button-widget', ButtonWidget);
