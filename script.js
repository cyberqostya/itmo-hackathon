const headerBlock = document.querySelector('.header');
const headerNav = headerBlock.querySelector('.header__nav');

const aboutBlock = document.querySelector('.about');
const participationBlock = document.querySelector('.participation');
const timingBlock = document.querySelector('.timing');

const introBlock = document.querySelector('.intro');
const introButton = introBlock.querySelector('.intro__button');

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

introButton.addEventListener('click', () => {
  scrollTo(aboutBlock);
});