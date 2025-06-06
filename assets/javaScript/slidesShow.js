document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slide-btn.prev');
    const nextBtn = document.querySelector('.slide-btn.next');
    const indicadores = document.querySelectorAll('.indicator');
    let slideAtivo = 0;
    let intervaloSlides;

    comecarSlideshow();

    prevBtn.addEventListener('click', function() {
        clearInterval(intervaloSlides);
        mudarSlide(slideAtivo - 1);
        comecarSlideshow();
    });

    nextBtn.addEventListener('click', function(){
        clearInterval(intervaloSlides);
        mudarSlide(slideAtivo + 1);
        comecarSlideshow();
    })

    indicadores.forEach((indicador, index) => {
        indicador.addEventListener('click', function(){
            clearInterval(intervaloSlides);
            mudarSlide(index);
            comecarSlideshow();
        })
    });

    const slideshow = document.querySelector('.slideshow');

    slideshow.addEventListener('mouseenter', function(){
        clearInterval(intervaloSlides);
    })

    slideshow.addEventListener('mouseleave', function(){
        comecarSlideshow();
    })

    function comecarSlideshow() {
        clearInterval(intervaloSlides);
        intervaloSlides = setInterval(function() {
            mudarSlide(slideAtivo + 1);
        }, 4000); // Mudar slide a cada 5 segundos
    }

    function mudarSlide(index) {
        // Remover classe active de todos os slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Ajustar índice do slide ativo
        if (index < 0) {
            slideAtivo = slides.length - 1; // Volta para o último slide
        } else if (index >= slides.length) {
            slideAtivo = 0; // Volta para o primeiro slide
        } else {
            slideAtivo = index;
        }

        // Adicionar classe active ao slide atual
        slides[slideAtivo].classList.add('active');

        // Atualizar indicadores
        indicadores.forEach(indicador => {
            indicador.classList.remove('active');
        });
        indicadores[slideAtivo].classList.add('active');
    }
})