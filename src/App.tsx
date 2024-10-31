import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import AuthContainer from './containers/AuthContainer';
import { LoggedInGuard, LoggedOutGuard } from './guards/AuthGuard';
import { Login } from './pages/Login';
import AppContainer from './containers/AppContainer';
import { Dashboard } from './pages/(logged-in)/Dashboard';
import { User } from './pages/(logged-in)/User';

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={
          // <LoggedOutGuard>
            <AuthContainer/>
          // </LoggedOutGuard>
        }>
          <Route path="login" element={<Login/>}/>
          {/* <Route path="forgot-password" element={<ForgotPassword/>}/> */}
          {/* <Route path="reset-password/:token" element={<ResetPassword/>}/> */}
        </Route>

        <Route path="/" element={
          // <LoggedInGuard>
            <AppContainer/>
          // </LoggedInGuard>
        }>
                <Route path=":username" element={<User/>}/>
                <Route index element={<Dashboard/>}/>
            </Route>
      </Routes>
    </>
  );
}

export default App;
