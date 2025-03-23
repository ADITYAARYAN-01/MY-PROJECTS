const onbtn = document.querySelector('#on');
const offbtn = document.querySelector('#off');
const image = document.querySelector('.image');
const heading = document.querySelector('h1');

    onbtn.addEventListener('click', function () {
        heading.innerHTML = 'BULB IS ON.';
        // image.innerHTML = `<img src ="https://toppng.com/public/uploads/preview/light-bulb-on-off-png-11553940310nj0ilpfd3h.png" alt ="" height="200px" width="auto">`;
        document.querySelector('img').src = 'https://toppng.com/public/uploads/preview/light-bulb-on-off-png-11553940310nj0ilpfd3h.png';
        onbtn.style.backgroundColor = 'yellow';
        offbtn.style.backgroundColor = 'white';
    })
    offbtn.addEventListener('click', function () {
        heading.innerHTML = 'BULB IS OFF.';
        image.innerHTML = `<img src ="https://www.clipartmax.com/png/middle/5-59774_clipart-copyright-laws.png" alt ="" height="200px" width="auto">`;
        offbtn.style.backgroundColor = 'yellow';
        onbtn.style.backgroundColor = 'white';
    })