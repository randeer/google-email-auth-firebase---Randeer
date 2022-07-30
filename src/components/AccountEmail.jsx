import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const AccountEmail = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='max-w-[600px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-4'>Account Email</h1>
      <p>User Email : {user && user.email}</p>

      <button onClick={handleSignOut} className='border px-6 py-2 my-4'>
        Logout
      </button>
    </div>
  );
};

export default AccountEmail;
