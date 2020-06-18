let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let button = document.querySelectorAll("#buttons button");
let message = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer = document.querySelector("#two-players");

let player1 = 0;
let player2 = 0;

for(i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener("click", function() {

    let el = checkEl(player1, player2);


    if(this.childNodes.length == 0) {  // childNodes verifica se tem algum elemento filho dentro do boxes

        let cloneEl = el.cloneNode(true);

        this.appendChild(cloneEl);

        if(player1 == player2) {

            player1++;
        
            } else  {
        
            player2++;
        
            }

    }

    

    });

}

function checkEl(player1, player2) {

    if(player1 == player2) {

        el = x;
       
        
    } else {

        el = o;

    }

    return el;
}

