import icons from 'url:../../img/icons.svg';

class SearchView {
  #parentEl = document.querySelector('.search');
  #message = '';

  getQuery() {
    const query = this.#parentEl.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }

  #clearInput() {
    this.#parentEl.querySelector('.search__field').value = '';
  }
  // publisher
  addHandlerSearch(handler) {
    this.#parentEl.addEventListener('submit', ev => {
      ev.preventDefault();
      handler();
      this.#parentEl.querySelector('.search__field').value = '';
    });
  }
}

export default new SearchView();
