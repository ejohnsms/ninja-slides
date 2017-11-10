export default class ButtonWidget {
    constructor(buttonElement, actionName, pb) {
        this._action = actionName;
        this._button = buttonElement;
        this._pb = pb;

        this.handleClick = this.handleClick.bind(this);
    }

    init() {
      this._button.addEventListener('click', () => {
          this.handleClick();
      });
    }

    handleClick() {
      this._pb.publish(this._action, {
                                      'action': this._action,
                                      'info': 'this is some info'
                                      });
    }
}
