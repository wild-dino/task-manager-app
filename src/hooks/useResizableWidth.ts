import { useState } from "react";

export const useResizableWidth = () => {
    const [drag, setDrag] = useState({
        active: false,
        x: 0,
    });

    // ширина области по дефолту
    const [dims, setDims] = useState({
        w: 250,
    });

    const widthStyle = {
        width: `${dims.w}px`,
    };

    const startResize = (e: React.MouseEvent<HTMLDivElement>) => {
        setDrag({
            active: true,
            x: e.clientX,
        });
    };

    const stopResize = (e: React.MouseEvent<HTMLDivElement>) => {
        setDrag({ ...drag, active: false });
    };

    const resizeFrame = (e: React.MouseEvent<HTMLDivElement>) => {
        const { active, x } = drag;
        if (active) {
            // высчитываем разницу через координаты
            const xDiff = Math.abs(x - e.clientX);

            // увеличиваем или уменьшаем ширину области
            const newW = x > e.clientX ? dims.w - xDiff : dims.w + xDiff;

            // учитываем минимально возможное значение ширины области
            if (newW < 150) {
                setDims({ w: 150 });
            } else {
                setDrag({ ...drag, x: e.clientX });
                setDims({ w: newW });
            }
        }
    };

    return {widthStyle, startResize, stopResize, resizeFrame }
};
