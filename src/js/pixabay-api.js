const API_KEY = '48187645-2fe8d1ae3615e126e0d343d6c';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchPhotosByQuery(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};
