let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick =  () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    if( window.scrollY > 50){
        document.querySelector('.scroll-up').classList.add('active');
    } else{
        document.querySelector('.scroll-up').classList.remove('active');

    }
}
function loader(){
    document.querySelector('.loader').classList.add('loaded');
}
const loaded = () => {
    setInterval( loader, 3000 );
}
window.onload = loaded;