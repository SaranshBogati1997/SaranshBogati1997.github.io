const navBar = document.getElementById('myNavBar');
var goUpButton = document.getElementById('goUp');

window.onscroll = function() { showMenu() };

function showMenu() {

    //toggle navigation bar
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navBar.style.top = "0";
    } else {
        navBar.style.top = "-100px";
    }
    //show pageup icon on scroll
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {

        goUpButton.style.display = 'block';
    } else {
        goUpButton.style.display = 'none';
    }

    var scrollValue = document.body.scrollTop;
    var scrollVal = document.documentElement.scrollTop;

    if ((scrollValue > 0 || scrollVal > 0) && (scrollValue < 600 || scrollVal < 600)) {
        document.querySelector('.home').classList.add('active');

    } else {
        document.querySelector('.home').classList.remove('active');
    }

    if ((scrollValue > 500 || scrollVal > 500) && (scrollValue < 1200 || scrollVal < 1200)) {
        document.querySelector('.home').classList.remove('active');

        document.querySelector('.aboutMe').classList.add('active');

    } else {
        document.querySelector('.aboutMe').classList.remove('active');
    }

    if ((scrollValue > 1200 || scrollVal > 1200) && (scrollValue < 2400 || scrollVal < 2400)) {
        document.querySelector('.aboutMe').classList.remove('active');
        document.querySelector('.projects').classList.add('active');
    } else {
        document.querySelector('.projects').classList.remove('active');

    }
    if ((scrollValue > 2400 || scrollVal > 2400) && (scrollValue < 3100 || scrollVal < 3100)) {
        document.querySelector('.projects').classList.remove('active');

        document.querySelector('.skills').classList.add('active');
    } else {
        document.querySelector('.skills').classList.remove('active');

    }
    if (scrollValue > 3100 || scrollVal > 3100) {
        document.querySelector('.skills').classList.remove('active');

        document.querySelector('.contactss').classList.add('active');
    } else {
        document.querySelector('.contactss').classList.remove('active');

    }
}