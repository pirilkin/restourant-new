/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */

 class SLIDER {
    constructor(options) {
        this.slider = document.querySelector(options.slider);
        this.sliderLine = this.slider.querySelector('.header-slider__line');
        this.slides = this.sliderLine.children;
        this.next = this.slider.querySelector('.slider__next');
        this.prev = this.slider.querySelector('.slider__prev');

        this.dir = options.direction.toUpperCase() == 'X' ? 'X' : 'Y';
        this.timeMove = options.time != undefined ? options.time : 1000;
        this.width = this.slider.clientWidth;
        this.height = this.slider.clientHeight;
        this.moveSize = "X" === this.dir ? this.width : this.height;

        this.activeSlide = 0;
        this.sliderLine.style = `
                               position:relative;
                               overflow:hidden;`;

        for (let i = 0; i < this.slides.length; i++) {
            const sl = this.slides[i];
            sl.style = ` position:absolute;
                         width: ${this.width}px;
                         height: ${this.height}px`;
            
            if (i != this.activeSlide) {
                sl.style.transform = `translate${this.dir}(${this.moveSize}px)`
                sl.classList.add('display-none');
            }
            else {
                this.slides[this.activeSlide].classList.add('z-index');
                this.slides[this.activeSlide].classList.remove('display-none');
            }
            if (i === this.slides.length - 1) {
                sl.style.transform = `translate${this.dir}(${-this.moveSize}px)`
            }
        }
        if (options.autoplay) {
            let interval = setInterval(() => {
                this.move(this.next);
            }, this.timeMove);
            this.slider.addEventListener('mouseenter', () => { clearInterval(interval) })
            this.slider.addEventListener('mouseleave', () => {
                interval = setInterval(() => {
                    this.move(this.next);
                }, this.timeMove)
            })
        }
        this.next.addEventListener('click', () => this.move(this.next))
        this.prev.addEventListener('click', () => this.move(this.prev))

        window.addEventListener('resize', () => {
            this.width = this.slider.clientWidth;
            this.height = this.slider.clientHeight;
            this.moveSize = "X" === this.dir ? this.width : this.height;
            this.sliderLine.style = `
                               position:relative;
                               overflow:hidden;`
            for (let i = 0; i < this.slides.length; i++) {
                const sl = this.slides[i];
                sl.style = ` position:absolute;
                                             width: ${this.width}px;
                                             height: ${this.height}px`;
                if (i != this.activeSlide) {
                    sl.style.transform = `translate${this.dir}(${this.moveSize}px);`;
                    sl.classList.add('display-none');
                }
                if (i === this.slides.length - 1) {
                    sl.style.transform = `translate${this.dir}(${-this.moveSize}px)`
                }
            }
        })

    }
    move(btn) {
        this.next.disabled = true;
        this.prev.disabled = true;
        setTimeout(() => {
            this.next.disabled = false;
            this.prev.disabled = false;
        }, this.timeMove + 50);

        let btnLeftOrRight = btn == this.next ? this.moveSize * -1 : this.moveSize;
        for (let i = 0; i < this.slides.length; i++) {
            const slide = this.slides[i];
            slide.style.transition = '0ms';
            if (i != this.activeSlide) {
                slide.style.transform = `translate${this.dir}(${btnLeftOrRight * -1}px)`;
            }
        }
        this.slides[this.activeSlide].style.transform = `translate${this.dir}(${btnLeftOrRight}px)`;
        this.slides[this.activeSlide].style.transition = this.timeMove + 'ms ease';
        this.slides[this.activeSlide].classList.remove('z-index');
        this.slides[this.activeSlide].classList.add('display-none');

        if (btn == this.next) {
            this.activeSlide++;
            if (this.activeSlide >= this.slides.length) {
                this.activeSlide = 0;
            }
        }
        else if (btn == this.prev) {
            this.activeSlide--;
            if (this.activeSlide < 0) {
                this.activeSlide = this.slides.length - 1;
            }
        }
        this.slides[this.activeSlide].style.transform = `translate${this.dir}(0px)`;
        this.slides[this.activeSlide].style.transition = `1s`;
        this.slides[this.activeSlide].classList.add('z-index');
        this.slides[this.activeSlide].classList.remove('display-none');
        this.slides[this.activeSlide].style.transition = this.timeMove + 'ms';

    }

}

