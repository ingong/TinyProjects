import React, { useState, useEffect, useMemo, useCallback } from "react";
import Info from "./Info";

const App = () => {
  const [color, setColor] = useState("");
  const [season, setSeason] = useState("");

  const onChangeHandler = useCallback((e) => {
    if (e.target.id === "color") setColor(e.target.value);
    else setSeason(e.target.value);
  }, []);

  return (
    <div className='App'>
      <div>
        <label>
          What is your favorite color of rainbow ?
          <input id='color' value={color} onChange={onChangeHandler} />
        </label>
      </div>
      <div>
        What is your favorite Season ?
        <label>
          <input
            type='radio'
            name='season'
            value='Spring'
            onChange={onChangeHandler}
          />
          Spring
        </label>
        <label>
          <input
            type='radio'
            name='season'
            value='Summer'
            onChange={onChangeHandler}
          />
          Summer
        </label>
        <label>
          <input
            type='radio'
            name='season'
            value='Fall'
            onChange={onChangeHandler}
          />
          Fall
        </label>
        <label>
          <input
            type='radio'
            name='season'
            value='Winter'
            onChange={onChangeHandler}
          />
          Winter
        </label>
      </div>
      <Info color={color} season={season} />
    </div>
  );
};

export default App;
