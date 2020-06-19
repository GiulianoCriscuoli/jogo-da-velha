let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let button = document.querySelectorAll("#buttons button");
let message = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer = document.querySelector("#two-players");

//número de jogadas do player 1 e 2

let player1 = 0;
let player2 = 0;

// evento para selecionar a caixa da jogada

for(let i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener("click", function() {

    let el = checkEl(player1, player2);

    if(this.childNodes.length == 0) {  // childNodes verifica se tem algum elemento filho dentro do boxes

        let cloneEl = el.cloneNode(true);

        this.appendChild(cloneEl);

        //registra a jogada

        if(player1 == player2) {

            player1++;
        
            } else  {
        
            player2++;
        
            }

        checkForWin();
    }

    });

}

//função gera um elemento x ou o dependendo da condição

function checkEl(player1, player2) {

    if(player1 == player2) {

        el = x;
        
    } else {

        el = o;

    }
    return el;
}

function checkForWin() {

    let b1 = document.getElementById("one-block");
    let b2 = document.getElementById("two-block");
    let b3 = document.getElementById("three-block");
    let b4 = document.getElementById("four-block");
    let b5 = document.getElementById("five-block");
    let b6 = document.getElementById("six-block");
    let b7 = document.getElementById("seven-block");
    let b8 = document.getElementById("eight-block");
    let b9 = document.getElementById("nine-block");

    // verifica se existe um nó filho no bloco

    if(b1.childNodes.length > 0  && b2.childNodes.length > 0  && b3.childNodes.length > 0 ) {

    // armazena o nome da classe no nó filho

        let b1Child = b1.childNodes[0].className; 
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

    // Verifica se todos são "x" ou "o"

        if(b1Child == "x" && b2Child == "x" && b3Child == "x") {

            console.log("x venceu");

        } else if(b1Child == "o" && b2Child == "o" && b3Child == "o") {

            console.log("o venceu");
        }

        }

        // verifica se existe um nó filho no bloco

        if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

            let b4Child = b4.childNodes[0].className; 
            let b5Child = b5.childNodes[0].className;
            let b6Child = b6.childNodes[0].className;

        if(b4Child == "x" && b5Child == "x" && b6Child == "x") {

            console.log("x venceu");

            } else if(b4Child == "o" && b5Child == "o" && b6Child == "o") {

                console.log("o venceu");
            }
        }

        // verifica se existe um nó filho
        
        if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

            b7Child = b7.childNodes[0].className;
            b8Child = b8.childNodes[0].className;
            b9Child = b9.childNodes[0].className;

            if(b7Child == "x" && b8Child == "x" && b9Child == "x") {

                console.log("x venceu");

            } else if(b7Child == "o" && b8Child == "o" && b9Child == "o") {

                console.log("o venceu");
            }
        }

        if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {

            b1Child = b1.childNodes[0].className;
            b4Child = b4.childNodes[0].className;
            b7Child = b7.childNodes[0].className;
    
            if(b1Child == "x" && b4Child == "x" && b7Child == "x") {

                console.log("x venceu");

            } else if(b1Child == "o" && b4Child == "o" && b7Child == "o") {

                console.log("o venceu");

            }
        }

        if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length) {

            b2Child = b2.childNodes[0].className;
            b5Child = b5.childNodes[0].className;
            b8Child = b8.childNodes[0].className;

            if(b2Child == "x" && b5Child == "x" && b8Child == "x") {

                console.log("x venceu");

            } else if(b2Child == "o" && b5Child == "o" && b8Child == "o") {

                console.log("o venceu");
            }
        }

        if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {

            b3Child = b3.childNodes[0].className;
            b6Child = b6.childNodes[0].className;
            b9Child = b9.childNodes[0].className;

            if(b3Child == "x" && b6Child == "x" && b9Child == "x") {

                console.log("x venceu");

            } else if(b3Child == "o" && b6Child == "o" && b9Child == "o") {

                console.log("o venceu");

            }
        }

        if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length) {

            b1Child = b1.childNodes[0].className;
            b5Child = b5.childNodes[0].className;
            b9Child = b9.childNodes[0].className;

            if(b1Child == "x" && b5Child == "x" && b9Child == "x") {

                console.log("x venceu");

            } else if(b1Child == "o" && b5Child == "o" && b9Child == "o") {

                console.log("o venceu");
            }
        }

        if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {

            b3Child = b3.childNodes[0].className;
            b5Child = b5.childNodes[0].className;
            b7Child = b7.childNodes[0].className;

            if(b3Child == "x" && b5Child == "x" && b7Child == "x") {

                console.log("x venceu");

            } else if(b3Child == "o" && b5Child == "o" && b7Child == "o") {

                console.log("o venceu");

            }

        }

        let counterElement = 0;

        for(let i = 0; i < boxes.length; i++) {

            if(boxes[i].childNodes[0] != undefined) {

                counterElement++;
            }
        }

        if(counterElement == 9) {

            console.log(" Deu velha!")
        }
     
    }
    
