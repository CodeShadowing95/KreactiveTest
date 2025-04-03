import React from 'react'

const Home = () => {

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  }

  return (
    <div className="max-w-[100dvw] min-h-[100dvh] relative">
      <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
        <source src="/uhd_30fps.mp4" type="video/mp4" />
      </video>
      {/* Overlay */}
      <div className="fixed top-0 left-0 w-full h-full px-20 pt-10 pb-[100px] flex flex-col justify-between bg-gradient-to-r from-neutral-950 via-neutral-900/50 to-transparent">
        <div className="w-full flex justify-between items-center gap-2 px-8 py-4 bg-white/50 rounded-full">
          <div className="flex items-center gap-2">
            <img src="/logo-sub.png" alt="logo" className="w-10 h-10" />
            <p className="text-lg font-bold text-gray-900">KreactiveTest</p>
          </div>

          <ul className="flex items-center gap-10 text-sm font-medium text-gray-900">
            <li>Accueil</li>
            <li>
              <a href="https://github.com/CodeShadowing95/KreactiveTest" target="_blank">Documentation</a>
            </li>
            <li>
              <a href="/home">Services</a>
            </li>
          </ul>

          <a href="https://github.com/CodeShadowing95/KreactiveTest" target="_blank" className="flex items-center rounded-xl bg-black text-white p-2 flex-shrink-0 motion-preset-seesaw ">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M5.315 2.1c.791-.113 1.9.145 3.333.966l.272.161l.16.1l.397-.083a13.3 13.3 0 0 1 4.59-.08l.456.08l.396.083l.161-.1c1.385-.84 2.487-1.17 3.322-1.148l.164.008l.147.017l.076.014l.05.011l.144.047a1 1 0 0 1 .53.514a5.2 5.2 0 0 1 .397 2.91l-.047.267l-.046.196l.123.163c.574.795.93 1.728 1.03 2.707l.023.295L21 9.5c0 3.855-1.659 5.883-4.644 6.68l-.245.061l-.132.029l.014.161l.008.157l.004.365l-.002.213L16 21a1 1 0 0 1-.883.993L15 22H9a1 1 0 0 1-.993-.883L8 21v-.734c-1.818.26-3.03-.424-4.11-1.878l-.535-.766c-.28-.396-.455-.579-.589-.644l-.048-.019a1 1 0 0 1 .564-1.918c.642.188 1.074.568 1.57 1.239l.538.769c.76 1.079 1.36 1.459 2.609 1.191L8 17.562l-.018-.168a5 5 0 0 1-.021-.824l.017-.185l.019-.12l-.108-.024c-2.976-.71-4.703-2.573-4.875-6.139l-.01-.31L3 9.5a5.6 5.6 0 0 1 .908-3.051l.152-.222l.122-.163l-.045-.196a5.2 5.2 0 0 1 .145-2.642l.1-.282l.106-.253a1 1 0 0 1 .529-.514l.144-.047z"/></svg> */}
            <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png" alt="github" className="w-5 h-5" />
          </a>
        </div>

        <div className="flex flex-col gap-4 motion-preset-slide-right ">
          <h1 className="text-6xl font-bold text-white max-w-lg">Bienvenue et merci pour la visite.</h1>
          <p className="text-lg text-white/70 max-w-md">Merci pour votre temps et votre attention lors de la démo. J'espère que vous l'avez appréciée autant que j'ai pris plaisir à la présenter. Au plaisir d’échanger davantage ! 😊</p>
          
          <div className="flex justify-between items-center w-[450px] max-w-md px-4 py-2 rounded-full bg-white mt-4">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
              <p className="text-xs font-medium text-gray-900">Accueil</p>
              <div className="w-px h-4 bg-gray-300"></div>
              <p className="text-xs font-medium text-gray-500">Cliquez ici pour vous déconnecter</p>
            </div>
            <button className="flex items-center justify-center w-10 h-10 flex-shrink-0 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-medium text-sm" onClick={logout}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home