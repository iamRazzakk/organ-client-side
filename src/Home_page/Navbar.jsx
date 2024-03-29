import { Link, useNavigate } from "react-router-dom";
import logo from '../../src/assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Components/Hook/axiosPublic";

const Navbar = () => {
  const axiosPublic = useAxiosPublic()
  const { data: userData = [], } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const res = await axiosPublic.get('/users');
      return res.data;
    },
  });
  console.log(userData);

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
              <li className="nav-item">
                <details>
                  <summary className="text-gray-900  nav-link dark:text-white hover:underline">Pages</summary>
                  <ul className="p-2">
                    <li><Link to='about' className="text-gray-900  nav-link dark:text-white hover:underline">About</Link></li>
                    <li><Link className="text-gray-900  nav-link dark:text-white hover:underline">Team</Link></li>
                    <li><Link className="text-gray-900  nav-link dark:text-white hover:underline">FAQ</Link></li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/blog" className="text-gray-900 dark:text-white hover:underline">Blog</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-900 dark:text-white hover:underline">Contact</Link>
              </li>
              <Link to={'dashboard/profile'}>
                <ul className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img src={userData.image} alt="" />
                    </div>
                  </div>
                </ul>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
