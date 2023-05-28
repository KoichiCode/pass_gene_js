'use strict';

{

  function showPassword(){
    const result = document.getElementById('result');
    const numberCheckbox = document.getElementById('numbers-checkbox');
    const symbolsCheckbox = document.getElementById('symbols-checkbox');
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!#$%&()';
    let password = '';
    let seed = letters + letters.toUpperCase();

    if(numberCheckbox.checked === true) {
      seed += numbers;
    }

    if(symbolsCheckbox.checked === true) {
      seed += symbols;
    }

    for (let i = 0; i < slider.value; i++) {
      password += seed[Math.floor(Math.random() * seed.length)];
    }

    result.textContent = password;
  }


  const slider = document.getElementById('slider');
  const btn = document.getElementById('btn');

  slider.addEventListener('input', () => {
    const passwordLength = document.getElementById('password-length');

    passwordLength.textContent = slider.value;
  });

  btn.addEventListener('click', () => {
    showPassword();
  });

  showPassword();
}

// 付け加えたい機能
// ＊同じ数字や記号が入らないようにする
