const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

menuIcon.addEventListener('click', () =>{
    navbar.classList.toggle('active');
});

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active')
            })
        }
    })
}


menuIcon.onClick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


var typed= new typed(".text",{
    Strings:["Frontend Developer","Software Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})