import View from './View.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = `No recipes found for your query! Please try again ;)`;
  _generateMarkupPreview(rec) {
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

  render(results) {
    let markup = ``;
    results.forEach(rec => {
      markup += this._generateMarkupPreview(rec);
    });
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
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
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderSpinner() {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
    `;
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}

export default new ResultsView();
