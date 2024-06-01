document.addEventListener('DOMContentLoaded', function () {
        const header = document.querySelector('.navbar');
        const navbarToggler = document.querySelector('.navbar-toggler');

        window.addEventListener('scroll', function () {
            if (window.scrollY >= 100) {
                header.classList.add('navbarDark');
            } else {
                header.classList.remove('navbarDark');
            }
        });

        navbarToggler.addEventListener('click', function () {
            if (!header.classList.contains('navbarDark')) {
                header.classList.add('navbarDark');
            } else if (window.scrollY < 100) {
                header.classList.remove('navbarDark');
            }
        });
    });
