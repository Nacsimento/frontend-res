const btnhamburgur = document.querySelector('#btnhamburgur');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeelems = document.querySelectorAll('.has-fade');

btnhamburgur.addEventListener('click', function(){
    console.log('open hamburgur');

    if(header.classList.contains('open')){
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeelems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        

    }
    else{
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeelems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
        
    }

});