import React from 'react';

const EX18_3 = () => {
  const [sec, setSec] = React.useState(0);
  const [min, setMin] = React.useState(0);
  const [hour, setHour] = React.useState(0);

  const setTime = (updatedMin) => {
    setMin(updatedMin);
    setSec(updatedMin * 60);
    setHour(updatedMin / 60);
  };

  const onInputChange = (event) => {
    let min = 0;

    switch (event.target.dataset.type) {
      case 'sec':
        min = event.target.value / 60;
        break;
      case 'min':
        min = event.target.value;
        break;
      case 'hour':
        min = event.target.value * 60;
        break;
      default:
        return;
    }

    setTime(min);
  };

  return (
    <div>
      <div>
        <label htmlFor="sec">Seconds</label>
        <input
          type="number"
          id="sec"
          data-type="sec"
          value={sec}
          onChange={(e) => {
            onInputChange(e);
          }}
        />
      </div>
      <div>
        <label htmlFor="min">Minutes</label>
        <input
          type="number"
          id="min"
          data-type="min"
          value={min}
          onChange={(e) => {
            onInputChange(e);
          }}
        />
      </div>
      <div>
        <label htmlFor="hour">Hours</label>
        <input
          type="number"
          id="hour"
          data-type="hour"
          value={hour}
          onChange={(e) => {
            onInputChange(e);
          }}
        />
      </div>
    </div>
  );
};

export default EX18_3;
