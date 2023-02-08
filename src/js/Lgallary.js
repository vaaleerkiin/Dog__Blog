import lightGallery from 'lightgallery';
// import lgZoom from 'lg-zoom';
import Autoplay from '../plugins/autoplay/lg-autoplay.min';
import Thumbnail from '../plugins/thumbnail/lg-thumbnail.min';
const lgContainer = document.getElementById('inline-gallery-container');
const inlineGallery = lightGallery(lgContainer, {
  container: lgContainer,
  dynamic: true,

  hash: false,

  closable: false,

  showMaximizeIcon: true,

  appendSubHtmlTo: '.lg-item',

  slideShowAutoplay: !0,

  slideDelay: 400,
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
  ],
});

inlineGallery.openGallery();
