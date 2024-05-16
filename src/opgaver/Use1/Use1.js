import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Assignment from "../../components/Assignment";
import Nav from "./Components/Nav";

/**
 * Opgave: Opsæt routing for Home, About og Contact siderne med React Router.
 *
 * Følg dette trin:
 *
 * 1. Sørg for at alle <Route> komponenter har korrekte stier og tilknyttede komponenter.
 *
 * Hint: Tjek stier og komponenter for About og Contact ruterne.
 */

export default function Use1() {
  return (
    <Assignment id={"use-1"}>
      <Router>
        <Link className="bg-red-500 rounded text-white p-4" to={"/"}>
          Tryk på mig før du starter denne opgave.
        </Link>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route element={<About />} />
          <Route path="/#use-1/contact" />
        </Routes>
      </Router>
    </Assignment>
  );
}
