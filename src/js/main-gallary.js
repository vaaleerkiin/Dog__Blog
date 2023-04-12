import { Carousel } from '@fancyapps/ui/dist/carousel/carousel.esm.js';
import { de } from '@fancyapps/ui/dist/carousel/l10n/de.esm.js';
import { Thumbs } from '@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js';
import { Autoplay } from '@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js';
import { Fancybox } from '@fancyapps/ui/dist/fancybox/fancybox.esm.js';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import '@fancyapps/ui/dist/carousel/carousel.thumbs.css';
import '@fancyapps/ui/dist/carousel/carousel.css';
import '@fancyapps/ui/dist/carousel/carousel.autoplay.css';
import DynemicGallaryEl from './source/MainData.json';
// import ScrollMagic from 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js';

SortElForDate().map(({ src, thumb }) => {
  document.querySelector('.f-carousel__track').insertAdjacentHTML(
    'beforeend',
    `  <a
         class="f-carousel__slide"
         href="${src}"
         data-thumb-src="${thumb}"
         data-fancybox="video-gallery" >
          <img data-lazy-src="${thumb}" />
        </a>
      `
  );
});

const container = document.getElementById('myCarousel');
const options = {
  Autoplay: {
    timeout: 5000,
  },
  transition: 'classic',
  dynamicFrom: false,
  Thumbs: {
    type: 'classic',
  },
};

new Carousel(container, options, { Autoplay, Thumbs });

Fancybox.bind('[data-fancybox]', {
  groupAll: true,
});

document.querySelector('.f-carousel__track');

function SortElForDate() {
  const arr = DynemicGallaryEl;
  return arr.sort((a, b) => new Date(b.date) - new Date(a.date));
}
