const title = document.getElementById("title");
const cookie = document.cookie;
let nameou = cookie.split("amnamee=");
let nameou2 = nameou[1].split("..") || "Admin@meluha.edu.in";
let nameou3 = "";

const meetingdate = document.getElementById("meetingdate");
const meetingtime = document.getElementById("meetingtime");
const timeselectbutton = document.getElementById("timeselect");
let datevalue = "";

let dictstatus = null;

async function getdictstatus(numbergiven){
    console.log(numbergiven);
    try{
        const response = dictstatus || await fetch("https://meluhamun.aakashgudivada.repl.co/g2")
        if (response.ok){
            dictstatus = await response.json();
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
}

const dab = document.getElementById("selectdab");

dab.addEventListener("input",function(){
    const selindex = dab.options.selectedIndex;
    getdictstatus(selindex + 1)
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
    nameou3 = nameou2
}else{
    nameou3 = (nameou2[0].split(";")[0]).split("@")[0]
}

title.textContent = "Hello " + nameou3;
let loadedstatus = null;

async function updatestatus(){
    try{
        const response = await fetch("https://meluhamun.aakashgudivada.repl.co/g1");
        if (!response.ok){
            console.log("weelp");
        }else{
            loadedstatus = await response.json();
            ep.textContent = loadedstatus["enrolledpeople"];
            mrraised.textContent = loadedstatus["moneyraised"]
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
let prevbox = rolebox;

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

dispx.addEventListener("input",function(){
    prevbox = rolebox;
    accsubmit.style.display = "block";
    nextaccbox = mailbox
})