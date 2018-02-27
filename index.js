var imgchar = document.getElementById("img1");
var imgchar2 = document.getElementById("img2");
var imgchar3 = document.getElementById("img3");


document.getElementById("bg1").addEventListener("click", function(){

	document.getElementById("main").style.display = "block";
	document.getElementById("title").innerHTML = "Head Gear";
	console.log("bg1");
	imgchar.src = "gears/h1.png";
	imgchar2.src = "gears/h2.png";
	imgchar3.src = "gears/h3.png";


})


document.getElementById("bg2").addEventListener("click", function(){

	document.getElementById("main").style.display = "block";
	document.getElementById("title").innerHTML = "Body Gear";
	console.log("bg2");
	imgchar.src = "gears/b1.png";
	imgchar2.src = "gears/b2.png";
	imgchar3.src = "gears/b3.png";


})

document.getElementById("bg3").addEventListener("click", function(){

	document.getElementById("main").style.display = "block";
	document.getElementById("title").innerHTML = "Leg Gear";
	console.log("bg3");
	imgchar.src = "gears/l1.png";
	imgchar2.src = "gears/l2.png";
	imgchar3.src = "gears/l3.png";

})


document.getElementById("bg4").addEventListener("click", function(){

	document.getElementById("main").style.display = "block";
	document.getElementById("title").innerHTML = "Foot Gear";
	console.log("bg4");
	imgchar.src = "gears/f1.png";
	imgchar2.src = "gears/f2.png";
	imgchar3.src = "gears/f3.png";


})

document.getElementById("main").addEventListener("click", function(){
	document.getElementById("main").style.display = "none";
})