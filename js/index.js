// Sticky Nav
const navbar = document.querySelector('#header-section nav');
window.onscroll = function () {
    stickyNav();
};
function stickyNav() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add('sticky-nav');
    } else {
        navbar.classList.remove('sticky-nav');
    }
}

// Mobile Menu Icon Animation
const navbarToggler = document.querySelector('.navbar-toggler');
navbarToggler.addEventListener('click', () => {
    navbarToggler.classList.toggle('toggle');
});

// Selected Radio Button Check
const btnContainer = document.querySelector('.solution-radio-box');
const btns = btnContainer.getElementsByClassName('solution-radio');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        const current = document.getElementsByClassName('selected');

        if (current.length > 0) {
            current[0].className = current[0].className.replace(' selected', '');
        }
        this.className += ' selected';
    });
}
