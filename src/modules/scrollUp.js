'use strict';


const scrollUp = () => {

    const classUp = document.querySelector('.span-up'),
        idUp = document.getElementById('up');

        window.addEventListener('scroll', function() {
            
            classUp.hidden = (pageYOffset < document.documentElement.clientHeight);
            
        });

        classUp.addEventListener('click', () => {
            
            window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

};

export default scrollUp;
