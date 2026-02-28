import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");
const loader = document.querySelector('.loader-container');
const loadMoreBtn= document.querySelector('.additional-button');

// Створюємо екземпляр модального вікна
const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});

// Створює HTML-розмітку галереї та оновлює lightbox
export function createGallery(images) {
    const markup = images
        .map(
            img => `
                <li class="gallery-item">
                    <a class="gallery-link" href="${img.largeImageURL}">
                        <img class="gallery-image" src="${img.webformatURL}" alt="${img.tags}" />
                    </a>
                    <div class="galery-info-container">
                        <div class="galery-info-column">
                            <span class="galery-info-title">Likes</span>
                            <span class="galery-info-value">${img.likes}</span>
                        </div>
                        <div class="galery-info-column">
                            <span class="galery-info-title">Views</span>
                            <span class="galery-info-value">${img.views}</span>
                        </div>
                        <div class="galery-info-column">
                            <span class="galery-info-title">Comments</span>
                            <span class="galery-info-value">${img.comments}</span>
                        </div>
                        <div class="galery-info-column">
                            <span class="galery-info-title">Downloads</span>
                            <span class="galery-info-value">${img.downloads}</span>
                        </div>
                    </div>
                </li>
            `
        )
        .join("");

    galleryContainer.insertAdjacentHTML("beforeend", markup);
    lightbox.refresh();
}

// Очищає галерею
export function clearGallery() {   
    galleryContainer.innerHTML = "";
}

// Показує лоадер
export function showLoader() {
    loader.classList.remove("hidden");
}

// Ховає лоадер
export function hideLoader() {
    loader.classList.add("hidden");
}

export function showLoadMoreButton() {
    loadMoreBtn.classList.remove("hidden");
}

export function hideLoadMoreButton() {
    loadMoreBtn.classList.add("hidden");
}
