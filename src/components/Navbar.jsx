import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">NovaStack Technologies</h1>
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;