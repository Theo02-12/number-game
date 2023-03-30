function startGame() {

    const random = (max, min) => {
        return Math.floor(Math.random() * (max - min) - min)
    }

    var resultRandom = random(11, 0)
    console.log(resultRandom)

    const btntestNumber = document.querySelector('#testNumber')
    btntestNumber.addEventListener('click', testNumber)
    let i = 1;

    var textWin = document.createElement("h1")
    var textAttempt = document.createElement("h3")
    let br = document.createElement("br")
    
    container.append(textWin)

    function testNumber() {

        console.log(i)

        const selectNumber = document.querySelector('#chiffre').value;
        const container = document.querySelector('#container')


        if (selectNumber == resultRandom) {
            textWin.innerHTML = "Gagné :)";
            playAgain.style.display = "block";

        } else {
            if(i == 1){
               textWin.innerHTML += `${i}er essai` 
            }else{
                textWin.innerHTML += `${i}ème essai`
            }
            if(selectNumber > resultRandom){
                textAttempt.innerHTML = `${selectNumber}? .. c'est moins`
            }else if(selectNumber == resultRandom){
                textAttempt.innerHTML = "";
            }else{
               textAttempt.innerHTML = `${selectNumber}? .. c'est plus` 
            }
            
            textWin.append(br, textAttempt)
        }

        if (i < 3) {
            i++;
        } else if (i == 3) {
            playAgain.style.display = "block";
        }
    }

    const playAgain = document.querySelector('#rejouer')
    playAgain.addEventListener('click', rejouer);
    
    function rejouer() {
        location.reload();
    }
}





