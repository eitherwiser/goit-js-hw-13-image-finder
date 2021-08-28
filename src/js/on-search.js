import renderSearchContent from './renderGalleryContent.js';
import ApiFetchImage from './api-pixabay.js';

const gallery = document.querySelector('.gallery');

const fetchImage = new ApiFetchImage;


const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', onSearch);

export default function onSearch(input) {
  input.preventDefault();
  fetchImage.resetPage();

  fetchImage.query = input.currentTarget.elements.query.value.trim();

  if (fetchImage.query == '' || null) {
    return ApiNoticeError();
  }

  fetchImage
    .fetchImg()
    .then(data => {
      gallery.innerHTML = '';
      renderSearchContent(data);
    })
    .catch(err => console.log(err));
};