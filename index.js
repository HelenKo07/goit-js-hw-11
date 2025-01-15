import{S as u,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const d="48187645-2fe8d1ae3615e126e0d343d6c",h="https://pixabay.com/api/";function p(s){const r=new URLSearchParams({key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${h}?${r}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}function m(s){return s.map(({webformatURL:r,largeImageURL:t,tags:l,likes:e,views:o,comments:i,downloads:f})=>`<li class="gallery-item">
  <article class="card">
    <a class="gallery-link" href="${t}"
      ><img class="gallery-img" src="${r}" alt="${l}"
    /></a>
    <ul class="info-list">
      <li class="info-item">
        <h2 class="info-subtitle">Likes:</h2>
        <p class="info-text">${e}</p>
      </li>
      <li class="info-item">
        <h2 class="info-subtitle">Views:</h2>
        <p class="info-text">${o}</p>
      </li>
      <li class="info-item">
        <h2 class="info-subtitle">Comments:</h2>
        <p class="info-text">${i}</p>
      </li>
      <li class="info-item">
        <h2 class="info-subtitle">Downloads:</h2>
        <p class="info-text">${f}</p>
      </li>
    </ul>
  </article>
</li>`).join("")}const g=document.querySelector(".form-search"),c=document.querySelector(".gallery"),n=document.querySelector(".loader");n.style.displey="none";const y=new u(".gallery a",{captions:!0,captionsData:"alt",captionsPosition:"bottom",captionsDelay:250});g.addEventListener("submit",b);function b(s){s.preventDefault();let r=s.target.query.value.trim();if(c.innerHTML=" ",!r){a.show({backgroundColor:"#ef4040",message:"Please fill in the field to search for data!",borderBottom:"2px solid #ffbebe",borderRadius:"4px",padding:"20px",width:"432px",height:"88px",color:"#fafafb",position:"topRight"});return}n.style.displey="flex",p(r).then(t=>{console.log(t),console.log(t.hits.length),console.log(t.hits),t.hits.length===0&&a.show({title:"",backgroundColor:"#ef4040",borderBottom:"2px solid #ffbebe",borderRadius:"4px",padding:"20px",width:"432px",height:"88px",color:"#fafafb",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.insertAdjacentElement("beforeend",m(t.hits)),y.refresh(),n.style.displey="none"}).catch(t=>{console.log(t.message)}).finally(()=>s.target.reset())}
//# sourceMappingURL=index.js.map
