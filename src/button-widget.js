export default class ButtonWidget {
  constructor(buttonElement, actionName, pb) {
    this.action = actionName;
    this.button = buttonElement;
    this.pb = pb;

    this.handleClick = this.handleClick.bind(this);
  }

  init() {
    this.button.addEventListener('click', () => {
      this.handleClick();
    });
  }

  handleClick() {
    this.pb.publish(this.action, {
      action: this.action,
      info: 'this is some info',
    });
  }

  show() {
    this.button.classList.remove('hidden');
  }

  hide() {
    this.button.classList.add('hidden');
  }
}
