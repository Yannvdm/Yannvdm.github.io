const panneau = document.querySelector('.panneau-gauche');
const burger = document.querySelector('.burger-mob');

burger.addEventListener('click', () => panneau.classList.toggle('ouverte'));

document.querySelectorAll('.pg-link').forEach(l => {
  l.addEventListener('click', () => panneau.classList.remove('ouverte'));
});

document.querySelectorAll('.ligne-acti').forEach(ligne => {
  ligne.addEventListener('click', () => ligne.classList.toggle('ouvert'));
});

const blocs = document.querySelectorAll('.bloc');
const liens = document.querySelectorAll('.pg-link');

window.addEventListener('scroll', () => {
  let actuel = '';
  blocs.forEach(b => {
    const haut = b.offsetTop - 200;
    if (window.scrollY >= haut) actuel = b.id;
  });
  liens.forEach(l => {
    l.classList.remove('actif');
    if (l.getAttribute('href') === '#' + actuel) l.classList.add('actif');
  });
});


// --- Gestion de la Pop-up d'images ---
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('imgFull');

// On récupère toutes les images dans les preuves
document.querySelectorAll('.la-preuve img').forEach(image => {
  image.addEventListener('click', (e) => {
    e.stopPropagation(); // Empêche de fermer la ligne d'activité en cliquant sur l'image
    modal.classList.add('actif');
    modalImg.src = image.src;
  });
});

// Fermer la pop-up quand on clique n'importe où sur le fond noir
modal.addEventListener('click', () => {
  modal.classList.remove('actif');
});