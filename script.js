    const i = document.getElementById('inp')
    const b = document.getElementById('bu')
    let inp = undefined;
    b.addEventListener("click", e => {
        checkdata()
        if (inp !== true) {
            e.preventDefault();
        }else if(inp ==="B9wery"){

        }
    });
    function checkdata() {
        const inpv = i.value.trim();
        if (inpv === "") {
            seterr(i,"*Please Enter Pin")
            inp=false;
            console.log("no you cant go to next page")
        }
        else if(inpv==="B9wery"){
            setnoerr(i)
            inp=true;
            console.log("yess  now you can proceed to next page")
        }
        else if(inpv!="B9wery"){
            seterr(i,"*Incorrect Pin , Enter pin again")
            inp=false;
            console.log("yess  now you can proceed to next page")
        }

    }
    function seterr(input , message) {
        const part1 = input.parentElement;
        part1.className="part1 error";
        const small=part1.querySelector('small')
        small.innerText = message;
        console.log("this is ur message")
    }
    function setnoerr(input , message) {
        const part1 = input.parentElement;
        part1.classname="part1 noerror"
    }
