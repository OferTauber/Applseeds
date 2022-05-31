import React from 'react';

const Accordion = ({ items }) => {
  const [activeItem, setActiveItem] = React.useState();

  const onItemClick = (index) => {
    const prev = activeItem;
    setActiveItem(index === prev ? undefined : index);
  };

  const renderItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${activeItem === index && 'active'}`}
          onClick={() => {
            onItemClick(index);
          }}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${activeItem === index && 'active'}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderItems}</div>;
};

export default Accordion;
