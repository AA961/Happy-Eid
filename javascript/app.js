let star = document.getElementById('star')
let star2 = document.getElementById('star2')
let moon = document.getElementById('moon')
let rock = document.getElementById('rock')
let masjid = document.getElementById('masjid')
let header = document.getElementById('header')
let lamp = document.getElementById('lamp')
let mainText = document.querySelector('.main-text');


window.addEventListener('scroll',function(){
    let value = window.scrollY;
    star.style.bottom = value  * 0.05 + '%';
    star2.style.bottom = value  * 0.25 + '%';
    moon.style.bottom = value  * -0.5 + 'px';
    rock.style.bottom = value  * -0.75 + 'px';
    masjid.style.bottom = value  * -0.15 + 'px';
    mainText.style.right = -100 + value  * 0.5 + '%';
    mainText.style.top = 50 + value  * 0.1 + '%';
    header.style.top = value * 0.5 + 'px';


})

let toggleMenu = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');

toggleMenu.onclick = function(){
    toggleMenu.classList.toggle('active')
    navigation.classList.toggle('active')

}
