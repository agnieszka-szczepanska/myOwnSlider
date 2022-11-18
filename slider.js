var slider = document.querySelector("#photo");
var arrowLeft  = document.querySelector("#arrowLeft");
var arrowRight = document.querySelector("#arrowRight");
var dot1= document.querySelector("#dot1");
var dot1= document.querySelector("#dot2");
var dot1= document.querySelector("#dot3");
var dot1= document.querySelector("#dot4");
var dot1= document.querySelector("#dot5");
var figcaption= document.querySelector("#fotoDescription");

var number = Math.floor(Math.random()*5)+1;

function changeSlide(){
    number++;
    if (number > 5) {number = 1;}

    var file = "<img src=\"img/image"+number+".jpg\" id = \"photo\" alt=\"images from Greece\" />";
    document.getElementById("photo").innerHTML = file;
    setTimeout("changeSlide()" , 3000);
 
}

console.log(number); 

