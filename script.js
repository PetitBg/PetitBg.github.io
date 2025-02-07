// Animation de typewriter pour le texte d'accueil
document.addEventListener('DOMContentLoaded', () => {
  const typewriterText = document.querySelector('.typewriter');
  const words = ["Gestionnaire de Projet", "UX/UI", "Expert en Webmarketing"];
  let wordIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    const displayedText = isDeleting 
      ? currentWord.slice(0, letterIndex--) 
      : currentWord.slice(0, letterIndex++);

    typewriterText.textContent = displayedText;

    if (!isDeleting && letterIndex === currentWord.length) {
      setTimeout(() => (isDeleting = true), 1000);
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 100 : 150);
  }

  if (typewriterText) type();
});

$(document).ready(function() {
  // Apparition progressive des compétences au chargement
  $(".skill").each(function(index) {
    $(this).css("opacity", "0").delay(index * 150).animate({
      opacity: 1
    }, 1000);
  });

  // Apparition progressive des projets au chargement
  $(".project-item").each(function(index) {
    $(this).css("opacity", "0").delay(index * 200).animate({
      opacity: 1
    }, 1000);
  });

  // Animation de survol pour les barres de compétences
  $(".skill").hover(
    function() {
      $(this).find(".progress-bar span").animate({ width: '100%' }, 500);
    },
    function() {
      const width = $(this).find(".progress-bar span").data("width");
      $(this).find(".progress-bar span").animate({ width: width + '%' }, 500);
    }
  );

  // Affichage du bouton de retour en haut
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });
  $(".skill").each(function(index) {
    $(this).css("opacity", "0").delay(index * 150).animate({
      opacity: 1
    }, 1000);
  });


  // Fonctionnalité du bouton de retour en haut
  $('.back-to-top').click(function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 800);
  });
   $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });

    $('.back-to-top').click(function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 800);
  });

  $('.nav-links a').click(function(e) {
    e.preventDefault();

    // Supprime la classe active-section de toutes les sections
    $('section').removeClass('active-section');

    // Ajoute la classe active-section à la section ciblée
    const targetSection = $($(this).attr('href'));
    targetSection.addClass('active-section');
// Défilement en douceur vers la section cible
    $('html, body').animate({ scrollTop: targetSection.offset().top }, 800);
  });


  // Animation de changement de couleur de fond
  const colors = ["#f4f4f4", "#e3e3e3", "#d1d1d1", "#c1c1c1", "#b1b1b1"];
  let colorIndex = 0;

  setInterval(() => {
    colorIndex = (colorIndex + 1) % colors.length;
    $('body').animate({ backgroundColor: colors[colorIndex] }, 1000);
  }, 5000);
});