const slider = new SLIDER({
    slider: '.header-slider',
    direction: 'X',
    time: 500,
    autoplay: false
})

//Второй слайдер секции food в 16:04

class FOODSLIDER {
    constructor(options) {
        this.sliderFood = document.querySelector(options.slider);
        this.sliderLineFood = this.sliderFood.querySelector('.food-slider-line');
        this.slidesFood = this.sliderLineFood.children;
        this.dirFood = options.direction.toUpperCase() == 'X' ? 'X' : 'Y';
        // console.log(this.slidesFood);
        this.nextFood = this.sliderFood.querySelector('.food-slider__next');
        this.prevFood = this.sliderFood.querySelector('.food-slider__prev');
        this.widthFood = this.sliderFood.clientWidth;
        this.heightFood = this.sliderFood.clientHeight;
        this.moveSizeFood = "X" === this.dirFood ? this.widthFood : this.heightFood;
        this.sliderLineFood.style = `position:relative;
                                    overflow:hidden;`;
        // console.log(this.heightFood);
        // for (let i = 0; i < this.slidesFood.length; i++) {
        //     const slFood = this.slidesFood[i];
        //     slFood.style = ` position:absolute;
        //          width: 33.3%;
        //          height: ${this.heightFood}px`;

        // if (i != this.activeSlide) {
        //     slFood.style.transform = `translate${this.dir}(${this.moveSize}px)`
        // }
        // if (i === this.slides.length - 1) {
        //     slFood.style.transform = `translate${this.dir}(${-this.moveSize}px)`
        // }
        // }
        this.nextFood.addEventListener('click', () => this.moveFood(this.nextFood))
        this.prevFood.addEventListener('click', () => this.moveFood(this.prevFood))
        const activeSlideFood = 0;
        // console.log(this.slidesFood.length);
    }
    moveFood(btn) {
        let btnLeftOrRightFood = btn == this.nextFood ? this.moveSizeFood * -1 : this.moveSizeFood;

        // console.log(btnLeftOrRightFood);

        // for (let i = 0; i < this.slidesFood.length; i++) {
        //     const slideFood = this.slidesFood[i];
        //     // slideFood.style.transition = '0ms';
        //     if (i != this.activeSlideFood) {
        //         slideFood.style.transform = `translate${this.dirFood}(${btnLeftOrRightFood * -1/(this.slidesFood.length-1)}px)`;
        //     }
        // }
        // this.slidesFood[this.activeSlideFood].style.transform = `translate${this.dirFood}(${btnLeftOrRightFood/(this.slidesFood.length-1)}px)`;
        // this.slides[this.activeSlide].style.transition = this.timeMove + 'ms ease';
        // this.slides[this.activeSlide].classList.remove('zInsex');
        // this.slides[this.activeSlide].classList.add('display-none');

        if (btn == this.nextFood) {

            // this.activeSlideFood++;
            this.slidesFood[this.slidesFood.length - 2].style.transform =
                `translate${this.dirFood}(${btnLeftOrRightFood / (this.slidesFood.length - 1)}px)`;
            console.log(this.slidesFood[this.slidesFood.length - 2]);
            // if (this.activeSlideFood >= this.slidesFood.length) {
            //     this.activeSlideFood = 0;
            // }
        }
        else if (btn == this.prevFood) {
            this.slidesFood[0].style.transform =
                `translate${this.dirFood}(-${100 / (this.slidesFood.length - 1)}%)`;
            console.log(this.slidesFood[0]);

            // this.slidesFood.style.transform = 
            // `translate${this.dirFood}(${btnLeftOrRightFood / (this.slidesFood.length - 1)}px)`;
            // this.activeSlideFood--;
            // if (this.activeSlideFood < 0) {
            //     this.activeSlideFood = this.slidesFood.length - 1;
            // }
        }
        // this.slidesFood[this.activeSlideFood].style.transform = `translate${ this.dirFood } (0px)`;
        // this.slides[this.activeSlide].style.transition = this.timeMove + 'ms'

    }
}
const slider1 = new FOODSLIDER({
    slider: '.food-slider',
    direction: 'X',
    time: 1000,
    autoplay: false
})


