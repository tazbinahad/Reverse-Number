const userInput = document.querySelector('.input-number')
const submit = document.querySelector('.submit');
const result = document.querySelector('.result')





submit.addEventListener('click', function(){
    event.preventDefault();


    let input = userInput.value;
    let numToString = input.toString()
    let numSplit = numToString.split("")
    
    result.innerHTML = numSplit.reverse().join("") 


    if(typeof(input) == Number){
        
    }

    
})







