(function () {
  'use strict';

  // Reveal skin cards on scroll.
  var cards = document.querySelectorAll('.skin-card');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    cards.forEach(function (card) {
      card.style.opacity = '0';
      card.style.transform = 'translateY(16px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      io.observe(card);
    });
  }

  // Checkout stays dark until masters land — guard the button.
  var checkoutBtn = document.querySelector('.checkout .btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function (e) {
      e.preventDefault();
    });
  }
})();
