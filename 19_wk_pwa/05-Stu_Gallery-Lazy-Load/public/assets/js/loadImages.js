loadImages();

function createEl(htmlString = '', className) {
  const el = document.createElement(htmlString);
  if (className) {
    el.setAttribute('class', className);
  }
  return el;
}

function initLazyImages() {
  // Enter your lazy loading code here
  // Determine all images to be lazy-loaded
  const lazyImages = document.querySelectorAll('.lazy-image');

  // Define on intersection function
  function onIntersection(images) {
    // For all images check if image is in view
    for (const image of images) {
      // if image is in viewport: execute following code
      if (image.isIntersecting) {
        // If image is in viewport we can mark it to stop being observed
        observer.unobserve(image.target);
        // Set the image source to the image that has entered the viewport
        image.target.src = image.target.dataset.src;
      }
    }
  }

  // Create instance of intersection observer
  const observer = new IntersectionObserver(onIntersection);

  // Observe all images on load
  lazyImages.forEach((image) => observer.observe(image));
}

function loadImages() {
  fetch('/api/images')
    .then((res) => res.json())
    .then((data) => createCards(data))
    .then(() => initLazyImages());
}

function createCards(data) {
  const container = document.getElementsByClassName('container')[0];
  container.innerHTML = '';
  let lastRow;
  const row = createEl('div', 'row');

  return data.forEach(function (image, index) {
    const col = createEl('div', 'col-md-4 mt-4');
    col.appendChild(createCard(image));
    if (index % 3 === 0) {
      row.appendChild(col);
      container.appendChild(row);
      lastRow = row;
    }

    return lastRow.appendChild(col);
  });
}

function createCard(image) {
  const card = createEl('div', 'card');
  const imageContainer = createEl('div', 'card__image-container');
  const img = createEl('img', 'card-img-top card__image--cover lazy-image');
  // Enter your additional code here
  img.setAttribute(
    'src',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOMrgcAATsA3BT31OAAAAAASUVORK5CYII='
  );
  img.setAttribute('data-src', image.image);
  img.setAttribute('alt', image.description);

  const cardBody = createEl('div', 'card-body');

  const ratingFormContainer = createEl(
    'div',
    'rating d-flex justify-content-start'
  );
  ratingFormContainer.setAttribute('data-id', image._id);
  ratingFormContainer.setAttribute('data-rating', image.rating);

  const ratingForm = createRatingForm(image);

  const cardText = createEl('p', 'card-text font-weight-bold mt-2');

  cardText.innerText = `${image.description} (${image.rating})`;

  imageContainer.append(img);
  ratingFormContainer.append(ratingForm);
  cardBody.appendChild(ratingFormContainer);
  cardBody.appendChild(cardText);
  card.appendChild(imageContainer);
  card.appendChild(cardBody);

  return card;
}

function createRatingForm(image) {
  const labelText = {
    1: 'One Star',
    2: 'Two Stars',
    3: 'Three Stars',
    4: 'Four Stars',
    5: 'Five Stars',
  };

  const form = createEl('form');
  form.setAttribute('action', 'post');

  for (let i = 1; i <= 5; i++) {
    const input = createEl('input', 'visuallyhidden');
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'rating');
    input.setAttribute('id', `${image._id}-star-${i}`);
    input.setAttribute('value', i);

    const label = createEl('label');
    label.setAttribute('for', `${image._id}-star-${i}`);
    const labelSpan = createEl('span', 'visuallyhidden');
    labelSpan.innerText = labelText[i];
    const star = createEl('i', `fa-star ${image.rating >= i ? 'fas' : 'far'}`);

    label.appendChild(labelSpan);
    label.appendChild(star);
    label.onclick = updateRating;
    form.appendChild(input);
    form.appendChild(label);
  }

  return form;
}

function updateRating(event) {
  const [id, , rating] = event.currentTarget.getAttribute('for').split('-');
  fetch(`/api/images/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ rating }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(function () {
    loadImages();
  });
}
