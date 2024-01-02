import { Link } from "react-router-dom";
import logo from '../../src/assets/logo.png'

const Navbar = () => {
  return (
    <div className="font-rzak">
      <nav className="bg-white border-gray-200 ">
        <div className="flex  flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt=" Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Home Light</span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link to="/" className="text-sm text-gray-500 dark:text-black hover:underline">(+880) 1878265664</Link>
            <Link to="/login" className="text-sm text-blue-600 dark:text-blue-500 hover:underline">Login</Link>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50  dark:bg-[#699c47]">
        <div className=" px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="max-w-full max-auto flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li className="nav-item">
                <Link to="/" className="text-gray-900  nav-link dark:text-white hover:underline" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/company" className="text-gray-900 dark:text-white hover:underline">Company</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-900 dark:text-white hover:underline">Team</Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-900 dark:text-white hover:underline">Features</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
