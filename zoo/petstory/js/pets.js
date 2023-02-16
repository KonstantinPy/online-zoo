import {
    petsScroller
} from "./contains.js";

import {
    petsCards
} from "./cards_pets.js";

let indexArr,
    direction;

const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
        
    }
console.log(array);
    return array;
    
};
// const shuffle = (array) => {
//     let currentIndex = array.length,
//         randomIndex;
//     for(let i = currentIndex; i > 0;) {
//         randomIndex = Math.floor(Math.random() * i);
    
//        i--;
//         [array[i], array[randomIndex]] = [
//             array[randomIndex], array[i]];;
// console.log(array[i], array[randomIndex],i, randomIndex);
//     }

//     return array;
// };

const petsRandomize = () => {
    const petsScrollerCards = document.querySelectorAll('.pets_scroller_card');
    // console.log(petsScrollerCards);
    /* Onload */
    if (!indexArr) {
        let chunk1 = shuffle([0, 1, 2, 3, 4, 5, 6, 7]).slice(2),
            chunk2 = shuffle([0, 1, 2, 3, 4, 5, 6, 7]).slice(2),
            chunk3 = shuffle([0, 1, 2, 3, 4, 5, 6, 7]).slice(2);
        indexArr = [...chunk1, ...chunk2, ...chunk3];
        console.log(indexArr);

        /* For scrolls */
    } else {
        /* Big screens */
        if (window.innerWidth > 850) {
            /* Randomizer for right scroll */
            if (direction === 1) {
                indexArr = [...shuffle([0, 1, 2, 3, 4, 5, 6, 7]).slice(2),
                    ...indexArr.slice(12),
                    ...shuffle([0, 1, 2, 3, 4, 5, 6, 7]).slice(2)
                ];
                console.log(indexArr);
                /* Randomizer for left scroll */
            } else {
                indexArr = [...shuffle([0, 1, 2, 3, 4, 5, 6, 7]).slice(2),
                    ...indexArr.slice(0, 6),
                    ...shuffle([0, 1, 2, 3, 4, 5, 6, 7]).slice(2)
                ];
            }

            /* Small screens */
        } else {
            /* Randomizer for right scroll */
            if (direction === 1) {
                indexArr = [...shuffle([0, 1, 2, 3, 4, 5, 6, 7]).slice(2),
                    ...indexArr.slice(10, 14),
                    ...shuffle([0, 1, 2, 3, 4, 5, 6, 7])
                ];
                console.log(indexArr);
                /* Randomizer for left scroll */
            } else {
                indexArr = [...shuffle([0, 1, 2, 3, 4, 5, 6, 7]).slice(2),
                    ...indexArr.slice(2, 6),
                    ...shuffle([0, 1, 2, 3, 4, 5, 6, 7])
                ];
            }
        }
    }


    petsScrollerCards.forEach((item, index) => {
        const cardContent = item.lastElementChild,
            cardIcon = cardContent.lastElementChild,
            cardText = cardContent.firstElementChild;

        /* Input card icon */
        if (petsCards[indexArr[index]].type === 'herbivore') {
            cardIcon.src = '../assets/icons/banana-bamboo_icon.svg';
        } else {
            cardIcon.src = '../assets/icons/meet-fish_icon.svg';
        }

        /* Input card text */
        cardText.firstElementChild.textContent = petsCards[indexArr[index]].name;
        cardText.lastElementChild.textContent = petsCards[indexArr[index]].location;

        /* Input card image */
        item.firstElementChild.style.background = `url(${petsCards[indexArr[index]].url})`;
        item.firstElementChild.style.backgroundSize = 'cover';
        item.firstElementChild.style.backgroundPosition = 'center center';
        if (petsCards[indexArr[index]].name === 'eagles') {
            item.firstElementChild.style.backgroundPosition = '10% center';
        }

    });
};


const petsScrollLeft = () => {
    direction = -1;
    if (window.innerWidth > 1350) {
        petsScroller.style.transform = 'translate(calc((31.5517% + 27px) * 3))';
    } else if (window.innerWidth <= 1350 && window.innerWidth > 850) {
        petsScroller.style.transform = 'translate(calc((31.4% + 26px) * 3))';
    } else if (window.innerWidth <= 850 && window.innerWidth > 320) {
        petsScroller.style.transform = 'translate(calc((48.1% + 25px) * 2))';
    }
};

const petsScrollRight = () => {
    direction = 1;
    if (window.innerWidth > 1350) {
        petsScroller.style.transform = 'translate(calc((-31.5517% - 27px) * 3))';
    } else if (window.innerWidth <= 1350 && window.innerWidth > 850) {
        petsScroller.style.transform = 'translate(calc((-31.4% - 26px) * 3))';
    } else if (window.innerWidth <= 850 && window.innerWidth > 320) {
        petsScroller.style.transform = 'translate(calc((-48.1% - 25px) * 2))';
    }
};


export {
    shuffle,
    petsScrollLeft,
    petsScrollRight,
    petsRandomize
};