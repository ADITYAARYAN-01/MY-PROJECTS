let item = document.getElementsByClassName('accordion');
let show = document.getElementsByClassName('show');
let hide = document.getElementsByClassName('hide');

console.log(show);
console.log(item);
for(let i =0 ; i<item.length ; i++){
    item[i].addEventListener('click',function(){
       let result = item[i].classList.toggle("active");
       if(result == true){
        show[i].style.display = 'none';
        hide[i].style.display = 'block';
       }
       if(result == false){
        show[i].style.display = 'block';
        hide[i].style.display = 'none';
       }
    })
}