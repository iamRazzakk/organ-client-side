import { Link, useNavigate } from "react-router-dom";
import logo from '../../src/assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleLogout = () => {
    logOut()
    navigate('/login')
  }
  return (
    <div className="font-jost">
      <nav className="bg-white border-gray-200 ">
        <div className="flex  flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt=" Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Home Light</span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link to="/" className="text-sm text-gray-500 dark:text-black hover:underline">(+880) 1878265664</Link>
            {
              user ? <>
                <Link onClick={handleLogout} className="text-sm text-blue-600 dark:text-blue-500 hover:underline">Logout</Link>
              </> : <>
                <Link to="/login" className="text-sm text-blue-600 dark:text-blue-500 hover:underline">Login</Link>
              </>
            }
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
              <li className="nav-item">
                <details>
                  <summary className="text-gray-900  nav-link dark:text-white hover:underline">Shop</summary>
                  <ul className="p-2">
                    <li><Link className="text-gray-900  nav-link dark:text-white hover:underline">Wish List</Link></li>
                    <li><Link className="text-gray-900  nav-link dark:text-white hover:underline">Cart</Link></li>
                  </ul>
                </details>
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
              <ul className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img alt="component" src={user ? <>{user?.photoURL
                    }</> : <>
                      {"https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"}
                    </>} />
                  </div>
                </div>
              </ul>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
