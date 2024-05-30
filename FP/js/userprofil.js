import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA6d1UgqVmsuaX2kGVGxg2CPWUOv3wQ2X4",
  authDomain: "dbsipajuli.firebaseapp.com",
  projectId: "dbsipajuli",
  storageBucket: "dbsipajuli.appspot.com",
  messagingSenderId: "460540654838",
  appId: "1:460540654838:web:b34b57e76e67c815dee8d7",
  measurementId: "G-L52V9YZDES",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const profileInfo = document.getElementById("profile-info");
const userProfilePic = document.getElementById("user-profile-pic");
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const logoutBtn = document.getElementById("logout-btn");

// Function to update profile information
function updateUserProfile(user) {
  const userPhotoURL = user.photoURL;
  const displayName = user.displayName;
  const email = user.email;

  userProfilePic.src = userPhotoURL;
  userName.textContent = "Display Name: " + displayName;
  userEmail.textContent = "Email: " + email;
}

// Function to handle user authentication state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    updateUserProfile(user);
    profileInfo.style.display = "block"; // Show profile information
  } else {
    // User is signed out
    profileInfo.style.display = "none"; // Hide profile information
    window.location.href = "../loginmenu.html"; // Redirect to login page
  }
});

// Logout button event listener
logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      console.log("User signed out");
    })
    .catch((error) => {
      console.error("Error signing out:", error);
    });
});
