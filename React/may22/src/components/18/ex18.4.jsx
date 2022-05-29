import React from 'react';

const arr = ['one', 'two', 'three', 'four', 'five'];

const EX18_4 = () => {
  const [items, setItems] = React.useState(
    arr.map((item) => {
      return { text: item, selected: false };
    })
  );

  const onCheckBox = (event) => {
    const tempData = items;
    tempData[event.target.dataset.index].selected = event.target.checked;
    setItems(tempData);
  };

  const onDelete = () => {
    const newList = items.filter((item) => !item.selected);
    setItems(newList);
  };

  const onReset = () => {
    setItems(
      arr.map((item) => {
        return { text: item, selected: false };
      })
    );
  };

  const geenrateBoxes = (items) => {
    return items.map((item, index) => {
      return (
        <li key={index}>
          <p>
            {`${item.text} `}
            <input
              data-index={index}
              type="checkbox"
              onChange={(e) => onCheckBox(e)}
            />
          </p>
        </li>
      );
    });
  };

  return (
    <div>
      <button onClick={() => onDelete()}>Delete</button>
      <button onClick={() => onReset()}>Reset</button>
      <ul>{geenrateBoxes(items)}</ul>;
    </div>
  );
};

export default EX18_4;
