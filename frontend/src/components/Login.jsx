import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return re.test(String(email).toLowerCase());
}

const Login = ({ setAuth }) => {
  const navigate = useNavigate();
  const [revealPassword, setRevealPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleEmailValue = (e) => {
    const email_input = e.target.value;

    if (email_input === "") {
      setErrorEmail("");
      return;
    }

    if (validateEmail(email_input)) {
      setFormData({ ...formData, email: email_input });
      setErrorEmail("");
    } else {
      setErrorEmail("Format de l'email invalide !");
    }
  }
  
  const handleRevealPassword = (e) => {
    e.preventDefault();
    setRevealPassword(prev => !prev)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email !== "" && validateEmail(formData.email) && formData.password !== "") {
      setErrorEmail("");
      setErrorPassword("");

      const response = await axios.post("http://localhost:3000/user/login", formData);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        setAuth(true);
        navigate("/home");

        return;
      } else {
        alert("Une erreur s'est produite.");
      }
    }

    if (formData.email === "") {
      setErrorEmail("Email requis !");
    }
    if (formData.password === "") {
      setErrorPassword("Mot de passe requis !");
    }
  }

  return (
    <div className="max-w-[100dvw] min-h-[100dvh] relative" style={{ backgroundImage: 'url(/banner.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between py-8 px-20">
        <div className="flex justify-center items-center gap-2 motion-preset-blur-right ">
          <div className="w-10 h-10 border border-gray-400 rounded-lg flex justify-center items-center overflow-hidden p-1 bg-gray-50/20 shadow-sm">
            <img src="/logo-sub.png" alt="logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-lg font-bold text-gray-900">Kreactive Test</h1>
        </div>
      </nav>

      {/* Content */}
      <div className="w-full h-[calc(100dvh-6.5rem)] flex justify-center items-center">

        {/* Login card */}
        <div className="w-full max-w-md flex flex-col gap-2 justify-center items-center p-8 rounded-3xl  bg-gradient-to-b from-transparent via-white/50 to-white shadow-sm border border-gray-300 motion-preset-pop">
          {/* Login icon */}
          <div className="flex bg-white/50 rounded-3xl justify-center items-center p-4 shadow-xl">
            <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png" alt="Robot" className="w-14 h-14" />
          </div>
          {/* <div className="w-14 h-14 rounded-2xl flex justify-center items-center overflow-hidden p-1 bg-white text-gray-800 shadow-xl flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>
          </div> */}

          {/* Title & Subtitle */}
          <h1 className="text-2xl font-bold text-gray-900 mt-4">Connectez-vous par email</h1>
          <p className="text-sm text-gray-500 max-w-sm text-center">Profitez d'une large gamme de services que Kreactive vous propose. Gratuitement et sans engagement.</p>

          {/* Form */}
          <div className="w-full flex flex-col gap-4 mt-5">
            {/* Email input */}
            <div>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex-shrink-0 align-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></svg>
                </div>
                <input type="email" name="email" placeholder="Email" className="pl-10 pr-4 py-2 bg-gray-200 text-sm rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 w-full" required onChange={handleEmailValue} />
              </div>
              {errorEmail && (
                <div className="flex items-center gap-1 text-red-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 flex-shrink-0 align-middle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                  <p className="text-xs motion-preset-blur-right">{errorEmail}</p>
                </div>
              )}
            </div>

            {/* Password input */}
            <div>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex-shrink-0 align-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>
                </div>
                <input type={revealPassword ? 'text' : 'password'} name="password" placeholder="Mot de passe" className="pl-10 pr-4 py-2 bg-gray-200 text-sm rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 w-full" required onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 flex-shrink-0 align-middle outline-none border-none" onClick={handleRevealPassword}>
                  {revealPassword ?
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-.722-3.25"/><path d="M2 8a10.645 10.645 0 0 0 20 0"/><path d="m20 15-1.726-2.05"/><path d="m4 15 1.726-2.05"/><path d="m9 18 .722-3.25"/></svg>
                  }
                </button>
              </div>
              {errorPassword && (
                <div className="flex items-center gap-1 text-red-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 flex-shrink-0 align-middle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                  <p className="text-xs motion-preset-blur-right">{errorPassword}</p>
                </div>
              )}
            </div>

            <button
              className="relative flex justify-center items-center px-8 py-3 mt-8 bg-black text-white font-semibold rounded-lg border-2 border-purple-500 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(168,85,247,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] group"
              onClick={handleSubmit}
            >
              <span className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg"className="w-5 h-5 text-purple-500 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="16" r="1"/><rect width="18" height="12" x="3" y="10" rx="2"/><path d="M7 10V7a5 5 0 0 1 9.33-2.5"/></svg>
                <span>Connexion</span>
              </span>
              <span
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-indigo-500/20"
              ></span>
            </button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Login