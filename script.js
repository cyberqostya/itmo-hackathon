// Объявление элементов блоков

  // Хедер
const headerBlock = document.querySelector('.header');
const headerNav = headerBlock.querySelector('.header__nav');

// Intro
const introBlock = document.querySelector('.intro');
const introButton = introBlock.querySelector('.intro__button');

// About
const aboutBlock = document.querySelector('.about');
const aboutButton = aboutBlock.querySelector('.about__button');

// Participation
const participationBlock = document.querySelector('.participation');
const participationButton = participationBlock.querySelector('.participation__button');

// Timing
const timingBlock = document.querySelector('.timing');
const timingButton = timingBlock.querySelector('.timing__button');


// Функция скролла к верху элемента 
function scrollTo(element) {
  element.scrollIntoView({ behavior: 'smooth' });
}

// Обработчик сравнивает текстконтент элемента, на который нажали, и заголовков блоков страницы
headerNav.addEventListener('click', (e) => {
  if (e.target.classList.contains('header__list-item')) {
    for (let el of [aboutBlock, participationBlock, timingBlock]) {
      if (el.querySelector('.block-title').textContent === e.target.textContent) {
        scrollTo(el);
        break;
      }      
    }
  }
});

introButton.addEventListener('click', () => { scrollTo(aboutBlock); });
aboutButton.addEventListener('click', () => { scrollTo(participationBlock); });
participationButton.addEventListener('click', () => { scrollTo(timingBlock); });