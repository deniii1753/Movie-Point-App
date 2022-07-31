import { ToastContainer } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import { Header } from './components/Header/Header';
import { Footer } from './components/static/Footer';
import { Login } from './components/Auth/Login/Login';
import { Register } from './components/Auth/Register/Register';

import { UserContextProvider } from './contexts/UserContext';
import UserModalContext from './contexts/UserModalContext';
import { Routing } from './components/Routing/Routing';
import { useModal } from './hooks/useModal';

function App() {
    const { isModalOpened: isLoginModalOpened, openModal: openLoginModal, closeModal: closeLoginModal } = useModal();
    const { isModalOpened: isRegisterModalOpened, openModal: openRegisterModal, closeModal: closeRegisterModal } = useModal();

    return (
        <UserContextProvider>
            <div className="App">
                <UserModalContext.Provider value={[openLoginModal, openRegisterModal]}>
                    <Header />
                </UserModalContext.Provider>

                {isLoginModalOpened && <Login closeModalHandler={closeLoginModal} />}
                {isRegisterModalOpened && <Register closeModalHandler={closeRegisterModal} />}

                <Routing />

                <Footer />

                <ToastContainer theme='dark' style={{userSelect: 'none'}}/>
            </div>
            </UserContextProvider>
    );
}

export default App;
