  const bu=document.querySelector('i');

            window.onscroll = function(){myfun()};
            function myfun() {
                if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
                    bu.style.display="block";
                }else{
                    bu.style.display="none";
                }
                
            }

            bu.addEventListener("click",()=>{
                document.body.scrollTop = 0;
                document.documentElement.scrollTop=0;
            })
