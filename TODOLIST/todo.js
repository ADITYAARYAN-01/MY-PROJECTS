let inputs = document.getElementById('inp');
let text = document.querySelector('.text');
let checkbox = document.getElementsByClassName('delete');

function Add(){
    if(inputs.value === ''){
        alert('please enter a task.');
    }
    else{
        let newelement = document.createElement(`ul`);
        newelement.innerHTML = `${inputs.value}<input type="checkbox" class="delete"> `;
        text.appendChild(newelement).style.textTransform = 'upperCase';
        inputs.value = '';
        for(let i = 0 ; i< checkbox.length ; i++){
            let x = checkbox[i];
            x.addEventListener('change' , function(){
                if(x.checked){
                   text.children[i].classList.add('completed');
                }
                else{
                    text.children[i].classList.remove('completed');
                 }
            })
        }
    }
}
function Reset(){
    inputs.value = '';
    // Clear the task list
    text.innerHTML = '';
}
