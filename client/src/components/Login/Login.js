import { AiOutlineClose } from 'react-icons/ai';

export function Login() {
    return (
        <div className="login-area">
            <div className="login-box">
                <a href="/"><AiOutlineClose /></a>
                <h2>LOGIN</h2>
                <form action="#">
                    <h6>Username:</h6>
                    <input type="text" />
                    <h6>Password:</h6>
                    <input type="text" />
                    {/* <div className="login-remember">
                        <input type="checkbox" />
                        <span>Remember Me</span>
                    </div> */}
                    {/* <div className="login-signup">
                        <span>SIGNUP</span>
                    </div> */}
                    <button className="theme-btn auth-button">LOG IN</button>
                </form>
            </div>
        </div>
    );
}