export default class ButtonWidget {
    constructor(buttonElement, actionName){
        this._button = buttonElement;
        this._event = new Event(actionName);
    }

    init() {
      this._button.addEventListener('click', () => {
          this.handleClick();
      });
    }

    handleClick() {
      this._button.dispatchEvent(this._event);
    }

    get Button(){
        return this._button;
    }

    get Action(){
      return this._event;
    }

    set Action(value){
      this._event = value;
    }
}
