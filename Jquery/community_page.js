var slides5 = document.querySelector('#movie5 .slides'),
    slide5 = document.querySelectorAll('#movie5 .slides li'),
    currentIdx5 = 0,
    slideCount5 = slide5.length,
    slideWidth5 = 535,
    slideMargin5 = 0,
    prevBtn5 = document.querySelector('#movie5 .prev'),
    nextBtn5 = document.querySelector('#movie5 .next');

slides5.style.width = (slideWidth5 + slideMargin5) * slideCount5 - slideMargin5 + 'px';

function moveSlide5(num) {
    slides5.style.left = (slideWidth5 + slideMargin5) * -num + "px";
    currentIdx5 = num;
}
nextBtn5.addEventListener('click', function () {
    if (currentIdx5 < slideCount5 - 5) {
        moveSlide5(currentIdx5 + 1);
    }
});
prevBtn5.addEventListener('click', function () {
    if (currentIdx5 > 0) {
        moveSlide5(currentIdx5 - 1);
    }
});