'use strict';

const callPopup = () => {

    const callbackBtn1 = document.getElementById('popup'),
        popup = document.getElementById('callback'),
        popupOverlay = document.querySelector('.modal-overlay'),
        inputsCallback = document.querySelectorAll('#callback input');

        console.log(inputsCallback);


    callbackBtn1.addEventListener('click', () => {
        popup.style.display = 'block';
        popupOverlay.style.display = 'block';

    });

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
        
    });
    


};



export default callPopup;