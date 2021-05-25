import $ from "jquery";
class EventBus {
	constructor() {
		this._eventBus = $(window);    
	}
	on(eventName, fn) {

		return this._eventBus.on(eventName, fn);
	}
	trigger(eventName) {
		return this._eventBus.trigger(eventName);
	}
	off(eventName, fn) {
		return this._eventBus.off(eventName, fn);
	}
}

export default EventBus;