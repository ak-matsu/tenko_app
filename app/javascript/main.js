function check() {

  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const n = Math.random();

    clearClass(btn)

    if (n < 0.25) {
      btn.textContent = '大吉';
      btn.classList.add('daikiti');

    }else if (n < 0.50){
      btn.textContent = '中吉';
      btn.classList.add('chukiti');

    }else{
      btn.textContent = '凶';
      btn.classList.add('kyo');

    }
  });
}
  window.addEventListener("load", check);

  function clearClass(element) {
    element.classList.remove(...element.classList)
  }