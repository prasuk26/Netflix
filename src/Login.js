import { useNavigate , Link} from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword , createUserWithEmailAndPassword} from 'firebase/auth';
import { firebaseConfig } from "./components/firebaseConfig";
import { useEffect, useState } from "react";

const Login = ({page}) => {
    const app = initializeApp(firebaseConfig);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth();

    const [isUserExist , setUserExist] = useState(false);
    const [isEmailUsed, setIsEmailUsed] = useState(false);
    const ctaClickHandler = (e) => {
        e.preventDefault();
        if(page){
      //   navigate('/dashboard');
      signInWithEmailAndPassword(auth, email, password)
      .then(auth => {
          if (auth) {
              navigate('/dashboard');
          }
      })
      // .catch(error => alert(error.message));
      .catch(error => setUserExist(true));
        }
        else{
            createUserWithEmailAndPassword(auth ,email,password)
            .then(
                auth => {
                    if(auth){
                        navigate('/dashboard')
                    }
                }
            )
            .catch ( error => setIsEmailUsed(true));
        }   
    }

    useEffect(() =>{
        setUserExist(false);
        setIsEmailUsed(false);
    },[])

    const emailOnChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordOnChangeHandler = (e) => {
        setPassword(e.target.value)

    }

    return (

        <div className="login">
            <div className="holder">
                <h1 className="text-dark">{page ? 'Sign in':'Register'}</h1>
                <br />
                <form>
                    <input className="form-control" value={email} onChange={emailOnChangeHandler} type="email" placeholder="Email" />
                    <input className="form-control" value={password} onChange={passwordOnChangeHandler} type="password" placeholder="Password" />
                    <button className="btn btn-danger btn-block" onClick={ctaClickHandler}>{page ? 'Sign in':'Register'}</button>
                    <br />
                   {
                    page &&  <div className="form-check">
                    <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label text-dark" htmlFor="flexCheckDefault">
                        Remember Me
                    </label>
                </div>
                   }
                </form>
                <br />
                <br />
                {isUserExist && <p className="text-danger">user does not exist | go for signup</p> }
                {isEmailUsed && <p className="text-danger">Email already in  use | go for sign In</p> }
                <div className="login-form-other">
                    <div className="login-signup-now">{page ? 'New to Netflix?':'Existing user'} &nbsp;
                        <Link className=" " to={page?'/register':'/login'}>{page ? 'Sign up now':'Sign In'} </Link>.
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Login;
