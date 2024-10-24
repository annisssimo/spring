import { menuItems } from '../data/menuItems.js';

export function generateMenu() {
  const menu = document.querySelector('#menu');

  menuItems.forEach((item) => {
    const menuItem = document.createElement('li');
    menuItem.classList.add('header__menu-item');

    const link = document.createElement('a');
    link.href = '#';
    link.textContent = item.title;
    menuItem.append(link);

    if (item.submenu) {
      const submenu = document.createElement('ul');
      submenu.classList.add('header__submenu');

      item.submenu.forEach((subitem) => {
        const submenuItem = document.createElement('li');
        const subLink = document.createElement('a');
        subLink.classList.add('header__submenu-item');
        subLink.href = subitem.href;
        subLink.textContent = subitem.title;
        submenuItem.append(subLink);
        submenu.append(submenuItem);
      });

      menuItem.append(submenu);
    }

    menu.append(menuItem);
  });
}
