let inputs = document.querySelectorAll('button');
let result
let combinedResult

inputs.forEach(index=>{
    index.addEventListener('click', () => {
        compute(index)
    });
});

function compute(index){
    switch(index.innerHTML) {
        case 'C':
            result = ''
            break;
        case '=':
            submit(combinedResult)
            break;
    } 
    result = `${result ? result :''}${index.innerHTML === 'C' || index.innerHTML === '=' ? '' : index.innerHTML }`
    combinedResult = document.getElementsByClassName('result')[0].innerHTML = result
}

function submit(combinedResult) {
    let newVal = eval(combinedResult)
    result = newVal
}