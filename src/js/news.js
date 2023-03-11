import MainNewsEl from './source/MainData.json';
function SortElForDate() {
  const arr = MainNewsEl;
  return arr.sort((a, b) => new Date(b.date) - new Date(a.date));
}
SortElForDate();
function CreateNewsEl(quantity) {
  return SortElForDate()
    .map((el, index) => {
      const date = new Date(el.date);
      const year = `${date.getFullYear()}`;
      const month = `${date.getMonth() + 1}`.padStart(2, 0);
      const day = `${date.getDate()}`.padStart(2, 0);
      const hour = `${date.getHours()}`.padStart(2, 0);
      const minute = `${date.getMinutes()}`.padStart(2, 0);

      return ` <li class="news__item">
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
              <button class="btn news__btn news__btn--${index}">Читати далі</button>
            </div>
          </div>
        </li>`;
    })
    .slice(0, quantity);
}
document.querySelector('.news__list').innerHTML = CreateNewsEl(4).join('');
