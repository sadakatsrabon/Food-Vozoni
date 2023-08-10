import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../providers/AuthProvider";

const SingUp = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const {createUser} = useContext(AuthContext);

    const onSubmit = (data) => {
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
    };


    return (
        <>
        <Helmet>
                <title>Food Vozoni | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            {/* Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="Your Name" className="input input-bordered" />
                                {errors.name && <span><small className="text-red-600">Name is required</small></span>}
                            </div>
                            {/* Email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {/* handle Error */}
                                {errors.email && <span><small className="text-red-600">Email is required</small></span>}
                            </div>
                            {/* Password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/
                                })} name='password' placeholder="password" className="input input-bordered" />
                                {/* handle Error */}
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600"><small>Password is required</small></p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600"><small>Password Must be more then 06 character</small></p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-600"><small>Must be less then 20 character.</small></p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600"><small>Must have upper case, lower case, number, and special character.</small></p>
                                )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingUp;