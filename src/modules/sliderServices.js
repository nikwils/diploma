'use strict';

const sliderServices = () => {
    
    const servicesCarousel = document.querySelector('.services-carousel'),
        servicesCarouselItems = document.querySelectorAll('.col-sm-6'),
        servicesArrow = document.querySelector('.services-arrow'),
        arrowLeft = document.querySelector('.arrow-left'),
        arrowRight = document.querySelector('.arrow-right');

    let currentSlide = 0;

    const prevSlide = (el, i) => {
        if(i <= 1) {
            arrowLeft.hidden = true;
            el[0].hidden = false;
            el[3].hidden = true;
        }

        arrowRight.hidden = false;

        if( i > 1){
        el[i-1].hidden = false;
        el[i+2].hidden = true;
        };
        console.log(i);
    };

    const nextSlide = (el, i) => {
        
        arrowLeft.hidden = false;

        if(i>0){
            el[i - 1].hidden = true;

            el[i + 2].hidden = false;
            if(i===3) {
                el[i + 1].hidden = false; 
                el[i-2].hidden = true;
            }
        }
            
        if(i === 3){
            arrowRight.hidden = true;
        }
    } 

    servicesArrow.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;

        prevSlide(servicesCarouselItems, currentSlide);
         
        if (target.matches('.arrow-left')) {
            currentSlide--;
            if(currentSlide < 0) {
                currentSlide = 0;
            }
        }
        
        if(target.matches('.arrow-right')) {
            currentSlide++;
        }

        nextSlide(servicesCarouselItems, currentSlide);

        console.log(currentSlide);

    });
    
    

};


export default sliderServices;