import MainNewsEl from './source/MainNewsEl.json';
function SortElForDate() {
  const arr = MainNewsEl;
  return arr.sort((a, b) => new Date(b.date) - new Date(a.date));
}
function CreateNewsEl(quantity) {
  return SortElForDate()
    .map(el => {
      const date = `${el.date}`;
      const year = date.substr(0, 4);
      const month = date.substr(4, 2);
      const day = date.substr(6, 2);
      const hour = date.substr(8, 2);
      const minute = date.substr(10, 2);
      el.date = year + '/' + month + '/' + day + '/' + hour + ':' + minute;

      return ` <li class="news__item">
          <div class="news__inf-wrap">
            <div class="news__img-wrap">
              <img
                src="https://raw.githubusercontent.com/vaaleerkiin/Dog__Blog/main/src/${el.src}"
                alt="Фото до новини"
              />
            </div>
            <div class="news__text-wrap">
              <p>
                ${el.header} 
              </p>
              <p class="news__date">${el.date}</p>
              <button class="btn news__btn">Читати далі</button>
            </div>
          </div>
        </li>`;
    })
    .slice(0, quantity);
}

// console.log(CreateNewsEl(4));
document.querySelector('.news__list').innerHTML = CreateNewsEl(4).join('');
