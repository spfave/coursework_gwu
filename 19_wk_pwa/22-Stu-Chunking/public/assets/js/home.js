import { loadImages } from './api';
import { createCards } from './cardCreations';

// Page Execution - display home page
loadImages().then((data) => createCards(data));
