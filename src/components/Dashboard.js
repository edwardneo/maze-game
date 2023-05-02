import React from 'react';

export function Dashboard({ round, goal, bag, capacity }) {
  const itemNames = ['pink', 'red', 'blue', 'yellow', 'green'];

  const textColor = (i) =>{
    if (bag[i] >= goal[i]) {
      return 'listItemComplete'
    }
    return 'listItem'
  }

  return (
    <div className='dashboard'>
      <h1 className='roundTitle'>{`Round ${round + 1}`}</h1>
      <div className='tasks'>
        <h2><u>Task Checklist</u></h2>
        {itemNames.map((itemName, i) => (<p key={i} className={textColor(i)}>{`${goal[i]} ${itemNames[i]}`}</p>))}
      </div>
      <div className='bag'>
        <h2 className='bag-title'><u>Bag</u></h2>
        <h5 className='capacity'>Bag Capacity: {capacity}</h5>
        {itemNames.map((itemName, i) => (<p key={i} className='listItem'>{`${bag[i]} ${itemNames[i]}`}</p>))}
      </div>
    </div>
  )
}