import "./app4.css";
import $ from "jquery";

const html = `
    <div id="app4">
        <div class="circle"></div>
    </div>
`;

$(html).appendTo($("body .wrapper"));
let $circle = $("#app4 .circle");

$circle.on("mouseenter", () => {
	
	$circle.addClass("active");
});
$circle.on("mouseleave", () => {
	$circle.removeClass("active");
});