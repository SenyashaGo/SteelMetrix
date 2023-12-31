
document.addEventListener("DOMContentLoaded", function () {
    const lastCard = document.querySelector('.last-card');
    const loader = lastCard.querySelector('.loader');
    const cardContent = lastCard.querySelector('.card-content');

    loader.style.animationPlayState = 'running';

    setTimeout(function () {
        loader.style.animationPlayState = 'paused';
        loader.style.display = 'none';
        cardContent.style.visibility = 'visible';
    }, 3000);
});
