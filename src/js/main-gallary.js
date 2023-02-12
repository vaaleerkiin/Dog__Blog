import lightGallery from 'lightgallery';
import Autoplay from '../plugins/autoplay/lg-autoplay.min';
import Thumbnail from '../plugins/thumbnail/lg-thumbnail.min';
import DynemicGallaryEl from './source/DynamicMainGallaryEl.json';
const lgContainer = document.getElementById('inline-gallery-container');
const inlineGallery = lightGallery(lgContainer, {
  container: lgContainer,
  dynamic: true,

  hash: false,

  closeOnTap: true,

  escKey: true,

  controls: true,

  closable: false,

  showMaximizeIcon: true,

  appendSubHtmlTo: '.lg-item',

  slideShowAutoplay: true,

  slideDelay: 0,
  plugins: [Autoplay, Thumbnail],
  controls: true,
  dynamicEl: CreateDynemicEl(8),
});

setTimeout(() => {
  inlineGallery.openGallery();
}, 300);
function SortElForDate() {
  const arr = DynemicGallaryEl;
  return arr.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function CreateDynemicEl(quantity) {
  return SortElForDate()
    .map(el => {
      const date = `${el.date}`;
      const year = date.substr(0, 4);
      const month = date.substr(4, 2);
      const day = date.substr(6, 2);
      const hour = date.substr(8, 2);
      const minute = date.substr(10, 2);
      el.date = year + '/' + month + '/' + day + '/' + hour + ':' + minute;

      el.subHtml = `<div class="lightGallery-captions">
                <h4>${el.header}</h4>
                <p> ${el.date}</p>
            </div>`;
      el.src = `https://raw.githubusercontent.com/vaaleerkiin/Dog__Blog/main/src/${el.src}`;
      el.thumb = `https://raw.githubusercontent.com/vaaleerkiin/Dog__Blog/main/src/${el.thumb}`;
      delete el.header;
      delete el.description;
      delete el.date;
      return el;
    })
    .slice(0, quantity);
}
