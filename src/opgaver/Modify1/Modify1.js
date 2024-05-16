import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import BlogPost from "./Components/BlogPost";
import BlogList from "./Components/BlogList";
import Assignment from "../../components/Assignment";
import statisk from "./Components/Statisk";

/**
 * Opgave: Opsæt routing for en simpel blog-applikation med React Router.
 *heyo ja jeg skriver tingiuuhuuh hhuvguvguvgu
 * Følg disse trin:
 *
 * 1. Opret to komponenter, BlogList og BlogPost, der repræsenterer henholdsvis listen over blogindlæg og en enkelt blogpost.
 * 2. Definér ruterne for home, hvor bloglisten skal vises, og en rute til visning af en enkelt blogpost.
 * 3. Sørg for at de korrekte komponenter er tilknyttet de rigtige ruter.
 *
 * Hint: Tænk over, hvordan du vil strukturere dine URL'er for at vise en liste over blogindlæg og en enkelt blogpost.
 */

export default function Modify1() {
  return (
    <Assignment id={"modify-1"}>
      <Router>
        <Link className="bg-red-500 rounded text-white p-4" to={"/"}>
          Tryk på mig før du starter denne opgave.
        </Link>
        <Routes>
          <Route path="/:any" element={<BlogList />} />
          <Route path="/" element={<BlogList />} />
          {/* lav en route til en dynamisk side */}
          <Route path="/blog/:id" element={<BlogPost />} />
          {/* lav en route der linker til en statisk hjemmeside*/}
        </Routes>
      </Router>
    </Assignment>
  );
}
