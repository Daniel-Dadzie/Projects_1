const username = document.getElementById('username');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('myform');

const output1 = document.querySelector('.output1'); // use class selector
const output2 = document.querySelector('.output2');
const output3 = document.querySelector('.output3');

const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const errorPopup = document.querySelector('.error-message');
const successPopup = document.querySelector('.submitted');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Hide popups
  errorPopup.style.display = "none";
  successPopup.style.display = "none";

  // Reset field error texts
  output1.textContent = "";
  output2.textContent = "";
  output3.textContent = "";
 

  if(username.value.trim() === "" && email.value.trim() === "" && message.value.trim() === "") {
    errorPopup.style.display = "block";
       

  setTimeout(() => {
      errorPopup.style.display = "none";
    }, 1500);
  
}

    else if(username.value.trim() === "") {
      output1.textContent = "❌Username is required";
      output1.style.color = "red";
    }
    else if(email.value.trim() === "") {
      output2.textContent = "⚠️Email is required";
      output2.style.color = "red";
    }
    else if(message.value.trim() === "") {
      output3.textContent = "⚠️Message is required";
      output3.style.color = "red";
    }
    else if(!validEmail.test(email.value.trim())) {
      output2.textContent = "Invalid email format";
    }
    else {
      successPopup.style.display = "block";
      

  setTimeout(() => {
      successPopup.style.display = "none";
    }, 3000);
  
      form.reset();
    }
  });

// Clear error messages on input

[username, email, message].forEach(field => {
  field.addEventListener('input', () => {
    errorPopup.style.display = "none";
    successPopup.style.display = "none";
  });
});
