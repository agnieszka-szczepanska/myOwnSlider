var slider = document.querySelector("#photo");
var figcaption= document.querySelector("#fotoDescription");

var number = Math.floor(Math.random()*5)+1;

function changeSlide(){
    number++;
    if (number > 5) {number = 1;}

    var file = "<img src=\"img/image"+number+".jpg\" id = \"photo\" alt=\"images from Greece\" />";
    slider.innerHTML = file;
    //setTimeout("changeSlide()" , 3000);
}

function chooseSlideNum(num){
    number = num -1;
    changeSlide();
    }


function nextSlide(){
changeSlide();
}

function previousSlide(){
    number--;
    if (number < 1) {number = 5;}
    var file = "<img src=\"img/image"+number+".jpg\" id = \"photo\" alt=\"images from Greece\" />";
    slider.innerHTML = file;
    }

console.log(number);

arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);

/* With .onclick you can use one function

for (let i=1; i<=5; i++){
    document.querySelector("#dot"+i).onclick = function(){
        chooseSlideNum(i);
    };
}
*/

for (let i=1; i<=5; i++){
    document.querySelector("#dot"+i).addEventListener("click",function(){
        chooseSlideNum(i);})
    };
