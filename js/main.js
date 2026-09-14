 AOS.init();
const burgerBtn = document.getElementById('burgerBtn');
const headerNav = document.querySelector('.header-nav');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    headerNav.classList.toggle('active');
});

document.querySelectorAll('.header-list-link').forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        headerNav.classList.remove('active');
    });
});