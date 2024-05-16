import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Assignment from "../../components/Assignment";
import Nav from "./Components/Nav";

/**
 * Opgave: ændre to inde i nav til den korrekte stig
 *
 * Følg disse trin:
 * i denne opgave ser du Nav.js componentet der er noget ballade derinde, der gør at vores vellykkede Use2 ikke helt fungere.
 * til denne opgave vil jeg anbefale dig at lave en npm start for at se hvordan use2 opfører sig.
 * lad os se om du kan spotte fejlen
 *
 * Hint: Der er noget der begynder med Li.. og slutter på nk.
 */

export default function Use2() {
  return (
    <Assignment id={"use-2"}>
      <Router>
        <Link className="bg-red-500 rounded text-white p-4" to={"/"}>
          Tryk på mig før du starter denne opgave.
        </Link>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </Assignment>
  );
}
