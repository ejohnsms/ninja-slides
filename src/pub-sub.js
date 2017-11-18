export default class PubSub {
  constructor() {
    this.subscription = {};
  }

  subscribe(name, callback) {
    this.subscription[name] = this.subscription[name] || [];
    this.subscription[name].push(callback);
  }

  publish(name, data) {
    if (this.subscription[name]) {
      this.subscription[name].forEach((sub) => {
        Reflect.apply(sub, sub, [data]);
      });
    }
  }
}
