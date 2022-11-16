



function hoverout (para) {

    para.classList.add("Gradient_Text_hoverout");

}




/**/
var event_hover = new MouseEvent('mouseover', {
    'view': window,
    'bubbles': true,
    'cancelable': true
  });


let cards = document.querySelectorAll(".main_card");
let message_space = document.querySelector(".message_space_cont2");

console.log(cards[0]);

cards.forEach(card => {
    card.addEventListener("mouseover", card_activated);
    card.addEventListener("mouseout", card_disabled);

});



function card_activated (card) {
    message_space.style.opacity= '1' ;

    //console.log(card.target.childNodes[1].innerHTML);
    //message_space.innerHTML = card.target.childNodes[1].innerHTML;
    if (card.target.classList[0]==="card_content") {
        //console.log(card.target.childNodes[1].innerHTML);
        message_space.innerHTML = card.target.childNodes[1].innerHTML;
    //    console.log(card.target.parentElement.parentElement.parentElement.childNodes[3].childNodes[1].classList[1].addProperty);
     //               card.target.parentElement.parentElement.parentElement.childNodes[3].childNodes[1].addClass('hover');
    }
    if(card.target.classList[1]==="card_space__flip") {
     //   console.log("child here");
    }





}

function card_disabled (card) {
    message_space.style.opacity= '0' ;

}
