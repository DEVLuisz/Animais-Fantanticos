import ScrollSuave from './scroll-suave.js';
import initAnimacaoScroll from './animate-scroll.js';
import initAccordion from './accordion.js';
import initTabNav from './tabNav.js';
import initModal from './modal.js';
import initTooltip from './tooltip.js';
import initdropDownMenu from './dropDownMenu.js';
import initMenuMobile from './menuMobile.js';
import initFuncionamento from './date.js';
import initFetchAnimais from './fetchAnimais.js';
import initFetchBitcoin from './fetchBitcoin.js';
import CountDown from './countdown.js';
import Destructuring from './Destructuring.js';
import regex from './Regex.js';
import  SlideNav  from './animais.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAnimacaoScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initdropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
Destructuring();
regex();


//Countdown
const diasPara = new CountDown('17 October 2022 23:59:59 GMT-0300');
console.log(diasPara.total);

//JSON
fetch('./JSON/dados.json')
.then(r => r.json())
.then(json => {
  json.forEach(ano => {
    //console.log(ano.idade)
  });
});

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-controls');

