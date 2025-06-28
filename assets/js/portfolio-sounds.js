// Sonido de clic para entrar y salir de recursos
const clickInSound = new Audio('assets/sounds/click.mp3');
clickInSound.volume = 0.18;
const clickOutSound = new Audio('assets/sounds/click_out.mp3');
clickOutSound.volume = 0.18;

document.addEventListener('DOMContentLoaded', function() {
  // Entrar en recurso
  document.querySelectorAll('.nav-sound, .actions input[type="submit"], .actions button').forEach(el => {
    if (el.type === 'reset') return; // Evitar doble sonido en reset
    el.addEventListener('click', () => {
      clickInSound.currentTime = 0;
      clickInSound.play();
    });
  });
  // Salir de recurso (por ejemplo, reset, cerrar sección, volver atrás)
  document.querySelectorAll('.actions input[type="reset"], .close, .exit-sound').forEach(el => {
    el.addEventListener('click', () => {
      clickOutSound.currentTime = 0;
      clickOutSound.play();
    });
  });
});
