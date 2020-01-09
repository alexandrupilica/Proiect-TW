/* eslint-env browser */


 
function DYNaudio() {
    var audio = new Audio("Amazing Natural Bird Sounds.mp3");
    audio.load();
    audio.play();
}
window.onload = DYNaudio;
/*
audio_file.onchange = function(){
    var files = this.files;
    var file = URL.createObjectURL(files[0]); 
    audio_player.src = file; 
    audio_player.play();
};*/

function form_creator() {
    "use strict";
    var firstNameLabel = document.createElement("H1"),
        text3 = document.createTextNode("First Name:"),
        FNLdiv = document.getElementById("FNLdiv"),
        firstName = document.createElement("INPUT"),
        FNdiv = document.getElementById("FNdiv"),
        lastNameLabel = document.createElement("H1"),
        text4 = document.createTextNode("Last Name:"),
        LNLdiv = document.getElementById("LNLdiv"),
        lastName = document.createElement("INPUT"),
        LNdiv = document.getElementById("LNdiv"),
        emailLabel = document.createElement("H1"),
        text1 = document.createTextNode("Email:"),
        EMLdiv = document.getElementById("EMLdiv"),
        email = document.createElement("INPUT"),
        EMdiv = document.getElementById("EMdiv"),
        passwordLabel = document.createElement("H1"),
        text2 = document.createTextNode("Password:"),
        PSWLdiv = document.getElementById("PSWLdiv"),
        password = document.createElement("INPUT"),
        PSWdiv = document.getElementById("PSWdiv"),
        maleLabel = document.createElement("H3"),
        text5 = document.createTextNode("Male"),
        male = document.createElement("INPUT"),
        MaleDiv = document.getElementById("MaleDiv"),
        femaleLabel = document.createElement("H3"),
        text6 = document.createTextNode("Female"),
        female = document.createElement("INPUT"),
        FemaleDiv = document.getElementById("FemaleDiv"),
        genderLabel = document.createElement("H4"),
        text8 = document.createTextNode("Gender:"),
        Gdiv = document.getElementById("Gdiv"),
        slider = document.createElement("INPUT"),
        selectDiv = document.getElementById("selectDiv"),
        selectLabel = document.createElement("H4"),
        text9 = document.createTextNode("Country:"),
        array = ["Romania", "France", "Germany", "Spain", "Other"],
        selectList = document.createElement("select"),
        checkboxLabel = document.createElement("H4"),
        text10 = document.createTextNode("Not a robot"),
        checkbox = document.createElement("INPUT"),
        i = 0;
    
    
    slider.setAttribute("type", "range");
    slider.setAttribute("id", "slider");
    document.body.appendChild(slider);
    
    genderLabel.appendChild(text8);
    Gdiv.appendChild(genderLabel);
    
    firstNameLabel.appendChild(text3);
    firstNameLabel.setAttribute("id", "firstNameLabel");
    FNLdiv.appendChild(firstNameLabel);    

    firstName.setAttribute("type", "text");
    firstName.setAttribute("id", "firstName");
    FNdiv.appendChild(firstName);

    lastNameLabel.appendChild(text4);
    lastNameLabel.setAttribute("id", "lastNameLabel");
    LNLdiv.appendChild(lastNameLabel);

    lastName.setAttribute("type", "text");
    lastName.setAttribute("id", "lastName");
    LNdiv.appendChild(lastName); 

    emailLabel.appendChild(text1);
    emailLabel.setAttribute("id", "emailLabel");
    EMLdiv.appendChild(emailLabel);    

    email.setAttribute("type", "text");
    email.setAttribute("id", "email");
    EMdiv.appendChild(email); 

    passwordLabel.appendChild(text2);
    passwordLabel.setAttribute("id", "passwordLabel");
    PSWLdiv.appendChild(passwordLabel);
    
    password.setAttribute("type", "password");
    password.setAttribute("id", "password");
    PSWdiv.appendChild(password); 
    
    maleLabel.appendChild(text5);
    maleLabel.setAttribute("id", "maleLabel");
    MaleDiv.appendChild(maleLabel);
    
    male.setAttribute("type", "radio");
    male.setAttribute("id", "radio");
    MaleDiv.appendChild(male);
    
    femaleLabel.appendChild(text6);
    femaleLabel.setAttribute("id", "femaleLabel");
    FemaleDiv.appendChild(femaleLabel);
    
    female.setAttribute("type", "radio");
    female.setAttribute("id", "radio");
    FemaleDiv.appendChild(female);
    
    selectList.setAttribute("id", "mySelect");
    selectDiv.appendChild(selectLabel);
    selectDiv.appendChild(selectList);
    selectLabel.appendChild(text9);
    selectLabel.setAttribute("id", "selectLabel");
   
    
    for (i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        selectList.appendChild(option);
    }
    
    checkboxLabel.appendChild(text10);
    checkboxLabel.setAttribute("id", "checkboxLabel");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "checkbox");
    document.body.appendChild(checkbox);
    
    setTimeout(function(){ alert("The page will timeout"); }, 30000);
    
  /*  password.oninput = passValidation();
    email.oninput = emailValidation();*/

}
window.onload = form_creator;

/*
function passValidation() {
    
    var regex_pass = /(?=.*\d)(?=.[a-z])(?=.*[A-Z])(?=.*\W)/g
    
    
    if(password.value.match(regex_pass)) {
        document.getElementById("password").focus();
        return true;
    } else {
            alert("You have entered an invalid password!");
            document.getElementById("password").focus();
            return false;
        }    
    }

function emailValidation() {
    
    var regexEmail = /[a-zA-Z0-9!#$&_*?^{}~-]+(\.[a-zA-Z0-9!#$&_*?^{}~-]+)*@[a-z0-9]+([a-z0-9]*)\.+[a-zA-Z]/gi
    
    if(email.value.match(regexEmail)) {
        document.getElementById("email").focus();
        return true;
    } else {
            alert("You have entered an invalid email address!");
            document.getElementById("email").focus();
            return false;
        }    
    }
*/

