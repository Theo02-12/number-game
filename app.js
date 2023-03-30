function startGame() {

    const random = (max, min) => {
        return Math.floor(Math.random() * (max - min) - min)
    }

    var resultRandom = random(11, 0)
    console.log(resultRandom)

    const btntestNumber = document.querySelector('#testNumber')
    btntestNumber.addEventListener('click', testNumber)
    let i = 2;

    var textWin = document.createElement("h1")
    var br = document.createElement("br")
    container.append(textWin)

    function testNumber() {

        console.log(i)

        const selectNumber = document.querySelector('#chiffre').value;
        const container = document.querySelector('#container')


        if (selectNumber == resultRandom) {
            textWin.innerHTML = "bravo c'est gagné";
            playAgain.style.display = "block";

        } else {
            textWin.innerHTML += `dommage ${i} essais restant`
            textWin.append(br)

        }



        if (i > 0) {
            i--;
        } else if (i == 0) {
            playAgain.style.display = "block";
        }
    }

    const playAgain = document.querySelector('#rejouer')
    playAgain.addEventListener('click', rejouer);
    
    function rejouer() {
        location.reload();
    }
}





