 // FOR TIMER 

    var min = 9;
    var sec = 60;
    const appendm = document.getElementById("min");
    const appends = document.getElementById("sec")

    const i = setInterval(timer, 1000);

    function timer() {
        sec--;

        if (sec <= 9) {
            appends.innerHTML = "0" + sec;

        }
        if (sec > 9) {
            appends.innerHTML = sec;
        }

        if (sec < 0) {
            7
            min--;
            appendm.innerHTML = min;
            sec = 60;
            appends.innerHTML = sec;
        }
        if (min <= 9) {
            appendm.innerHTML = "0" + min;
        }

        if ((min == 00) && (sec == 00)) {
            clearInterval(i);
            console.log("chl gya")
        }
    }

    // FOR END BUTTON

    const eb = document.getElementById("eb")
    eb.addEventListener("click", (e) => {
        if (confirm("Do you really want to exit this test ")) {
            window.location.href = "hiremeeclone.html";
        }
        else {
            e.preventDefault()
        }
    })

    // FOR QUESTIONS COUNT


    // FOR  QUIZ

    const quizdata = [
        {
            question: "Q1. Which one of the following river flows between Vindhyan and Satpura ranges?",
            a: "Narmada",
            b: "Mahanadi",
            c: "Son",
            d: " Netravati",
            correct: "a",

        },

        {
            question: "Q2. The Central Rice Research Station is situated in?",
            a: "Chennai",
            b: "Cuttack",
            c: "Bangalore",
            d: "Quilon",
            correct: "b",

        },
        {
            question: "Q3. Patanjali is well known for the compilation of -",
            a: "Yoga Sutra",
            b: "Panchatantra",
            c: "Brahma Sutra",
            d: "Ayurveda",
            correct: "a",
        },

        {
            question: "Q4. The country that has the highest in Barley Production?",
            a: "China",
            b: "India",
            c: "Russia",
            d: "France",
            correct: "c",
        },
        {
            question: "Q5. Tsunamis are not caused by",
            a: "Hurricanes",
            b: "Earthquakes",
            c: "Undersea landslides",
            d: "Volcanic eruptions",
            correct: "a",
        }
    ];

    const qstnd = document.getElementById("qstn")
    const ak = document.getElementById("ak")
    const bk = document.getElementById("bk")
    const ck = document.getElementById("ck")
    const dk = document.getElementById("dk")
    const n = document.getElementById("n")
    const p = document.getElementById("p")
    const subm = document.getElementById("sub")
    const ansel = document.querySelectorAll(".ans")
    let cq = 0;
    const qwc = document.getElementById("qc")
    var qcnt = 0;

    loadquiz();

    function loadquiz() {

        deselectans();

        var currentqstn = quizdata[cq];
        qstnd.innerText = currentqstn.question;
        ak.innerText = currentqstn.a;
        bk.innerText = currentqstn.b;
        ck.innerText = currentqstn.c;
        dk.innerText = currentqstn.d;
    }



    function deselectans() {
        ansel.forEach((ansele) => {
            ansele.checked = false;
        })
    };


    const queco = document.getElementById("quc");


    function nextq() {
        const answ = getselected();

        if (answ) {
            cq++;
            console.log("ek age")
        }
        else if(quizdata.clicked!=true) {
            cq++;
        }

        if (cq < quizdata.length) {
            loadquiz();
            queco.innerHTML = cq + 1;

        }
    }


    function prevq(e) {

        const answ = getselected();

        if (answ) {
            cq--;
            console.log("ek peeche")

        }
        // else {
        //     cq--;
        //     console.log("single click pe ppeeche aunga")
        // }
        else if(quizdata.clicked!=true) {
            cq--;
        }

        if (cq < quizdata.length) {
            console.log(cq)
            loadquiz();
            queco.innerHTML = cq + 1;

        }
        if(quizdata==0){
            e.preventDefault()
        }




    }


    function getselected() {
        let ans = undefined;

        ansel.forEach((ansele) => {
            if (ansele.checked) {
                console.log("ans is checjeds")
                ans = ansele.id;
            }

        })
        return ans;
    }


    // #submit button  

    const subb = document.getElementById("sub");
    subb.addEventListener("click", (e) => {
        if (confirm("Do you really want to submit and EXIT this test")) {
            window.location.href = "thankyou.html";
        }
        else {
            e.preventDefault();
        }
    });
