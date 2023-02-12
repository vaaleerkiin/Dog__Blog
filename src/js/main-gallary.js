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
  dynamicEl: [...CreateDynemicEl(8)],
});

setTimeout(() => {
  inlineGallery.openGallery();
}, 300);
function SortElForDate() {
  const arr = DynemicGallaryEl;
  return arr.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
}

function CreateDynemicEl(quantity) {
  const el = [];
  for (let i = 0; i < quantity; i += 1) {
    const SortEl = SortElForDate()[i];
    SortEl.subHtml = `<div class="lightGallery-captions">
                <h4>${SortEl.header}</h4>
                 <p> ${SortEl.date}</p>
             </div>`;
    SortEl.src = `https://raw.githubusercontent.com/vaaleerkiin/Dog__Blog/main/src/${SortEl.src}`;
    SortEl.thumb = `https://raw.githubusercontent.com/vaaleerkiin/Dog__Blog/main/src/${SortEl.thumb}`;
    delete SortEl.header;
    delete SortEl.description;
    delete SortEl.date;
    el.push(SortEl);
  }
  return el;
}
