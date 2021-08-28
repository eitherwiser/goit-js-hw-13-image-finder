import { ApiNoticeSuccess, ApiNoticeError } from './notifications';

const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
const API_KEY = '23041977-a95e3e3a8961062fc7edd2a7d';

export default class ApiFetchImage {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }

  async fetchImg() {
    const response = await fetch(`${BASE_URL}&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`,);
    const data = await response.json();
    this.incrementPage();
    console.log(this.page);
    console.log(data);
    return data;
  }

  get query() {
    return this.page;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

};

