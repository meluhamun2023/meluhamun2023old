const dgabutton = document.getElementById("dga");
const alb = document.getElementById("atr");

const gba = document.getElementById("ipa");
let status1 = null;

alb.addEventListener('click',function(){
    console.log("sd");
    window.location.href = "Allocationhtml.html";
});

dgabutton.addEventListener("click",function(){
    if (status1 === null){
        fetch("https://meluhamun.aakashgudivada.repl.co/registerstatusda")
    .then(response => {
        dgabutton.textContent = "Loading...";
        return response.json();
    })
    .then(data => {
        const statusofapps = data.status;
        setTimeout(() => {
            if (statusofapps === true){
                window.location.href = "https://youtube.com"
            }else{
                dgabutton.textContent = "Delegate Applications not open yet"
                setTimeout(() => {
                    dgabutton.textContent = "Delegate Applications"
                }, 3000);
            }
        }, 1000);
    });
    }else{
        if (status1 === true){
            window.href.location = "https:"
        }else{
            dgabutton.textContent = "Delegate Applications not open yet"
        }
    }
});

gba.addEventListener("click",function(){
    fetch("https://meluhamun.aakashgudivada.repl.co/registerstatuspa")
    .then(response => {
        dgabutton.textContent = "Loading...";
        return response.json();
    })
    .then(data => {
        const statusofapps = data.status;
        setTimeout(() => {
            if (statusofapps === true){
                window.location.href = "https://youtube.com"
            }else{
                gbaabutton.textContent = "Delegate Applications not open yet"
                setTimeout(() => {
                    gbabutton.textContent = "Delegate Applications"
                }, 3000);
            }
        }, 1000);
    });
});