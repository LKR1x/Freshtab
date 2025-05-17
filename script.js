// Smooth scroll to Features section
document.getElementById('scrollToFeatures').onclick = function() {
  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
};

// Back to top (landing)
document.getElementById('backToLanding').onclick = function() {
  document.getElementById('landing').scrollIntoView({ behavior: 'smooth' });
};
