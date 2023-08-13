const errortext = document.getElementById("errorbox");
const emailinput = document.getElementById("emailinput");
const subbutton = document.getElementById("submit");
const pcode = document.getElementById("scode");
let username = "Guest12";
let prequired1 = "";
let mailgiven = "";
const getcookiefirst = document.cookie;
if (getcookiefirst !== ""){
    const splitedstring = getcookiefirst.split("amnamee");
    if (splitedstring.length >= 2){
        window.location.href = "dashboard.html"
    }
}

function showerror(errorname,cleartext){
    if (cleartext === true){
        emailinput.value = ""
    }
    subbutton.style.margin = "10px 15%";
    errortext.textContent = errorname
    errortext.style.display = "inline"
    subbutton.style.backgroundColor = "#49a65b"
}

subbutton.addEventListener("click", function(){
    if (emailinput.value !== "" && prequired1 === ""){
        let splittedvalues = (emailinput.value).split("@");
        if (splittedvalues.length >= 2){
            if (splittedvalues[1] === "gmail.com"){
                console.log("oka");
                errortext.style.display = "none";
                subbutton.textContent = "Validating..";
                fetch("https://meluhamun.aakashgudivada.repl.co/checkvalid?username=" + emailinput.value)
                .then(response =>{
                    return response.json()
                })
                .then(data =>{
                    if (data.exists === true){
                        subbutton.textContent = "Log in";
                        pcode.style.display = "block";
                        prequired1 = data.password || "0911";
                        username = data.dname;
                        mailgiven = emailinput.value
                    }else{
                        showerror("No account found",true);
                        subbutton.textContent = "Log in"
                    }
                })
            }else{
                showerror("Inappropriate Email Given",true)
            }
        }else{
            showerror("Not a valid email",true);
        }
    }else if(pcode.style.display === "block"){
        if (pcode.value !== ""){
            if (pcode.value !== prequired1){
                showerror("Incorrect password",false);
            }else{
                subbutton.textContent = "Welcome back..";
                document.cookie = "amnamee=" + mailgiven + "; expires=25 Dec 2024 23:59:59 GMT; path=/";
                document.cookie = "adnamee=" + username + "; expires=25 Dec 2024 23:59:59 GMT; path=/";
                setTimeout(() => {
                    window.location.href = "dashboard.html"
                }, 1000);
            }
        }
    }else{
        showerror("No mail input given",true)
    }
})

emailinput.addEventListener("input",() =>{
    if (emailinput.value !== ""){
        let splittedvalues = (emailinput.value).split("@");
        if (splittedvalues.length >= 2){
            errortext.style.display = "none"
            subbutton.style.backgroundColor = "#109e2c"
        }else{
            showerror("Not a valid email",false);
        }
    }else{
        showerror("No email input given",false)
    }
})