function check() {

  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const n = Math.floor(Math.random() * 3);
    btn.textContent = n;
  });
}
  window.addEventListener("load", check);