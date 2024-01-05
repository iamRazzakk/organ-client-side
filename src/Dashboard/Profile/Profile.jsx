import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className="md:flex p-10">
                <img className="w-56 h-56 rounded-full" src={user?.photoURL} alt="" />
                <h1 className="text-5xl p-20"><span className="text-2xl">Hello,</span> <br />{user?.displayName}</h1>
            </div>
            <div className="md:p-10">
                <h1 className="text-2xl font-bold font-jost md:mb-5">My Profile</h1>
                <div className="flex mb-3">
                    <h1 className="flex-1 text-2xl font-bold font-jost">Registration Date : </h1>
                    <p className="text-left flex-1 font-jost text-xl"> {user?.reloadUserInfo.lastRefreshAt}</p>
                </div>
                <div className="flex mb-3">
                    <h1 className="flex-1 text-2xl font-bold font-jost">Name : </h1>
                    <p className="text-left flex-1 font-jost text-xl"> {user?.displayName}</p>
                </div>
                <div className="flex mb-3">
                    <h1 className="flex-1 text-2xl font-bold font-jost">Email : </h1>
                    <p className="text-left flex-1 font-jost text-xl"> {user?.reloadUserInfo.email}</p>
                </div>
                <div className="flex">
                    <h1 className="flex-1 text-2xl font-bold font-jost">Phone: </h1>
                    <p className="text-left flex-1 font-jost text-xl"> {user?.phoneNumber || "undefined"}</p>
                </div>
                <div className="flex">
                    <h1 className="flex-1 text-2xl font-bold font-jost">Biography :</h1> <br />
                    <p className="text-left flex-1 font-jost text-base md:w-[450px]">I'm Md Abdur Razzak, BBA student with 1 year front-end dev exp. Skilled in React, Node.js, Express.js, and MongoDB. <span className="font-bold text-[#ff4949]">Email</span> : mdabdurrazzakrakib290@gmail.com
</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;