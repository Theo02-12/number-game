// fonction random
var random = (max, min) => {
    return Math.floor(Math.random() * (max - min) - min)
}
var resultRandom = random(11, 0)

// id des bouttons jouer et tester
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


    const top = document.querySelector('#top');
    const easyDifficult = '(entre 1 et 10)';
    const mediumDifficult = '(entre 1 et 50)';
    const hardDifficult = '(entre 1 et 100)';

    // boutton mode easy
    function easyBtn() {
        resultRandom = random(11, 0)
        console.log(resultRandom)
        top.append(easyDifficult)
    }
    // boutton mode medium
    function mediumBtn() {
        resultRandom = random(51, 0)
        top.append(mediumDifficult)
        console.log(resultRandom)
    }
    // boutton mode hard
    function hardBtn() {
        resultRandom = random(101, 0)
        console.log(resultRandom)
        top.append(hardDifficult)
    }






    // boutton pour tester le chiffre
    const btntestNumber = document.querySelector('#testNumber')
    btntestNumber.addEventListener('click', testNumber)
    //variable pour le nombre d'essai
    let i = 1;
    //
    var textWin = document.createElement("h1")
    var textAttempt = document.createElement("h3")
    let br = document.createElement("br")

    container.append(textWin)

    // fonction pour tester l'essai
    function testNumber() {



        const selectNumber = document.querySelector('#chiffre').value;


        if (selectNumber == resultRandom) {
            textWin.innerHTML = "Gagné :)";
            playAgain.style.display = "block";
            start.disabled = true;
            check.disabled = true;

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
        // nombre d'essais 
        if (i < 3) {
            i++;
        } else if (i == 3) {
            playAgain.style.display = "block";
            start.disabled = true;
            check.disabled = true;
        }else if (i == 2) {
            playAgain.style.display = "block";
            start.disabled = true;
            check.disabled = true;
        }


    }
    // boutton rejouer
    const playAgain = document.querySelector('#rejouer')
    playAgain.addEventListener('click', rejouer);

    function rejouer() {
        location.reload();
    }
}






