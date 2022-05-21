import View from './View.js';

class SearchView {
  _parentElement = document.querySelector('.search');

  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }
  // publisher
  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', ev => {
      ev.preventDefault();
      handler();
      this._parentElement.querySelector('.search__field').value = '';
    });
  }
}

export default new SearchView();
