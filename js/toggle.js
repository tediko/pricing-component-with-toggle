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

const togglePrice = () => {    
    prices.forEach(price => {
        const priceValues = [...price.getAttribute('data-price').split(' ')];
        let animation = price.animate(animationForwards, 500);

        if (isToggle) {
            toggleBtn.classList.remove('active');
            animation.onfinish = () => {
                price.innerHTML = `<span>&dollar;</span>${priceValues[1]}`;
                price.animate(animationReverse, 500);
            };
        } else {
            toggleBtn.classList.add('active');
            animation.onfinish = () => {
                price.innerHTML = `<span>&dollar;</span>${priceValues[0]}`;
                price.animate(animationReverse, 500);
            };
        }  
    })
    isToggle = !isToggle; 
}

export default toggleBtn.addEventListener('click', togglePrice);