export default class PubSub {
  constructor () {
    this._subscription = {};
  }

  subscribe (name, callback) {
    this._subscription[name] = callback;
  }

  publish (name, data) {
    if (this._subscription[name]) {
    Reflect.apply(this._subscription[name],
      this._subscription[name], [data]);
    }
  }
}
