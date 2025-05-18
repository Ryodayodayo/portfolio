import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Works from "./pages/Works";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/works" element={<Works />}/>
          <Route path="/Contact" element={<Contact />}/>
        </Routes>
      </main>

    </BrowserRouter>
  );
}

export default App;
