// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa_qPL_XJIl2u9i0nEwfQ-yCXIH9xZ6nQ",
  authDomain: "toonimized-78692.firebaseapp.com",
  projectId: "toonimized-78692",
  storageBucket: "toonimized-78692.appspot.com", // ✅ fix this line
  messagingSenderId: "580806715175",
  appId: "1:580806715175:web:2defa560f0109889b2eb02",
  measurementId: "G-1GH30JGSD5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, app, analytics };

// ✅ Add event listener safely after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  const signupButton = document.getElementById("signup-button");

  if (signupButton) {
    signupButton.addEventListener("click", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("✅ User signed up:", user);
          alert("Signup successful!");
        })
        .catch((error) => {
          console.error("❌ Error:", error.code, error.message);
          alert(error.message);
        });
    });
  } else {
    console.error("⚠️ signupButton not found in DOM");
  }
});
