import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className="md:flex p-10">
                <img className="w-56 h-56 rounded-full" src={ user?.photoURL} alt="" />
                <h1 className="text-5xl p-20">{user?.displayName}</h1>
            </div>
        </div>
    );
};

export default Profile;