import { useState } from 'react';

import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Header } from './components/static/Header/Header';
import { Footer } from './components/static/Footer';
import { Home } from './components/Home/Home';
import { Movies } from './components/Movies/Movies';
import { MovieDetails } from './components/MovieDetails/MovieDetails';
import { Profile } from './components/Profile/Profile';
import { Login } from './components/Auth/Login/Login';
import { Register } from './components/Auth/Register/Register';
import { MovieCreate } from './components/MovieCreate/MovieCreate';
import { NotFound } from './components/static/NotFound/NotFound';
import { ServerError } from './components/static/ServerError/ServerError';

import UserContext from './contexts/UserContext';
import UserModalContext from './contexts/UserModalContext';

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
        closeModal(modalName)
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

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/movies/create" element={<MovieCreate />} />
                    <Route path="/movies/:movieId" element={<MovieDetails />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/500" element={<ServerError />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </UserContext.Provider>
    );
}

export default App;
