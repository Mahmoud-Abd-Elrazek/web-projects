// array of objects 
// every item in this array represents a person 
const reviews = [ 
   {
      id : 1 ,
      name : "Mahmoud Add-Elrazek" ,
      job : "Web Developer", 
      img:"images/mahmouuuuud.jpg",
      text : 
      `I am student at Computer Science & information in SVU university in Qena ,
       I've started learning programming since 2022 , I like web development ...
      `
   } ,
   {
      id : 2 ,
      name : "Koko" ,
      job : "Web Developer", 
      img:"images/personal2.png",
      text : 
      `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
       Harum, non incidunt. A optio molestiae pariatur, natus eum qui 
       minima nobis quaerat vitae deleniti eos facilis dolorem corrupti.
      `
   } , 
   {
      id : 3 ,
      name : "Skar" ,
      job : "Back-End Developer", 
      img:"images/pesonal3.png",
      text : 
      `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
       Harum, non incidunt. A optio molestiae pariatur, natus eum qui 
       minima nobis quaerat vitae deleniti eos facilis dolorem corrupti.
      `
   } , 
   {
      id : 4 ,
      name : "Temon" ,
      job : "UI/UX", 
      img:"images/personal4.jpg",
      text : 
      `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
       Harum, non incidunt. A optio molestiae pariatur, natus eum qui 
       minima nobis quaerat vitae deleniti eos facilis dolorem corrupti.
      `
   }
] ;

// select items 
const img = document.getElementById("person-img") ; 
const author = document.querySelector(".author") ;
const jop = document.getElementById("jop") ;
const info = document.getElementById("info") ; 

const nextBtn = document.querySelector('.next-btn');
const prvBtn = document.querySelector('.prv-btn');
const randomeBtn = document.querySelector('.randome-btn > button');

// set starting item 
let currentItem = 0 ; // global variable

// load initial item 
window.addEventListener('DOMContentLoaded', function(){ // or load  === DOMContentLoaded
   showperson();
});

function showperson(){ // to reuse this information 
   const item = reviews[currentItem] ;
   img.src = item.img ; 
   author.textContent = item.name ;
   jop.textContent = item.job ; 
   info.textContent = item.text;
}

nextBtn.addEventListener("click", _ => {
   currentItem++ ;
   if(currentItem === reviews.length )
      currentItem = 0 ; 

   showperson();
}) ; 

prvBtn.addEventListener("click", _ => {
   currentItem--;
   if(currentItem < 0 )
      currentItem = reviews.length - 1  ; 

   showperson();
}) ;

randomeBtn.addEventListener('click', _ => {
   currentItem = getRandomIndex(); 
   showperson() ;
} );

function getRandomIndex(){
   return Math.floor(Math.random()*reviews.length) ; 
}