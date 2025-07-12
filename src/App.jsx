import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Home() {
  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold mb-6">Welcome to EasySarkari</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white shadow-md p-4 rounded-xl">
          <h2 className="text-lg font-semibold mb-2">Latest Jobs</h2>
          <p className="text-sm">Apply Now</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-xl">
          <h2 className="text-lg font-semibold mb-2">Admit Cards</h2>
          <p className="text-sm">Download Now</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-xl">
          <h2 className="text-lg font-semibold mb-2">Results</h2>
          <p className="text-sm">Check Result</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-xl">
          <h2 className="text-lg font-semibold mb-2">Answer Keys</h2>
          <p className="text-sm">View Answer Key</p>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold">About EasySarkari</h1>
      <p className="mt-2 text-sm">We help you find government jobs easily.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <p className="mt-2 text-sm">Email: contact@easysarkari.in</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
