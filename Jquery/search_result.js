var slides = document.querySelector('#search_result .slides'),
            slide = document.querySelectorAll('#search_result .slides li'),
            currentIdx = 0,
            slideCount = slide.length,
            slideWidth = 166,
            slideMargin = 30,
            prevBtn = document.querySelector('#search_result .prev'),
            nextBtn = document.querySelector('#search_result .next');

        slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px';

        function moveSlide(num) {
            slides.style.left = (slideWidth + slideMargin) * -num + "px";
            currentIdx = num;
        }
        nextBtn.addEventListener('click', function () {
            if (currentIdx < slideCount - 6) {
                moveSlide(currentIdx + 1);
            }
        });
        prevBtn.addEventListener('click', function () {
            if (currentIdx > 0) {
                moveSlide(currentIdx - 1);
            }
        });