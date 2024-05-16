import React, { useEffect, useState } from 'react';

export default function HeightMessage() {
    const [isFullWidth, setIsFullWidth] = useState(false);

    useEffect(() => {
        const parentElement = document.getElementById('height-parent');
        setIsFullWidth(parentElement.className.includes('h-32'));
    }, []);

    return (
        <p className="bg-white text-center">
            {isFullWidth ? "Jeg er en høj div, og jeg har en banan :D" : "Jeg er en lav div :("}
        </p>
    );
}