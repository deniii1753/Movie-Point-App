export function Login() {
    return (
        <div class="login-area">
            <div class="login-box">
                <a href="/"><i class="icofont icofont-close"></i></a>
                <h2>LOGIN</h2>
                <form action="#">
                    <h6>Username:</h6>
                    <input type="text" />
                    <h6>Password:</h6>
                    <input type="text" />
                    {/* <div class="login-remember">
                        <input type="checkbox" />
                        <span>Remember Me</span>
                    </div> */}
                    {/* <div class="login-signup">
                        <span>SIGNUP</span>
                    </div> */}
                    <button class="theme-btn auth-button">LOG IN</button>
                </form>
            </div>
        </div>
    );
}