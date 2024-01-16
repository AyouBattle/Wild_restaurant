import { useState } from "react";
function MenuItems({ itemName, description, foodImage, price, isFavorite }){
    const [favorite, setfavorite] = useState(isFavorite)

    const handleClickFavorite = ()=>{
        setfavorite(!favorite)
    }

    return (
    <div>
        <h2>{itemName}</h2>
        <img src={foodImage} alt={itemName} />
        <p>{description}</p>
        <p>Price: ${price}</p>
        <div id="favorite" onClick={handleClickFavorite}>
            {favorite ? '❤️' : '🤍'}
        </div>
    </div>
    )
        
}

export default MenuItems