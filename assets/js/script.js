
function checkfrom(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("date").value;
    var email = document.getElementById("email").value;
    var emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var pnumber = document.getElementById("pnumber").value;
    var pnumberregex = /^[6-9]\d{9}$/;
    var gender = document.myForm.gender.value;
    var country = document.getElementById("country").value;
    var checkBox = document.getElementById("myCheck");
    var modal = document.getElementById("myModal")   
    var valid = true
     if(name == ''||name==null||name==undefined){
        valid = false
        document.getElementById("uname").innerHTML= "Name is a required field."
        document.getElementById("name").setAttribute('required', 'required');
    }
    else{
        document.getElementById("uname").innerHTML= ""
    }


    if(age == ''||age == null||age == undefined){
        valid = false
        document.getElementById("uage").innerHTML= "age is a required field."
        document.getElementById("date").setAttribute('required', 'required');
    }else{
        document.getElementById("uage").innerHTML= ""
    }

    
   
    if(email == ''||email == null||email == undefined){
        valid = false
        document.getElementById("uemail").innerHTML= "email is a required field."
        document.getElementById("email").setAttribute('required', 'required');
    }else  if (emailregex.test(email)== false){
        valid = false
        document.getElementById("uemail").innerHTML= " please enter valid email id"
    
    }
    else{
        document.getElementById("uemail").innerHTML= " "
    }
   

    if(pnumber == ''||pnumber == null||pnumber == undefined||pnumber==10){
        valid = false
        document.getElementById("upnumber").innerHTML= "phone number is a required field."
        document.getElementById("pnumber").setAttribute('required', 'required');
    }else if(pnumberregex.test(pnumber)== false){
        valid = false
        document.getElementById("upnumber").innerHTML= " please enter correct phone number"
    }else{
        document.getElementById("upnumber").innerHTML= " "
    }

    if(gender == ''||gender == null||gender == undefined){
        valid = false
        document.getElementById("ugender").innerHTML= " is a required field."
    }else{
        document.getElementById("ugender").innerHTML= ""
        document.getElementById("gender").setAttribute('required', 'required');
    }

    if(country == ''||country == null||country == undefined){
        valid = false
        document.getElementById("countryerr").innerHTML = " is a requrired field"
        document.getElementById("country").setAttribute('required' , 'requrired')
    }else{
        document.getElementById("countryerr").innerHTML = ""
    }


    var text = document.getElementById("text");
    if (checkBox.checked == true){
       
        text.style.display = "none";
    } else {
        valid = false
        text.style.display = "block";
    }

    if(valid){
        modal.style.display = "block";
        setTimeout(function(){
            location.reload()

        },2000)
    }
    
}
window.onclick = function(event) {
    var modal = document.getElementById("myModal")   
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


  