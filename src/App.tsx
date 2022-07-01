import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Project from "./pages/Project";
import SimpleNavbar from "./components/SimpleNavbar/SimpleNavbar";
import Head from "./components/head/Head";
function App() {
  const HomeLayout = () => {
    return (
      <>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </>
    );
  };
  const OtherLayout = () => {
    return (
      <>
        <SimpleNavbar />
        <main>
          <Outlet />
        </main>
      </>
    );
  };
  return (
    <div className="App">
      <Head />
      <Router>
        {/* <Navbar /> */}

        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="layout" element={<OtherLayout />}>
            <Route path="projects/:id" element={<Project />} />
            <Route path="experience" element={<Experience />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
