function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      Branch: document.getElementById("Branch").value,
      name_1: document.getElementById("name_1").value,
      Branch_1: document.getElementById("Branch_1").value,
      email_1: document.getElementById("email_1").value,
      name_2: document.getElementById("name_2").value,
      Branch_2: document.getElementById("Branch_2").value,
      email_2: document.getElementById("email_2").value,
      name_3: document.getElementById("name_3").value,
      Branch_3: document.getElementById("Branch_3").value,
      email_3: document.getElementById("email_3").value,
      // message: document.getElementById("message").value,

    };
  
    const serviceID = "service_2m8lm7u";
    // const templateID = "template_r4eyz2y";
    const templateID = "template_xrdqf0j";

  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("Branch").value = "";
          document.getElementById("name_1").value= "";
          document.getElementById("Branch_1").value= "";
          document.getElementById("email_1").value= "";
          document.getElementById("name_2").value= "";
          document.getElementById("Branch_2").value= "";
          document.getElementById("email_2").value= "";
          document.getElementById("name_3").value= "";
          document.getElementById("Branch_3").value= "";
          document.getElementById("email_3").value= "";
          // document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
  
