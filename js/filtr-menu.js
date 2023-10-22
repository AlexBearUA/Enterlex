import { portfolioItems } from './portfolio-iitems.js';

const refs = {
  filtrButtonsContainer: document.querySelector('ul.projects-filtr'),
  portfolioGalleryContainer: document.querySelector('ul.our-projects'),
};

refs.filtrButtonsContainer.addEventListener('click', filtrBtnClickHandler);

function filtrBtnClickHandler(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  const previousActiveBtn = document.querySelector('.projects-filtr__button--active');
  previousActiveBtn.classList.remove('projects-filtr__button--active');
  const currentActiveBtn = evt.target;
  currentActiveBtn.classList.add('projects-filtr__button--active');

  refs.portfolioGalleryContainer.innerHTML = '';
  if (evt.target.dataset.value === 'all') {
    refs.portfolioGalleryContainer.innerHTML = createPortfolioGalleyMarkup(portfolioItems);
    return;
  }
  refs.portfolioGalleryContainer.innerHTML = createPortfolioGalleyMarkup(
    portfolioItems.filter(item => item.dataValue === evt.target.dataset.value)
  );
}

function createPortfolioGalleyMarkup(portfolioItems) {
  return portfolioItems
    .map(({ dataValue, image, overlayText, itemTitle, itemText }) => {
      return `<li class="our-projects__item" data-value="${dataValue}">
          <a class="our-projects__link" href="#" target="_blank" rel="noopener noreferrer nofollow">
            <div class="our-projects__overlay-borders">
              <img
                srcset="
                     ${image.srcset}
                    "
                sizes="(min-width: 1200px) 370px, (min-width: 768px) 354px, (min-width: 480px) 450px, (min-width: 320px) 100vw"
                src="${image.src}"
                alt="${image.alt}"
              />

              <p class="our-projects__overlay">
                ${overlayText}
              </p>
            </div>

            <div class="our-projects__thumb">
              <h2 class="our-projects__title">${itemTitle}</h2>
              <p class="our-projects__text">${itemText}</p>
            </div>
          </a>
        </li>`;
    })
    .join('');
}
