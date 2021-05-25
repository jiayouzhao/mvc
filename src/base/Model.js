class Model {
	constructor(options) {
		this.data = options.data;
		this.update = options.update;
	}
	update() {
		console && console.error && console.error("没有实现 update");
	}
	get() {
		console && console.error && console.error("没有实现 get");

	}
}

export default Model;