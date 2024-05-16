import React, { useEffect, useState } from 'react';

export default function MonkeyMessage() {
    const [isFullWidth, setIsFullWidth] = useState(false);

    useEffect(() => {
        const parentElement = document.getElementById('monkey-parent');
        setIsFullWidth(parentElement.className.includes('w-full'));
    }, []);

    return (
        <p className="bg-white text-center">
            {isFullWidth ? "Jeg er en abe i fuld bredde, og jeg har en banan." : "Jeg er en Abe, der mangler en banan."}
        </p>
    );
}