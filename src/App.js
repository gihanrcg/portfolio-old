import React from 'react';
import MainPage from './components/main/MainPage';
import 'aos/dist/aos.css'
import ReactGA from 'react-ga';
// import './App.css';


function InitializeGoogleAnalytics(){
  ReactGA.initialize("UA-175661510-1");
  ReactGA.pageview('/');
}

function App() {
  InitializeGoogleAnalytics();
  return (
    <MainPage />
  );
}

export default App;
