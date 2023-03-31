// fonction random
var random = (max, min) => {
    return Math.floor(Math.random() * (max - min) - min)
}
var resultRandom = random(11, 0)

// id des bouttons jouer et tester
const start = document.querySelector('#start');
const check = document.querySelector('#testNumber');

// commencer le jeu
function startGame() {
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
        resultRandom = random(11, 0)
        top.append(easyDifficult)
        medium.disabled = true;
        hard.disabled = true;console.log(resultRandom);
    }
    // boutton mode medium
    function mediumBtn() {
        resultRandom = random(51, 0)
        top.append(mediumDifficult)
        easy.disabled = true;
        hard.disabled = true;
        i++;
        
    }
    // boutton mode hard
    function hardBtn() {
        resultRandom = random(101, 0)
        top.append(hardDifficult)
        medium.disabled = true;
        easy.disabled = true;
        i = 2;
        i++;
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


        console.log(resultRandom)
        const selectNumber = document.querySelector('#chiffre').value;


        if (selectNumber == resultRandom) {
            textWin.innerHTML = "Gagné :)";
            playAgain.style.display = "block";
            start.disabled = true;
            check.disabled = true;

        } else {
            if (i == 1 || i == 3) {
                textWin.innerHTML += `${i} essai`
            }else if(i == 2){
                textWin.innerHTML += `${i}ème essai`
            } else if(i == 3) {
                textWin.innerHTML += `${i}ème essai`
            }
            if (selectNumber > resultRandom) {
                setTimeout(function () {
                    textAttempt.innerHTML = `${selectNumber}? .. c'est moins`;
                }, 500);
            } else if (selectNumber == resultRandom) {
                textAttempt.innerHTML = "";
            } else if (selectNumber < resultRandom){
                setTimeout(function () {
                    textAttempt.innerHTML = `${selectNumber}? .. c'est plus`;
                }, 500);
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
        }


    }
    // boutton rejouer
    const playAgain = document.querySelector('#rejouer')
    playAgain.addEventListener('click', rejouer);

    function rejouer() {
        location.reload();
    }
}