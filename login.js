const button = document.getElementById("submit");
let check = true;
const namegiven = document.getElementById("username");
const p = document.getElementById("password");

button.addEventListener("click", function () {
    if (check === true) {
        if (p.value !== "" && namegiven.value !== "") {
            check = false;
            button.textContent = "Logging in..";
            const urlgiven = "https://meluhamun.aakashgudivada.repl.co/getlogin?username=" + namegiven.value + "&p=" + p.value;
            console.log(urlgiven);
            fetch(urlgiven)
                .then(response => response.json())
                .then(data => {
                    if (data.success === true && data.password == true) {
                        window.location.href = "dashboard.html"
                    }else {
                        button.textContent = "Invalid username/password";
                        button.style.backgroundColor = "red";
                        namegiven.value = "";
                        p.value = "";
                    }
                })
                .finally(() => {
                    check = true;
                    setTimeout(() => {
                        button.textContent = "Login"
                        button.style.backgroundColor = "green"
                    }, 2000);
                });
        } else {
            button.textContent = "Please enter username and password";
            button.style.backgroundColor = "orange";
        }
    }
});

function onSignIn(googleUser) {
    console.log("jssss");
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}