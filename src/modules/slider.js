'use strict';

const slider = () => {

    const itemRelative = document.querySelectorAll('.item');

    const autoSlider = function() {
        
        let i = 0;
        setInterval(() => {
            
            itemRelative[i].parentNode.appendChild(itemRelative[i]); 
            i ++;
            if( i === itemRelative.length) {
                i = 0;
            }
            
        }, 3000);
    };
    autoSlider();


    
};



export default slider;