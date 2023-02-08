const LangArr = {
  lng__logo: { ua: 'Щоденник Пті брабансона', en: `Brabanson's Dog Diary` },
  lng__aboutMe__nav: { ua: 'Про мене', en: 'About Me' },
  lng__news__nav: { ua: 'Новини', en: 'News' },
  lng__contact__nav: { ua: 'Контаки', en: 'Contacts' },
  lng__aboutMe__menu: { ua: 'Про мене', en: 'About Me' },
  lng__news__menu: { ua: 'Новини', en: 'News' },
  lng__contact__menu: { ua: 'Контаки', en: 'Contacts' },
  lng__heroTitle: {
    ua: 'Пті брабансон: блог собаки-компаньйона',
    en: 'Brabanson: Companion Dog Blog',
  },
  lng__heroText: {
    ua: 'Вітаємо на блозі нашої улюбленої собаки-компаньйона! Ми раді поділитися з вами нашими пригодами, враженнями та щоденним життям у сприятливому суспільстві з нашою веселою і доброю собачкою. Слідкуйте за нами та дізнавайтеся більше про нашу дружню команду!',
    en: 'Welcome to the blog of our beloved companion dog! We are happy to share with you our adventures, impressions, and daily life in a friendly society with our cheerful and good dog. Follow us and learn more about our friendly team!',
  },
  lng__inform__title: { ua: 'Про мене', en: 'About Me' },
};

const refs = {
  navBtnEn: document.querySelector('#nav__en'),
  navBtnUa: document.querySelector('#nav__ua'),
  menuBtnEn: document.querySelector('#menu__en'),
  menuBtnUa: document.querySelector('#menu__ua'),
  allLang: ['en', 'ua'],
};

refs.navBtnEn.addEventListener('click', () => changeURLLang('en'));
refs.navBtnUa.addEventListener('click', () => changeURLLang('ua'));
refs.menuBtnEn.addEventListener('click', () => changeURLLang('en'));
refs.menuBtnUa.addEventListener('click', () => changeURLLang('ua'));

function changeURLLang(lang) {
  console.log(lang);
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}
function changeWebLang() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  8;
  if (!refs.allLang.includes(hash)) {
    location.href = window.location.pathname + '#ua';
    location.reload();
  }
  for (const key in LangArr) {
    document.querySelector(`.${key}`).innerHTML = LangArr[key][hash];
  }
}
changeWebLang();
