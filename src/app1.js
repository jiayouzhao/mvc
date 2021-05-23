import "./app1.css";
import $ from "jquery";

const $number = $(".show");
const $add = $(".add");
const $jian = $(".sub");
const $cheng = $(".multiply");
const $chu = $(".divide");
let initN = localStorage.getItem("n");
$number.text(initN);

$add.click(() => {
	let n = parseFloat($number.text());
	n++;
	localStorage.setItem("n", n);
	$number.text(n);
});
$jian.click(() => {
	let n = parseFloat($number.text());
	n--;
	localStorage.setItem("n", n);
	$number.text(n);
});
$cheng.click(() => {
	let n = parseFloat($number.text());
	n *= 2;
	localStorage.setItem("n", n);
	$number.text(n);
});
$chu.click(() => {
	let n = parseFloat($number.text());
	n /= 2;
	localStorage.setItem("n", n);
	$number.text(n);
});