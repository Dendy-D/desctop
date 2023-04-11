import React, { useState, useEffect } from 'react';

import classes from './taskbar.module.scss';
import battery from '../../assets/icons/taskbar/battery.svg';
import sun from '../../assets/icons/taskbar/sun.svg';
import moon from '../../assets/icons/taskbar/moon.svg';

const TaskBar: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString()
    .slice(0, 5));

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().toLocaleTimeString()
        .slice(0, 5);
      setTime(() => now);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={classes.header}>
      <div className={classes.aboutUs}>
        <a href="#">About us</a>
      </div>
      <div className={classes.clock}>
        {+(time[0] + time[1]) < 12 ? `${time}am` : `${time}pm`}
      </div>
      <div className={classes.panel}>
        <img src={sun} alt="Light theme" />
        <a href="#" className={classes.languages}>EN</a>
        <img src={battery} alt="Battery index" />
      </div>
    </header>
  );
};

export default TaskBar;
