
const months = [
   "januari",
   "Februari",
   "Maruari",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December"
];

const weekdays = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday", 
   "Saturday",
];


let tmpDate = new Date();
let tempYear = tmpDate.getFullYear();
let tmpMonth = tmpDate.getMonth();
let tmpDay = tmpDate.getDay();

// I need put a deadline will end the next future
// let futureDate = new Date(2023,8,12,9,0,0,0); 
let futureDate = new Date(tempYear+2,tmpMonth,tmpDay+20,0,0,0,0);

const year = futureDate.getFullYear(); 
const month = futureDate.getMonth() ; 
const date = futureDate.getDate(); 
const hours = futureDate.getHours(); 
const minutes = futureDate.getMinutes(); 
const seconds = futureDate.getSeconds();  
const weekday = futureDate.getDay(); 


const items = document.querySelectorAll('.time h2');
const title = document.querySelector(`.deadline p`) ; 
title.innerHTML = `
   <p>product ends on ${weekdays[weekday]} , ${hours} ${months[month]} ${year} ${hours}:${minutes}am</p>
`;

const futureTime = futureDate.getTime();

function getRemainningTime(){
   const tody = new Date().getTime() ; 
   let t = futureTime - tody ; 
   // i need distribute (t) into [ days , hours ,mins ,seconds]
   /*
   1s => 1000ms 
   1min => 60sec
   1hr => 60min 
   1d => 24hr
   */
   const oneSecond = 1000;
   const oneMinute = 60*1000; 
   const oneHour = 60*60*1000;
   const oneDay = 24*60*60*1000;

   let days = Math.floor(t / oneDay) ;
   let hours = Math.floor((t%oneDay) / oneHour) ;
   let minutes = Math.floor((t%oneHour) / oneMinute) ;
   let seconds = Math.floor( (t%oneMinute) / oneSecond) ; 

   const values = [days,hours, minutes, seconds]


   function format(input){
      return input > 9 ? input : `0${input}`
   }

   items.forEach((item , idx) => {
      item.innerHTML = format(values[idx]) ; 
   });

   if(t < 0 ){
      clearInterval(countdown);
      document.querySelector(`.rem-time-container`).innerHTML=`
      <p class = "tims-up">Tims up</p>
      `;
      title.innerHTML = `
      <p>
         <span class = "finshed">Done</span>
         <del>
         product ends on 
         Unkonwn , Unkonwn Unkonwn ${year} Unkonwn:Unkonwn
         </del>
      </p>
      `;
      
   }

}

let countdown = setInterval( getRemainningTime , 1000 ) ; 
getRemainningTime() ;



