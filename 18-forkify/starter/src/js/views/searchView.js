import icons from 'url:../../img/icons.svg';

class SearchView {
  #searchBar = document.querySelector('.search__btn');
  #parentEl = document.querySelector('.search');
  #parentElement = document.querySelector('.results');
  #query;
  #errorMessage = `No recipes found for your query! Please try again ;)`;
  #message = '';
  render(results) {
    let markup = ``;
    results.forEach(rec => {
      markup += this.#generateMarkupPreview(rec);
    });
    this.#clear();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this.#errorMessage) {
    const markup = `
    <div class="error">
      <div>
        <svg>
          <use href="${icons}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>
    `;
    this.#clear();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  #clear() {
    this.#parentElement.innerHTML = '';
  }

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
      document.querySelector('.search__field').value = '';
    });
  }

  #generateMarkupPreview(rec) {
    return `<li class="preview">
    <a class="preview__link preview__link--active" href="#${rec.id}">
      <figure class="preview__fig">
        <img src="${rec.image}" alt="Image" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${rec.title}</h4>
        <p class="preview__publisher">${rec.publisher}</p>
        <!-- <div class="preview__user-generated"> 
          <svg>
            <use href="src/img/icons.svg#icon-user"></use>
          </svg>
        </div>-->
      </div>
    </a> 
  </li>`;
  }
}

export default new SearchView();
