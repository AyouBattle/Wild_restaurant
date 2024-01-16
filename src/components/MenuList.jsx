import React from 'react';
import MenuItems from './MenuItems';
import './MenuList.css'



function MenuList({ foodItems }) {
  return (
    <div className='menu'>
      {foodItems.map((item, index) => (
        <MenuItems
          key={index}
          itemName={item.itemName}
          description={item.description}
          foodImage={item.foodImage}
          price={item.price}
          isFavorite={item.isFavorite}
        />
      ))}
    </div>
  );
}

export default MenuList;
