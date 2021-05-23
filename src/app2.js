import "./app2.css";
import $ from "jquery";

const $tab = $(".tab-bar ul");
const $tabDown = $(".tab-content li");

$tab.on("click", "li", (e) => {
	let $li = $(e.currentTarget);
	let liIndex = $li.index();
	$li.addClass("selected").siblings().removeClass("selected");
	$($tabDown[liIndex]).addClass("active").siblings().removeClass("active");
});