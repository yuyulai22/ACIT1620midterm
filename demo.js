var c1 = document.getElementById("radio1");
var c2 = document.getElementById("radio2");
var c3 = document.getElementById("radio3");
var c4 = document.getElementById("radio4");

img1 = document.getElementById("demoim1");
img2 = document.getElementById("demoim2");
img3 = document.getElementById("demoim3");
img4 = document.getElementById("demoim4");

prev = document.getElementById("prev");
next = document.getElementById("next");

var head = 1;
var body = 1;
var leg = 1;
var foot = 1; 

var ranNum = 0;

var numUse = 0;

textbox.addEventListener("keyup", function(ev){

	ranNum = Math.floor(Math.random() * 3) + 1;

	if(ev.keyCode ==13){

	
			if (textbox.value == "combo1"){
				img1.src = "gears/h1.png";
				img2.src = "gears/b1.png";
				img3.src = "gears/l1.png";
				img4.src = "gears/f1.png";

			}else if(textbox.value == "combo2"){
				img1.src = "gears/h2.png";
				img2.src = "gears/b2.png";
				img3.src = "gears/l2.png";
				img4.src = "gears/f2.png";

			}else if(textbox.value == "combo3"){
				img1.src = "gears/h3.png";
				img2.src = "gears/b3.png";
				img3.src = "gears/l3.png";
				img4.src = "gears/f3.png";

			}else if(textbox.value == "random"){
				img1.src = "gears/h" + ranNum + ".png";
				img2.src = "gears/b" + ranNum + ".png";
				img3.src = "gears/l" + ranNum + ".png";
				img4.src = "gears/f" + ranNum + ".png";

			}


		}else{
			
		}

		numUse++;
		console.log(numUse);

			
});

// picChooser.addEventListener("change",function(){
// 	var picNum = parseInt(picChooser.value);

// 	if(picNum > 3){
// 		picChooser.value = 1;
// 	}

// 	if(picNum < 1){
// 		picChooser.value = 3;
// 	}
// 	prevDiv.style.backgrounvdImage =  "url("+ picChooser.value+".jpg)";



prev.addEventListener("click", function(){
		if(c1.checked){
			head--;
			if (head<=0){
				head = 3;
			}
		
			img1.src = "gears/h" + head + ".png";

		}else if(c2.checked){

			body--;
			if (body<=0){
				body = 3;
			}
		
			img2.src = "gears/b" + body + ".png";

		}else if(c3.checked){

			leg--;
			if (leg<=0){
				leg = 3;
			}
		
			img3.src = "gears/l" + leg + ".png";

		}else if(c4.checked){

			foot--;
			if (foot<=0){
				foot = 3;
			}
		
			img4.src = "gears/f" + foot + ".png";

		}else{
			alert("choose and option");
		}
});

next.addEventListener("click", function(){
	if(c1.checked){
			head++;
			if (head >= 4){
				head = 1;
			}
		
			img1.src = "gears/h" + head + ".png";

		}else if(c2.checked){

			body++;
			if (body >= 4){
				body = 1;
			}
		
			img2.src = "gears/b" + body + ".png";

		}else if(c3.checked){

			leg++;
			if (leg >= 4){
				leg = 1;
			}
		
			img3.src = "gears/l" + leg + ".png";

		}else if(c4.checked){

			foot++;
			if (foot >= 4){
				foot = 1;
			}
		
			img4.src = "gears/f" + foot + ".png";

		}else{
			alert("choose and option");
		}
	
});
