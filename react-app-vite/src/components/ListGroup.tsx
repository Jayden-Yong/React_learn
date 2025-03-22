// import { Fragment } from "react"; --> import Fragmet to use <Fragment>
import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event);
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
            className="list-group-item"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
