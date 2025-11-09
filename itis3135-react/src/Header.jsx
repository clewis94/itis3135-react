import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header>
      <h1>Connor Lewis's Crafty Llama || ITIS3135 Home</h1>


<nav>
  <Link to="/home">Home</Link>
  ||
  <Link to="/introduction">Introduction</Link>
  ||
  <Link to="/contract">Contract</Link>
</nav>

    </header>
  )
}