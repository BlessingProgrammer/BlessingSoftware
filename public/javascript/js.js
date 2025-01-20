const toggleButton = document.querySelector('.toggle-button');
const toggleImage = toggleButton.querySelector('img');
const subMenu = document.querySelector('.sub-menu');

toggleButton.addEventListener('click', () => {
    subMenu.classList.toggle('active');
    toggleImage.src = subMenu.classList.contains('active')
        ? '/images/open.png'
        : '/images/close.png';
});
