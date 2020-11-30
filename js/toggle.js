const toggleBtn = document.querySelector('[data-toggle]');
const prices = document.querySelectorAll('[data-price]');
let isToggle = true;

const animationForwards = [
    { transform: 'translateX(0px)', opacity: '1' },
    { transform: 'translateX(-14px)', opacity: '0' }
];
const animationReverse = [
    { transform: 'translateX(14px)', opacity: '0' }, 
    { transform: 'translateX(0px)', opacity: '1' }
]

const animationOnFinish = (animation, element, value) => {
    animation.onfinish = () => {
        element.innerHTML = `<span>&dollar;</span>${value}`;
        element.animate(animationReverse, 500);
    };
}

const togglePrice = () => {    
    prices.forEach(price => {
        const priceValues = [...price.getAttribute('data-price').split(' ')];
        let animation = price.animate(animationForwards, 500);

        isToggle ? 
            (toggleBtn.classList.add('active'), animationOnFinish(animation, price, priceValues[1])) :
            (toggleBtn.classList.remove('active'), animationOnFinish(animation, price, priceValues[0]));
    })
    isToggle = !isToggle; 
}

export default toggleBtn.addEventListener('click', togglePrice);