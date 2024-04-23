// import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";

import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../firebase/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../firebase/AuthProvider/AuthProvider";


const Login = () =>  {
    const {logIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()


const handleLogin = (e) =>{
    e.preventDefault();    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);

    // login user
    logIn(email,password)
    .then(res=>{
        console.log(res.user);
        navigate(location?.state? location.state : '/about')
    })
    .catch(error=>{
        console.log(error.message);
    })

}
   return (
    <div className=" flex justify-center items-center px-8 lg:px-24 mt-10">
    <div className="w-full md:w-3/5 lg:w-1/3 mx-auto p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
        <h1 className="text-2xl font-semibold text-center p-4">Please  Login</h1>
        <form onSubmit={handleLogin}>
            <div className="">
                <input className="w-full mb-6 p-4 border border-gray-300 rounded-lg outline-0" type="email" name="email" id="" placeholder="Email address" required />
            </div>
            <div className="relative">
                <input className="w-full mb-6 p-4 border border-gray-300 rounded-lg outline-0" 
                
                 // Eye icon setup condition reandering
                type="password" name="password" id="" placeholder="Password" required />
                {/* type={showPassword?"text":"password"} name="password" id="" placeholder="Password" required /> */}
                {/* <p className="absolute top-6 right-3 cursor-pointer" 
                onClick={()=>setShowPassword(!showPassword)}>
                    {showPassword?<IoEyeOutline />:<IoEyeOffOutline />}
                </p> */}
            </div>
            <div className="">
                <button href="#_" type="submit" className="w-full rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer  border-l-2 active:border-emerald-900 active:shadow-none shadow-lg bg-gradient-to-tr from-emerald-900 to-emerald-900 border-emerald-900 text-white">
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full"></span>
                    <span className="relative">Continue</span>
                </button>
            </div>
            <p className="px-4 py-2">Alredy Have an account? <Link to="/register" className="font-bold text-emerald-900">Register</Link></p>
        </form>
        <SocialLogin />
    </div>
</div>
   )
}

export default Login;