function startGame(){

    const random = (max, min) =>{
        return Math.floor(Math.random() * (max - min) - min)
    }

    var resultRandom = random(11, 0)
    console.log(resultRandom)

const btntestNumber = document.querySelector('#testNumber')
btntestNumber.addEventListener('click', testNumber)
let i = 2;

var textWin = document.createElement("h1")
textWin.textContent = "bravo"
var text = document.createElement("h1")
text.textContent = "dommage"

    function testNumber(){
    
    console.log(i)
    
    const selectNumber = document.querySelector('#chiffre').value;
    const container = document.querySelector('#container')
    
    
    if(selectNumber == resultRandom){
        container.append(textWin)
        
    }else{
        container.appendChild(text)
        
    }
  
    if(i > 0){
        i--;
    }else if (i == 0){
      alert('0 essais restant')
    }
}


}





