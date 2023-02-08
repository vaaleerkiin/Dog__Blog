// const Handlebars = require('handlebars');
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

  closable: false,

  showMaximizeIcon: true,

  appendSubHtmlTo: '.lg-item',

  slideShowAutoplay: true,

  slideDelay: 0,
  plugins: [Autoplay, Thumbnail],
  controls: true,
  dynamicEl: [...CreateDynemicEl()],
});
console.log(DynemicGallaryEl);
inlineGallery.openGallery();

function SortElForDate() {
  const arr = DynemicGallaryEl;
  return arr.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
}
console.log(SortElForDate());
function CreateDynemicEl() {
  return SortElForDate().map(el => {
    let arr = el;

    arr.subHtml = `<div class="lightGallery-captions">
                <h4>${arr.header}</h4>
                <p> ${arr.date}</p>
            </div>`;
    arr.src = `https://raw.githubusercontent.com/vaaleerkiin/Dog__Blog/main/src/${arr.src}`;
    arr.thumb = `https://raw.githubusercontent.com/vaaleerkiin/Dog__Blog/main/src/${arr.thumb}`;
    delete arr.header;
    delete arr.description;
    delete arr.date;

    return arr;
  });
}
