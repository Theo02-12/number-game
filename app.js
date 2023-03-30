var random = (max, min) => {
        return Math.floor(Math.random() * (max - min) - min)
    }
var resultRandom = random(11, 0)


const start = document.querySelector('#start');
const check = document.querySelector('#testNumber');

function startGame() {
    // gestion de la difficulté 
    const easy = document.querySelector('#easy')
    easy.addEventListener('click', easyBtn);
    const medium = document.querySelector('#medium')
    medium.addEventListener('click', mediumBtn);
    const hard = document.querySelector('#hard')
    hard.addEventListener('click', hardBtn);
    
    // boutton mode easy
    function easyBtn() {
        resultRandom = random(11, 0)
        let attempt = 0;
        
    }
    // boutton mode medium
    function mediumBtn() {
        resultRandom = random(51, 0)
        console.log(resultRandom)
        let attempt = 0;
    }
    // boutton mode hard
    function hardBtn() {
        resultRandom = random(101, 0)
        console.log(resultRandom)
        let attempt = 0;
    }
    
    
    

    
    

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
            if (i == 1) {
                textWin.innerHTML += `${i}er essai`
            } else {
                textWin.innerHTML += `${i}ème essai`
            }
            if (selectNumber > resultRandom) {
                textAttempt.innerHTML = `${selectNumber}? .. c'est moins`
            } else if (selectNumber == resultRandom) {
                textAttempt.innerHTML = "";
            } else {
                textAttempt.innerHTML = `${selectNumber}? .. c'est plus`
            }

            textWin.append(br, textAttempt)
        }

        if (i < 3) {
            i++;
        } else if (i == 3) {
            playAgain.style.display = "block";
            start.disabled = true;
            check.disabled = true;
        }

        
    }

    const playAgain = document.querySelector('#rejouer')
    playAgain.addEventListener('click', rejouer);

    function rejouer() {
        location.reload();
    }
}






