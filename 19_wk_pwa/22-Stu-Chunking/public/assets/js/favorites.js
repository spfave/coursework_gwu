import { useIndexedDb } from './indexedDB';
import { createCards } from './cardCreations';

// Page Execution - display favorites view
useIndexedDb('favorites', 'FavoritesStore', 'get').then((results) => {
  createCards(results);
});
