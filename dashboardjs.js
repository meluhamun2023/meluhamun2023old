const title = document.getElementById("title");
const cookie = document.cookie;
let nameou = cookie.split("amnamee=");
let nameou2 = nameou[1].split("..") || "Admin@meluha.edu.in";
let nameou3 = "";
if (nameou2 === "Admin@meluha.edu.in"){
    nameou3 = nameou2
}else{
    nameou3 = (nameou2[0].split(";")[0]).split("@")[0]
}

title.textContent = "Hello " + nameou3;