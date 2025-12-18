import { Link } from "react-router-dom"; import { useAuth } from "../context/AuthContext"; 
export default function Navbar() { 
  const { user, logout } = useAuth(); 
  return ( 
  <nav className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md"> {/* Logo */} 
  <div className="text-2xl font-bold"> <Link to="/" className="hover:text-yellow-400">Crime Heatmap</Link> 
  </div> {/* Links */} <div className="space-x-6 flex items-center text-lg"> <Link to="/" className="hover:text-yellow-400">Home</Link> 
  {user ? ( <> <Link to="/report" className="hover:text-yellow-400">Report Crime</Link> <span className="text-yellow-300">Hello, {user.name || user.email}</span> 
  <button onClick={logout} className="bg-red-500 px-4 py-1 rounded hover:bg-red-600 transition" > Logout </button> </> ) : ( <>
   <Link to="/login" className="hover:text-yellow-400">Login</Link>
    <Link to="/signup" className="bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-500 transition" > Signup </Link> </> )} 
    </div> </nav> ); }