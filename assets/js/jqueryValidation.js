//$ sign indicate that this is a jQuery object
//deliver address form validation on check out page
$(document).ready(function(){
    //address form Validation
    $("#form2").validate({
        rules: {  //Defining validation rules for each field
            fName : {
              required: true
            },
            LName : {
                required: true
            },
            email: {
              required: true,
              email: true
            },
            address: {
              required: true
            },
            mobileNumber: {
                required: true,
                number: true,
                min: 7
            }
        },
        messages : { //Defining custom error messeges
          fName: {
            required: "First Name is mandatory!",
          },
          LName: {
            required: "Last Name is mandatory!",
          },
          email: {
            email: "The email should be in the format: abc@domain.tld"
          },
          address: {
            required: "Deliver address is mandatory!"
          },
          mobileNumber: {
            required: "Please enter your mobile number",
            number: "Please enter your mobile number as a numerical value",
            min: "Mobile number should at least 6 numbers"
          },
        }
    });
  
});


// Login Validation
$(document).ready(function(){
  $("#form1").validate({
        rules: {  //Defining validation rules for each field
            user : {
              required: true,
              minlength: 3
            },
            pass : {
                required: true,
                minlength: 3
            }
        },
        messages : { //Defining custom error messeges
          user: {
            required: "User name is mandatory!",
            minlength: "User name should be at least 3 characters"
          },
          pass: {
            required: "Password is mandatory!",
            minlength: "Password should be at least 6 characters"
          }
        }
    }) 
});