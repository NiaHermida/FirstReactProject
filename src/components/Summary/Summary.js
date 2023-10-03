import React from "react";

function Summary({ toDoList }) {
  const productivityNumber = toDoList.reduce((totalPoints, item) => {
    if (item.isItDone === true) {
      totalPoints += item.points;
    }
    return totalPoints;
  }, 0);

  return (
    <>
      <h4>
        *Your current list has{" "}
        {toDoList.filter((item) => item.isItEasy === true).length} easy tasks
        and {toDoList.filter((item) => !item.isItEasy).length} hard tasks.
      </h4>
      <h3 className="productivityNumber">
        Your done tasks amounted to {productivityNumber} productivity points.
      </h3>
    </>
  );
}

export default Summary;
