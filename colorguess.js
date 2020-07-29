var numsquare=6;
var colors=generaterandomcolors(6);

var pickedcolor= pickcolor();
var pick=document.querySelector("#pick");
var reset=document.querySelector("#reset");
var h1=document.querySelector("h1");
var easy=document.querySelector("#easybtn");
var hard=document.querySelector("#hardbtn");

pick.textContent= pickedcolor;

var result=document.querySelector("#result");

var squares=document.querySelectorAll(".square");

easy.addEventListener("click",function(){ 
	this.classList.add("selected");
	hard.classList.remove("selected"); 
	numsquare=3; 
	colors=generaterandomcolors(numsquare); 
	pickedcolor= pickcolor(); 
	pick.textContent=pickcolor();
	for(var i=0;i<squares.length;i++) 
		{ 
			if(colors[i])
				squares[i].style.background=colors[i]; 
			else
				squares[i].style.background="none"; 
		}

});


hard.addEventListener("click",function(){
	this.classList.add("selected");
	easy.classList.remove("selected");
	numsquare=6; 
	colors=generaterandomcolors(numsquare); 
	pickedcolor= pickcolor(); 
	pick.textContent=pickcolor();
	for(var i=0;i<squares.length;i++) 
		{ 
			if(colors[i])
				squares[i].style.background=colors[i]; 
			else
				squares[i].style.background="none"; 
		}

});




for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];

	squares[i].addEventListener("click",function(){
		var clickedcolor=this.style.background;
		if(clickedcolor===pickedcolor){
		     result.textContent="correct!";
		 	changecolor(clickedcolor);
		 	reset.textContent="Play Again!!"
		 	h1.style.background=clickedcolor; 
		 }
		else{
			this.style.background="black";
			result.textContent="try again!";
		}

});
}

function pickcolor(){
	var random=Math.floor(Math.random() *colors.length);
	return colors[random];
}

function changecolor(color){
	for(var i=0;i<squares.length;i++)
		squares[i].style.background=color;
}

function generaterandomcolors(num){
	var arr=[];
	for(var i=0;i<num;i++)
		arr.push(randomcolor());
	return arr;
}

function randomcolor(){
	var r=Math.floor(Math.random() *256);
	var g=Math.floor(Math.random() *256);
	var b=Math.floor(Math.random() *256);

	return "rgb(" +r+ ", " +g+ ", " +b+ ")";
}

reset.addEventListener("click",function(){
	colors=generaterandomcolors(numsquare);
	pickedcolor=pickcolor();
	pick.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=colors[i];
	}

	h1.style.background="steelblue";
	result.textContent="";
	this.textContent="NEWGAME"

});