const launcherSliderBlock = document.querySelector('.food-line');
const launcherSlider = document.querySelector('.food-block-content-arrow');
const foodContainerRow = document.querySelector('.food-container-row');
const sliderArrow = document.querySelector('.food-slider-arrows');

const firstSlide = document.querySelector('.food-block-content__item-first');
const secondSlide = document.querySelector('.food-block-content__item-second');
const thirdSlide = document.querySelector('.food-block-content__item-third');


launcherSlider.onclick = function (event) {
    // вывести тип события, элемент и координаты клика
    console.log("sdad");
    launcherSlider.classList.toggle('food-slider-line__item-invisible');
    foodContainerRow.classList.toggle('food-slider');

    if (launcherSlider.classList.contains('food-slider-line__item-invisible')) {
        firstSlide.classList.remove('food-slider-line__item-invisible');
        sliderArrow.remove('food-slider-line__item-invisible');
    } else {
        firstSlide.classList.add('food-slider-line__item-invisible');
        sliderArrow.add('food-slider-line__item-invisible');
    }
}




//бургер и все что с ним связано
const burger = document.querySelector('.burger');
const burgerLine = document.querySelector('.burger__line');
const headerNavContainer = document.querySelector('.header-nav-container');


burger.onclick = () => {
    burger.classList.toggle("active");
    headerNavContainer.classList.toggle('activePopup');
}

const checkbox = document.getElementById('myonoffswitch');
const onoffswitch = document.getElementById('onoffswitch');
const switchBtn = document.querySelector('.switch-btn');

const headerNavUserColor = document.querySelector('.header-nav-user-color');
const headerNavUserItem = document.querySelector('.header-nav-user__item');
const headerNavUserItemIcon = document.querySelector('.header-nav-user__item-icon');
const foodBlockContentText = document.querySelectorAll('.food-block-content-text');
const headLink = document.head.children[5];
headLink.setAttribute('href', 'favicon/favicon-red.ico');

switchBtn.onclick = () => {
    switchBtn.classList.toggle('switch-on');
    if (switchBtn.classList.contains('switch-on')) {
        body.classList.add('green');
        body.classList.remove('red');
        headLink.setAttribute('href', 'favicon/favicon-green.ico');
        foodBlockContentText.forEach(element => {
            element.classList.remove('red-bg-opacity');
            element.classList.add('green-bg-opacity');
        });
    }
    else {
        body.classList.add('red');
        body.classList.remove('green');
        headLink.setAttribute('href', 'favicon/favicon-red.ico');
        foodBlockContentText.forEach(element => {
            element.classList.remove('green-bg-opacity');
            element.classList.add('red-bg-opacity');
        });

    }
}
headerNavUserItem.onclick = () => {
    headerNavUserColor.classList.toggle('is-hidden');
    headerNavUserItemIcon.classList.toggle('is-rotated');
}
// настройка маски для инпута количества людей
const patternData = /\D/g;
document.getElementById('people').oninput = function (e) {
    let cursor = this.selectionStart, pattern = patternData;
    if (this.value.match(pattern)) {
        this.value = this.value.replace(pattern, '');
        cursor--;
    }
    this.selectionEnd = cursor;
}

//   console.log(document.head.children[5].setAttribute('href', 'favicon/favicon-green.ico'));

// // Подключает
// function addStyleSheets (href) {
//     var $head = document.head,
//         $link = document.createElement('link');

//     $link.rel = 'stylesheet';
//     $link.href = href;

//     $head.appendChild($link);
// }
