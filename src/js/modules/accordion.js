const accordion = () => {
    const wrapper = document.querySelector('#accordion'),A
          answers = document.querySelectorAll('.accordion-block');

    answers.forEach(answer => {
        answer.classList.add('animated', 'fadeInDown', 'none');
    });

    wrapper.addEventListener('click', (e) => {
        let target = e.target,
            content =  target.parentNode.nextElementSibling;

        if (target.tagName == 'SPAN') {
            target.parentNode.classList.toggle('ui-accordion-header-active');
            content.classList.toggle('ui-accordion-content-active');
            content.classList.toggle('none');
        }
    });
};

export default accordion;