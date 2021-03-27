'use strict';

const slider = () => {
    const itemRelative = document.querySelectorAll('.item');
    itemRelative[0].hidden = false; 
    const autoSlider = function() {
        
        let i = 1;
        setInterval(() => {
            itemRelative.forEach(item => item.hidden = true)
            itemRelative[i].hidden = false; 
            i ++;
            if( i === itemRelative.length) {
                i = 0;
            }
        }, 3000);
    };
    autoSlider();


    
};

export default slider;