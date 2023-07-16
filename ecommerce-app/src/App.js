import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from './pages/Home';
import About from "./pages/About";
import Contact from "./pages/Contact";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADWyzi5byd5mAev4wHgcDz--_mTcmtIho",
  authDomain: "ecommerce-82ebc.firebaseapp.com",
  projectId: "ecommerce-82ebc",
  storageBucket: "ecommerce-82ebc.appspot.com",
  messagingSenderId: "347958615127",
  appId: "1:347958615127:web:4bc629563cc514e8881712",
  measurementId: "G-F4T4V7Q7HG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
