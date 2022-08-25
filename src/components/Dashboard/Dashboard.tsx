import React, { FC } from "react";
import { useResizableWidth } from "../../hooks/useResizableWidth";

import TodoList from "../TodoList/TodoList";
import Container from "../Container/Container";
import TodoOptions from "../TodoOptions/TodoOptions";

const Dashboard: FC = () => {
    const { widthStyle, startResize, stopResize, resizeFrame } =
    useResizableWidth();

    return (
        <Container stopResize={stopResize} resizeFrame={resizeFrame}>
            <TodoList widthStyle={widthStyle} startResize={startResize} />
            <TodoOptions />
        </Container>
    );
};

export default Dashboard;
