import { observer } from 'mobx-react-lite';
import React from 'react';
import {Navigate, Route, Routes, } from "react-router-dom";
import {publicRoutes} from "../routes";
import {Store} from '../store/content.state';

const AppRouter = observer(() => {
    const store = Store

    return (
        <Routes>
            {publicRoutes(store).map(({path, render}) => {
                return (<Route key={path} path={path} element={render(store)} exact/>)
            }
            )}
            <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
    );
});

export default AppRouter;
