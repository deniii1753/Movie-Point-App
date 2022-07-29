import { useContext } from "react";
import MovieButtonsContext from "../../../contexts/MovieButtonsContext";

import { RateButtons } from "./RateButtons/RateButtons";
import { OwnerButtons } from "./OwnerButtons/OwnerButtons";

export function MovieButtons() {
    const {user, movie} = useContext(MovieButtonsContext);
    let buttons;

    if (user) {
        if (user?.role !== 'admin') {
            if (user._id === movie.postCreator) {
                buttons = <OwnerButtons />
            } else {
                buttons = <RateButtons />
            }
        } else {
            if (user._id === movie.postCreator) {
                buttons = <OwnerButtons />
            } else {
                buttons = (
                    <>
                        <OwnerButtons />
                        <RateButtons />
                    </>
                )
            }
        }
    }

    return buttons;
}