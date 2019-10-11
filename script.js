'use strict';

document.addEventListener('DOMContentLoaded', () => {
  {
    const keyboardButton = document.getElementById('open-keyboard');
    const keyboard = document.querySelector('.keyboard');
    const searchInput = document.querySelector('.searchForm');
    const closeKeyboard = document.getElementById('close-keyboard');

    const toggleKeyboard = () => keyboard.style.top = keyboard.style.top ? keyboard.style.top = '' : keyboard.style.top = '-70%';


    const typing = e => {
      const target = e.target;
      if (target.tagName.toLowerCase() === 'button') {
        if (target.textContent.trim() === '⬅') {
          searchInput.value = searchInput.value.slice(0, length - 1);
        } else if (!target.textContent.trim()) {
          searchInput.value += ' ';
        } else {
          searchInput.value += target.textContent.trim();
        }
      }
    };
    keyboardButton.addEventListener('click', toggleKeyboard);
    closeKeyboard.addEventListener('click', toggleKeyboard);
    keyboard.addEventListener('click', typing);

  }

});
