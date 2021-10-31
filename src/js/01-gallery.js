
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line

 

const galleryContainer = document.querySelector('.gallery');
const itemMurkup = createImageElement(galleryItems);



galleryContainer.insertAdjacentHTML('beforeend', itemMurkup)


 function createImageElement(array) {
        return array.map(({ preview, original, description }) => {
            return `
    <div>
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>
    `
        }).join('');
    }



new SimpleLightbox('.gallery a',
    {
        captionsData: "alt",
        captionPosition: 'bottom',
        captionDelay: '250',
        focus: false,
       
    });