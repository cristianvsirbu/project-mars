import { Link } from "react-router-dom"



const Navbar = () => {
  const navLinks = [
    {
      to: '/home',
      text: 'Home'
    },
    {
      to: '/about',
      text: 'About'
    },
    {
      to: '/imagery',
      text: 'Imagery'
    },
    {
      to: '/weather',
      text: 'Weather'
    }
  ]
  return (
    <nav className="navbar relative">
      <img src="/src/assets/logo.png" className="absolute w-44 top-0 left-10" />
      <ul className="navbar-links">
        {navLinks.map(link => (
          <li key={link.to}>
            <Link to={link.to}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar