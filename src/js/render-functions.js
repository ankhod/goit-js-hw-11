// render-functions.js
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function createImageCard({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
  <a href="${largeImageURL}" class="gallery-item" data-title="${tags}">
    <img src="${webformatURL}" alt="${tags}" loading="lazy" />
    <div class="info">
      <p class="info-item"><b>Likes</b>${likes}</p>
      <p class="info-item"><b>Views</b>${views}</p>
      <p class="info-item"><b>Comments</b>${comments}</p>
      <p class="info-item"><b>Downloads</b>${downloads}</p>
    </div>
  </a>
`;
}

export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = images.map(createImageCard).join('');
  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true, // Увімкнення підписів
    captionsData: 'title', // Використання атрибута title як джерело для підписів
    captionDelay: 250, // Затримка перед відображенням підпису
  });
  lightbox.refresh(); // Оновлення бібліотеки після додавання нових елементів
}
