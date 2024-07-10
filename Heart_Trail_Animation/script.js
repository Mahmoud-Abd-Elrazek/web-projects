
const urls = [
    'https://cdn2.iconfinder.com/data/icons/valentine-day-16/512/625_flower_gift_love_wedding_valentine_valentines_day_love-256.png' , 
    'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/heart-256.png' 

] ; 

function getRandomIndex(){
    return Math.floor(Math.random()*urls.length) ; 
 }

const main = document.querySelector('main') ; 
main.addEventListener('mousemove' , (event) => { 
    let x_posation = event.offsetX , y_posation = event.offsetY ; 
    const newSpan = document.createElement('span');

    newSpan.style.left = x_posation + "px"; 
    newSpan.style.top = y_posation + "px" ; 
    
    const size =  Math.random()*100 ; 
    newSpan.style.width = size + "px" ;
    newSpan.style.height = size + "px" ;

    main.appendChild(newSpan) ; 
    setTimeout(() => {
        newSpan.remove() ; // remove the span element after 3 seconds 
    }, 3000);
}) ; 




