import "./app3.css";
import $ from "jquery";

const html = `
    <div id="app3">
        <div class="box"></div>
    </div>
`;
$(html).appendTo($("body .wrapper"));

let $box = $("#app3 .box");
let app3box = localStorage.getItem("app3box") === "1";
console.log(app3box);
$box.toggleClass("active", app3box);

$box.on("click", () => {
	if ($box.hasClass("active")) {
		$box.removeClass("active");
		localStorage.setItem("app3box", 0);
	} else {
		$box.addClass("active");
		localStorage.setItem("app3box", 1);
	}
});