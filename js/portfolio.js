// class Portfolio {
//   constructor(type, src, link) {
//     this.t = type;
//     this.s = src;
//     this.l = link;
//     function makePortfolioBox(t,s,l) {
//       let box = document.createElement(`<div class="portfolio-box ${this.t}">
//       <img src="images/works/${s}.jpg" alt="${t} img" />

//       <div class="view">
//         <lord-icon
//           src="https://cdn.lordicon.com/zbopvjaq.json"
//           trigger="loop"
//           delay="1000"
//           colors="primary:#8ebcbd,secondary:#386b74"
//           style="width: 100px; height: 100px"
//         >
//         </lord-icon>
//       </div>
//       <a class="to-demo" href="${l}"><i class="fa-solid fa-link"></i></a>
//     </div>`);
//       portfolioBox.appendChild(box);
//     }
//     makePortfolioBox();
//   }
// }
// let project1 = new Portfolio("graphic", "dwa", "https://facebook.com");
function makePortfolioBox(t, s, l) {
  let box = document.createElement("div");
  box.innerHTML(`
  <img src="images/works/${s}.jpg" alt="${t} img" />

       <div class="view">
         <lord-icon
          src="https://cdn.lordicon.com/zbopvjaq.json"
           trigger="loop"
          delay="1000"
          colors="primary:#8ebcbd,secondary:#386b74"
           style="width: 100px; height: 100px"
         >
         </lord-icon>
      </div>
       <a class="to-demo" href="${l}"><i class="fa-solid fa-link"></i></a>
  `);
  let portfolioBox = document.querySelector(".portfolio-content");
  portfolioBox.appendChild(box);
}
makePortfolioBox("cv", "dwa", "facebook.com");
