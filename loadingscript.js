document.addEventListener("DOMContentLoaded",function(){
    const loadingscreen = document.getElementById("heading");
    setTimeout(() => {
        loadingscreen.style.display = "none";
        document.getElementsByClassName("MainPage")[0].style.display = "flex"
    }, 2000);
});

document.getElementById("dga").addEventListener("click",function(){
    document.getElementsByClassName("MainPage")[0].style.display = "none";
    document.getElementsByClassName("applypage")[0].style.display = "block";
});

document.getElementsByClassName("applypage")[0].back.addEventListener("click",function(){
    document.getElementsByClassName("applypage")[0].style.display = "none";
    document.getElementsByClassName("MainPage")[0].style.display = "block"
})