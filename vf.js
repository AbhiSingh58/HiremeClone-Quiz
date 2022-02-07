 const vid = document.getElementById('video');
    const can = document.getElementById('canvas');
    var context = can.getContext('2d')
    const checkbox = document.getElementById('ch')

    checkbox.addEventListener("click", () => {
        if (checkbox.checked == true) {

            context.drawImage(video, 0, 0, 200, 200)
            can.classList.remove("hide")

        }
        else {
            can.classList.toggle("hide")
        }

    })



    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
            vid.srcObject = stream;
            vid.play()
        });
    }

     var bu=document.getElementById("b");
     bu.addEventListener("click",(e)=>{
         if (checkbox.checked !== true) {
             e.preventDefault();
             }
             else if(checkbox.checked == true){

             }
     })

   

    document.getElementById("et").addEventListener("click", (e) => {
    
        if (confirm("do you really want to exit this Test")){
            window.location.href = "hiremeeclone.html";
        }
        else{
            e.preventDefault()
        }


    })
