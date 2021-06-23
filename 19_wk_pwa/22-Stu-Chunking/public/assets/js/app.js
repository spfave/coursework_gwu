// It should not be necessary to check the location once each page has its own bundle
if (window.location.pathname.includes('/images')) {
  // display details view for image
  const id = window.location.pathname.split('/')[2];
  const container = document.querySelector('.container');

  loadImage(id).then((image) => {
    const card = createCard(image);
    const btn = document.createElement('button');

    btn.setAttribute('class', 'btn btn-primary mt-5 mx-auto');
    btn.textContent = 'Save to favorites';
    btn.onclick = useIndexedDb('favorites', 'FavoritesStore', 'put', image);

    container.appendChild(card);
    container.appendChild(btn);
  });
} else if (window.location.pathname.includes('/favorites')) {
  // display favorites view
  useIndexedDb('favorites', 'FavoritesStore', 'get').then((results) => {
    createCards(results);
  });
} else {
  // display home page
  loadImages().then((data) => createCards(data));
}
