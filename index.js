const dgabutton = document.getElementById("dga");
const alb = document.getElementById("atr");
const pja = document.getElementById("pja");

const gba = document.getElementById("ipa");
let statusretireved = null;

async function getdatastatus(id){
    if (statusretireved === null){
        try{
            const response = await fetch("https://meluhamun.aakashgudivada.repl.co/getstatus?type=" + id)
            if (!response.ok){
                throw new Error("welp")
            }
            const data = await response.json();
            statusretireved = data;
            return data;
        }catch(error){
            console.log(error);
            throw error;
        }
    }else{
        return statusretireved
    }
}

alb.addEventListener('click',function(){
    window.location.href = "Allocationhtml.html";
});

dgabutton.addEventListener("click",async function(){
    dgabutton.textContent = 'Loading..';
    try{
        const apidata = await getdatastatus("1");
        if (apidata.status === true){
            dgabutton.textContent = "Loading.."
        }else{
            dgabutton.textContent = "Delegate Applications are not open yet!";
        };
    }catch(error){
        console.log(error);
    }
});

pja.addEventListener("click",async function(){
    pja.textContent = 'Loading..';
    try{
        const apidata = await getdatastatus("3");
        if (apidata.status === true){
            pja.textContent = "Loading.."
        }else{
            pja.textContent = "PhotoJournalism Applications are not open yet!";
        };
    }catch(error){
        console.log(error);
    }
});

gba.addEventListener("click",async function(){
    gba.textContent = 'Loading..';
    try{
        const apidata = await getdatastatus("2");
        if (apidata.status === true){
            gba.textContent = "Loading.."
        }else{
            gba.textContent = "International Press Applications are not open yet!";
        };
    }catch(error){
        console.log(error);
    }
});