import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NotesState from "./context/notes/NotesState";

function App() {
  return (
    <>
      <NotesState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </BrowserRouter>
      </NotesState>
    </>
  );
}

export default App;
