export default class Publisher {
  constructor(pb) {
    this.pb = pb;
  }

  publishEventName() {
    this.pb.publish('eventName', {
      action: 'eventName',
      info: 'this is some info',
    });
  }
}
