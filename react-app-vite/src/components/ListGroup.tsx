// import { Fragment } from "react"; --> import Fragmet to use <Fragment>
// import { MouseEvent } from "react";
import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // let selectedIndex = 0;
  
  // Dont use variables as state because React will not know the state change
  // Use a hook like 'useState' instead will will update DOM directly whenever there is a change
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event handler
  // const handleClick = (event: MouseEvent) => console.log(event);
  // Because onClick = {(event) => console.log(event)} is an inline function, typescript knows the type of "event" param
  // If declared as new function (Event handler), the type of "event" must be specified (type annotation) with an import of that event. (event: MouseEvent)

  /* Use functions to accept variables for static elements 
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  }
  */

  // If no variables required, use const
  // const message = items.length === 0 ? <p>No item found</p> : null;

  // {items.length === 0 ? <p>No item found</p> : null} has a better solution to avoid null:
  /* Using && operators:
      - true && "string" => "string"
      - false && "string" => false
  */
  // Hence, {items.length === 0 && <p>No item found</p>} is popular for dynamic rendering.

  return (
    // Can only return one element
    // less ideal solution: use div
    // best solution: use Fragment

    // or just use shortcut <> for <Fragment>
    // JavaScript exp must be wrapped with {}
    <>
      <h1>List</h1>

      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={ () => {setSelectedIndex(index)} }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
