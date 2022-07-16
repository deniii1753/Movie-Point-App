export function Register() {
    return (
        <div class="login-area">
            <div class="login-box">
                <a href="/"><i class="icofont icofont-close"></i></a>
                <h2>REGISTER</h2>
                <form action="#" className="auth-form">
                    <h6>Username:</h6>
                    <input type="text" name="username"/>
                    <h6>Email:</h6>
                    <input type="text" name="email"/>
                    <h6>Password:</h6>
                    <input type="password" name="password"/>
                    <h6>Repeat Password:</h6>
                    <input type="password" name="re-password"/>
                    <h6>Image:</h6>
                    <input type="text" name="imgUrl"/>
                    <h6>Bio:</h6>
                    <textarea name="bio"></textarea>
                    <button class="theme-btn auth-button">REGISTER</button>
                </form>
            </div>
        </div>
    )
}