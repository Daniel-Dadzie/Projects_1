# 🚨 Shake-on-Invalid-Input Form

A simple JavaScript project that validates user input and provides instant feedback using a **shake animation** and error message when the field is empty. If the input is valid, a success message is displayed.

---

## ✨ Features
- Input validation on submit
- Shake animation for invalid input fields
- Error message with a warning icon (`⚠️`)
- Auto-hides the error after animation
- Success alert when input is valid

---

## 📂 Project Structure
index.html # Form with input field, error message, and submit button
style.css # Styles for form and the shake animation
script.js # Validation logic and error handling

yaml
Copy code

---

## 🛠️ How It Works
1. User clicks the **Submit** button.
2. JavaScript checks if the input field is empty:
   - If **empty**:
     - Shows an error message.
     - Adds a `.shake` class that triggers the CSS animation.
     - Removes the `.shake` class after 500ms so it can be triggered again.
   - If **not empty**:
     - Displays a success alert (`✅ Input submitted`).
3. Error message auto-hides after the shake effect completes.

---

## 💻 Technologies Used
- **HTML** – Structure of the form.
- **CSS** – Styling and shake animation.
- **JavaScript** – Input validation and DOM manipulation.

---

## 🎨 Shake Animation (CSS)
```css
@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}

.shake {
  animation: shake 0.5s;
}
🚀 How to Run
Clone or download this repository.

Open index.html in your browser.

Type something in the input field and click Submit.

 

🔮 Future Improvements
Replace alert with a custom success popup.

Validate multiple fields (e.g., email, password).

Add icons (Font Awesome / Material Icons) for better UI feedback.

👨‍💻 Author
Daniel Yaw Dadzie