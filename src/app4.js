import "./app4.css";
import $ from "jquery";

let $circle = $("#app4 .circle");

$circle.on("mouseenter", () => {
	
	$circle.addClass("active");
});
$circle.on("mouseleave", () => {
	$circle.removeClass("active");
});