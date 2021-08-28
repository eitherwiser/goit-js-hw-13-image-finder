import renderSearchContent from './renderGalleryContent.js';
import ApiFetchImage from './api-pixabay.js';

const fetchImage = new ApiFetchImage;

export default function loadMoreBtn() {

  const btn = document.querySelector('.load-more');

  btn.addEventListener('click', loadMore);

  const imgCard = document.querySelector('.gallery:last-child');

  function scrollContent() {
    imgCard.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }

  function loadMore() {

    fetchImage
      .fetchImg()
      .then(data => {
        renderSearchContent(data);
        scrollContent()
      })
      .catch(err => console.log(err));
  }
}