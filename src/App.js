import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SigninEmail from './components/SigninEmail';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
//import Home from './pages/Home';
import Signin from './pages/Signin';

import SignupEmail from './components/SignupEmail';
import AccountEmail from './components/AccountEmail';

function App() {
  return (
    <div>
	  <h1 className='text-center text-3xl font-bold'>
        Firebase Auth & Context
    </h1>
    <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<SigninEmail />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup_email' element={<SignupEmail />} />
          <Route
            path='/account'
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
          <Route
            path='/account_email'
            element={
              <Protected>
                <AccountEmail />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
