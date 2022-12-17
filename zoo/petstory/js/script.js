let scroller = document.querySelector('.scroller');
let slider = document.querySelector('.testimonials__slider');

scroller.addEventListener('input',function(e){
    const screenWidth = window.screen.width;
    let valueProgress = e.target.value;
    if(screenWidth > 1000){slider.style.transform = `translateX(${valueProgress * (- 297)}px)`;}
    else{{slider.style.transform = `translateX(${valueProgress * (- 319)}px)`;}}
});