import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/"> Homepage </NavLink>
        </li>
        <li>
          <NavLink to="/info"> Chi siamo </NavLink>
        </li>
        <li>
          <NavLink to="/list"> Lista </NavLink>
        </li>
      </ul>
    </nav>
  )
}