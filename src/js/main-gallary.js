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
  dynamicEl: [
    {
      src: 'https://zelenvsit.cx.ua/wp-content/uploads/2018/6/sif-2141.jpg',
      thumb: 'https://zelenvsit.cx.ua/wp-content/uploads/2018/6/sif-2141.jpg',
      subHtml: `<div class="lightGallery-captions">
                <h4>Caption 1</h4>
                <p>Description of the slide 1</p>
            </div>`,
    },
    {
      src: 'http://i.otzovik.com/objects/b/100000/95554.png',
      thumb: 'http://i.otzovik.com/objects/b/100000/95554.png',
      subHtml: `<div class="lightGallery-captions">
                <h4>Caption 2</h4>
                <p>Description of the slide 2</p>
            </div>`,
    },
    ...CreateDynemicEl(),
  ],
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
    delete arr.header;
    delete arr.description;
    delete arr.date;

    arr.subHtml = `<div class="lightGallery-captions">
                <h4>${arr.header}</h4>
                <p>${arr.description} ${arr.date}</p>
            </div>`;
    arr.src = `https://vaaleerkiin.github.io/Dog__Blog/${arr.src}`;
    arr.thumb = `https://vaaleerkiin.github.io/Dog__Blog/${arr.thumb}`;
    return arr;
  });
}
console.log(CreateDynemicEl());
