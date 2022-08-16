function validate(){
         
    document.querySelector("#errors").innerHTML = "";
    let errors = document.querySelector("#errors");
    let submit = true;         
     
     //testing fullname
     let fullName = document.signup.fullname.value;
    if (!isNaN(fullName)) {
        errors.innerHTML += "<p>*Full name cannot contain digits.</p>";
        document.signup.fullname.focus();
        submit = false; 
    }

    //testing email 
    let email = document.signup.email.value;
    let at = email.indexOf("@");
    let dot = email.lastIndexOf(".");
    
    if(at<1 || dot < at+2 || dot +2 >= email.length) { 
        errors.innerHTML += "<p>*Invalid email.</p>";
        document.signup.email.focus();
        submit = false; 
    }
     
    //testing phone number
    let phone = document.signup.phone.value;
        let phoneerror = true;
        if (phone.length == 10) {
            if (isNaN(phone)) { 
                phonerror = false;
            }
        }
        else if (phone.length == 12) 
        {
            if (phone.indexOf("-") != 3 || phone.lastIndexOf("-") != 7) {
                phoneerror = false;
            }
        }
        else 
        {
            phoneerror = false;
        }
    
        if (!phoneerror) 
        {
            errors.innerHTML += "<p>* Please enter a phone according to the format: ###-###-####.</p>";
            document.signup.phone.focus();
            submit = false; 
        }


    
    //testing address
    let address = document.signup.address.value;
        if (!isNaN(address)) {
       errors.innerHTML += "<p>*Street cannot contain digits.</p>";
          document.signup.address.focus();
          submit = false; 
          }
    
    //testing city
    let cityName = document.signup.city.value;
    if (!isNaN(cityName)) {
        errors.innerHTML += "<p>*City name cannot contain digits.</p>";
        document.signup.city.focus();
        submit = false; 
    }
    
    
    //testing PostCode (e.g A2A 2A2)
    let post = document.signup.post.value;
    let posterror = true; 
    
    post.toUpperCase(); 
    document.signup.post.value = post; 

    if (post.length <= 6) 
    {
        for (let i = 0; i < 5; i++)   
        {
            if (post.charAt(i) < 'A' || post.charAt(i) > 'Z') {  
                posterror = false;  
            }
            i++;  
        }
        for (let i = 1; i < 6; i++)   
        {
            let d = post.charAt(i); 
            if (parseInt(d) != d)   
            {
                posterror = false;  
            }
            i++;  
        }
    } 
    else {
        posterror = false;
    }
    if (!posterror) {  
        errors.innerHTML += "<p>*only Canadian format allowed (Letter Digit Letter Digit Letter Digit and the length must be 6), for example C1A1A7. </p>";
        document.signup.post.focus();
        submit = false; 
    }
    return submit;
        
    }
      
     
    
    