import "./App.sass";
import Nav from "./components/Nav";
import Create1 from "./opgaver/Create1/Create1";
import Modify1 from "./opgaver/Modify1/Modify1";
import Use1 from "./opgaver/Use1/Use1";
import Use2 from "./opgaver/Use2/Use2";

function App() {
  const assignments = ["use-1", "use-2", "modify-1", "create-1"];

  return (
    <>
      <Nav list={assignments} />
      <main>
        <Use1 />
        <Use2 />
        <Modify1 />
        <Create1 />
      </main>
    </>
  );
}

export default App;
