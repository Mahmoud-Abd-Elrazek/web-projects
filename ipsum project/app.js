

const text = [
   `
   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
   Officiis, ipsa!
   `,
   `Lorem ipsum dolor, sit amet 
   consectetur adipisicing elit. 
   Eveniet facere quos placeat veritatis 
   molestiae dolore labore culpa cum tempora eius.
   `,
   `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, 
   tenetur, quo exercitationem illum quia
    excepturi laudantium consectetur voluptates 
    error voluptatem, minima possimus pariatur enim 
    ullam architecto quidem eveniet dolorem debitis consequuntur obcaecati. 
    Id, vitae commodi rerum excepturi provident esse unde officia qui 
    deleniti repudiandae dolorum, deserunt tenetur magnam illo delectus?
   `,
   `ullam architecto quidem eveniet dolorem debitis consequuntur obcaecati. 
    Id, vitae commodi rerum excepturi provident esse unde officia qui 
    deleniti repudiandae dolorum, deserunt tenetur magnam illo delectus?
   `,
   ` deleniti repudiandae dolorum, deserunt tenetur magnam illo delectus?
   `,
   `error voluptatem, minima possimus pariatur enim 
    ullam architecto quidem eveniet dolorem debitis consequuntur obcaecati. 
    Id, vitae commodi rerum excepturi provident esse unde officia qui 
    deleniti repudiandae dolorum, deserunt tenetur magnam illo delectus?
    `,
    ` Lorem ipsum dolor sit, amet consectetur adipisicing
    Lorem ipsum dolor sit, amet consectetur adipisicing
    `,
    `
    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
     Quo, explicabo facilis! Facere illum ea voluptatibus, voluptate aliquam
     , molestias omnis harum veritatis quod suscipit minima 
     quo, laudantium provident nesciunt aperiam magni earum ipsum
      inventore atque quae illo accusantium dicta dolore at?
       Maiores perferendis fuga hic itaque fugiat mollitia 
       exercitationem praesentium adipisci corrupti quod ipsa 
       ullam possimus, nostrum blanditiis neque 
       suscipit accusantium accusamus.
    `,
    `
    quo, laudantium provident nesciunt aperiam magni earum ipsum
    inventore atque quae illo accusantium dicta dolore at?
     Maiores perferendis fuga hic itaque fugiat mollitia 
     exercitationem praesentium adipisci corrupti quod ipsa 
     ullam possimus, nostrum blanditiis neque 
     suscipit accusantium accusamus.
    `
];

const loremText = document.querySelector(`.lorem-text`) ; 
const form = document.querySelector(`.lorem-form`) ; 
const amount = document.querySelector(`#amount`); 

form.addEventListener('submit', (ev) =>{
   ev.preventDefault();
   // const value = +amount.value; this is wrong so if it is empty string , it wiil be a zero 
   const value = parseInt(amount.value); // to fix empty value 
   const random = Math.floor(Math.random()* text.length) ; 

   let temText ; 
   // (empty value || val > 9 || negative value)
   if(isNaN(value) || value > 9 || value < 0 ){ 
      temText =`<p>${text[random]}</p>`;
   }else{
      temText = text.slice(0,value); // to cut array from 0 to value & not including the end 
      temText = temText.map( item => {
         return `<p>${item}</p>`;
      }).reduce((acc, item) =>{ // to join this array 
         return acc + item ; 
      });
   }
   loremText.innerHTML = temText ; 
}) ; 


