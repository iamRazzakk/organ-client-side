import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { auth } from "../../Components/AboutUs/Firebase/Firebase";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from './../../Components/Hook/axiosPublic';
import { toast } from "react-toastify";

const Singup = () => {
    const notify = () => toast("Successfully added");
    const IMG_API_KEY = '95e0e6f1790d5b0a2184be49e4a99407'
    const navigate = useNavigate()
    const { createUser, googleSingIn } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const loginWithGoogle = () => {
        googleSingIn(auth, GoogleAuthProvider)
            .then(result => {
                const user = result.user
                console.log(user);
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleSubmit = async e => {
        e.preventDefault()
        // console.log('click');
        const form = e.target;
        const fn = form.fn.value;
        const ln = form.ln.value;
        const password = form.password.value;
        const email = form.email.value;
        const image = form.image.files[0];
        const formData = new FormData();
        formData.append('image', image);
        const { data } = await axiosPublic.post(`https://api.imgbb.com/1/upload?key=${IMG_API_KEY}`, formData);
        console.log(fn, ln, password, email);
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                navigate('/')
                const userDatas = {
                    fn: fn,
                    ln: ln,
                    email: email,
                    password: password,
                    image: data.data.url,
                };

                axiosPublic.post('/users', userDatas)
                    .then(() => {
                        // console.log(user);
                        const user = { email, password }

                        axiosPublic.post('/jwt', user)
                            .then(res => {
                                if (res.data.token) {
                                    localStorage.setItem('access-token', res.data.token)
                                } else {
                                    localStorage.removeItem('access-token')
                                }
                            })
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="md:p-5">
            <div>
                <h1 className="text-3xl font-bold text-center mt-4 font-jost">Welcome to Login Page</h1>
            </div>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="First Name" name="fn" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Last Name</span>
                    </label>
                    <input type="text" placeholder="Last Name" className="input input-bordered" name="ln" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Profile Pic</span>
                    </label>
                    <input type="file" name="image" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#699c47] text-white">Sing up</button>
                </div>
                <div className="flex mx-auto">
                    <button onClick={loginWithGoogle} className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-medium text-black transition-all duration-300 ease-in-out bg-white rounded hover:bg-white group mt-4 ml-6 md:ml-20">
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#699c47] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-ou group-hover:h-full"></span>
                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </span>
                        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </span>
                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Google</span>
                    </button>
                    <Link to='about'>
                        <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#699c47] rounded hover:bg-white group mt-4 ml-6 md:ml-20">
                            <span className="w-48 h-48 rounded rotate-[-40deg] bg-white absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-black">Github</span>
                        </button>
                    </Link>
                </div>
            </form>
            <p className="text-center ">All ready have an account please <Link className="font-bold font-jost text-[#699c47]" to={'/singin'}>Sing in</Link></p>
        </div>
    );
};

export default Singup;