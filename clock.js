let a;
        let date;
        let time;
        const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
        //i want to use this clock function in line number 
       clock=setInterval(()=>{
            a=new Date();
            date=a.toLocaleDateString(undefined, options);
            time=a.toLocaleTimeString();
            document.getElementById('time').innerHTML=time+ "<br>on "+date;
            // console.log(time);
        },1000);
    
        var hold=0;
        function clicked(){
            if(hold==0){
                clearInterval(clock);
                console.log("clock holded");
                hold++;
            }
            else if(hold==1){
                // i want to call the clock function but i don't know, so i had reinitiallise it. 
                console.log("clock reset");
                clock = setInterval(()=>{
            a=new Date();
            date=a.toLocaleDateString(undefined, options);
            time=a.toLocaleTimeString();
            document.getElementById('time').innerHTML=time+ "<br>on "+date;
        },1000);
                hold--;
            }
        }

        
var temp=0;

let prevHtml=document.querySelector('.btn').innerText;
let instrc=document.querySelector('.instruction').innerText;

firstContainer.addEventListener('click',function(){
    if(temp==0){
        document.querySelector('.btn').innerText="Resume Life";
        document.querySelector('.instruction').innerHTML="<b>Yaah you have done it, now relax for a moment and look back at your achievements :)</b>";
        temp++;
    }
    else if(temp==1){
        document.querySelector('.btn').innerText=prevHtml;
        document.querySelector('.instruction').innerText=instrc;
        temp--;
    }
})