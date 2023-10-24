function sendMail() {
    var params = {
      ID_BRANCH: document.getElementById("ID_BRANCH").value,
      ID_LOCATION: document.getElementById("ID_LOCATION").value,
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
      name_4: document.getElementById("name_4").value,
      Branch_4: document.getElementById("Branch_4").value,
      email_4: document.getElementById("email_4").value,
      name_5: document.getElementById("name_5").value,
      Branch_5: document.getElementById("Branch_5").value,
      email_5: document.getElementById("email_5").value,
      name_6: document.getElementById("name_6").value,
      Branch_6: document.getElementById("Branch_6").value,
      email_6: document.getElementById("email_6").value,
      name_7: document.getElementById("name_7").value,
      Branch_7: document.getElementById("Branch_7").value,
      email_7: document.getElementById("email_7").value,
      name_8: document.getElementById("name_8").value,
      Branch_8: document.getElementById("Branch_8").value,
      email_8: document.getElementById("email_8").value,
      name_9: document.getElementById("name_9").value,
      Branch_9: document.getElementById("Branch_9").value,
      email_9: document.getElementById("email_9").value,
      // message: document.getElementById("message").value,

    };
  
    const serviceID = "service_2m8lm7u";
    // const templateID = "template_r4eyz2y";
    const templateID = "template_xrdqf0j";

  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("ID_BRANCH").value = "";
          document.getElementById("ID_LOCATION").value = "";
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
          document.getElementById("name_4").value= "";
          document.getElementById("Branch_4").value= "";
          document.getElementById("email_4").value= "";
          document.getElementById("name_5").value= "";
          document.getElementById("Branch_5").value= "";
          document.getElementById("email_5").value= "";
          document.getElementById("name_6").value= "";
          document.getElementById("Branch_6").value= "";
          document.getElementById("email_6").value= "";
          document.getElementById("name_7").value= "";
          document.getElementById("Branch_7").value= "";
          document.getElementById("email_7").value= "";
          document.getElementById("name_8").value= "";
          document.getElementById("Branch_8").value= "";
          document.getElementById("email_8").value= "";
          document.getElementById("name_9").value= "";
          document.getElementById("Branch_9").value= "";
          document.getElementById("email_9").value= "";
          // document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
  
