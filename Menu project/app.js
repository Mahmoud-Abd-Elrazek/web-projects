

// Important Project 

const Menu = [
   {
      id:1,
      img:"./image/fruit.png",
      title:"Buttermilk Pancakes",
      price:"19.99",
      disc:`
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cumque.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cumque.`,
      category:"shakes"
   },
   {
      id:2,
      img:"./image/gallery4.png",
      title:"Dinnerc Double",
      price:"13.99",
      disc:`
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cumque.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cumque.`,
      category:"lunch"
   },
   {
      id:3,
      img:"./image/quality.png",
      title:"Godzilla Milkshake",
      price:"6.99",
      disc:`
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cumque.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cumque.`,
      category:"breakfast"
   },
   {
      id:4,
      img:"./image/menu2.png",
      title:"Country Delight",
      price:"20.99",
      disc:`
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cumque.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cumque.`,
      category:"breakfast"
   },
   {
      id:5,
      img:"./image/wow.png",
      title:"Egg Attack",
      price:"22.99",
      disc:`
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cumque.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cumque.`,
      category:"breakfast"
   },
   { /* Dinner Category */
      id:6 ,
      img:"./image/wow.png",
      title:"Steak dinner",
      price:"444.99",
      disc:`
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cumque.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cumque.`,
      category:"dinner"
   },
];

const containerItem = document.querySelector('.items-container');
const containerBtns = document.querySelector('.btns-container');

// When On Loading
window.addEventListener('DOMContentLoaded' , _=> {
   displayContent(Menu);
   displayBtnsCategoryDinamic();
});

function displayContent(input){
   let contentPage = input.map( item =>{
      return`
      <div class="item">
            <div class="image">
               <img src=${item.img} alt="this image" >
            </div>
            <article>
               <header>
                  <h3 class="name-item">${item.title}</h3>
                  <p class="price">$${item.price}</p>
               </header>
               <hr>
               <p class="disc">
                 ${item.disc}
               </p>
            </article>
         </div>
      `
   }).join("");
   containerItem.innerHTML = contentPage ; 
};

function displayBtnsCategoryDinamic(){
      // Dynamic Buttons On Clicking
   // 1.Get Only Unique Categories
   // 2.Iterate through all categories return Buttons
   // 3.Make sure to select buttons when they are available

   // 1.Get Only Unique Categories
   let numberOfButtons = Menu.reduce(function(acc , curVal ){
      if(! acc.includes(curVal.category)){
         acc.push(curVal.category);
      }
      return acc;
   },['all']);

  let btns = numberOfButtons.map(categ=>{
      return `
      <button type="button" class="filtter-btn" data-id="${categ}">
         ${categ}
      </button>
      `
   }).join("");

   containerBtns.innerHTML = btns ;
   const filtterBtns = document.querySelectorAll(`.filtter-btn`) ; 

   // When On Clicking 
   filtterBtns.forEach( btn =>{
      btn.addEventListener('click', ev =>{
         let category = ev.currentTarget.dataset.id ;
         
            let categoryFiltterring = Menu.filter( item =>{
               return category === item.category ; 
            });

            if(category === 'all'){
               displayContent(Menu);
            }else{
               displayContent(categoryFiltterring);
            }
      }); 
   });
}





