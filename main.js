function validateForm(){

const form= document.getElementById("form");
const fname= document.getElementById("fname");
const mname= document.getElementById("mname");
const lname= document.getElementById("lname");
const phone= document.getElementById("phone");
const email= document.getElementById("email");
const address= document.getElementById("address");

form.addEventListener('submit' ,(e)  => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
   const fnameValue= fname.value.trim();
   const mnameValue= mname.value.trim();
   const lnameValue= lname.value.trim();
   const phoneValue= phone.value.trim();
   const emailValue= email.value.trim();
   const addressValue= address.value.trim();

  

   if(fname === " "){

      setErrorFor(fname, "name cannot be blank");
  
   }else{
      setSuccessFor(fname);
 
    }
   
    if(mname === " "){

        setErrorFor(mname, "name cannot be blank");
    
     }else{
        setSuccessFor(nname);
   
    }
    if(phone === " "){

        setErrorFor(phone, "phone number cannot be blank");
    
     }else{
        setSuccessFor(phone);
   
    }
    if(email === " "){

        setErrorFor(email, "email cannot be blank");
    } else if(!isEmail(emailValue)){
        setErrorFor(email,"not valid");
    } else{
        setSuccessFor(email);
    }
    if(address=== " "){

        setErrorFor(address, "address cannot be blank");
    
     }else{
        setSuccessFor(address);
   
      }


    
}


function setErrorFor(input,message){
     const formControl = input.parentElement;
     const small =formControl.querySelector('small');

     small.innerText = message;

     formControl.className ='form-control error';
 } 

function setSuccessFor(input) {
    const formControl =input.parentElement;
    formControl.className = 'form-control success'
}
}