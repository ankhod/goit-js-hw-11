import{S as c,i as l}from"./assets/vendor-BrddEoy-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const u="48303483-31cfd41ec7662904a2a6a727b",f="https://pixabay.com/api/";async function d(o){return await(await fetch(`${f}?key=${u}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`)).json()}function p(o){const s=document.querySelector(".gallery");s.innerHTML=o.map(t=>`
    <a href="${t.largeImageURL}">
      <img src="${t.webformatURL}" alt="${t.tags}" />
      <div>
        <p>Likes: ${t.likes}</p>
        <p>Views: ${t.views}</p>
        <p>Comments: ${t.comments}</p>
        <p>Downloads: ${t.downloads}</p>
      </div>
    </a>
  `).join(""),new c(".gallery a").refresh()}function i(o){l.error({title:"Error",message:o})}document.querySelector(".search-form").addEventListener("submit",async o=>{o.preventDefault();const s=o.target.elements.searchQuery.value.trim();if(!s){i("Please enter a search query!");return}try{const n=await d(s);if(n.hits.length===0){i("Sorry, there are no images matching your search query. Please try again!");return}p(n.hits)}catch{i("An error occurred while fetching images. Please try again later.")}});
//# sourceMappingURL=index.js.map
