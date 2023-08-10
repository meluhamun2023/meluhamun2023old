const errortext = document.getElementById("errorbox");
const emailinput = document.getElementById("emailinput");
const subbutton = document.getElementById("submit");

function showerror(errorname){
    emailinput.value = "";
    subbutton.style.margin = "10px 15%";
    errortext.textContent = errorname
    errortext.style.display = "inline"
}

subbutton.addEventListener("click", function(){
    if (emailinput.value !== ""){
        let splittedvalues = (emailinput.value).split("@");
        if (splittedvalues.length >= 2){
            console.log("oka");
            errortext.style.display = "none"
            subbutton.style.margin = "5% 15%"
        }else{
            showerror("Not a valid email");
        }
    }else{
        showerror("No email input given")
    }
})