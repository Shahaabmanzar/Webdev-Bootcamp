var randomNumber1=Math.floor((Math.random() * 6) + 1);
document.firstElementChild.lastElementChild.firstElementChild.querySelector("DIV IMG").setAttribute("src","/images/dice"+randomNumber1+".png");
var randomNumber2=Math.floor((Math.random() * 6) + 1);
document.firstElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.setAttribute("src","/images/dice"+randomNumber2+".png");
{if(randomNumber1>randomNumber2){
    document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="Player1 wins";
}
else  if(randomNumber1<randomNumber2) {
    document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="player2 wins";
}else{
    document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="Draw";
}

}