import React, { FC } from "react";
import s from "./Container.module.css";

interface ContainerProps {
    children: React.ReactNode;
    stopResize: (e: React.MouseEvent<HTMLDivElement>) => void;
    resizeFrame: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Container: FC<ContainerProps> = ({ children, stopResize, resizeFrame }) => {
    return (
        <div
            className={s.gridContainer}
            onMouseUp={stopResize}
            onMouseMove={resizeFrame}
        >
            {children}
        </div>
    );
};

export default Container;
