// Esse script ativa o carrossel com o Bootstrap
document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('#carouselExample');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3000, // Tempo de intervalo entre os slides
        ride: 'carousel'
    });
});
