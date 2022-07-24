import { HomeHeader } from "./HomeHeader/HomeHeader";
import { HomeMovies } from "./HomeMovies/HomeMovies";

import './Home.css';

export function Home() {
    return (
        <>
        <HomeHeader />

        <HomeMovies />
        </>
    );
}