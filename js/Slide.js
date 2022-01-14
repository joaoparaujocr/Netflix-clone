let backgroundHeader = document.querySelector('header');
let indexOfIImg = 0;

let slide = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 5,
    peek: {
        before: 55,
        after: 55
    },
    gap: 1,
});

let slide2 = new Glide('.slide-2', {
    type: 'carousel',
    startAt: 0,
    perView: 5,
    peek: {
        before: 55,
        after: 55
    },
    gap: 1,
});

window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        backgroundHeader.classList.remove('background-show');
        backgroundHeader.classList.add('background-default');    
        return;
    }

    backgroundHeader.classList.remove('background-default'); 
    backgroundHeader.classList.add('background-show');    
})

slide.mount();
slide2.mount()