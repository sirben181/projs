  const daysEl=document.getElementById('days')
  const hoursEl=document.getElementById('hours')
 const  minsEl=document.getElementById('mins')
const  secsEl=document.getElementById('secs')

const newYears='3 Oct 2021';
 function countdown (){
 	const newYearsDate = new Date(newYears);
 	const currentDate =new Date ();
 	
const Totalseconds= Math.floor((newYearsDate-currentDate)/1000 )
const days= Math.floor(Totalseconds/3600/24) 
const hours= Math.floor(Totalseconds/3600)%24
const minutes= Math.floor(Totalseconds/60)%60
seconds=Math.floor(Totalseconds)%60
//console.log(days, hours, minutes, seconds);
 
daysEl.textContent=days
hoursEl.textContent=hours
minsEl.textContent=minutes
secsEl.textContent=seconds

 }

 countdown();
 setInterval(countdown,1000)