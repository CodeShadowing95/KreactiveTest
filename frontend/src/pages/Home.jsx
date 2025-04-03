import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, [user, navigate]);


  return (
    <div>Home</div>
  )
}

export default Home