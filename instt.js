 var sec=60;
    
    const appends=document.getElementById("sec")
   

    const i = setInterval(timer, 1000);
    function timer(e){
        sec--;
        if(sec<=9){
            console.log("now value of sec is less than 9 ")
            appends.innerHTML="0"+sec;        }
        if(sec>9){
            appends.innerHTML=sec;

        }  
        if(sec==00){
           clearInterval(i)

        }  
       

    }

    var but=document.getElementById("but");
    but.addEventListener("click",(e)=>{
        if(sec>00){
            e.preventDefault();
    
        }
        else if(sec==00){
            
        }
    })

