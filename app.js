import { searchShow,getShow } from "./movies-api.js";

const txtSearch = document.querySelector("#txtSearch");
const tvShows = document.querySelector("#tvshows");
const showDetail = document.querySelector("#showDetail");

txtSearch.addEventListener('input',(e)=>{
   let searchVal = e.target.value;

   if(searchVal.length <3) return;
   searchShow(searchVal,(shows)=>{
    let htmlShows="";   
    shows.forEach(item=>{
        htmlShows += `
        <div class="col-md-6 col-lg-4 p-3">
        <div class="card" data-id="${item.show.id}">
        <img src="${
            item.show.image
              ? item.show.image.medium
              : "./no-image.png"
          }" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${item.show.name}</h5>
        </div>
      </div>
      </div>`
       })
       tvShows.innerHTML = htmlShows;
       const showDetails = document.querySelectorAll("#tvshows .card");
       showDetails.forEach(item=>{
         
        item.addEventListener('click', (e)=>{
            let id = e.target.closest('.card').getAttribute('data-id');
            getShow(id,(show)=>{
              htmlShows = `<div class="card-body">
                            <div class="row">
                              <div class="col-md-3">
                                <div>
                                  <img src="${show.image.medium}" class="img-fluid">
                                </div>
                              </div>
                              <div class="col-md-9">
                                <h1>${show.name}</h1>
                                <table>
                                  <tr><th>Tür</th><td>${show.genres}</td></tr>
                                  <tr><th>Dil</th><td>${show.language}</td></tr>
                                  <tr><th>Gün</th><td>${show.schedule.days}</td></tr>
                                  <tr><th>Saat</th><td>${show.schedule.time}</td></tr>
                                  <tr><th>Durum</th><td>${show.status}</td></tr>
                                  <tr><th>Reyting</th><td>${show.rating.average ? show.rating.average : ""}</td></tr>
                                </table>
                              </div>
                            </div>
                          </div>`
              showDetail.innerHTML = htmlShows;
              showDetail.classList.remove("d-none");
            })
         })
       })

   })
})
