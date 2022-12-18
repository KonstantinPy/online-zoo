const scroller = document.querySelector(".scroller");
const slider = document.querySelector(".testimonials__slider");

scroller.addEventListener("input", (e) => {
  const screenWidth = window.screen.width;
  let valueProgress = e.target.value;
  if (screenWidth > 1000) {
    slider.style.transform = `translateX(${valueProgress * -297}px)`;
  } else {
    slider.style.transform = `translateX(${valueProgress * -319}px)`;
  }
});

// const overLay = document.querySelector(".overlay__testimonials");

// overLay.addEventListener("click", close);

// function close() {
//     overLay.style.display = "none";
//     let popUp = document.querySelector(".popup");
//     popUp.remove();

// }

// slider.addEventListener("click", function(e){
//     const screenWidth = window.screen.width;
//     let div = e.target.closest("div");

//     if(!div || div.classList.contains("popup") ){
//         return;
//     }
//     if(screenWidth <= 640) {
//         let popUp = div.cloneNode(true);
//         let x = document.createElement("div");
//         x.addEventListener("click", close);
//         x.classList.add("x-close");
//         popUp.classList.add("popup");
//         popUp.append(x);
//         slider.append(popUp);
//         overLay.style.display = "block";
//     }
// });

// let progress = document.querySelector('.scroller');
// let testimonialsList = document.querySelector('.testimonials__slider');
// let darkenedArea = document.querySelector('.overlay__testimonials');

// progress.addEventListener('input', function(e) {
//   const screenWidth = window.screen.width;
//   let valueProgress = e.target.value;
//   if(screenWidth > 1050) {
//     testimonialsList.style.transform = `translateX(${valueProgress * (- 290)}px)`;
//   } else {
//     testimonialsList.style.transform = `translateX(${valueProgress * (- 318)}px)`;
//   }
// });
const darkenedArea = document.querySelector(".darkenedArea");
darkenedArea.addEventListener("click", close);

function close() {
  darkenedArea.style.display = "none";
  let selectTestimonial = document.querySelector(".popup");
  selectTestimonial.remove();
}

slider.addEventListener("click", function (e) {
  const screenWidth = window.screen.width;
  let div = e.target.closest(".testimonials__card");

  if (!div || div.classList.contains("popup")) {
    return;
  }
  if (screenWidth <= 640) {
    let selectTestimonial = div.cloneNode(true);
    let x = document.createElement("div");
    x.addEventListener("click", close);
    x.classList.add("x-close");
    document.body.classList.add("no-scroll");
    selectTestimonial.classList.add("popup");
    selectTestimonial.append(x);
    darkenedArea.append(selectTestimonial);
    darkenedArea.style.display = "flex";
  }
});
// const popup = document.querySelector(".popup");

// const popupReview = document.querySelector(".popup__review");
// const popupHead = document.querySelector(".popup__head");
// const popupPerson = document.querySelector(".popup__person");
// const popupText = document.querySelector(".popup__text");
// const close = document.querySelector(".close");

// const reviews = document.querySelectorAll(".testimonials__card");
// const hd = [
//   "testimonials__info head__one",
//   "testimonials__info head__two",
//   "testimonials__info head__three",
// ];
// const pth = [
//   "url('../assets/icons/user_icon.svg')",
//   "url('../assets/icons/icon1.svg')",
//   "url('../assets/icons/icon2.svg')",
//   "url('../assets/icons/icon3.svg')",
// ];

// reviews.forEach((review) => {
//   review.addEventListener("click", () => {
//     if (document.documentElement.clientWidth <= 999) {
//       const person = review.querySelector(".testimonials__title").innerHTML;
//       popupPerson.innerHTML = person;
//       const head = hd.indexOf(
//         review.querySelector(".testimonials__info").className
//       );
//       console.log(popupHead);
//       popupHead.style.backgroundImage = pth[head];
//       popupHead.style.backgroundRepeat = "no-repeat";
//       const text = review.querySelector(".testimonials__review").innerHTML;
//       popupText.innerHTML = text;
//       popup.classList.add("popup-active");
//     }
//   });
// });

// close.addEventListener("click", () => popup.classList.remove("popup-active"));
// popup.addEventListener("click", (e) => {
//   if (!e.target.closest(".popup__container")) {
//     popup.classList.remove("popup-active");
//   }
// });
