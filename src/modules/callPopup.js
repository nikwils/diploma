'use strict';

const callPopup = () => {

    const popup = document.getElementById('callback'),
        popupOverlay = document.querySelector('.modal-overlay'),
        inputsCallback = document.querySelectorAll('#callback input');

        console.log(inputsCallback);

    popup.addEventListener('click', (event) => {

        const target = event.target;

        if(target.matches('#modal-close')) {
            popup.style.display = 'none';
            popupOverlay.style.display = 'none';
        }
    });

    document.addEventListener('click', (event) => {
        let target = event.target;

        if(!target.matches('#popup') && !target.closest('#callback')) {
            popup.style.display = 'none';
            popupOverlay.style.display = 'none';
        }
        console.log(target.matches('.col-sm-6'));
        if(target.matches('#popup') || target.closest('.col-sm-6') || target.matches('.invert')){
            popup.style.display = 'block';
            popupOverlay.style.display = 'block';
        }
        if(target.matches('.up')) {

        }
        
    });
    


};

export default callPopup;