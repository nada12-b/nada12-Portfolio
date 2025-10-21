document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems, {});
  if (document.getElementById('typed')){
    new Typed('#typed', {
      strings: ['Cloud Computing','Virtualisation','Big Data','DevOps','AI Solutions','Innovation Digitale'],
      typeSpeed: 45, backSpeed: 25, backDelay: 1200, loop: true
    });
  }
});