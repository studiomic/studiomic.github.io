import React, { useEffect } from 'react';
import sun from '../assets/iconmonstr-weather-1.svg'
import moon from '../assets/moon-solid.svg'
import star from '../assets/iconmonstr-star-filled.svg'
import * as styles from '../styles/layout/mode.module.scss'

const Modebutton = () => {
  // localStorage.clear();
  useEffect(() => {
    let modeType = localStorage.getItem('mode');
    
    if ( modeType !== '') {
      if ( modeType === 'darkmode') {
        document.documentElement.classList.add("darkmode");
        document.documentElement.classList.remove("lightmode","blackmode");
      } else if ( modeType === 'blackmode') {
        document.documentElement.classList.add("blackmode");
        document.documentElement.classList.remove("darkmode","lightmode");
      } else if ( modeType === 'lightmode') {
        document.documentElement.classList.add("lightmode");
        document.documentElement.classList.remove("darkmode","blackmode");
      } else {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const changeDark = darkModeMediaQuery.matches;
        if (changeDark) {
          document.documentElement.classList.add("darkmode");
        }
      }
    };
  });

  let modeType;
  const Light = () => {
    document.documentElement.classList.add("lightmode");
    document.documentElement.classList.remove("darkmode","blackmode");
    modeType = "lightmode";
    localStorage.setItem('mode', modeType);
    return;
  };
  const Dark = () => {
    document.documentElement.classList.add("darkmode");
    document.documentElement.classList.remove("lightmode","blackmode");
    modeType = "darkmode";
    localStorage.setItem('mode', modeType);
    return;
  };
  const Black = () => {
    document.documentElement.classList.add("blackmode");
    document.documentElement.classList.remove("darkmode","lightmode");
    modeType = "blackmode";
    localStorage.setItem('mode', modeType);
    return;
  };

	return (
    <div className={styles.modebox}>
      <button type="button" onClick={Light} name="LightMode">
        <img src={sun} classid="modeicon" alt="Light" />
        <span>Light</span>
      </button>
      <button type="button" onClick={Dark} name="DarkMode">
        <img src={moon} claidme="modeicon" alt="Light" />
        <span>Dark</span>
      </button>
      <button type="button" onClick={Black} name="BlackMode">
        <img src={star} claside="modeicon" alt="Light" />
        <span>Black</span>
      </button>
    </div>
	)
};
export default Modebutton
