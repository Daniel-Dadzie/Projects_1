//

const inputField = document.getElementById('inputField');
const errorMessage = document.getElementById('errorMessage');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function() {
    if (inputField.value.trim() === '') {
        errorMessage.textContent = '⚠️ Input cannot be empty';
        errorMessage.style.visibility = 'visible';
        inputField.classList.add('shake');
        setTimeout(function()  {
            inputField.classList.remove("shake");
            errorMessage.style.visibility = "hidden";
        }, 500);
    }
    else {
        alert('✅ Input submitted');
    }
});
