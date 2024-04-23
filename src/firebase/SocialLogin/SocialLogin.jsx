import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const SocialLogin = () => {
    // const navigate = useNavigate();
    // const location = useLocation()

    // const handleSocialLogin = (media) =>{
    //     media();
    //     navigate(location?.state ? location.state : "/")
    // }
    return (
        <>
        <div>
             <div className="divider">OR</div>
            <div className="space-y-3">

            <div className="flex items-center">
            <button
            // onClick={()=>handleSocialLogin(googleLogin)}
            className="btn w-full ">
                <span className="text-2xl"><FcGoogle /></span>
                 Continue with Google
                 </button>
            </div>
            <div className="flex items-center">
            <button
            // onClick={()=>handleSocialLogin(githubLogin)}
            className="btn w-full ">
                <span className="text-2xl"><FaGithub /></span>
                 Continue with Github
                 </button>
            </div>
            </div>
        </div>
        </>
    );
};

export default SocialLogin;