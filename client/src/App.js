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

function App() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [user, setUser] = useState();

    function openModal(modalName) {
        if (modalName === 'login') setIsLoginModalOpen(true);
        if (modalName === 'register') setIsRegisterModalOpen(true);
    }

    function closeModal(modalName) {
        if (modalName === 'login') setIsLoginModalOpen(false);
        if (modalName === 'register') setIsRegisterModalOpen(false);
    }

    function closeModalHandler(modalName) {
        closeModal(modalName);
    }

    function updateUser(userData) {
        setUser(userData);
    }

    return (
        <UserContext.Provider value={{ user, updateUser }} >
            <div className="App">
                <UserModalContext.Provider value={openModal}>
                    <Header user={user} />
                </UserModalContext.Provider>

                {isLoginModalOpen && <Login closeModalHandler={closeModalHandler} />}
                {isRegisterModalOpen && <Register closeModalHandler={closeModalHandler} />}

                <Routing isAuth={user?.username ? true : false}/>

                <Footer />
            </div>
        </UserContext.Provider>
    );
}

export default App;
