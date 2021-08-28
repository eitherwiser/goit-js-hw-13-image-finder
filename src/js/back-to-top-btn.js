export default function backToTop() {

  let goTopBtn = document.querySelector('.back-to-top');

  function actionBackToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -40);
      setTimeout(actionBackToTop, 0);
    }
  }

  goTopBtn.addEventListener('click', actionBackToTop);
};