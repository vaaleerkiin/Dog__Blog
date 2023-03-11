import lightGallery from 'lightgallery';
import Autoplay from '../plugins/autoplay/lg-autoplay.min';
import Thumbnail from '../plugins/thumbnail/lg-thumbnail.min';
import Video from '../plugins/video/lg-video.min';
import Data from './source/MainData.json';
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
  plugins: [Autoplay, Thumbnail, Video],
  controls: true,
  dynamicEl: CreateDynemicEl(8),
});
setTimeout(() => {
  inlineGallery.openGallery();
}, 300);

function SortElForDate() {
  const arr = Data;
  return arr.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export default SortElForDate();
function CreateDynemicEl(quantity) {
  return SortElForDate()
    .map(el => {
      const date = new Date(el.date);
      const years = `${date.getFullYear()}`;
      const month = `${date.getMonth() + 1}`.padStart(2, 0);
      const day = `${date.getDate()}`.padStart(2, 0);
      const hours = `${date.getHours()}`.padStart(2, 0);
      const minutes = `${date.getMinutes()}`.padStart(2, 0);

      el.subHtml = `<div class="lightGallery-captions">
                        <p>${day}/${month}/${years} ${hours}:${minutes}</p>
                    </div>`;
      el.src = `${el.src}`;
      el.thumb = `${el.thumb}`;
      return el;
    })
    .slice(0, quantity);
}
