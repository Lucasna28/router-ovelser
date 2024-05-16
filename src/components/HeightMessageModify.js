import React, { useEffect, useState } from 'react';

export default function HeightMessageModify() {
    const [isFullHeight, setIsFullHeight] = useState(false);

    useEffect(() => {
        const parentElement = document.getElementById('modify2-parent');
        setIsFullHeight(parentElement.className.includes('h-full'));
    }, []);

    return (
        <p className="bg-white text-center h-full p-4">
            {isFullHeight ? "Jeg er en abe i fuld højde, og jeg har en banan." : "Jeg er en Abe, uden højde og jeg mangler en banan."}
        </p>
    );
}