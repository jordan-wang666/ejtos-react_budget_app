import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { IoAddCircle } from "react-icons/io5";
import { IoRemoveCircle } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "MIN_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <IoAddCircle
          size="1.5em"
          color="green"
          onClick={(event) => increaseAllocation(props.name)}
        />
      </td>
      <td>
        <IoRemoveCircle
          size="1.5em"
          color="red"
          onClick={(event) => decreaseAllocation(props.name)}
        />
      </td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense} />
      </td>
    </tr>
  );
};

export default ExpenseItem;
