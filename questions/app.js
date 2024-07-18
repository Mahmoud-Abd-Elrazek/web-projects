



let arCards = document.querySelectorAll('.qus-and-answer') ; 

let clickBtn = document.querySelectorAll('.toggel') ; 

let tmp = document.querySelector(".toggel div") ; 

clickBtn.forEach( el =>{
   el.addEventListener('click', ev => {

      arCards.forEach(el =>{
         if(el !== ev.target.parentElement.parentElement )
            el.classList.remove('showQestions') ; 
      });
      
      ev.target.parentElement.parentElement.classList.toggle('showQestions') ; 
   });
});
