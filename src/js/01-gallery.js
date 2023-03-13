// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function createCardsGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
    }).join('');
};

galleryEl.insertAdjacentHTML('beforeend', createCardsGallery(galleryItems));

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
