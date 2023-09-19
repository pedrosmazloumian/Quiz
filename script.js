function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      Branch: document.getElementById("Branch").value,
      message: document.getElementById("message").value,

    };
  
    const serviceID = "service_2m8lm7u";
    // const templateID = "template_r4eyz2y";
    const templateID = "template_xrdqf0j";

  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("Branch").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
  