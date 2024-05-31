// add class navbarDark on navbar scroll
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY >= 100) {
            header.classList.add('navbarDark');
        } else {
            header.classList.remove('navbarDark');
        }
    });
});