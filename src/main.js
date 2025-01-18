// main.js
import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import './css/styles.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.createElement('div');
loader.classList.add('loader', 'hidden');
document.body.appendChild(loader);

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.currentTarget.elements.searchQuery.value.trim();
  if (!query) {
    iziToast.error({ title: 'Error', message: 'Please enter a search query' });
    return;
  }

  try {
    loader.classList.remove('hidden');
    gallery.innerHTML = ''; // Очищуємо попередні результати пошуку
    const data = await fetchImages(query);
    loader.classList.add('hidden');

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    renderGallery(data.hits);
  } catch (error) {
    iziToast.error({ title: 'Error', message: error.message });
    loader.classList.add('hidden');
  }
});
