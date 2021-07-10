function check() {

  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = '大吉'; //5%
      btn.classList.add('daikiti');

    }else if (n < 0.2){
      btn.textContent = '中吉'; //15%
      btn.classList.add('chukiti');

    }else{
      btn.textContent = '凶'; //80%
      btn.classList.add('kyo');

    }
  });
}
  window.addEventListener("load", check);