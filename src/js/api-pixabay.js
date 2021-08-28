import { ApiNoticeSuccess, ApiNoticeError } from './notifications';

const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
const API_KEY = '23041977-a95e3e3a8961062fc7edd2a7d';

export default class ApiFetchImage {
  constructor() {
    this.page = 1;
    localStorage.setItem('page', this.page);
    this.searchQuery = '';
    localStorage.setItem('searchQuery', this.searchQuery);
  }

  async fetchImg() {
    const response = await fetch(`${BASE_URL}&q=${localStorage.getItem('searchQuery')}&page=${localStorage.getItem('page')}&per_page=12&key=${API_KEY}`,);
    const data = await response.json();
    this.incrementPage();
    return data;
  }

  incrementPage() {
    this.page = +localStorage.getItem('page') + 1;
    localStorage.setItem('page', this.page);
  }

  resetPage() {
    this.page = 1;
    localStorage.setItem('page', this.page);
  }

  get query() {
    localStorage.getItem('searchQuery', this.searchQuery);
    return this.page;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
    localStorage.setItem('searchQuery', this.searchQuery);
  }

};

