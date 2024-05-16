import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Assignment from "../../components/Assignment";
import Nav from "./Components/Nav";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsAndConditions from "./Components/TermsAndConditions";
import SiteMap from "./Components/SiteMap";

/**
 * Opgave: ændre to inde i nav til den korrekte stig
 *
 * Følg disse trin:
 * i denne opgave ser du Nav.js componentet der er noget ballade derinde, der gør at vores vellykkede Create1 ikke helt fungere.
 * til denne opgave vil jeg anbefale dig at lave en npm start for at se hvordan create1 opfører sig.
 * lad os se om du kan spotte fejlen
 *
 * Hint: Der er noget der begynder med Li.. og slutter på nk.
 */

export default function Create1() {
  return (
    <Assignment id={"create-1"}>
      <Router>
        <Link className="bg-red-500 rounded text-white p-4" to={"/"}>
          Tryk på mig før du starter denne opgave.
        </Link>

        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/sitemap" element={<SiteMap />} />
        </Routes>
        <footer className="bg-gray-800 text-white p-8">
          <Link to="/privacypolicy" className="mr-4 hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link to="/termsandconditions" className="mr-4 hover:text-gray-300">
            Terms And Conditions
          </Link>
          <Link to="/sitemap" className="hover:text-gray-300">
            Site Map
          </Link>
        </footer>
      </Router>
    </Assignment>
  );
}
