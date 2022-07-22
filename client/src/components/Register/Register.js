import { AiOutlineClose } from 'react-icons/ai';

export function Register({closeModalHandler}) {
    
    function closeHandler(e) {
        e.preventDefault();

        if(e.target.className !== 'login-area') return;
        closeModalHandler('register');
    }

    return (
        <div className="login-area" onClick={closeHandler}>
                <div className="login-box">
                    <button onClick={closeModalHandler.bind(null, 'register')}><AiOutlineClose /></button>
                    <h2>REGISTER</h2>
                    <form action="#" className="auth-form">
                        <h6>First Name*:</h6>
                        <input type="text" name="firstName" />
                        <h6>Last Name*:</h6>
                        <input type="text" name="lastName" />
                        <h6>Username*:</h6>
                        <input type="text" name="username" />
                        <h6>Email*:</h6>
                        <input type="text" name="email" />
                        <h6>Password*:</h6>
                        <input type="password" name="password" />
                        <h6>Repeat Password*:</h6>
                        <input type="password" name="rePassword" />
                        {/* <h6>Image:</h6>
                    <input type="text" name="imgUrl"/> */}
                        <h6>Bio*:</h6>
                        <textarea name="bio"></textarea>
                        <button className="theme-btn auth-button">REGISTER</button>
                    </form>
            </div>
        </div>
    )
}