document.getElementById("bottom").addEventListener("click", function () { 
    event.preventDefault(); 
    let lastName = document.getElementById("last name").value; 
    let firstName = document.getElementById("first name").value; 
    let email = document.getElementById("email").value; 
   
   
    const customerString = ${e-mail} - ${lastName} ${firstName}; 
    return console.log(customerString); 
  });
