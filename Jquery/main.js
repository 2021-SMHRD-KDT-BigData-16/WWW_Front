var slides1 = document.querySelector('#movie1 .slides'),
            slide1 = document.querySelectorAll('#movie1 .slides li'),
            currentIdx1 = 0,
            slideCount1 = slide1.length,
            slideWidth1 = 166,
            slideMargin1 = 30,
            prevBtn1 = document.querySelector('#movie1 .prev'),
            nextBtn1 = document.querySelector('#movie1 .next');

        slides1.style.width = (slideWidth1 + slideMargin1) * slideCount1 - slideMargin1 + 'px';

        function moveSlide1(num) {
            slides1.style.left = (slideWidth1 + slideMargin1) * -num + "px";
            currentIdx1 = num;
        }
        nextBtn1.addEventListener('click', function () {
            if (currentIdx1 < slideCount1 - 6) {
                moveSlide1(currentIdx1 + 1);
            }
        });
        prevBtn1.addEventListener('click', function () {
            if (currentIdx1 > 0) {
                moveSlide1(currentIdx1 - 4);
            }
        });

        var slides2 = document.querySelector('#movie2 .slides'),
            slide2 = document.querySelectorAll('#movie2 .slides li'),
            currentIdx2 = 0,
            slideCount2 = slide2.length,
            slideWidth2 = 166,
            slideMargin2 = 30,
            prevBtn2 = document.querySelector('#movie2 .prev'),
            nextBtn2 = document.querySelector('#movie2 .next');

        slides2.style.width = (slideWidth2 + slideMargin2) * slideCount2 - slideMargin2 + 'px';

        function moveSlide2(num) {
            slides2.style.left = (slideWidth2 + slideMargin2) * -num + "px";
            currentIdx2 = num;
        }
        nextBtn2.addEventListener('click', function () {
            if (currentIdx2 < slideCount2 - 6) {
                moveSlide2(currentIdx2 + 1);
            }
        });
        prevBtn2.addEventListener('click', function () {
            if (currentIdx2 > 0) {
                moveSlide2(currentIdx2 - 4);
            }
        });

        var slides3 = document.querySelector('#movie3 .slides'),
            slide3 = document.querySelectorAll('#movie3 .slides li'),
            currentIdx3 = 0,
            slideCount3 = slide3.length,
            slideWidth3 = 300,
            slideMargin3 = 30,
            prevBtn3 = document.querySelector('#movie3 .prev'),
            nextBtn3 = document.querySelector('#movie3 .next');

        slides3.style.width = (slideWidth3 + slideMargin3) * slideCount3 - slideMargin3 + 'px';

        function moveSlide3(num) {
            slides3.style.left = (slideWidth3 + slideMargin3) * -num + "px";
            currentIdx3 = num;
        }
        nextBtn3.addEventListener('click', function () {
            if (currentIdx3 < slideCount3 - 6) {
                moveSlide3(currentIdx3 + 1);
            }
        });
        prevBtn3.addEventListener('click', function () {
            if (currentIdx3 > 0) {
                moveSlide3(currentIdx3 - 1);
            }
        });

        