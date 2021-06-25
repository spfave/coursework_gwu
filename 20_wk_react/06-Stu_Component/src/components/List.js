import React from 'react';

function List(props) {
  return (
    <div>
      <p>All Groceries</p>
      <ul className='list-group'>
        {/* TODO: Use the `map` method to iterate over each grocery and return a `li` element that contains the item's name and has a unique key attribute */}
        {props.groceries.map((item) => {
          return (
            // TODO: Your code here
            <li className='list-group-item' key={item.id}>
              {item.name}
            </li>
          );
        })}
      </ul>

      <br></br>

      <p>Not Purchased Groceries</p>
      <ul className='list-group'>
        {/* TODO: Use `filter` and `map` method to iterate over each grocery itesm and first return the items that have not been purchased and then return a `li` element that contains the item's name and has a unique key attribute*/}
        {props.groceries
          .filter((g) => !g.purchased)
          .map((item) => {
            return (
              // TODO: Your code here
              <li className='list-group-item' key={item.id}>
                {item.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default List;
