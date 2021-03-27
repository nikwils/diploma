'use strict';

const slider = () => {
    console.log('1');  
    const itemRelative = document.querySelectorAll('.item');
    itemRelative[0].hidden = false; 
    const autoSlider = function() {
        
        let i = 1;
        setInterval(() => {
            console.log('2');
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