const form = document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    console.log(height);
    const weight = parseInt(document.querySelector('#weight').value);
    console.log(weight);
    const result = document.querySelector('textarea');
    result.style.display = 'block';
    if(height === '' || height<0 || isNaN(height)){
        result.textContent = 'please give a valid height';
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        result.textContent = 'please give a valid weight';
    }
    else{
        const bmi =(weight/((height*height)/10000)).toFixed(2);
        result.textContent = bmi;
        if(bmi <18.6) {
            result.style.color = 'red';
            result.textContent += ' : you are underweight';
        }
        else if(bmi >24.9) {
            result.style.color = 'red';
            result.textContent += ' : you are overweight';
        }
    }

})