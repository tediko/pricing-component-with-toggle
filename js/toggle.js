const toggleBtn = document.querySelector('[data-toggle]');
const prices = document.querySelectorAll('[data-price]');

const slideAniamtion = (elements, condition) => {
    elements.forEach(element => {
        if (condition == 'forwards') {
            element.children[0].style.animation = 'price-slideLeft-reverse 500ms ease-in forwards';
            element.children[1].style.animation = 'price-slideRight-reverse 500ms ease-in forwards';
        } else {
            element.children[0].style.animation = 'price-slideLeft 500ms ease-in forwards';
            element.children[1].style.animation = 'price-slideRight 500ms ease-in forwards';
            element.children[1].style.animationDelay = '200ms';

        }
    })
}

function togglePrice() {
    if (toggleBtn.classList.contains('active')) {
        toggleBtn.classList.remove('active');
        slideAniamtion(prices, 'forwards');

    } else {
        toggleBtn.classList.add('active');
        slideAniamtion(prices, 'reverse');
    }
}

export default toggleBtn.addEventListener('click', togglePrice);