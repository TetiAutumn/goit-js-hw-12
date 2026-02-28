/* empty css                      */import{a as q,S as R,i as o}from"./assets/vendor--6n4cVRZ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(t){if(t.ep)return;t.ep=!0;const n=e(t);fetch(t.href,n)}})();const B="14065997-636d53df3ecdad4eb4f635f43",$="https://pixabay.com/api/";async function u(a,s){const e={key:B,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s};return(await q.get($,{params:e})).data}const g=document.querySelector(".gallery"),f=document.querySelector(".loader-container"),p=document.querySelector(".additional-button"),M=new R(".gallery a",{captionsData:"alt",captionDelay:250});function y(a){const s=a.map(e=>`
                <li class="gallery-item">
                    <a class="gallery-link" href="${e.largeImageURL}">
                        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
                    </a>
                    <div class="galery-info-container">
                        <div class="galery-info-column">
                            <span class="galery-info-title">Likes</span>
                            <span class="galery-info-value">${e.likes}</span>
                        </div>
                        <div class="galery-info-column">
                            <span class="galery-info-title">Views</span>
                            <span class="galery-info-value">${e.views}</span>
                        </div>
                        <div class="galery-info-column">
                            <span class="galery-info-title">Comments</span>
                            <span class="galery-info-value">${e.comments}</span>
                        </div>
                        <div class="galery-info-column">
                            <span class="galery-info-title">Downloads</span>
                            <span class="galery-info-value">${e.downloads}</span>
                        </div>
                    </div>
                </li>
            `).join("");g.insertAdjacentHTML("beforeend",s),M.refresh()}function P(){g.innerHTML=""}function m(){f.classList.remove("hidden")}function h(){f.classList.add("hidden")}function v(){p.classList.remove("hidden")}function d(){p.classList.add("hidden")}const E=document.querySelector(".form"),O=document.querySelector(".additional-button");let w=0,L="",r=1,i=0,b=0;function S(){return b===i?(o.warning({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),!0):!1}E.addEventListener("submit",async a=>{a.preventDefault(),d(),r=1;const s=a.target.elements["search-text"].value.trim();if(s)try{P(),m();const e=await u(s,r);e.hits.length===0?o.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(i=e.hits.length,b=e.totalHits,y(e.hits),S()||v(),L=s,r++,w=document.querySelector(".gallery-item").getBoundingClientRect().height)}catch{o.warning({message:"Something went wrong!",position:"topRight"})}finally{h()}else{o.warning({message:"Please enter a search query!",position:"topRight"});return}});O.addEventListener("click",async()=>{try{d(),m();const a=await u(L,r);i=i+a.hits.length,y(a.hits),r++,window.scrollBy({top:w*2,left:0,behavior:"smooth"})}catch{o.warning({message:"Something went wrong!",position:"topRight"})}finally{h(),S()?d():v()}});
//# sourceMappingURL=index.js.map
