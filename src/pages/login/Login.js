import React, {useState} from 'react';
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))

        // some fancy firebase shieeet
    }

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);

            if(auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
        // some fancy firebase register 
    }

    return (
        <div className="login">
         <Link to="/">
         <img src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/2a17760b-856d-47da-a449-b7ec8584c60b" alt="" className="login__logo" />
         </Link>

         <div className="login__container">
             <h1>Sign In</h1>
             <form>
                 <h5>Email</h5>
                 <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                 <h5>Password</h5>
                 <input type="password" value={password} onChange={p => setPassword(p.target.value)} />
                 <button className="login__signInButton" onClick={signIn}>Sign In</button>
                 <p className="agreement">By signing-in you agree to blahblahblah and to selling your soul.</p>

                 <button className="login__registerButton" onClick={register}>
                     Create your Amazon Account 
                 </button>
             </form>
         </div>
         </div>
    )
}

export default Login;