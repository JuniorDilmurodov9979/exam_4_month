    // $(document).ready(function(){
    //     $('.register__list').slick();
    // });
    $('.register__list').slick({
        dots: false,
        infinite: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    let slickNext = document.querySelector('.slick-next');
    slickNext.textContent = "";
    let slickPrev = document.querySelector('.slick-prev');
    slickPrev.textContent = "";