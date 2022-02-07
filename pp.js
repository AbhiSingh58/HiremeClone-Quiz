 const b=document.querySelector('i')
   

    window.onscroll=function() {myfunc()};
    function myfunc() {
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            b.style.display= "block";
            console.log("now we can see it")
        }
        else{
            b.style.display= "none";
            console.log("it wil hide now")
        }
    }

    b.addEventListener("click",()=>{
       document.body.scrollTop=0;
       document.documentElement.scrollTop=0;
        
    });
