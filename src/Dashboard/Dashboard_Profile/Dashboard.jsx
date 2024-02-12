import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="bg-white md:max-h-screen font-jost">
            <div className="text-black font-Poppins flex  max-w-3xl lg:max-w-screen-xl">
                <div className="w-40 md:w-64 max-h-full text-white bg-[#699c47]">
                    <ul className="menu md:p-6  md:text-xl">
                        {
                            user && <>
                                <li className="md:mb-4"><NavLink to='/dashboard/profile'>My Profile</NavLink></li>
                                <li><NavLink to='/dashboard/addBlog'>Add Blog</NavLink></li>
                                <li><NavLink to='/dashboard/add-product'>Add Product</NavLink></li>
                                <li><NavLink to='/dashboard/previous'>Previous task</NavLink></li>
                                <div className="divider"></div>
                                <li><NavLink to='/'>Home</NavLink></li>
                            </>
                        }
                    </ul>

                </div>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>

        </div >
    );
};

export default Dashboard;