var slider = document.querySelector("#photo");
var figcaption= document.querySelector("#fotoDescription");

var number = Math.floor(Math.random()*5)+1;
var timer1 = 0; /*timer rozpoczynający odliczanie czasu dla bieżącego slide*/
var timer2 = 0; /*timer rozpoczynający odliczanie czasu do wygaszenia bieżącego slide*/
var timer3 = 0; /*timer dla figurecaption */

function changeSlide(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    number++;
    if (number > 5) {number = 1;}

    var file = "<img src=\"img/image"+number+".jpg\" id = \"photo\" alt=\"images from Greece\" />";
    slider.innerHTML = file;
    $("#photo").fadeIn(500);
    document.querySelector('#fotoDescription'+ number).classList.add("active");

    timer1=setTimeout("changeSlide()" , 3000);
    setTimeout("changeFigcaption()" , 3000);  /*PRZETESTOWAĆ CZEMU NIE DZIAŁA!!!*/
    timer2=setTimeout("hideSlide()" , 2500);

}

function chooseSlideNum(num){
    clearTimeout(timer1);
    clearTimeout(timer2);
    number = num -1;
    changeSlide();
    }

function nextSlide(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    changeSlide();
}

function previousSlide(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    number=number-1;
    if (number < 1) {number = 5;}
    var file = "<img src=\"img/image"+number+".jpg\" id = \"photo\" alt=\"images from Greece\" />";
    slider.innerHTML = file;
    
    timer1=setTimeout("changeSlide()" , 3000);
    /*tu taka sama nazwa timera, żeby przy wywołaniu innej funkcji się zerował*/
    }

function hideSlide(){
    $("#photo").fadeOut(500);
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

      /*PRZY PREVIOUS SLIDE, JAK WSKAKUJE NASTĘPNY TO NIE MA FADEIN FACEOUT.... W KOLEJNYCH JUŻ JEST
    
    DO ZASTANOWIENIA CZY PRZY DOTS AND ARROWS ZROBIC WYGASZANIE
    
    - DODAC ZMIENIAJACE SIE FIGCAPTION
    - RESPONSIVE WEB DESIGN- ZMIANA WIELKOŚCI W ZAL. OD EKRANU ITP*/

/*PRZETESTOWAĆ CZEMU NIE DZIAŁA!
function changeFigcaption(){
    var number = 3;
    var activeElement = document.querySelector(".active");
    activeElement.classList.remove("active");
    document.querySelector('#fotoDescription'+ number).classList.add("active");
};
*/

function changeFigcaption(){   

    document.querySelector('#fotoDescription'+ number).classList.remove("notActive");
    document.querySelector('#fotoDescription'+ number).classList.add("active");;
};  

