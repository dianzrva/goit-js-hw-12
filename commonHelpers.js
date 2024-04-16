import{S as I,i as u,a as L}from"./assets/vendor-2cfd16ce.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();console.log("renderData:v.2.03");var w=new I(".gallery-list a",{captionsData:"alt",captionDelay:250});const v=async t=>{if(t.length===0)return;let o="";document.querySelector(".gallery-list")!=null&&(o=document.querySelector(".gallery-list").innerHTML),o+=await t.map(r=>`
            <li class="gallery-item">
                <a class="gallery-link" href="${r.largeImageURL}">
                    <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" />
                </a>
                <ul class="item-info">
                    <li><h3 class="item-title">Likes</h3>    <p class="item-text">${r.likes}</p>
                    <li><h3 class="item-title">Views</h3>    <p class="item-text">${r.views}</p>
                    <li><h3 class="item-title">Comments</h3> <p class="item-text">${r.comments}</p>
                    <li><h3 class="item-title">Downloads</h3><p class="item-text">${r.downloads}</p>
                </ul>
            </li>
        `).join(""),gallery.innerHTML=`<ul class="gallery-list">${o}</ul>`,w.refresh()};console.log("renderData:loaded...");function x(t,o="center"){u.info({title:"Info",message:t,position:o})}function d(t,o="center"){u.error({title:"Error",message:t,position:o})}const E=async(t,o,r=15)=>{console.log(`pixabay:search=>[${t}]`);const n="https://pixabay.com/api/",s={key:"43423774-a3cd1b17116146cc10b0d5ce8",q:t,safesearch:!0,image_type:"photo",orientation:"horizontal",per_page:r,page:o};try{const a=n,b={params:s};return await L.get(a,b)}catch(a){throw console.error("pixabay:Error fetching images:",a),a}finally{console.log("pixabay:search.end;")}};console.log("pixaBay.api:loaded...");console.log("main:v.2024.03.24.009");let l=1,i="";const $=document.getElementById("searchForm"),m=document.getElementById("searchInput"),y=document.getElementById("submit");y.disabled=!0;const B=document.getElementById("gallery"),p=document.getElementById("loading-indicator"),c=document.getElementById("load-more-btn");m.addEventListener("input",t=>{y.disabled=m.value.trim()===""});$.addEventListener("submit",async t=>{if(t.preventDefault(),B.innerHTML="",h(),i=m.value.trim(),i==="")return console.log("Please enter a search term."),d("Please enter a search term.");l=1,await f(l)});c.addEventListener("click",async()=>{l++,await f(l)});async function f(t){h(),console.log("page:",t);try{c.style.display="none";const n=(await E(i,t,15)).data,e=n.hits;v(e);const s=n.totalHits||0;if(console.log("totalHits:",s),s===0){const a=`main: Sorry, there are no images matching your search query: [${i}]. Please try again!`;return g(),d(a)}if(s<=t*15)return x("We're sorry, but you've reached the end of search results.");c.style.display="block"}catch(o){d(o.message)}finally{g()}}function h(){p.style.display="block",c.style.display="none"}function g(){p.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map