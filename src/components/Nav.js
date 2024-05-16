import NavItem from "./NavItem";

export default function Nav({ list }) {
  return (
    <nav>
      <ul>
        {list.map((name) => (
          <NavItem key={name} name={name} />
        ))}
      </ul>
    </nav>
  );
}
