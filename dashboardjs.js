const title = document.getElementById("title");
const cookie = document.cookie;
let nameou = cookie.split("mmunmail=");
let defaultdata = {
    mname: "Admin",
    mailid: "admin@meluha.edu.in",
    rolename: "Admin"
}
let nameou2 =  nameou[1].split("@") || "Admin@meluha.edu.in";
let nameou3 = "";
let rolegiven = cookie.split("mmunrole");

const meetingdate = document.getElementById("meetingdate");
const meetingtime = document.getElementById("meetingtime");
const timeselectbutton = document.getElementById("timeselect");
let datevalue = "";
let currentindex = 0;

let dictstatus = null;

async function getdictstatus(numbergiven){
    currentindex = numbergiven;
    if (dictstatus === null){
        try{
            const response = dictstatus || await fetch("https://meluhamun.aakashgudivada.repl.co/g2")
            if (response.ok){
                dictstatus = await response.json();
                console.log(dictstatus);
                if (dictstatus[numbergiven] === false){
                    document.getElementById("linkfortype").value = "";
                    document.getElementById("statusfortype").textContent = "Not open";
                    document.getElementById("statusfortype").style.background = "#bf2217"
                }else{
                    document.getElementById("linkfortype").value = dictstatus[numbergiven];
                    document.getElementById("statusfortype").textContent = "Open";
                    document.getElementById("statusfortype").style.background = "#129432"
                }
            }else{
                console.log("error")
            }
        }catch(error){
            console.log(error)
        }
    }else{
        if (dictstatus[numbergiven] === false){
            document.getElementById("linkfortype").value = "";
            document.getElementById("statusfortype").textContent = "Not open";
            document.getElementById("statusfortype").style.background = "#bf2217"
        }else{
            document.getElementById("linkfortype").value = dictstatus[numbergiven];
            document.getElementById("statusfortype").textContent = "Open";
            document.getElementById("statusfortype").style.background = "#129432"
        }
    }
}

const dab = document.getElementById("selectdab");
const enp = document.getElementsByClassName("enrolledpeople")[0];
const ep = document.getElementById("ep#");
const mrraised = document.getElementById("mrraised")

dab.addEventListener("input",function(){
    const selindex = dab.options.selectedIndex;
    getdictstatus(selindex + 1);
    console.log(selindex)
})

getdictstatus(1);

timeselectbutton.addEventListener("click",function(){
    if (meetingdate.value !== "" && datevalue === ""){
        datevalue = meetingdate.value;
        meetingdate.style.display = "none";
        meetingtime.style.display = "block";
        timeselectbutton.style.display = "none"
    }else if(meetingtime.value !== "" && datevalue !== ""){
        meetingdate.style.display = "block";
    meetingtime.style.display = "none";
    const meetingdata = {
        "date": datevalue,
        "time":meetingtime.value
    }
    const encodeddata = encodeURIComponent(JSON.stringify(meetingdata));
    try{
        fetch(`https://meluhamun.aakashgudivada.repl.co/callmeeting?rolename=developer&meetingdata=${encodeddata}`);
    }catch(error){
        console.log(error)
    }
    alert("Meeting information is sent to secreitariat members.");
    datevalue = "";
    meetingdate.value = "";
    meetingtime.value = ""
    }
})

meetingdate.addEventListener("input",function(){
    timeselectbutton.style.display = "block"
})

meetingtime.addEventListener("input",function(){
    timeselectbutton.style.display = "block"
})

if (nameou2 === "Admin@meluha.edu.in"){
    nameou3 = "Admin"
}else{
    nameou3 = nameou2[0]
}

title.textContent = "Hello " + nameou3;
console.log(rolegiven);
document.getElementById("role").textContent = rolegiven[1].split(";")[0]
let loadedstatus = null;

async function updatestatus(){
    try{
        const response = await fetch("https://meluhamun.aakashgudivada.repl.co/g1");
        if (!response.ok){
            console.log("weelp");
        }else{
            loadedstatus = await response.json();
            ep.textContent = loadedstatus["enrolledpeople"];
            mrraised.textContent = loadedstatus["moneyraised"] + ".00";
        }
    }catch(error){
        console.log(error)
    }
}

updatestatus();

const accsubmit = document.getElementById("nextvalue");
const mailbox = document.getElementById("mailinput");
const scodebox = document.getElementById("scodeinput");
const rolebox = document.getElementById("roleinput");
let nextaccbox = mailbox;
const linkfortype = document.getElementById("linkfortype");
const statsbytypebutton = document.getElementById("statusfortype");
let prevbox = rolebox;
const dispx = document.getElementById("displaynameinput");

rolebox.addEventListener("input",function(){
    prevbox = rolebox;
    accsubmit.style.display = "block";
    nextaccbox = mailbox
})

accsubmit.addEventListener("click",function(){
    accsubmit.style.display = "none";
    nextaccbox.style.display = "block"
    prevbox.style.display = "none"
})

scodebox.addEventListener("input",function(){
    prevbox = scodebox;
    accsubmit.style.display = "block";
    nextaccbox = mailbox
})

linkfortype.addEventListener("blur",function(){
    if (dictstatus !== null){
        if (dictstatus[currentindex] !== linkfortype.value){
            statsbytypebutton.textContent = "Saved";
            statsbytypebutton.style.backgroundColor = "#23b839";
            let tosend = "";
            if (linkfortype.value !== ""){
                tosend = linkfortype.value
            }else{
                tosend = "false"
            }
            const url = "https://meluhamun.aakashgudivada.repl.co/updateg2?index=" + currentindex.toString() + "&linkvalue=" + tosend;
            const response = fetch(url);
            setTimeout(() => {
                statsbytypebutton.textContent = "Open";
                statsbytypebutton.style.backgroundColor = "#129432"
            }, 4000);
        }
    }
})

linkfortype.addEventListener("keydown",(event) =>{
    if (event.key === "Enter"){
        event.preventDefault();
        linkfortype.blur()
    }
})

statsbytypebutton.addEventListener("click",function(){
    console.log("ok")
})

dispx.addEventListener("input",function(){
    prevbox = rolebox;
    accsubmit.style.display = "block";
    nextaccbox = mailbox
})

const feebox = document.getElementById("fcb");
const dbox = document.getElementById("dcb");

feebox.addEventListener("keydown",function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        feebox.blur()
    }
})

feebox.addEventListener("blur", function() {
    try {
        fetch("https://meluhamun.aakashgudivada.repl.co/uos?linkrel=moneyraised&val=" + feebox.value.toString())
            .then(response => {
                if (response.ok) {
                    feebox.value = "";
                    updatestatus();
                    alert("Fees collected data updated!")
                    return response.json();
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    } catch (error) {
        console.log(error);
    }
});

dbox.addEventListener("keydown",function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        dbox.blur()
    }
})

dbox.addEventListener("blur", function() {
    if (dbox.value === ""){
        return
    }
    try {
        fetch("https://meluhamun.aakashgudivada.repl.co/uos?linkrel=enrolledpeople&val=" + dbox.value.toString())
            .then(response => {
                if (response.ok) {
                    dbox.value = "";
                    updatestatus();
                    alert("Delegate count data updated!")
                    return response.json();
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    } catch (error) {
        console.log(error);
    }
});