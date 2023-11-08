function challenge1(){
    if(document.getElementById("subscribe").checked == true)
    {
        console.log("This works");
        document.querySelector("#emailDiv").style.display = "block";
    }
        
    else{
        document.querySelector("#emailDiv").style.display = "none";
    }
        
}

function challenge2(){
    let bill = document.querySelector("#bill");
    let home = document.querySelector("#home");
    if(document.getElementById("sameAddress").checked == true)
    {
        home.value = bill.value;
        home.disabled = true;
        
    }
        
    else{
        home.disabled = false;
    }
        
}