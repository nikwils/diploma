'use strict';

const callPopup = () => {

    const popup = document.getElementById('callback'),
        popupOverlay = document.querySelector('.modal-overlay');

    popup.addEventListener('click', (event) => {

        const target = event.target;

        if(target.matches('#modal-close')) {
            popup.style.display = 'none';
            popupOverlay.style.display = 'none';
        }
    });

    document.addEventListener('click', (event) => {
        let target = event.target;

        if(target.matches('#modal-close') || target.closest('.modal-overlay')) {
            popup.style.display = 'none';
            popupOverlay.style.display = 'none';
        }
        if(target.matches('#popup') || target.closest('.col-sm-6') || target.matches('.invert')){
            popup.style.display = 'block';
            popupOverlay.style.display = 'block';
        }
        
    });
    
    


};


export default callPopup;