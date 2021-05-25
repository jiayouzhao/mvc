import "./app2.css";
import $ from "jquery";
import Model from "./base/Model.js";
import View from "./base/View.js";

const m = new Model({
	data:{
		localIndex : parseFloat(localStorage.getItem("app2-tab")) || 0
	},
	update(data) {
		Object.assign(m.data, data);
		m.trigger("m:update");
		localStorage.setItem("app2-tab", m.data.localIndex);
	}
});

const v = new View({  
	el:null,
	html :(index) => {
	
		return `
        <div>
            <div class="tab">
                <div class="tab-bar">
                    <ul>
                        <li class="${index === 0 ? "selected" : ""}" data-index="0"><span>1111</span></li>
                        <li class="${index === 1 ? "selected" : ""}" data-index="1"><span>2222</span></li>
                    </ul>
                </div>
                <div class="tab-content">
                    <ul>
                        <li class="${index === 0 ? "active" : ""}">内容1</li>
                        <li class="${index === 1 ? "active" : ""}">内容2</li>
                    </ul>
                </div>
            </div>
        </div>`;
	},
	render(index) {
		if (this.el.children.length !== 0) {
			this.el.empty();
		}
		$(this.html(index)).appendTo(this.el);
		
	},
	init(el) {
		this.el = $(el);
		this.render(m.data.localIndex);
		this.autoBindEvents();
		this.on("m:update", () => {
			this.render(m.data.localIndex);
		});
	},
	events:{
		"click .tab-bar li":"tabLis"
	},
	tabLis(e) {
		let node = e.currentTarget;
		m.update({ localIndex:parseFloat(node.dataset.index) });
	}
});

export default v;