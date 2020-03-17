
  
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const genderMale = document.getElementById("male");
const genderFemale = document.getElementById("female");
const messageInput = document.getElementById("message");
const regex = /^[a-zA-Z1-9\s]*$/;


firstNameInput.addEventListener("blur", function() {
    console.log("Here,the input is ", firstNameInput.value);
    if(firstNameInput.value === "" || regex.test(firstNameInput.value) === false) {
        firstNameInput.style.borderColor = "red";  
        return
    }else{
        firstNameInput.style.borderColor = "inherit";
        return
    }
});

lastNameInput.addEventListener("blur", function() {
    console.log("And here,the input is ", lastNameInput.value);
    if(lastNameInput.value === "" || regex.test(lastNameInput.value) === false) {
        lastNameInput.style.borderColor = "red";  
        return
    }else{
        lastNameInput.style.borderColor = "inherit";
        return
    }
});


messageInput.addEventListener("blur", function() {
    console.log("The question you put here is ", messageInput.value);
    if(messageInput.value === "" || regex.test(messageInput.value) === false) {
    messageInput.style.borderColor = "red";  
    return
    }else{
        messageInput.style.borderColor = "inherit";
        return
    }
});

const button = document.getElementById("btn");
const confirmationBanner = document.getElementById('confirmationBanner');
const confirmationMessage = document.getElementById('confirmationMessage')


button.addEventListener("click",function(){
    console.log("You Clicked on Submit but you have to select your Gender!")
    if(((firstNameInput.style.borderColor 
        && lastNameInput.style.borderColor 
        && messageInput.style.borderColor ) != "red") 
        && (genderMale.checked === true ||genderFemale.checked === true)) {
        console.log("First Name Input is: ", firstNameInput.value);
        console.log("Last Name Input is: ", lastNameInput.value);

        if(genderMale.checked === true) {
            console.log("The Input for Radio Button is: ", genderMale.value);
        } else if (genderFemale.checked === true){
            console.log("The Input for Radio Button is: ", genderFemale.value);
        }
        console.log("The message Input is: ", messageInput.value);

        confirmationBanner.style.display = "flex";
        confirmationMessage.innerText = `Thank you for contacting us, ${firstNameInput.value}!`
        return;
    }
});
