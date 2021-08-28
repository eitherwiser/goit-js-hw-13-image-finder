import imgCardsTpl from '../templates/img-cards.hbs';

const gallery = document.querySelector('.gallery')

function renderCardsMarkup(data, template) {
  gallery.insertAdjacentHTML('beforeend', template(data));
}

export default function renderSearchContent(data) {
  const arr = data.hits;
  renderCardsMarkup(arr, imgCardsTpl);
};