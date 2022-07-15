

// Add event listener for dom content load
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('#burger');
    const menu = document.querySelector('#menu');

    burger.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
})