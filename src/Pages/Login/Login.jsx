

const Login = () => {
    const handleSubmit = e =>{
        e.preventDefault()
        // console.log('click');
        const form = e.target;
        const fn = form.fn.value;
        const ln = form.ln.value;
        const password = form.password.value;
        const email = form.email.value;
        console.log(fn,ln,password,email);

    }

    return (
        <div className="md:p-10">
            <div>
                <h1 className="text-3xl font-bold text-center mt-4 font-rzak">Welcome to Login Page</h1>
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
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;