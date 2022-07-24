import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Header } from './components/static/Header/Header';
import { Footer } from './components/static/Footer';
import { Login } from './components/Auth/Login/Login';
import { Register } from './components/Auth/Register/Register';

import UserContext from './contexts/UserContext';
import UserModalContext from './contexts/UserModalContext';
import { Routing } from './components/Routing/Routing';
import { useModal } from './hooks/useModal';

function App() {
    const { isModalOpened: isLoginModalOpened, openModal: openLoginModal, closeModal: closeLoginModal } = useModal();
    const { isModalOpened: isRegisterModalOpened, openModal: openRegisterModal, closeModal: closeRegisterModal } = useModal();
    const [user, setUser] = useState();

    function updateUser(userData) {
        setUser(userData);
    }

    return (
        <UserContext.Provider value={{ user, updateUser }} >
            <div className="App">
                <UserModalContext.Provider value={[openLoginModal, openRegisterModal]}>
                    <Header user={user} />
                </UserModalContext.Provider>

                {isLoginModalOpened && <Login closeModalHandler={closeLoginModal} />}
                {isRegisterModalOpened && <Register closeModalHandler={closeRegisterModal} />}

                <Routing isAuth={user ? true : false} />

                <Footer />
            </div>
        </UserContext.Provider>
    );
}

export default App;
