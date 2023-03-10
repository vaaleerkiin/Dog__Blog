const refs = {
  openMenuBtn: document.querySelector('[data-menu-open]'),
  MenuBtnaboutMe: document.querySelector('[data-menu-aboutMe]'),
  MenuBtnSoc: document.querySelector('[data-menu-soc]'),
  MenuBtnContact: document.querySelector('[data-menu-contact]'),
  menu: document.querySelector('[data-menu]'),
  menuBtnEn: document.querySelector('#menu__en'),
  menuBtnUa: document.querySelector('#menu__ua'),
};

refs.openMenuBtn.addEventListener('click', toggleModal);
refs.MenuBtnaboutMe.addEventListener('click', toggleModal);
refs.MenuBtnSoc.addEventListener('click', toggleModal);
refs.MenuBtnContact.addEventListener('click', toggleModal);
refs.menuBtnEn.addEventListener('click', toggleModal);
refs.menuBtnUa.addEventListener('click', toggleModal);

function toggleModal() {
  document.body.classList.toggle('menu-open');
  refs.menu.classList.toggle('is-hidden-menu');
}
