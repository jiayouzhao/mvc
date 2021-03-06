import "./app1.css";
import $ from "jquery";
import Model from "./base/Model.js";
import View from "./base/View.js";

const m = new Model({ 
	data:{ initN : parseFloat(localStorage.getItem("n")) || 100 },
	update:(data) => {
		Object.assign(m.data, data);
		m.trigger("m:update");
		localStorage.setItem("n", m.data.initN);
	}
});

const v = new View({  
	el:null,
	html :`
    <div>
        <div class="show">{{n}}</div>
        <div class="fourBtn">
            <button class="add">+1</button>
            <button class="sub">-1</button>
            <button class="multiply">*2</button>
            <button class="divide">%2</button>
        </div>
    </div>
    `,
	render(n) {
		if (this.el.children.length !== 0) {
			this.el.empty();
		}
		$(this.html.replace("{{n}}", n)).appendTo(this.el);
		
	},
	init(el) {
		this.el = $(el);
		this.render(m.data.initN);
		this.autoBindEvents();
	
		this.on("m:update", () => {
		
			this.render(m.data.initN);
		});
	},
	events:{
		"click .add":"add",
		"click .sub":"sub",
		"click .multiply":"mul",
		"click .divide":"divide"
	},
	add() {
		m.update({ initN:++m.data.initN });
	},
	sub() {
		m.update({ initN:--m.data.initN });
	},
	mul() {
	
		m.update({ initN:m.data.initN *= 2 });

	},
	divide() {
	
		m.update({ initN:m.data.initN /= 2 });

	}
});

export default v;
