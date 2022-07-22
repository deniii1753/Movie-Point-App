import { useState } from 'react';

import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Header } from './components/static/Header';
import { Footer } from './components/static/Footer';
import { Home } from './components/Home/Home';
import { Movies } from './components/Movies/Movies';
import { MovieDetails } from './components/MovieDetails/MovieDetails';
import { Profile } from './components/Profile/Profile';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { MovieCreate } from './components/MovieCreate/MovieCreate';
import { NotFound } from './components/static/NotFound/NotFound';
import { ServerError } from './components/static/ServerError/ServerError';

function App() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

    function openModal(modalName) {
        if(modalName === 'login') setIsLoginModalOpen(true);
        if(modalName === 'register') setIsRegisterModalOpen(true);
    }

    function closeModal(modalName) {
        if(modalName === 'login') setIsLoginModalOpen(false);
        if(modalName === 'register') setIsRegisterModalOpen(false);
    }

    function closeModalHandler(modalName) {
        closeModal(modalName)
    }
    return (
        <div className="App">
            <Header openModal={openModal} />

            {isLoginModalOpen && <Login closeModalHandler={closeModalHandler}/>}
            {isRegisterModalOpen && <Register closeModalHandler={closeModalHandler}/>}

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
    );
}

export default App;
