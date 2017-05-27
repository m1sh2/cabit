
const global = window;

export class Cabit {
  subscribers: any = {};

  start(eventName, data) {
    const event = new CustomEvent('start::' + eventName, {
      detail: data
    });
    global.dispatchEvent(event);
  }

  end(eventName, data) {
    const event = new CustomEvent('end::' + eventName, {
      detail: data
    });
    global.dispatchEvent(event);
  }

  onStart(eventName, callback) {
    this.subscribers[eventName] = global.addEventListener('start::' + eventName, (event: any) => {
      callback(event.detail);
    });
  }

  onEnd(eventName, callback) {
    this.subscribers[eventName] = global.addEventListener('end::' + eventName, (event: any) => {
      callback(event.detail);
    });
  }

  onAll(eventName, callback) {
    this.subscribers[eventName] = global.addEventListener('start::' + eventName, (event: any) => {
      callback(event.detail);
    });

    this.subscribers[eventName] = global.addEventListener('end::' + eventName, (event: any) => {
      callback(event.detail);
    });
  }
}
