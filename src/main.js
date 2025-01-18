import { fetchImages } from './js/pixabay-api';
import { renderImages, showError } from './js/render-functions';

document.querySelector('.search-form').addEventListener('submit', async e => {
  e.preventDefault();
  const query = e.target.elements.searchQuery.value.trim();

  if (!query) {
    showError('Please enter a search query!');
    return;
  }

  try {
    const data = await fetchImages(query);
    if (data.hits.length === 0) {
      showError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }
    renderImages(data.hits);
  } catch (error) {
    showError(
      'An error occurred while fetching images. Please try again later.'
    );
  }
});
