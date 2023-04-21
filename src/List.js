import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";

// Single List Item
const WrappedSingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  return (
    <li
      style={{ backgroundColor: isSelected ? "green" : "red" }} //comparing the value to index
      onClick={() => onClickHandler(index)} // changed onclick to call onClickHandler prop with the index argument wrapped in an arrow function
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(); //interchanged selectedIndex with setSelectedIndex

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <ul style={{ textAlign: "left" }}>
      {items?.map(
        (
          item,
          index //checking for null value
        ) => (
          <SingleListItem
            onClickHandler={() => handleClick(index)}
            text={item.text}
            index={index}
            isSelected={selectedIndex === index} //passing boolean value
            key={index}
          />
        )
      )}
    </ul>
  );
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(
    // changed array to arrayOf
    PropTypes.shape({
      //changed shapeOf to shape
      text: PropTypes.string.isRequired,
    })
  ),
};

WrappedListComponent.defaultProps = {
  items: null,
};

const List = memo(WrappedListComponent);

export default List;
