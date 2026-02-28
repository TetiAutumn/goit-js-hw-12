import { getImagesByQuery } from "./js/pixabay-api.js";
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
    hideLoadMoreButton
} from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.additional-button');
let galeryItemCardHeight = 0;
let searchValue = "";
let page = 1;
let imagesNumber = 0;
let totalHits = 0;

function isTheEnd() {
    if (totalHits === imagesNumber) {
        iziToast.warning({
            message: "We're sorry, but you've reached the end of search results.",
            position: "topRight",
        });
        return true;
    }
    return false;
}

form.addEventListener("submit", async event => {
    event.preventDefault();
    hideLoadMoreButton();
    page = 1;
    const query = event.target.elements["search-text"].value.trim();

    if (!query) {
        iziToast.warning({
            message: "Please enter a search query!",
            position: "topRight",
        });
        return;
    } else {
        try {
            clearGallery();
            showLoader();
            const images = await getImagesByQuery(query, page)
            if (images.hits.length === 0) {
                iziToast.warning({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topRight",
                });
            } else {
                imagesNumber = images.hits.length;
                totalHits = images.totalHits;
                createGallery(images.hits)
                if (!isTheEnd()) {
                    showLoadMoreButton();
                }
                searchValue = query;
                page++;
                galeryItemCardHeight = document.querySelector('.gallery-item').getBoundingClientRect().height;
            }
        } catch (e) {
            iziToast.warning({
                message: "Something went wrong!",
                position: "topRight",
            });
        } finally {
            hideLoader();
        }

    }

    // далі — запит до API

});

loadMoreBtn.addEventListener("click", async () => {
    try {
        hideLoadMoreButton();
        showLoader();
        const images = await getImagesByQuery(searchValue, page);
        imagesNumber = imagesNumber + images.hits.length;
        createGallery(images.hits);

        page++;
        window.scrollBy({ top: galeryItemCardHeight * 2, left:0, behavior: "smooth" });
    } catch (e) {
        iziToast.warning({
            message: "Something went wrong!",
            position: "topRight",
        });
    } finally {
        hideLoader();
        if (isTheEnd()) {
            hideLoadMoreButton()
        } else {
            showLoadMoreButton();
        }
    }

})
