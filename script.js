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

// Обработчики на кнопки блоков для скролла
introButton.addEventListener('click', () => { scrollTo(aboutBlock); });
aboutButton.addEventListener('click', () => { scrollTo(participationBlock); });
participationButton.addEventListener('click', () => { scrollTo(timingBlock); });


// DVD
const root = document.querySelector('.root');
const dvd = root.querySelector('.dvd');
const FPS = 60;

let xPosition = 1;
let yPosition = 1;
let xSpeed = 3;
let ySpeed = 3;

if (window.innerWidth < 769) {
  xSpeed = 2;
  ySpeed = 2;
}

function update() {
  dvd.style.left = xPosition + 'px';
  dvd.style.bottom = yPosition + 'px';
}

function randomColor() {
  return ('#' + Math.random().toString(16).slice(2, 8));
}

setInterval(() => {
  if(xPosition + dvd.clientWidth >= window.innerWidth || xPosition <= 0) {
    xSpeed = -xSpeed;
    dvd.querySelector('path').style.fill = randomColor();
  }
  if(yPosition + dvd.clientHeight >= root.clientHeight - headerBlock.clientHeight || yPosition <= 0 ) {
    ySpeed = -ySpeed;
    dvd.querySelector('path').style.fill = randomColor();
  }

  xPosition += xSpeed;
  yPosition += ySpeed;
  update();
}, 1000/FPS);