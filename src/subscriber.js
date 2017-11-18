export default class Subscriber {
  constructor(pb) {
    this.pb = pb;
    this.eventList = [];

    this.handleEventName = this.handleEventName.bind(this);

    this.pb.subscribe('eventName', this.handleEventName);
  }

  handleEventName(eventInfo) {
    this.eventList.push(eventInfo);
  }

  get handledEvents() {
    return this.eventList;
  }
}
