export default function Assignment({ id, children }) {
  function generateUniqueId() {
    return `opgave-${Math.random().toString(36).substr(2, 9)}`;
  }

  function makeTitle() {
    return `Opgave ${id.replace("-", " ")}`;
  }

  // Brug en unik ID, hvis der ikke er angivet en
  if (!id) {
    id = generateUniqueId();
  }

  return (
    <section id={id}>
      <h2>{makeTitle()}</h2>
      {children}
    </section>
  );
}
