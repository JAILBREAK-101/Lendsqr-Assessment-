import {Navigate, useLocation} from "react-router-dom";
import React from "react";
// import {App} from "../utils/app";

const App = {
    isLoggedIn: () => {
        return true
    },
    setIntendedURL: (url: string) => {
    }
}

export function LoggedInGuard({ children }: { children: JSX.Element }) {
    let location = useLocation();

    if (!App.isLoggedIn()) {
        App.setIntendedURL(window.location.href);

        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }

    return children;
}

export function LoggedOutGuard({ children }: { children: JSX.Element }) {
    let location = useLocation();

    if (App.isLoggedIn()) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
}
