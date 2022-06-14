window.addEventListener("DOMContentLoaded", (event) => {

    let guessing_value = Math.floor(Math.random() * 101)
    let last_result = document.getElementById("last-result")
    let do_guess = document.getElementById("do-guess")
    let round = document.getElementById("round")
    let history = document.getElementById("history")

    do_guess.addEventListener("click", e => {
        if (guessing_value > Number(guess_value.innerText)) {
            last_result.innerText = "Číslo hledané je větší"
            last_result.classList.remove("down")
            last_result.classList.remove("hit")
            last_result.classList.add("up")

            let vstup = document.createElement("li")
            vstup.classList.add("up")
            vstup.innerText = guess_value.innerText
            history.appendChild(vstup)

        } else {
            if(guessing_value < Number(guess_value.innerText)){
                last_result.innerText = "Číslo hledané je menší"
                last_result.classList.add("down")
                last_result.classList.remove("hit")
                last_result.classList.remove("up")

                let vstup = document.createElement("li")
                vstup.classList.add("down")
                vstup.innerText = guess_value.innerText
                history.appendChild(vstup)


            } else{
                last_result.innerText = "Uhodli jste číslo"
                last_result.classList.add("hit")

                let vstup = document.createElement("li")
                vstup.classList.add("hit")
                vstup.innerText = guess_value.innerText
                history.appendChild(vstup)

                do_guess.removeEventListener("click", e)
            }
        }

        round.innerText = Number(round.innerText) + 1
    })
    
    let res_button = document.getElementById("do-restart")
    res_button.addEventListener("click",  e => {
        while (history.firstChild) {
            history.removeChild( history.firstChild)
        }

        guessing_value = Math.floor(Math.random() * 101)
        guess_value.innerText = 0
        round.innerText = 0

        last_result.classList.remove("down")
        last_result.classList.remove("hit")
        last_result.classList.remove("up")
        last_result.innerText = "Nové kolo"
    })

    let guess_value = document.getElementById("guess-value")

    let inc5 = document.getElementById("inc5")
    inc5.addEventListener("click", e => {
        guess_value.innerText = Number(guess_value.innerText) + Number(inc5.dataset.size)

        if(Number(guess_value.innerText) > 100){
            guess_value.innerText = 100
        }
        if(Number(guess_value.innerText) < 0){
            guess_value.innerText = 0
        }
    })

    let inc1 = document.getElementById("inc1")
    inc1.addEventListener("click", e => {
        guess_value.innerText = Number(guess_value.innerText) + Number(inc1.dataset.size)

        if(Number(guess_value.innerText) > 100){
            guess_value.innerText = 100
        }
        if(Number(guess_value.innerText) < 0){
            guess_value.innerText = 0
        }
    })

    let dec5 = document.getElementById("dec5")
    dec5.addEventListener("click", e => {
        guess_value.innerText = Number(guess_value.innerText) + Number(dec5.dataset.size)

        if(Number(guess_value.innerText) > 100){
            guess_value.innerText = 100
        }
        if(Number(guess_value.innerText) < 0){
            guess_value.innerText = 0
        }
    })

    let dec1 = document.getElementById("dec1")
    dec1.addEventListener("click", e => {
        guess_value.innerText = Number(guess_value.innerText) + Number(dec1.dataset.size)

        if(Number(guess_value.innerText) > 100){
            guess_value.innerText = 100
        }
        if(Number(guess_value.innerText) < 0){
            guess_value.innerText = 0
        }
    })
})