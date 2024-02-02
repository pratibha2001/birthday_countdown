const endDate="14 February 2024 09:00 AM";

document.getElementById("end-date").innerHTML=endDate;
const inputs= document.querySelectorAll("input");

function clock(){
    const end=new Date(endDate);
    const now= new Date();
    const diff=(end-now)/1000; //converted mili seconds to seconds
    if(diff<0)return;
    inputs[0].value= Math.floor(diff/3600/24);
    inputs[1].value=Math.floor(diff/3600)%24;
    inputs[2].value=Math.floor(diff/60)%60;
    inputs[3].value=Math.floor(diff)%60;

}

clock();


/*
1day=24hrs
1hr=60 mins
60 mins=3600 secs
*/

setInterval(
    ()=>{
        clock()
    },1000
)