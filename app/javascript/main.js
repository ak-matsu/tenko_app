function check() {

  const btn = document.getElementById('btn');
  const result = ['大吉','中吉','凶','末吉']
  btn.addEventListener('click', () => {
    btn.textContent = result[Math.floor(Math.random() * result.length)];
  });
}
  window.addEventListener("load", check);