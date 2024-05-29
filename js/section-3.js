const cardContainerElement = document.querySelector('.card-container');
const cardNavButtonElements = document.getElementsByClassName('card-nav-button');
const cardNavButtonLeftElement = cardNavButtonElements[0];
const cardNavButtonRightElement = cardNavButtonElements[1];
const cardSlideElement = document.getElementsByClassName('card-slide')[0];
const cardElements = cardContainerElement.getElementsByClassName('card');

let minCardSlide = 1;
let maxCardSlide = cardElements.length;
let currentCardSlide = 1;

const DIRECTION_LEFT = 'LEFT';
const DIRECTION_RIGHT = 'RIGHT';
const CLASS_ACTIVE = 'active';

function slideCard(direction) {    
    const oldCardIndex = currentCardSlide - 1;

    if (direction === DIRECTION_LEFT) {
        if (currentCardSlide <= minCardSlide) return;
        currentCardSlide--;
    } else if (direction === DIRECTION_RIGHT) {
        if (currentCardSlide >= maxCardSlide) return;
        currentCardSlide++;
    } else {
        return;
    }

    cardSlideElement.textContent = currentCardSlide;

    const newCardIndex = currentCardSlide - 1;
    const oldCardElement = cardElements[oldCardIndex];
    const newCardElement = cardElements[newCardIndex];

    oldCardElement.classList.remove(CLASS_ACTIVE);
    newCardElement.classList.add(CLASS_ACTIVE);
}

cardNavButtonLeftElement.addEventListener('click', () => {
    slideCard(DIRECTION_LEFT);
})

cardNavButtonRightElement.addEventListener('click', () => {
    slideCard(DIRECTION_RIGHT);
})