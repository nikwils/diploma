'use strict';

const dataValidation = () => {

    const popup = document.getElementById('callback'),
        fio = document.getElementById('fio');

        popup.addEventListener('input', (event) => {
        let target = event.target;
 
        if(target.matches('#fio')){
            target.value = target.value.replace(/\w/g, '');
           
            fio.addEventListener('change', () => {
                target.value = target.value.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()});
            });
        }
        if(target.matches('#tel')){
            target.value = target.value.replace(/[^0-9\+]/g, '');
        }
        
    });

};

export default dataValidation;