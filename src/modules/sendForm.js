'use strict';

const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся';

    const statusMessage = document.createElement('div');
    const form = document.getElementById('form-callback'),
        popup = document.getElementById('callback'),
        popupOverlay = document.querySelector('.modal-overlay');

        form.addEventListener('submit', (event) => {
        
        statusMessage.style.cssText = 'font-size: 2rem;';

        const target = event.target;

        event.preventDefault();
        statusMessage.hidden = false;
        statusMessage.textContent = loadMessage;
        form.appendChild(statusMessage);
        
        const formData = new FormData(form);

        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
        
        postData(body)
            .then((response) => {
                if(response.status !== 200) {
                    throw new Error('status network not 200');
                }

                statusMessage.textContent = successMessage;

                setTimeout(() => {
                    popup.style.display = 'none';
                    popupOverlay.style.display = 'none';
                },6000);
                
                
                setTimeout(()=> {
                    statusMessage.hidden = true;
                }, 4000);
                
            })
            .catch(error => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
            
        });        

    const postData = (body) => {

        const inputs = document.querySelectorAll('input');
        inputs.forEach((input, i) => {
            if(i==2){
                input.value = 'Отправить';
            };
            input.value = '';
            if(i==2){
                input.value = 'Отправить';
            };
            
        });

        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        });

    };
};

export default sendForm;