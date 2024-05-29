const liElements = document.querySelectorAll('#section-4 .content ul li');

liElements.forEach(liElement => {
    const descriptionElement = liElement.querySelector('.description');
    
    liElement.addEventListener('mouseover', () => {
        descriptionElement.classList.add('active');
    });

    liElement.addEventListener('mouseleave', () => {
        descriptionElement.classList.remove('active');
    });
});
