import { menuItems } from '../data/menuItems.js';

export function generateMobileMenu() {
  const menuList = document.querySelector('#mobile-menu');

  menuItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.classList.add('mobile-menu__item');
    const listItemTitle = document.createElement('span');
    listItemTitle.classList.add('mobile-menu__title');
    listItemTitle.textContent = item.title;

    const subMenu = document.createElement('ul');
    subMenu.classList.add('submenu');

    item.submenu.forEach((sub) => {
      const subListItem = document.createElement('li');
      subListItem.classList.add('submenu__item');

      const subAnchor = document.createElement('a');
      subAnchor.textContent = sub.title;

      subListItem.append(subAnchor);
      subMenu.append(subListItem);
    });

    listItem.append(listItemTitle, subMenu);
    menuList.append(listItem);
  });

  menuList.addEventListener('click', (event) => {
    const target = event.target.closest('.mobile-menu__item');

    if (target) {
      const submenu = target.querySelector('.submenu');
      const isOpen = submenu.classList.contains('submenu--active');

      document.querySelectorAll('.mobile-menu__item').forEach((item) => {
        item.querySelector('.submenu').classList.remove('submenu--active');
        item.classList.remove('mobile-menu__item--active');
      });

      if (!isOpen) {
        submenu.classList.add('submenu--active');
        target.classList.add('mobile-menu__item--active');
      }
    }
  });
}

const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('mobile-menu--active');
  hamburger.classList.toggle('hamburger--active');
});
