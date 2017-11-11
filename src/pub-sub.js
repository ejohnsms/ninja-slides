export default class PubSub {
  constructor () {
    this._subscription = {};
  }

  subscribe (name, callback) {
    this._subscription[name] = this._subscription[name] || [];
    this._subscription[name].push(callback);
  }

  publish (name, data) {
    if (this._subscription[name]) {
      this._subscription[name].forEach((sub) => {
        Reflect.apply(sub, sub, [data]);
      });
    }
  }
}
