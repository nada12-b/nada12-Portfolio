document.addEventListener('DOMContentLoaded', function() {
  // Init sidenav (Materialize)
  var elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems, {});

  // Typed.js
  var typedEl = document.getElementById('typed-strings');
  if (typedEl){
    new Typed('#typed', {
      stringsElement: '#typed-strings',
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 1200,
      loop: true
    });
  }
});
