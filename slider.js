var slider = document.querySelector("#photo");
var number = Math.floor(Math.random()*5)+1;
var timer1 = 0; /*timer rozpoczynający odliczanie czasu dla bieżącego slide*/
var timer2 = 0; /*timer rozpoczynający odliczanie czasu do wygaszenia bieżącego slide*/

function clearTimers(){
    clearTimeout(timer1);
    clearTimeout(timer2);
 }

function changeSlide(){
    clearTimers();
    number++;
    if (number > 5) {number = 1;}

    var file = "<a href=\"img/image"+number+".jpg\" target=\"_blank\"><img src=\"img/image"+number+".jpg\" id = \"photo\" alt=\"images from Greece\" /></a>"
    
    slider.innerHTML = file;
    $("#photo").fadeIn(500);
    changeFigcaption();
    changeDotColor();
    
    timer1=setTimeout("changeSlide()" , 3000);
    timer2=setTimeout("hideSlide()" , 2500);
}

function changeFigcaption(){ 
    document.querySelector('#fotoDescription'+ number).classList.remove("notActive");
    document.querySelector('#fotoDescription'+ number).classList.add("active");;
}

function changeDotColor(){ 
    document.querySelector('#dot'+ number).classList.remove("notActive");
    document.querySelector('#dot'+ number).classList.add("active");;
}

function chooseSlideNum(num){
    clearTimers();
    hideFigcaption();
    hideDotColor();
    number = num -1;
    changeSlide();
}

function nextSlide(){
    clearTimers();
    hideFigcaption();
    hideDotColor();
    changeSlide();
} 
function previousSlide(){
    clearTimers();
    hideFigcaption();
    hideDotColor();
    number=number-1;
    
    if (number < 1) {number = 5;}
    var file = "<img src=\"img/image"+number+".jpg\" id = \"photo\" alt=\"images from Greece\" />";
    slider.innerHTML = file;
    changeFigcaption();
    changeDotColor();
    
    timer1=setTimeout("changeSlide()" , 3000);
    timer2=setTimeout("hideSlide()" , 2500);
}

function hideSlide(){
    $("#photo").fadeOut(500);
    hideFigcaption();
    hideDotColor();
}

function hideFigcaption(){
    document.querySelector(".active").classList.add("notActive");
    document.querySelector(".active").classList.remove("active");
}

function hideDotColor(){
    document.querySelector(".active").classList.add("notActive");
    document.querySelector(".active").classList.remove("active");
}
 

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
            
console.log(number);

    /*
    
    DO ZASTANOWIENIA CZY PRZY DOTS AND ARROWS ZROBIC WYGASZANIE
    - RESPONSIVE WEB DESIGN- ZMIANA WIELKOŚCI W ZAL. OD EKRANU ITP*/

/*PRZETESTOWAĆ CZEMU NIE DZIAŁA!
function changeFigcaption(){
    var activeElement = document.querySelector(".active");
    activeElement.classList.remove("active");
    document.querySelector('#fotoDescription'+ number).classList.add("active");
};
*/



