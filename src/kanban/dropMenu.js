const listOfMenu = ['My account', 'My tasks', 'Log out'];

// eslint-disable-next-line no-unused-vars
function toggleDropDown() {
  const userMenu = document.querySelector('.user-menu');
  const dropDownMenu = document.querySelector('.dropdown-menu');
  const btn = document.querySelector('.user-menu button');
  const btnArrow = document.querySelector('.user-menu button img');

  if (btn.hasAttributes()) {
    const isVisible = btn.getAttributeNode('aria-expanded').value;

    if (isVisible === 'true') {
      userMenu.removeChild(dropDownMenu);
      btn.setAttribute('aria-expanded', 'false');
      btnArrow.style.transform = 'rotate(0)';
    } else {
      this.createMenu();
      btn.setAttribute('aria-expanded', 'true');
      btnArrow.style.transform = 'rotate(180deg)';
    }
  }
}

// eslint-disable-next-line no-unused-vars
function createMenu() {
  const userMenu = document.querySelector('.user-menu');
  const dropDownMenu = document.createElement('div');
  dropDownMenu.classList.add('dropdown-menu');

  const ul = document.createElement('ul');

  listOfMenu.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });

  dropDownMenu.appendChild(ul);
  userMenu.appendChild(dropDownMenu);
}
