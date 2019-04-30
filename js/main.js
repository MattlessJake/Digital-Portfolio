window.onscroll = function() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
        for (var i = 0; i < link.length; i++) {
            link[i].classList.add('padd')
            link[0].classList.remove('nav-start')
            link[7].classList.remove('nav-end')
        }
    } else {
        navbar.classList.remove('sticky')
        for (var i = 0; i < link.length; i++) {
            link[i].classList.remove('padd')
            link[0].classList.add('nav-start')
            link[7].classList.add('nav-end')
        }
    }
};

let navbar = document.getElementById('nav-list');
let link = navbar.querySelectorAll('a');
let sticky = 636;