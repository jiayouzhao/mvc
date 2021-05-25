class View {
	constructor(options) {
		Object.assign(this, options);
	}
	autoBindEvents() {
		for (let key in this.events) {
		
			let a = key.trim().split(/(?<=\w+)\s+(?=[.#]\w+\s*\w*)/);
			let part1 = a[0];
			let part2 = a[1];
			
			this.el.on(part1, part2, this[this.events[key]]);
		}
	}
}

export default View;