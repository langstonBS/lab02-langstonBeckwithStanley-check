
/* chages the name in the butten id */


//check if it was conected
console.log('I am running JS');

//varabels
const nameTage = document.getElementById('names');

//butten id
const thisButten = document.getElementById('the-butten');

//butten eventlissener
thisButten.addEventListener( 'click', clickButten);


function clickButten(){
    //checks if the butten works
    console.log('it workes');
    
    //varable gets butten inubut and saves it in inputState
    const inputState = document.getElementById('nameinput');
    
    //changes the text in the box
    nameTage.style.color= 'blue';
    nameTage.textContent = inputState.value;
}




