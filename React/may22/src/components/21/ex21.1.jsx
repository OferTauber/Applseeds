import React, { useEffect, useState } from 'react';

const EX21_1 = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const onBtnClick = () => {
    setIsEditMode((prev) => !prev);
  };

  const inputEl = React.createRef();

  useEffect(() => {
    if (isEditMode) inputEl.current.focus();
  }, [isEditMode, inputEl]);

  return (
    <div>
      <button onClick={onBtnClick}>{isEditMode ? 'Save' : 'Edit'}</button>
      {isEditMode && <input type="text" ref={inputEl} />}
    </div>
  );
};

export default EX21_1;
