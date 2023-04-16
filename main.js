function automateRegistration() {
    
    const lastName = prompt("Mail:");
  
    const firstName = prompt("LastName:");
  
   const email = prompt("FirstName:");
  
    const registrationString = `${email} - ${lastName} ${firstName}`;
  
   return registrationString;
  }

  
  const registrationInfo=automateRegistration();
  console.log(registrationInfo);

  