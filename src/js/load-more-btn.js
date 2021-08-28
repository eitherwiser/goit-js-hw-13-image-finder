import renderSearchContent from './renderGalleryContent.js';
import ApiFetchImage from './api-pixabay.js';

const fetchImage = new ApiFetchImage;

export default function loadMoreBtn() {

  const btn = document.querySelector('.load-more');

  btn.addEventListener('click', loadMore)

  function scrollContent() {
    btn.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }

  function loadMore() {

    fetchImage.query
    fetchImage
      .fetchImg()
      .then(data => {
        renderSearchContent(data);
        scrollContent()
      })
      .catch(err => console.log(err));
  }
}