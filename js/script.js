function init() {
	var button = document.getElementById("signup");
	var input = document.getElementById("psnID");
	button.addEventListener("click", myFunction);
	
	
	function myFunction() {
		text = ('Sign up for '+ input.value + ' was suceessful! You are now eligible for participation and rewards.');
		alert(text);
	}
}
window.addEventListener('load', init);