const accordion = () => {
    const wrapper = document.querySelector('#accordion'),
          answers = document.querySelectorAll('.accordion-block');

    answers.forEach(answer => {
        answer.classList.add('animated', 'fadeInDown');
        answer.style.display = 'none';
    });

    wrapper.addEventListener('click', (e) => {
        let target = e.target,
            header = target.parentNode,
            content =  header.nextElementSibling;
        if (target.tagName == 'SPAN' && window.getComputedStyle(content).getPropertyValue('display') == 'none') {
            content.style.display = 'block';
            header.classList.add('ui-accordion-header-active');
        } else {
            header.classList.remove('ui-accordion-header-active');
            content.style.display = 'none';
        }
    });
};

export default accordion;