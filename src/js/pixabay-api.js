const API_KEY = '48303483-31cfd41ec7662904a2a6a727b';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  const response = await fetch(
    `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  );
  const data = await response.json();
  return data;
}
