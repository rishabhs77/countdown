const countdown = () =>{
    const lastDate= new Date("June 30, 2021 00:00:00").getTime();
    const today=new Date().getTime();
    //console.log(lastDate);
    //console.log(today);
    const gap=lastDate-today;
    const seconds=1000;
    const minutes=seconds*60;
    const hours=minutes*60;
    const days=hours*24;
    const count_day=Math.floor(gap/days);
    const count_hours=Math.floor((gap%days)/hours);
    const count_minutes=Math.floor((gap%hours)/minutes);
    const count_seconds=Math.floor((gap%minutes)/seconds);
    document.querySelector(".day").innerText=count_day;
    document.querySelector(".hour").innerText=count_hours;
    document.querySelector(".seconds").innerText=count_seconds;
    document.querySelector(".minutes").innerText=count_minutes;


}
setInterval(countdown,1000);
