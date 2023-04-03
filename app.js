// fonction random
var random = (max, min) => {
    return Math.floor(Math.random() * (max - min) - min)
}
var resultRandom = random(11, 1)

// id des bouttons jouer et tester
const start = document.querySelector('#start');
const check = document.querySelector('#testNumber');

// commencer le jeu
function startGame() {

    start.disabled = true
    // gestion de la difficulté 
    const easy = document.querySelector('#easy')
    easy.addEventListener('click', easyBtn);
    const medium = document.querySelector('#medium')
    medium.addEventListener('click', mediumBtn);
    const hard = document.querySelector('#hard')
    hard.addEventListener('click', hardBtn);

    // titre avec les difficultés
    const top = document.querySelector('#top');
    const easyDifficult = '(entre 1 et 10)';
    const mediumDifficult = '(entre 1 et 50)';
    const hardDifficult = '(entre 1 et 100)';

    // boutton mode easy
    function easyBtn() {
        resultRandom = random(11, 1)
        top.append(easyDifficult)
        medium.disabled = true;
        hard.disabled = true;
    }
    // boutton mode medium
    function mediumBtn() {
        resultRandom = random(51, 1)
        top.append(mediumDifficult)
        easy.disabled = true;
        hard.disabled = true;
        i++;
    }
    // boutton mode hard
    function hardBtn() {
        resultRandom = random(101, 1)
        top.append(hardDifficult)
        medium.disabled = true;
        easy.disabled = true;
        i = i + 1;
        i++;
    }


    // boutton pour tester le chiffre
    const btntestNumber = document.querySelector('#testNumber')
    btntestNumber.addEventListener('click', testNumber)
    //variable pour le nombre d'essai
    let i = 1;
    //
    // creation elements dans la page html 
    const textWin = document.getElementById("textWin")
    const textAttempt = document.getElementById("textAttempt")
    let br = document.createElement("br")

    container.append(textWin)

    // fonction pour tester l'essai
    function testNumber() {

        const selectNumber = document.querySelector('#chiffre').value;

        // SI LE JOUEUR TROUVE LE CHIFFRE :
        if (selectNumber == resultRandom) {
            textWin.innerHTML = "Gagné :)";
            playAgain.style.display = "block";
            start.disabled = true;
            check.disabled = true;

        } else {

            if (selectNumber > resultRandom) {
                setTimeout(() => {
                    textAttempt.innerHTML = `<p>${selectNumber}? c'est moins</p>`
                }, "500")
            } else if (i >= 3) {
                textAttempt.innerHTML = '';
            } else {
                setTimeout(() => {
                    textAttempt.innerHTML = `<p>${selectNumber}? c'est plus</p>`
                }, "500")
            }

            if (i == 1) {
                textWin.innerHTML += `${i}er essai`
            } else if (i == 2) {
                textWin.innerHTML += `${i}ème essai`
            } else if (i >= 3) {
                textWin.innerHTML = `Dommage c'était ${resultRandom}`;
            }

            textWin.append(br, textAttempt)
        }
        // SI LE JOUEUR NE TROUVE PAS LE CHIFFRE


        // nombre d'essais 
        if (i < 3) {
            i++;
        } else if (i == 3) {

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