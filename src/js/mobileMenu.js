import { menuItems } from './menu.js';

export function generateMobileMenu() {
  const menuList = document.querySelector('#mobile-menu');

  menuItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.classList.add('mobile-menu__item');
    listItem.textContent = item.title;

    const subMenu = document.createElement('ul');
    subMenu.classList.add('submenu');

    item.submenu.forEach((sub) => {
      const subListItem = document.createElement('li');
      subListItem.classList.add('submenu__item');

      const subAnchor = document.createElement('a');
      subAnchor.textContent = sub.title;
      subAnchor.href = sub.href;

      subListItem.appendChild(subAnchor);
      subMenu.appendChild(subListItem);
    });

    listItem.appendChild(subMenu);
    menuList.appendChild(listItem);
  });
}

const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('mobile-menu--active');
  hamburger.classList.toggle('hamburger--active');
});

const menuItemTitles = document.querySelectorAll('.mobile-menu__item');

menuItemTitles.forEach((item) => {
  item.addEventListener('click', () => {
    const submenu = item.querySelector('.submenu');
    const isOpen = submenu.classList.contains('submenu--active');

    document
      .querySelectorAll('.submenu')
      .forEach((sub) => sub.classList.remove('submenu--active'));
    document
      .querySelectorAll('.mobile-menu__item')
      .forEach((title) => title.classList.remove('submenu--active'));

    if (!isOpen) {
      submenu.classList.add('submenu--active');
      item.classList.add('submenu--active');
    }
  });
});
