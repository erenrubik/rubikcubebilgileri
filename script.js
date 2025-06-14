// script.js
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    console.log("Navigasyon: " + link.textContent);
  });
});
