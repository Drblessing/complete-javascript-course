import icons from 'url:../../img/icons.svg';

class ResultsView {
  #parentElement = document.querySelector('.results');
  #errorMessage = `No recipes found for your query! Please try again ;)`;
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
  #clear() {
    this.#parentElement.innerHTML = '';
  }

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
}

export default new ResultsView();
