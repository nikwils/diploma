'use strict';

const accordeonSection = () => {

    const accordeon = document.querySelector('.accordeon'),
        elementsAccordeon = document.querySelectorAll('.accordeon > .element'),
        elementContent = document.querySelectorAll('.accordeon > .element-content');

    accordeon.addEventListener('click', (event) => {
        let target = event.target;

        console.log(target);

        if(target.matches('.title')){
            elementsAccordeon.forEach((el) => {
                el.classList.remove('active');
                el.lastElementChild.style.display = 'none';
            });
            
            target.closest('.element').classList.add('active');
            target.closest('.element').lastElementChild.style.display = 'block';
        }


    });

};

export default accordeonSection;

