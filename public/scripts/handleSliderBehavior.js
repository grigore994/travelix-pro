let container = document.getElementById('container')
let slider = document.getElementById('slider');
let slides = document.getElementsByClassName('slide').length;
let buttons = document.getElementsByClassName('slider-btn');
let slide = document.getElementById("slide");

let slidesPerPage = 4; //into container
let currentPosition = slides - slidesPerPage;
let currentMargin = 0;
let slidesCount = slides - slidesPerPage;
let containerWidth = container.offsetWidth; //slider container width
let slideWidth = slide.offsetWidth;
let spaceBetweenSlides = 20
// let prevKeyActive = false;
// let nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    if (containerWidth <= 1175) {
        slidesPerPage = 3
    }

    if (containerWidth <= 870) {
        slidesPerPage = 2
    }

    if (containerWidth <= 590) {
        slidesPerPage = 1
    }

    currentPosition = slides - slidesPerPage;
    slidesCount = slides - slidesPerPage;
}

checkWidth();

function slideLeft() {
    if (currentPosition < slides - slidesPerPage) {
        slider.style.marginLeft = currentMargin + (slideWidth + spaceBetweenSlides) + 'px';
        currentMargin += (slideWidth + spaceBetweenSlides);
        currentPosition++;
    }
    if (currentPosition === slidesPerPage) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
}


function slideRight() {
    if (currentPosition > 0) {
        slider.style.marginLeft = currentMargin - (slideWidth + spaceBetweenSlides) + 'px';
        currentMargin -= (slideWidth + spaceBetweenSlides);
        currentPosition--;
    }
    if (currentPosition < 1) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
}


//second slider
let container2 = document.getElementById('container2')
let slider2 = document.getElementById('slider2');
let slides2 = document.getElementsByClassName('popular-slide').length;
let buttons2 = document.getElementsByClassName('popular-slider-btn');
let slide2 = document.getElementById("slide2");

let slidesPerPage2 = 1; //into container
let currentPosition2 = slides2 - slidesPerPage2;
let currentMargin2 = 0;
let slidesCount2 = slides2 - slidesPerPage2;
let containerWidth2 = container2.offsetWidth; //slider container width
let slideWidth2 = slide2.offsetWidth;

function slideLeft2() {
    if (currentPosition2 < slides2 - slidesPerPage2) {
        slider2.style.marginLeft = currentMargin2 + (slideWidth2 + spaceBetweenSlides) + 'px';
        currentMargin2 += (slideWidth2 + spaceBetweenSlides);
        currentPosition2++;
    }
    if (currentPosition2 === slidesPerPage2) {
        buttons2[0].classList.add('inactive');
    }
    if (currentPosition2 < slidesCount2) {
        buttons2[1].classList.remove('inactive');
    }
}


function slideRight2() {
    if (currentPosition2 > 0) {
        slider2.style.marginLeft = currentMargin2 - (slideWidth2 + spaceBetweenSlides) + 'px';
        currentMargin2 -= (slideWidth2 + spaceBetweenSlides);
        currentPosition2--;
    }
    if (currentPosition2 < 1) {
        buttons2[1].classList.add('inactive');
    }
    if (currentPosition2 > 0) {
        buttons2[0].classList.remove('inactive');
    }
}

// window.addEventListener("resize", checkWidth);

// function checkWidth() {
//     containerWidth = container.offsetWidth;
//     console.log("container-offset: " + containerWidth)
//     setParams(containerWidth);
// }

// function setParams(w) {
//     if (w < 551) {
//         slidesPerPage = 1;
//         // slidesPerPage = slides;
//     } else {
//         if (w < 901) {
//             slidesPerPage = 2;
//             // slidesPerPage = slides;
//         } else {
//             if (w < 1101) {
//                 // slidesPerPage = slides;
//                 slidesPerPage = 3;
//             } else {
//                 // slidesPerPage =slides;
//                 slidesPerPage = 4;
//             }
//         }
//     }
//     slidesCount = slides - slidesPerPage;
//     if (currentPosition > slidesCount) {
//         currentPosition -= slidesPerPage;
//     };
//     currentMargin = - currentPosition * (100 / slidesPerPage);
//     slider.style.marginLeft = currentMargin + '%';
//     if (currentPosition > 0) {
//         buttons[0].classList.remove('inactive');
//     }
//     if (currentPosition < slidesCount) {
//         buttons[1].classList.remove('inactive');
//     }
//     if (currentPosition >= slidesCount) {
//         buttons[1].classList.add('inactive');
//     }
// }
//
// setParams();

// function slideLeft() {
//     console.log(currentPosition)
//     if (currentPosition != slidesCount) {
//         slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
//         currentMargin -= (100 / slidesPerPage);
//         currentPosition++;
//     };
//     if (currentPosition == slidesCount) {
//         buttons[1].classList.add('inactive');
//     }
//     if (currentPosition > 0) {
//         buttons[0].classList.remove('inactive');
//     }
// };

// function slideRight() {
//     console.log(currentPosition);
//     if (currentPosition != 0) {
//         slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
//         currentMargin += (100 / slidesPerPage);
//         currentPosition--;
//     };
//     if (currentPosition === 0) {
//         buttons[0].classList.add('inactive');
//     }
//     if (currentPosition < slidesCount) {
//         buttons[1].classList.remove('inactive');
//     }
// };