import 'normalize.css';
import '../../components/fonts/_fonts.scss'
import '../../components/head/head.pug'
import '../../components/header/header'
import '../../components/menu/menu.scss'
import '../../components/social/social.scss'

import './index.scss'

import 'swiper/dist/css/swiper.min.css'


import Swiper from 'swiper/dist/js/swiper.min'
import 'fullpage.js/dist/jquery.fullpage.min';


import Typed from 'typed.js';

$(document).ready(function () {

    $('#fullpage').fullpage({
        menu: '#menu',
        anchors:['index', 'service', 'portfolio', 'about-us', 'contact'],
        // navigation: true,
        // navigationPosition: 'left',
        // navigationTooltips: ['index', 'service', 'methodology', 'about-us', 'contact'],
        // showActiveTooltip: true,
        // slidesNavigation: false,
        // slidesNavPosition: 'middle',


        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        // fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        verticalCentered: false,
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        sectionsColor : ['#ccc', '#fff'],
        // fixedElements: '.container-social',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        // parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},


        // afterLoad() {
        //     let elementAnchor = $('.position');
        //     let menuElement = $('.menu-item');
        //
        //     console.log(menuElement);
        //
        //     if (elementAnchor.length >= 0) {
        //         getPositionElements(menuElement);
        //     }
        //
        //     function getPositionElements (elementMenu) {
        //         let scroll = $(document).scrollTop();
        //         console.log(scroll);
        //         for(let i = 0; i <= elementAnchor.length-1; i++) {
        //             if ($(elementAnchor[i]).position().top <= scroll && $(elementAnchor[i]).position().top + $(elementAnchor[i]).height() > scroll) {
        //                 elementMenu[i].classList.toggle('active-menu-element', true);
        //             } else {
        //                 elementMenu[i].classList.toggle('active-menu-element', false);
        //             }
        //         }
        //     }
        // }
    });


    /*
    *
    * Вызов функции получения позиции заголовков разделов при скроле страницы.
    * В функцию передаётся один параметр.
    * 1. список элементов меню которые необходимо стилизовать.
    *
    */

    //
    //
    // /*
    // *
    // * Логика функции получения позиции заголовков разделов и стилизация элементов меню.
    // * Функция пренимает один параметр переменного типа - елементы меню.
    // *
    // * Логика работы функции.
    // * 1. проверяем есть ли в масиве элементы.
    // * 2. циклом for проходим по всем элементам масива.
    // * 3. на каждой итерации цикла создаём переменную, значением которой является вызов функции getBoundingClientRect()
    // * для каждого элемента из масива.
    // *
    // * Примечание.
    // *
    // * Обращение к каждому переданному элементу меню, соответствует индексам из масива получения (заголовка раздела).
    // *
    // */
    //


    /*
    *
    * Инициализация анимации текста
    *
    */

    let options = {
        strings: ["Разработка", "Дизайн", "SEO", "SMM"],
        typeSpeed: 100,
        smartBackspace: false,
        startDelay: 700,
        backDelay: 1000,
        loop: true,
        backSpeed: 40,
        showCursor: false
    };

    let typed = new Typed(".dinamic-text-header", options);

    /*
    *
    * Инициализачия слайдера с услугами.
    *
    */

    let slider_service  = new Swiper('.service-slider', {
        direction: 'horizontal',
        loop: true,
        // grabCursor: true,
        preventClicks: true,
        preloadImages: true,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false
        // },
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 2
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
    });

    /*
    *
    * Инициализачия слайдера портфолио.
    *
    */

    let slider_portfolio = new Swiper('.methodology-slider', {
        direction: 'horizontal',
        autoHeight: true,
        effect: 'coverflow',
        slidesPerColumnFill: "string",
        grabCursor: true,
        preventClicks: true,
        preloadImages: true,
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 2
        },
        coverflowEffect: {
            rotate: 20,
            slideShadows: false,
            depth: 30,
            modifier: 3
        },
        mousewheel: {
            invert: false,
            releaseOnEdges: true
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
    });


});