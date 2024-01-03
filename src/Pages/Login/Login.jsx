import { Link } from "react-router-dom";


const Login = () => {
    const handleSubmit = e => {
        e.preventDefault()
        // console.log('click');
        const form = e.target;
        const password = form.password.value;
        const email = form.email.value;
        console.log(password, email);

    }

    return (
        <div className="md:p-10">
            <div>
                <h1 className="text-3xl font-bold text-center mt-4 font-jost">Welcome to Login Page</h1>
            </div>
            <form onSubmit={handleSubmit} className="card-body">
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
                <div className="form-control mt-6">
                    <button className="btn bg-[#699c47] text-white">Login</button>
                </div>
            </form>
            <p className="text-center ">If you are new hear please <Link className="font-bold font-jost text-[#699c47]" to={'/singUp'}>Sing up</Link></p>
        </div>
    );
};

export default Login;