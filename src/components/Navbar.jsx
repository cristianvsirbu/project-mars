import { Link } from "react-router-dom"



const Navbar = () => {
  const navLinks = [
    {
      to: '/',
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
    <div>
      {navLinks.map(link => (
        <Link key={link.to} to={link.to}>{link.text}</Link>
      ))}
    </div>
  )
}

export default Navbar