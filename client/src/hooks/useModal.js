import { useState } from "react";

export function useModal() {
    const [isOpened, setIsOpened] = useState(false);

    function openModal() {
        setIsOpened(true);
    }

    function closeModal() {
        setIsOpened(false);
    }

    return {
        isModalOpened: isOpened,
        openModal,
        closeModal
    };
}