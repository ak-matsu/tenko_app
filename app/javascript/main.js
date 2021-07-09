function check() {

  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    btn.textContent = 'hit!';
  });
}
  window.addEventListener("load", check);