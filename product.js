document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger-btn');
  const navLinks = document.getElementById('nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', function () {
      const open = navLinks.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function (event) {
      if (!burger.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const header = document.getElementById('main-header');
  const backTop = document.getElementById('back-to-top');
  function onScroll() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 60);
    if (backTop) backTop.classList.toggle('visible', window.scrollY > 400);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (backTop) {
    backTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const banner = document.getElementById('cookieConsent');
  const accept = document.getElementById('acceptCookies');
  let accepted = false;
  try { accepted = localStorage.getItem('cookiesAccepted') === 'true'; } catch (e) {}
  if (banner) banner.style.display = accepted ? 'none' : '';
  if (accept && banner) {
    accept.addEventListener('click', function () {
      try { localStorage.setItem('cookiesAccepted', 'true'); } catch (e) {}
      banner.style.display = 'none';
    });
  }
});
