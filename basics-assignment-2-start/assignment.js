const task3Element = document.getElementById('task-3');
task3Element.addEventListener('click', firstFunction)



function firstFunction(){
    alert('first function alert')
}

function secondFunction(string){

    alert(`${string}`)

}


function stringsConcataned(string1,string2,string3){
    
    longString = `${string1} ${string2} ${string3}`
    return longString
}

stringsConcataned('bitch', 'ur', 'mom')

alert(longString)