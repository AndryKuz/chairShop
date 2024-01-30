import { FaFacebook, FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";


import "./SignUpWithSocial";

const SignUpWithSocial = ({icon, provider}) => {

    const getIcon = () => {
        switch (icon) {
            case 'facebook':
                return <FaFacebook/>;
            case 'apple':
                return <FaApple/>;
            case 'google':
                return <FcGoogle/>;
            default:
                return null;        
        }
    };
  return (
    <button className='sign-in-social-button'>
      {getIcon()}
      <span>Sign up with {provider}</span>
    </button>
  );
};

export default SignUpWithSocial;
