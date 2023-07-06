import { useNavigate } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from "./components/firebaseConfig";
import { useState } from "react";

const Login = () => {
    const app = initializeApp(firebaseConfig);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth();

    const onSignInClickHandler = (e) => {
        e.preventDefault();
        // navigate('/dashboard');
        signInWithEmailAndPassword(auth, email, password)
            .then(auth => {
                if (auth) {
                    navigate('/dashboard');
                }
            })
            .catch(error => alert(error.message));
    }

    const emailOnChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordOnChangeHandler = (e) => {
        setPassword(e.target.value)

    }

    return (

        <div className="login">
            <div className="holder">
                <h1 className="text-white">Sign In</h1>
                <br />
                <form>
                    <input className="form-control" value={email} onChange={emailOnChangeHandler} type="email" placeholder="Email" />
                    <input className="form-control" value={password} onChange={passwordOnChangeHandler} type="password" placeholder="Password" />
                    <button className="btn btn-danger btn-block" onClick={onSignInClickHandler}>Sign In</button>
                    <br />
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label text-white" htmlFor="flexCheckDefault">
                            Remember Me
                        </label>
                    </div>
                </form>
                <br />
                <br />
                <div className="login-form-other">
                    <div className="login-signup-now">New to Netflix? &nbsp;
                        <a className=" " target="_self" href="/">Sign up now</a>.
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Login;
