let handeler = setInterval( _=> { 
    let timeNow = new Date().getTime();
    const ourDate = new Date("2025 , July 10 , 10:11:00").getTime();
    let remTime = ourDate - timeNow;

    if (remTime <= 0) { 
        document.querySelector(".days h5").textContent = "00";
        document.querySelector(".hours h5").textContent = "00";
        document.querySelector(".mintues h5").textContent = "00";
        document.querySelector(".seconds h5").textContent = "00";
        document.querySelector('.timer-btn').innerHTML = "TimesUp";
        document.querySelector('.timer-btn').classList.add('times-up');
        clearInterval(handeler);
    } else {
        document.querySelector('.timer-btn').classList.remove('times-up');
        document.querySelector('.timer-btn').innerHTML = "Running";
        const oneSecond = 1000;
        const oneMinute = 60*oneSecond;
        const oneHour = 60*oneMinute;
        const oneDay = 24*oneHour;
        
        let days = Math.floor(remTime / oneDay);
        remTime %= oneDay; 
        let hours = Math.floor(remTime / oneHour) ;
        remTime %= oneHour; 
        let mintues= Math.floor(remTime / oneMinute); 
        remTime %= oneMinute; 
        let seconds = Math.floor(remTime / oneSecond);

        const arTime = [days,hours,mintues,seconds];

        function FormData(item) { 
            return item > 9 ?  item : item == 0 ? "00" : `0${item}`; 
        }
                
        document.querySelector(".days h5").textContent = FormData(arTime[0]);
        document.querySelector(".hours h5").textContent = FormData(arTime[1]);
        document.querySelector(".mintues h5").textContent = FormData(arTime[2]);
        document.querySelector(".seconds h5").textContent = FormData(arTime[3]);
    }

} , 10);