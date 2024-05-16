export default function NavItem({ name }) {
  //   function clearUrl() {
  //     navigate("/");
  //   }

  return (
    <li>
      <a href={`#${name}`}>{name}</a>
    </li>
  );
}
