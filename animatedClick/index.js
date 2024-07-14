// ====================|Cick toggle|========================
const toggle = document.querySelector(`.toggle`) ; 
const navBar = document.querySelector(`.side-nav-bar`) ;
const minToggle = document.querySelector('.min-toggel') ; 
toggle.addEventListener('click', _ =>{ 
   navBar.classList.toggle('showNav');
   toggle.classList.toggle('fixed-color-border');
   if(navBar.classList.contains('showNav')){
      minToggle.addEventListener('click', _=>{
         navBar.classList.remove('showNav');
         toggle.classList.remove('fixed-color-border');
         const divs = document.querySelectorAll(`.min-toggel > div`) ; 
         divs.forEach(div => {
            div.style.addProperty('rotae:0deg');
         })
      });
   }
});
// ====================|End Cick toggle|======================



