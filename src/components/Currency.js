import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import Dropdown from "react-bootstrap/Dropdown";

const Currency = () => {
  const { dispatch } = useContext(AppContext);
  const [currentCurrency, setCurrentCurrency] = useState("£ Pound");
  const handleCurrency = (val) => {
    setCurrentCurrency(val);
    dispatch({
      type: "CHG_CURRENCY",
      payload: val.split(" ")[0],
    });
  };

  return (
    <Dropdown onSelect={handleCurrency}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Currency({currentCurrency})
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="$ Dollar">$ Dollar</Dropdown.Item>
        <Dropdown.Item eventKey="£ Pound">£ Pound</Dropdown.Item>
        <Dropdown.Item eventKey="€ Euro">€ Euro</Dropdown.Item>
        <Dropdown.Item eventKey="₹ Ruppee">₹ Ruppee</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default Currency;
