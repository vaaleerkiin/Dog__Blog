import { Fancybox } from '@fancyapps/ui/dist/fancybox/fancybox.esm.js';
import DynemicGallaryEl from './source/MainData.json';

const refs = {
  newsList: document.querySelector('.news__list'),
  newsWrap: document.querySelector('.news__wrap'),
};
Fancybox.bind('[data-fancybox-news]', {
  // Your custom options
});
function SortElForDate() {
  const arr = DynemicGallaryEl;
  return arr.sort((a, b) => new Date(b.date) - new Date(a.date));
}

SortElForDate();
function CreateNewsEl(quantity) {
  return SortElForDate()
    .slice(0, quantity)
    .map((el, index) => {
      const date = new Date(el.date);
      const year = `${date.getFullYear()}`;
      const month = `${date.getMonth() + 1}`.padStart(2, 0);
      const day = `${date.getDate()}`.padStart(2, 0);
      const hour = `${date.getHours()}`.padStart(2, 0);
      const minute = `${date.getMinutes()}`.padStart(2, 0);

      const markup = ` <li class="news__item">
          <div class="news__inf-wrap">
            <div class="news__img-wrap">
              <img
                src="${el.src}"
                alt="Фото до новини"
              />
            </div>
            <div class="news__text-wrap">
              <p>
                ${el.header} 
              </p>
              <p class="news__date">${day}/${month}/${year} ${hour}:${minute}</p>
              <button class="btn news__btn" data-news="${index}">Читати далі</button>
            </div>
          </div>
        </li>`;

      creatModal(el, index);

      return markup;
    });
}
document.querySelector('.news__list').innerHTML = CreateNewsEl(4).join('');

function creatModal(el, index) {
  let paragraph;
  paragraph = el.description
    .map(el => {
      return `<p class="modal__text">${el}</p>`;
    })
    .join('');
  refs.newsWrap.insertAdjacentHTML(
    'beforeend',
    `<div class="backdrop backdrop-${index} hidden" data-backdrop="${index}" >
        <div class="modal__wrap">
          <div class="modal">
            <a 
               href="${el.src}"
               data-thumb-src="${el.thumb}"
               data-fancybox-news="news-gallery" >
                <img src="${el.thumb}" />
              </a>
            <div class="modal__info">
              <h4 class="modal__title">${el.header}</h4>
                ${paragraph}
            </div>
          </div>
        </div>
      </div> `
  );
}

refs.newsList.addEventListener('click', ev => {
  if (ev.target.nodeName === 'BUTTON') {
    let newsIndex = ev.target.getAttribute('data-news');
    document.querySelector(`.backdrop-${newsIndex}`).classList.remove('hidden');
    document.querySelector(`body`).classList.add('modal-open');
  }
});
refs.newsWrap.addEventListener('click', ev => {
  if (ev.target.classList.contains('backdrop')) {
    let backdropIndex = ev.target.getAttribute('data-backdrop');

    document
      .querySelector(`.backdrop-${backdropIndex}`)
      .classList.add('hidden');
    document.querySelector(`body`).classList.remove('modal-open');
  }
});
