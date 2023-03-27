import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';


const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    // google logout
    signOut(auth).then(() => {
      // Sign-out successful.
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }
  
  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  )
}

export default Logout