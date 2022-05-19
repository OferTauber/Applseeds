import './SeasonDislay.css';
import React from 'react';

const sessonConfig = {
  summer: {
    text: "Let's go to the beach!",
    iconName: 'sun',
  },
  winter: {
    text: "Burr, it's chilly",
    iconName: 'snowflake',
  },
};

const getSeason = (lat, munth) => {
  if (munth > 2 && munth < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }
  return lat < 0 ? 'summer' : 'winter';
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const { text, iconName } = sessonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} massive icon icon-left`} />
      <h1>{text}</h1>
      <i className={`${iconName} massive icon icon-right`} />
    </div>
  );
};

export default SeasonDisplay;
