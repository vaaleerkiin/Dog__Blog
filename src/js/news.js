import MainNewsEl from './source/MainNewsEl.json';
function SortElForDate() {
  const arr = MainNewsEl;
  return arr.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
}
function CreateNewsEl(quantity) {
  const el = [];
  for (let i = 0; i < quantity; i += 1) {
    const SortEl = SortElForDate()[i];

    el.push(` <li class="news__item">
          <div class="news__inf-wrap">
            <div class="news__img-wrap">
              <img
                src="https://raw.githubusercontent.com/vaaleerkiin/Dog__Blog/main/src/${SortEl.src}"
                alt="Фото до новини"
              />
            </div>
            <div class="news__text-wrap">
              <p>
                ${SortEl.header} 
              </p>
              <p class="news__date">${SortEl.date}</p>
              <button class="btn news__btn">Читати далі</button>
            </div>
          </div>
        </li>`);
  }
  return el;
}
document.querySelector('.news__list').innerHTML = CreateNewsEl(4).join('');
