import { Route, Routes } from 'react-router-dom'
import { Header } from './components/static/Header';
import { Footer } from './components/static/Footer';
import { Home } from './components/Home/Home';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
