import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9OlZkxesWVGzfLchVBtKvBp0Qe99uPzc",
  authDomain: "netflix-clone-74821.firebaseapp.com",
  projectId: "netflix-clone-74821",
  storageBucket: "netflix-clone-74821.firebasestorage.app",
  messagingSenderId: "418862196747",
  appId: "1:418862196747:web:a3d627c66eb94cd889ff0e",
  measurementId: "G-V8ZER1MM4P"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return res.user;
  } catch (error) {
    console.error("Signup error:", error.message);
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user;
  } catch (error) {
    console.error("Login error:", error.message);
    throw error;
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout error:", error.message);
    throw error;
  }
};

export { auth, signup, login, logout };