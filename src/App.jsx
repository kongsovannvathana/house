import React from "react";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./component/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Footer />
      <Home />
    </>
  );
}
